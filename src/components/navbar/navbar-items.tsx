import { Button } from "../ui/button";
import { NAVBAR_ITEMS } from "@/constants";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";

const NavbarItems = () => {
  return (
    <ul className="hidden lg:flex lg:items-center lg:gap-8">
      <SignedOut>
        {NAVBAR_ITEMS.map((item, i) => (
          <li key={i} className="navbar-item">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </SignedOut>

      <SignedOut>
        <Button>
          <SignInButton mode="modal" fallbackRedirectUrl="/" />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </ul>
  );
};

export default NavbarItems;
