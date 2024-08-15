import { Book, BookCreateSchema } from "@/schema/bookSchema";
import { generateId, getLocalStorage, setLocalStorage } from "@/utils";

export const getBooks = (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const books = getLocalStorage<Book[]>("books");
      resolve(books);
    }, 5000);
  });
};

export const createBook = (newBook: BookCreateSchema) => {
  return new Promise((resolve) => {
    const book: Book = {
      ...newBook,
      id: generateId(),
    };

    let books: Book[] = [];

    getBooks().then((_books) => {
      books = _books;

      books.push(book);

      setLocalStorage<Book[]>("books", books);

      setTimeout(() => {
        resolve(book);
      }, 5000);
    });
  });
};
