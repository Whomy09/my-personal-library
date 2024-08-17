import { format } from "date-fns";
import { Book } from "@/schema/bookSchema";
import { ColumnDef } from "@tanstack/react-table";

import BookTableOptions from "./book-table-options";

export const bookColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;

      if (id.length < 12) return id;

      const formattedId = `${id.slice(0, 2)}...${id.slice(
        id.length - 2,
        id.length
      )}`;

      return formattedId;
    },
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
    cell: ({ row }) => {
      return `$${row.getValue("price")}`;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <BookTableOptions book={row.original} />;
    },
  },
];
