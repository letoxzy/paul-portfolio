import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import services from "../../data/services";

import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <SectionTitle title="What I Do" subtitle="Services" />

        <p className="services-intro">
          I help businesses and individuals build modern web applications,
          mobile apps and digital experiences using today's best technologies.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
