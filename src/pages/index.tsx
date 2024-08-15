import { useState } from "react";
import BooksTable from "@/components/books-table";
import { bookColumns } from "@/components/columns";
import { createBook, getBooks } from "@/services/book";
import CreateBookModal from "@/components/create-book-modal";
import { useMutation, useQuery, useQueryClient } from "react-query";

export default function App() {
  const queryClient = useQueryClient();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { data: books, isLoading, error } = useQuery("books", getBooks);

  const mutationCreateBook = useMutation(createBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
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
            <CreateBookModal
              mutationCreateBook={mutationCreateBook}
              open={showCreateModal}
              setState={setShowCreateModal}
            />
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
