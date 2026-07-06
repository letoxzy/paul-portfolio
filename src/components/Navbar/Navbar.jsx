import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";
import resume from "../../assets/cv/OPOKITI_PAUL_KEHINDE_ATS_CV.pdf";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          PAUL<span>//OS</span>
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="hire-btn"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
