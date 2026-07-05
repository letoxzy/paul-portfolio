import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <header className={scrolled ? "navbar navbar-scroll" : "navbar"}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          PAUL<span>OS</span>
        </a>

        <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>
              {link}
            </a>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
