import { useState } from "react";
import { LibraryBig } from "lucide-react";
import BooksTable from "@/components/books-table";
import { bookColumns } from "@/components/columns";
import { createBook, getBooks } from "@/services/book";
import CreateBookModal from "@/components/create-book-modal";
import { useMutation, useQuery, useQueryClient } from "react-query";

const App = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const queryClient = useQueryClient();

  const {
    error,
    isError,
    data: books,
    isLoading,
  } = useQuery("books", getBooks);

  const mutationCreateBook = useMutation(createBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  return (
    <>
      <main className="my-8 lg:max-w-5xl lg:mx-auto">
        <section className="flex flex-col gap-4">
          <header className="flex items-center gap-2">
            <LibraryBig />
            <h1 className="text-xl font-bold">My Personal Library</h1>
          </header>
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
              onOpenChange={setShowCreateModal}
            />
          </div>
          {isLoading && <p>Loading books...</p>}

          {!isLoading && (
            <BooksTable columns={bookColumns} data={books || []} />
          )}

          {isError && <p>Error loading books: {`${error}`}</p>}
        </section>
      </main>
    </>
  );
};

export default App;
