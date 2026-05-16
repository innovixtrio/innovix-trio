import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ServicePage.css";

type Service = {
  id: string;
  title: string;
  category: "Design" | "Development" | "Marketing" | "Branding";
  overview: string;
  features: string[];
};

const services: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Design",
    overview:
      "Create visually attractive posters, banners, social media creatives, and branding materials with professional design principles.",
    features: ["Poster Design", "Banner Design", "Social Media Posts", "Brand Identity"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    overview:
      "Design user-friendly digital experiences using wireframes, prototypes, design systems, and user-centered thinking.",
    features: ["Wireframing", "Prototyping", "User Research", "Figma Design"],
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "Development",
    overview:
      "Build responsive, modern websites with clean coding, smooth layouts, and strong performance across devices.",
    features: ["Responsive Websites", "Frontend Development", "Landing Pages", "Custom UI"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    overview:
      "Promote your business online using strategic marketing techniques to improve reach, visibility, and engagement.",
    features: ["Social Media Marketing", "SEO Basics", "Ad Campaigns", "Content Strategy"],
  },
];

const ServicePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;

    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <section className="service-page">
      <div className="service-hero">
        <p className="eyebrow">Our Services</p>
        <h1>Creative, Digital, and Development Services for Modern Business Needs.</h1>
        <p className="hero-text">
          We provide professional services that help you build your brand, improve your
          online presence, and deliver a better user experience.
        </p>

        <div className="hero-actions">
          {/* Backend not connected yet, so the enquiry button is commented out for now. */}
          <button
            onClick={() =>
              document.getElementById("service-list")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="secondary-btn"
          >
            View Services
          </button>
        </div>
      </div>

      <div className="service-section">
        <div className="section-title">
          <h2>Service Details</h2>
          <p>
            Explore our services below. Each one includes a simple explanation and the
            main features covered.
          </p>
        </div>

        <div className="service-grid" id="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.id} id={service.id}>
              <div className="service-top">
                <span className="badge">{service.category}</span>
              </div>

              <h3>{service.title}</h3>
              <p className="desc">{service.overview}</p>

              <div className="mini-block">
                <h4>What We Cover</h4>
                <div className="chip-row">
                  {service.features.map((feature) => (
                    <span className="chip" key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend not connected yet, so this enquiry button is commented out for now. */}
            </article>
          ))}
        </div>
      </div>

      {/* Backend not connected yet, so the enquiry form is commented out for now. */}
    </section>
  );
};

export default ServicePage;