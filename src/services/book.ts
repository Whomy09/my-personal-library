import { HttpClient } from "./http";
import { Book, BookCreateSchema } from "@/schema/bookSchema";
import { generateId, setLocalStorage } from "@/utils";

const http = HttpClient.getInstance();

export const getBooks = async () => {
  const books = await http.get<Book[]>("/book")
  return books
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

export const deleteBook = (bookId: string): Promise<Book[]> => {
  return new Promise((resolve) => {
    getBooks().then((books) => {
      const filteredBooks = books.filter(({ id }) => bookId !== id);

      setLocalStorage<Book[]>("books", filteredBooks);

      setTimeout(() => {
        resolve(filteredBooks);
      }, 2000);
    });
  });
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
