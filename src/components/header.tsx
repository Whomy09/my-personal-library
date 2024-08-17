import { LibraryBig } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <LibraryBig />
        <h1 className="text-xl font-bold">My Personal Library</h1>
      </div>
      <p>
        This is a project with which I will be practicing react and also
        integrating the api I previously built called library-api.{" "}
      </p>
    </header>
  );
};

export default Header;
