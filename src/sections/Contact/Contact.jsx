import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Contact.css";
import profile from "../data/profile";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle title="Let's Work Together" subtitle="Contact" />

        <p className="contact-intro">
          I'm currently open to software engineering roles, freelance projects,
          and collaborations. Feel free to reach out anytime.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <a href="mailto:your@email.com">opokitipaul@email.com</a>
              </div>
            </div>

            <div className="contact-card">
              <FaWhatsapp />
              <div>
                <h4>WhatsApp</h4>
                <a
                  href={profile.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <a href="YOUR_LINKEDIN" target="_blank" rel="noreferrer">
                  View Profile
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaGithub />
              <div>
                <h4>GitHub</h4>
                <a href="YOUR_GITHUB" target="_blank" rel="noreferrer">
                  Visit GitHub
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
