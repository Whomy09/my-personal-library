import { StrictMode } from "react";
import { books } from "./constants";
import { createRoot } from "react-dom/client";
import BooksTable from "./components/books-table";
import { bookColumns } from "./components/columns";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="my-8 lg:max-w-4xl lg:mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">My Personal Library</h1>
        <p>
          This is a project with which I will be practicing react and also
          integrating the api I previously built called library-api.{" "}
        </p>
      </section>
      
      <section className="mt-4">
        <BooksTable columns={bookColumns} data={books} />
      </section>
    </main>
  </StrictMode>
);
