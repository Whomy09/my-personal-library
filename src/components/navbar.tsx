import { LibraryBig, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2">
        <LibraryBig />
        <span className="font-bold">My Personal Library</span>
      </div>

      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Option 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ul className="hidden lg:flex lg:gap-8">
        <li className="navbar-item">
          <a href="#information-section">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#features-section">Features</a>
        </li>
        <li className="navbar-item">
          <a href="#footer-section">Social</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
