import { useState } from "react";

interface NavbarProp {
  title: string;
  hyperlink: string;
}

function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const navbarProps: NavbarProp[] = [
    {
      title: "Home",
      hyperlink: "youtube.com",
    },
    {
      title: "About",
      hyperlink: "vg.no",
    },
    {
      title: "Contact",
      hyperlink: "spotify.com",
    },
    {
      title: "Portfolio",
      hyperlink: "github.com/AndreRishovdMioen",
    },
  ];

  const handleNavbarClick = (index: number) => {
    setSelectedIndex(index);
    console.log(index);
  };

  return (
    <>
      <ol className="nav">
        {navbarProps.map((navbarProp: NavbarProp, index: number) => (
          <li
            className="nav-item"
            key={navbarProp.title}
            onClick={() => handleNavbarClick(index)}
          >
            <a
              className={
                selectedIndex === index ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              href={navbarProp.hyperlink}
            >
              {navbarProp.title}
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Navbar;
