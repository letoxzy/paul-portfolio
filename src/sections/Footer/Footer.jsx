import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import resume from "../../assets/cv/OPOKITI_PAUL_KEHINDE_ATS_CV.pdf";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>PAUL//OS</h2>

            <p>React Developer • Flutter Developer • UI/UX Designer</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} PAUL//OS. All Rights Reserved.</p>

          <button onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
