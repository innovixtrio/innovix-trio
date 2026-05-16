import React from "react";
import "./About.css";
import {
  FaEye,
  FaBullseye,
  FaUsers,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <h1>InnovixTrio</h1>

        <p>
          Empowering businesses and individuals through cutting-edge
          technology, creative solutions, and industry-driven training.
          We combine innovation, strategy, and execution to deliver
          measurable impact.
        </p>
      </div>

      {/* ABOUT */}
      <div className="about-section">
        <h2>Who We Are</h2>

        <p>
          InnovixTrio is a technology-driven company offering a blend of
          <strong> services and skill development solutions</strong>.
          We work with startups, businesses, and students to build scalable
          digital products, enhance user experiences, and develop
          industry-ready talent.
        </p>
      </div>

      {/* SERVICES */}
      <div className="about-grid">
        <div className="about-card">
          <FaLaptopCode className="icon" />

          <h3>Technology Solutions</h3>

          <p>
            Web development, cloud solutions, and scalable digital
            platforms tailored for modern businesses.
          </p>
        </div>

        <div className="about-card">
          <FaChartLine className="icon" />

          <h3>Digital Growth</h3>

          <p>
            Data-driven digital marketing strategies that help brands
            grow, engage, and convert effectively.
          </p>
        </div>

        <div className="about-card">
          <FaUsers className="icon" />

          <h3>Skill Development</h3>

          <p>
            Industry-focused training programs designed to build
            practical skills and career readiness.
          </p>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="about-grid">
        <div className="about-card highlight">
          <FaEye className="icon" />

          <h2>Vision</h2>

          <p>
            To become a globally recognized technology and learning
            platform that drives innovation, empowers businesses,
            and transforms careers through impactful digital solutions.
          </p>
        </div>

        <div className="about-card highlight">
          <FaBullseye className="icon" />

          <h2>Mission</h2>

          <p>
            To deliver high-quality services and training that bridge
            the gap between technology and real-world application,
            enabling clients and learners to achieve sustainable success.
          </p>
        </div>
      </div>

      {/* IMPACT */}
      <div className="about-section">
        <h2>Our Impact</h2>

        <p>
          We have successfully supported businesses in building digital
          products, improved brand visibility through strategic marketing,
          and guided students toward career success with hands-on experience.
        </p>

        <ul className="impact-list">
          <li>Delivered high-performance websites and applications</li>
          <li>Boosted brand growth through digital marketing</li>
          <li>Trained students with real-world industry skills</li>
          <li>Built strong portfolios and career pathways</li>
        </ul>
      </div>
    </section>
  );
};

export default About;