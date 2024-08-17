import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { Book } from "@/schema/bookSchema";
import EditBookModal from "./edit-book-modal";
import { Ellipsis, LoaderCircle } from "lucide-react";
import { deleteBook, updateBook } from "@/services/book";
import { useMutation, useQueryClient } from "react-query";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type BookTableOptionsProps = {
  book: Book;
};

const BookTableOptions = ({ book }: BookTableOptionsProps) => {
  const [showEditBookModal, setShowEditBookModal] = useState(false);

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(deleteBook, {
    onSuccess: () => {
      toast({
        title: "Book successfully deleted",
      });
      queryClient.invalidateQueries("books");
    },
    onError: () => {
      toast({
        title: "Error deleting book",
      });
    },
  });

  const mutationEditBook = useMutation(updateBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger disabled={isLoading}>
          <Ellipsis className={cn(isLoading && "hidden")} />
          {isLoading && <LoaderCircle className="animate-spin" />}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setShowEditBookModal(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => mutate(book.id)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditBookModal
        open={showEditBookModal}
        mutationEditBook={mutationEditBook}
        book={book}
        onOpenChange={setShowEditBookModal}
      />
    </>
  );
};

export default BookTableOptions;
