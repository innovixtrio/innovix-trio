import React from "react";
import "./Projects.css";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaBrain,
  FaGlobe,
  FaMobileAlt,
  FaProjectDiagram,
} from "react-icons/fa";

type Project = {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  desc: string;
  chips: string[];
};

const projects: Project[] = [
  {
    id: "final-year",
    icon: <FaGraduationCap />,
    badge: "Final Year",
    title: "Final Year Projects",
    desc: "Advanced, industry-focused projects for final year students with documentation, implementation, and viva support.",
    chips: ["AI/ML", "Web App", "IoT", "Android", "Python"],
  },
  {
    id: "mini-projects",
    icon: <FaProjectDiagram />,
    badge: "Mini Project",
    title: "Mini Projects",
    desc: "Simple and smart mini project ideas for diploma and college students.",
    chips: ["Beginner", "Low Cost", "Quick Build"],
  },
  {
    id: "college-projects",
    icon: <FaLaptopCode />,
    badge: "College",
    title: "College Projects",
    desc: "Complete college project support with code, report, and presentation.",
    chips: ["CSE", "IT", "ECE", "EEE" ,"Mechanical" ,"MBA" ,"Other Streams"],
  },
  {
    id: "ieee-projects",
    icon: <FaBrain />,
    badge: "IEEE",
    title: "IEEE Projects",
    desc: "Research-based IEEE projects with modern technologies and innovation.",
    chips: ["Deep Learning", "Cloud", "Research"],
  },
  {
    id: "ai-ml-projects",
    icon: <FaMobileAlt />,
    badge: "AI / ML",
    title: "AI / ML Projects",
    desc: "Trending artificial intelligence and machine learning projects.",
    chips: ["Python", "NLP", "Prediction"],
  },
  {
    id: "web-development",
    icon: <FaGlobe />,
    badge: "Web Dev",
    title: "Web Development Projects",
    desc: "Full-stack and frontend web development projects using modern tools.",
    chips: ["React", "Flask", "Node", "MongoDB"],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="project-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="eyebrow">Student Project Center</div>
        <h1>
          Projects for Final Year, College, Mini, IEEE, AI/ML and Web Development
        </h1>
        <p className="hero-text">
          We provide project ideas, implementation support, documentation, and
          presentation-ready solutions for students.
        </p>

        <div className="hero-actions">
          <a href="#final-year" className="primary-btn">
            Explore Projects
          </a>
        </div>
      </section>

      {/* Project Section */}
      <section className="project-section">
        <div className="section-title">
          <h2>Available Project Categories</h2>
          <p>Choose your project category and get started easily.</p>
        </div>

        <div className="project-grid">
          {projects.map((item) => (
            <article key={item.id} id={item.id} className="project-card">
              <div className="project-top">
                <span className="icon-box">{item.icon}</span>
                <span className="badge">{item.badge}</span>
              </div>

              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>

              <div className="mini-block">
                <h4>Popular Topics</h4>
                <div className="chip-row">
                  {item.chips.map((chip, index) => (
                    <span key={index} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;