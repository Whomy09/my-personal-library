import { format } from "date-fns";
import { Book } from "@/schema/bookSchema";
import { ColumnDef } from "@tanstack/react-table";
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
];
