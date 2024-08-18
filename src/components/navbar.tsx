import { LibraryBig, Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      href: "#information-section",
    },
    {
      label: "Features",
      href: "#features-section",
    },
    {
      label: "Social",
      href: "#footer-section",
    },
  ];

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
            {navItems.map(({ href, label }, i) => (
              <DropdownMenuItem key={`${label}-${i}`}>
                <a href={href}>{label}</a>
              </DropdownMenuItem>
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
