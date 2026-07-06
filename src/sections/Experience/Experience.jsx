import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import timeline from "../../data/timeline";

import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience page-section">
      <div className="container">
        <SectionTitle title="My Journey" subtitle="Experience" />

        <div className="timeline">
          {timeline.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
