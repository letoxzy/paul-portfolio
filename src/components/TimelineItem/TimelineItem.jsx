import { motion } from "framer-motion";
import "./TimelineItem.css";

function TimelineItem({ item, index }) {
  return (
    <motion.div
      className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline-content">
        <span className="timeline-year">{item.year}</span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>
      </div>

      <div className="timeline-dot"></div>
    </motion.div>
  );
}

export default TimelineItem;
