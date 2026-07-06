import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Contact.css";
import profile from "../../data/profile";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_3ejs7pf",
        "template_ooqtn76",
        form.current,
        "mpa-I8MU3MTZRaAgs",
      )
      .then(() => {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          icon: "🚀",
        });

        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        toast.error("Failed to send message. Please try again.", {
          icon: "❌",
        });

        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact page-section">
      <div className="container">
        <SectionTitle title="Let's Work Together" subtitle="Contact" />

        <p className="contact-intro">
          I'm currently open to software engineering roles, freelance projects,
          and collaborations. Feel free to reach out anytime.
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            {/* Email */}
            <a href={profile.social.email} className="contact-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <span>opokitipaul@gmail.com</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={profile.social.whatsapp}
              className="contact-card"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              <div>
                <h4>WhatsApp</h4>
                <span>Chat on WhatsApp</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.social.linkedin}
              className="contact-card"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <span>View Profile</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={profile.social.github}
              className="contact-card"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <div>
                <h4>GitHub</h4>
                <span>Visit GitHub</span>
              </div>
            </a>

            {/* Location */}
            <div className="contact-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
