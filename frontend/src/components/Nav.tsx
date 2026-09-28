import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </>
  );
};

export default Nav;
