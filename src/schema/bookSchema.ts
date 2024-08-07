import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  publicationDate: z.date({ message: "Invalid date" }),
  publisher: z.string().min(1, "Publisher is required"),
  numberOfPage: z
    .number()
    .int()
    .positive("Number of pages must be a positive integer"),
  genre: z.string().min(1, "Genre is required"),
  language: z.string().min(1, "Language is required"),
  price: z.number().positive("The price cannot be a negative integer"),
});

export type Book = z.infer<typeof bookSchema>;