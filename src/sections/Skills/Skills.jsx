import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillCard from "../../components/SkillCard/SkillCard";
import skills from "../../data/skills";

import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle title="My Skills" subtitle="Technologies I Work With" />

        <p className="skills-intro">
          I enjoy building modern web applications, mobile apps and scalable
          backend solutions using technologies that are reliable, fast and
          maintainable.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
