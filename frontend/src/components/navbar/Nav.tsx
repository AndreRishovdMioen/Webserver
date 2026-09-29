import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="px-4 py-2 font-medium hover:text-cyan-600">
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="px-4 py-2 font-medium hover:text-cyan-600"
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className="px-4 py-2 font-medium hover:text-cyan-600"
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className="px-4 py-2 font-medium hover:text-cyan-600"
      >
        Contact
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={"w-1/3 flex justify-end"}>
        <div className={"hidden items-center gap-5 md:flex bg-gray-400"}>
          <NavLinks />
        </div>
        <div className="md:hidden text-">
          <button onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div>
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
