import BooksTable from "@/components/books-table";
import { bookColumns } from "@/components/columns";
import { Book, BookCreateSchema } from "@/schema/bookSchema";
import CreateBookModal from "@/components/create-book-modal";
import { useMutation, useQuery, useQueryClient } from "react-query";

function generateRandomNumber() {
  return Math.floor(Math.random() * 9000000) + 1000000;
}

function getBooks() {
  const books = JSON.parse(localStorage.getItem("books") || "[]") as Book[];
  return books;
}

function createBook(book: BookCreateSchema) {
  return new Promise((resolve) => {
    const books = getBooks();
    books.push({
      ...book,
      id: `${generateRandomNumber()}`,
    });
    localStorage.setItem("books", JSON.stringify(books));
    setTimeout(() => resolve(true), 5000);
  });
}

export default function App() {
  const queryClient = useQueryClient();

  const { data: books, isLoading, error } = useQuery("books", getBooks);

  const mutationCreateBook = useMutation(createBook, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return (
    <>
      <main className="my-8 lg:max-w-4xl lg:mx-auto">
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">My Personal Library</h1>
          <p>
            This is a project with which I will be practicing react and also
            integrating the api I previously built called library-api.{" "}
          </p>
        </section>
        <section className="mt-4 flex flex-col gap-4">
          <div className="flex justify-end">
            <CreateBookModal mutationCreateBook={mutationCreateBook} />
          </div>
          {isLoading ? (
            <p>Loading books...</p>
          ) : error ? (
            <p>Error loading books: {`${error}`}</p>
          ) : (
            <BooksTable columns={bookColumns} data={books || []} />
          )}
        </section>
      </main>
    </>
  );
}
