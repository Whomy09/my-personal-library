import { cn } from "@/lib/utils";
import { useState } from "react";
import { Book } from "@/schema/bookSchema";
import EditBookModal from "./edit-book-modal";
import { useNotifications } from "@/hooks/toast";
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

  const queryClient = useQueryClient();
  const { successNotification, errorNotification } = useNotifications();

  const { isLoading, mutate } = useMutation(deleteBook, {
    onSuccess: () => {
      successNotification({
        title: "Book successfully deleted!",
      });
      queryClient.invalidateQueries("books");
    },
    onError: () => {
      errorNotification({
        title: "Error deleting book!",
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
