import { motion } from "framer-motion";
import "./SkillCard.css";

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="skill-icon">
        <Icon />
      </div>

      <h3>{skill.title}</h3>

      <span className="skill-level">{skill.level}</span>

      <p>{skill.description}</p>
    </motion.div>
  );
}

export default SkillCard;
