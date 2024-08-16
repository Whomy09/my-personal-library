import { Ellipsis, LoaderCircle } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { Book } from "@/schema/bookSchema";
import { deleteBook } from "@/services/book";
import { useMutation, useQueryClient } from "react-query";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type BookTableOptionsProps = {
  book: Book;
};

const BookTableOptions = ({ book }: BookTableOptionsProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    deleteBook,
    {
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
    }
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger disabled={isLoading}>
          <Ellipsis className={cn(isLoading && "hidden")} />
          {isLoading && <LoaderCircle className="animate-spin" />}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => mutate(book.id)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default BookTableOptions;
