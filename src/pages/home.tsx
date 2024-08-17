import { useState } from "react";
import Header from "@/components/header";
import BooksTable from "@/components/books-table";
import { bookColumns } from "@/components/columns";
import { createBook, getBooks } from "@/services/book";
import CreateBookModal from "@/components/create-book-modal";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Home = () => {
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
        <Header />

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

export default Home;
