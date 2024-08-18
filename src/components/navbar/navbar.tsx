import NavbarLogo from "./navbar-logo";
import NavbarItems from "./navbar-items";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-14 pt-8">
      <NavbarLogo />
      <NavbarItems />
    </nav>
  );
};

export default Navbar;
