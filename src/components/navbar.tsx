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

      <ul className="hidden lg:flex lg:gap-4">
        <li className="navbar-item">Option 1</li>
        <li className="navbar-item">Option 2</li>
      </ul>
    </nav>
  );
};

export default Navbar;
