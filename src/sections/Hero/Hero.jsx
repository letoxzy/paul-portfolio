import { motion } from "framer-motion";
import { FaReact, FaArrowRight, FaDownload } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiMongodb } from "react-icons/si";
import profile from "../../assets/images/profile.png";
import profileData from "../../data/profile";
import "./Hero.css";
import resume from "../../assets/cv/OPOKITI_PAUL_KEHINDE_ATS_CV.pdf";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>

      <div className="container hero-container">
        {/* LEFT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">👋 Hello, I'm</span>

          <h1>{profileData.name}</h1>

          <h3>{profileData.title}</h3>

          <p>
            I build responsive websites, modern mobile applications and scalable
            backend systems with React, Flutter, Firebase and MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
              <FaArrowRight />
            </a>

            <a
              href={profileData.resume}
              className="btn secondary-btn"
              download="OPOKITI_PAUL_KEHINDE_CV.pdf"
            >
              Download CV
              <FaDownload />
            </a>
          </div>

          <div className="tech-stack">
            <span>
              <FaReact /> React
            </span>

            <span>
              <SiFlutter /> Flutter
            </span>

            <span>
              <SiFirebase /> Firebase
            </span>

            <span>
              <SiMongodb /> MongoDB
            </span>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <div className="image-glow"></div>

            <img src={profile} alt="Opokiti Paul Kehinde" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
