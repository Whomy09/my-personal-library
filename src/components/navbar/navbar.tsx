import NavbarLogo from "./navbar-logo";
import NavbarItems from "./navbar-items";

const Navbar = () => {
  return (
    <nav className="flex justify-center h-14 pt-8 lg:justify-between">
      <NavbarLogo />
      <NavbarItems />
    </nav>
  );
};

export default Navbar;
