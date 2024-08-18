import { useQuery } from "react-query";
import Header from "@/components/header";
import { getBooks } from "@/services/book";
import BooksTable from "@/components/books-table";
import { bookColumns } from "@/components/columns";

const Home = () => {
  const {
    error,
    isError,
    data: books,
    isLoading,
  } = useQuery("books", getBooks);

  return (
    <>
      <main className="my-8 lg:max-w-5xl lg:mx-auto">
        <Header />

        {isLoading && <p>Loading books...</p>}

        {!isLoading && <BooksTable columns={bookColumns} data={books || []} />}

        {isError && <p>Error loading books: {`${error}`}</p>}
      </main>
    </>
  );
};

export default Home;
