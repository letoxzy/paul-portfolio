import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaDatabase, FaRocket } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./About.css";

function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      text: "Writing scalable, maintainable and reusable applications.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive UI",
      text: "Building beautiful websites and mobile apps for every device.",
    },
    {
      icon: <FaDatabase />,
      title: "Backend & Database",
      text: "Working with Firebase, MongoDB and REST APIs.",
    },
    {
      icon: <FaRocket />,
      title: "Always Learning",
      text: "Continuously improving my skills through real-world projects.",
    },
  ];

  return (
    <section id="about" className="about page-section">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div className="about-content">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3>Building digital experiences that solve real problems.</h3>

            <p>
              I'm <strong>Opokiti Paul Kehinde</strong>, a Full Stack Web &
              Mobile Developer passionate about creating modern, responsive, and
              user-friendly applications.
            </p>

            <p>
              My journey started with web development and has grown into
              building full-stack web applications, mobile apps with Flutter,
              and scalable backend solutions using Firebase and MongoDB.
            </p>

            <p>
              I enjoy turning ideas into real products that are fast, intuitive,
              and built with clean code.
            </p>

            <div className="stats">
              <div className="stat-card">
                <h2>4+</h2>
                <span>Projects Completed</span>
              </div>

              <div className="stat-card">
                <h2>10+</h2>
                <span>Technologies Used</span>
              </div>

              <div className="stat-card">
                <h2>2+</h2>
                <span>Years of Experience</span>
              </div>

              <div className="stat-card">
                <h2>100%</h2>
                <span>Dedication</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {highlights.map((item, index) => (
              <div className="highlight-card" key={index}>
                <div className="highlight-icon">{item.icon}</div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
