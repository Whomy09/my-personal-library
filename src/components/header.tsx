import { useState } from "react";
import { createBook } from "@/services/book";
import CreateBookModal from "./create-book-modal";
import { useMutation, useQueryClient } from "react-query";

const Header = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const queryClient = useQueryClient();

  const mutationCreateBook = useMutation(createBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });

  return (
    <header className="flex flex-col gap-4 mb-4 lg:flex-row lg:justify-between">
      <p className="lg:w-[800px]">
        This is a project with which I will be practicing react and also
        integrating the api I previously built called library-api.{" "}
      </p>
      <div className="lg:flex lg:justify-end">
        <CreateBookModal
          mutationCreateBook={mutationCreateBook}
          open={showCreateModal}
          onOpenChange={setShowCreateModal}
        />
      </div>
    </header>
  );
};

export default Header;
