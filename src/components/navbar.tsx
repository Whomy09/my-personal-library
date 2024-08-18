import { useState } from "react";
import { navItems } from "@/constants";
import { LibraryBig, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between h-14 pt-8" id="navbar">
      <div className="flex gap-2">
        <LibraryBig />
        <span className="font-bold">My Personal Library</span>
      </div>

      <div className="lg:hidden">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navItems.map(({ href, label }, i) => (
              <div key={`${label}-${i}`}>
                <a href={href}>{label}</a>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ul className="hidden lg:flex lg:gap-8">
        {navItems.map(({ href, label }, i) => (
          <li key={`${label}-${i}`} className="navbar-item">
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
