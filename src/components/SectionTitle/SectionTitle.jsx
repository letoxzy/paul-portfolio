import "./SectionTitle.css";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <span>{subtitle}</span>

      <h2>{title}</h2>

      <div className="title-line"></div>
    </div>
  );
}

export default SectionTitle;
