import Contact from "../../pages/contact.tsx";
import { NavLink } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <NavLink
        to="/privacyPolicy"
        className="px-4 py-2 font-medium hover:text-cyan-600"
      >
        Privacy Policy
      </NavLink>
    </div>
  );
};

const Footer = () => {
  return (
    <ul className="bottom-0 absolute w-full justify-items-center grid grid-cols-2 bg-amber-400 pt-4 pb-4 gap)">
      <li>
        <p>Contact:</p>
        <Contact />
      </li>
      <li>
        <FooterLinks />
      </li>
    </ul>
  );
};

export default Footer;
