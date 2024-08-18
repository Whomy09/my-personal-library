import { LibraryBig } from "lucide-react";

const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <LibraryBig className="w-8 h-8" />
      <span className="hidden font-bold lg:block">My Personal Library</span>
    </div>
  );
};

export default NavbarLogo;
