import { HttpClient } from "./http";
import { generateId, setLocalStorage } from "@/utils";
import { Book, BookCreateSchema } from "@/schema/bookSchema";

const http = HttpClient.getInstance();

export const getBooks = async () => {
  const books = await http.get<Book[]>("/book");
  return books;
};

export const createBook = (newBook: BookCreateSchema): Promise<Book> => {
  return new Promise((resolve) => {
    const book: Book = {
      ...newBook,
      id: generateId(),
    };

    getBooks().then((books) => {
      books.push(book);

      setLocalStorage<Book[]>("books", books);

      setTimeout(() => {
        resolve(book);
      }, 2000);
    });
  });
};

export const deleteBook = async (bookId: string) => {
  await http.delete(`/book/${bookId}`);
};

export const updateBook = (editedBook: Partial<Book>) => {
  return new Promise((resolve) => {
    getBooks().then((books) => {
      const arrayWithEditedBook = books.map((book) => {
        if (book.id !== editedBook.id) return book;

        return {
          ...book,
          ...editedBook,
        };
      });

      setLocalStorage("books", arrayWithEditedBook);

      setTimeout(() => {
        resolve(arrayWithEditedBook);
      }, 2000);
    });
  });
};
