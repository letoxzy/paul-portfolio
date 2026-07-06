import { motion } from "framer-motion";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="service-icon">
        <Icon />
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>
    </motion.div>
  );
}

export default ServiceCard;
