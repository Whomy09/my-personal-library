import { HttpClient } from "./http";
import { Book, BookCreateSchema } from "@/schema/bookSchema";

const http = HttpClient.getInstance();

export const getBooks = async () => {
  const books = await http.get<Book[]>("/book");
  return books;
};

export const createBook = async (newBook: BookCreateSchema) => {
  await http.post<BookCreateSchema>("/book", newBook);
};

export const deleteBook = async (bookId: string) => {
  await http.delete(`/book/${bookId}`);
};

export const updateBook = async (editedBook: Partial<Book>) => {
  await http.patch<Partial<Book>>(`/book/${editedBook.id}`, editedBook);
};

export const getBooksByUser = async (userId: string) => {
  const books = await http.get<Book[]>(`/book/by-user/${userId}`);
  return books;
};
