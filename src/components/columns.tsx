import { format } from "date-fns";
import { Ellipsis } from "lucide-react";
import { Book } from "@/schema/bookSchema";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const bookColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "publicationDate",
    header: "Publication Date",
    cell: ({ row }) => {
      const publicationDate = row.getValue("publicationDate") as string;
      const formatedPublicationDate = format(publicationDate, "dd/MM/yyyy");
      return <div>{formatedPublicationDate}</div>;
    },
  },
  {
    accessorKey: "publisher",
    header: "Publisher",
  },
  {
    accessorKey: "numberOfPage",
    header: "Number of Page",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "language",
    header: "Language",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
