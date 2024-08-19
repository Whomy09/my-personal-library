import { Button } from "../ui/button";
import { NAVBAR_ITEMS } from "@/constants";

import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/clerk-react";

const NavbarItems = () => {
  const { user } = useUser();

  return (
    <ul className="lg:flex lg:items-center lg:gap-4">
      <div className="hidden lg:flex lg:items-center lg:gap-4">
        <SignedOut>
          {NAVBAR_ITEMS.map((item, i) => (
            <li key={i} className="navbar-item">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </SignedOut>
      </div>

      <SignedOut>
        <Button>
          <SignInButton mode="modal" fallbackRedirectUrl="/" />
        </Button>
      </SignedOut>
      <SignedIn>
        <div className="flex gap-2">
          <span className="font-bold">{user && user.fullName}</span>
          <UserButton />
        </div>
      </SignedIn>
    </ul>
  );
};

export default NavbarItems;
