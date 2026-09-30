import Contact from "../../pages/contact.tsx";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <NavLink
        to="/privacyPolicy"
        className="px-4 py-2 hover:text-cyan-600 underline"
      >
        Privacy Policy
      </NavLink>
    </div>
  );
};

const Copyright = () => {
  return (
    <>
      <p>© 2026 André Rishovd Miøen. All rights reserved</p>
    </>
  );
};

const Footer = () => {
  return (
    <div className="bottom-0 sticky mx-60  bg-gray-600 border-t-1 border-gray-800 pt-4 pb-4 gap z-0)">
      <ul className="justify-items-center grid grid-cols-2">
        <li>
          <p className="font-bold">Contact:</p>
          <Contact />
        </li>
        <li>
          <FooterLinks />
        </li>
      </ul>
      <div className="justify-items-center">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
