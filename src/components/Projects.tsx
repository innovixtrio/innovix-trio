import React, { useState } from "react";
import "./Projects.css";
import {
  FaLaptopCode,
  FaGraduationCap,
  FaBrain,
  FaGlobe,
  FaMobileAlt,
  FaProjectDiagram,
} from "react-icons/fa";

type ProjectCategory = "Final Year" | "Mini" | "College" | "IEEE" | "AI / ML" | "Web Dev";

type Project = {
  id: string;
  icon: React.ReactNode;
  category: ProjectCategory;
  title: string;
  desc: string;
  chips: string[];
  outcomes: string[];
};

const categoryColors: Record<ProjectCategory, string> = {
  "Final Year": "#6d28d9",
  "Mini": "#059669",
  "College": "#0369a1",
  "IEEE": "#b45309",
  "AI / ML": "#be185d",
  "Web Dev": "#0891b2",
};

const projects: Project[] = [
  {
    id: "final-year",
    icon: <FaGraduationCap />,
    category: "Final Year",
    title: "Final Year Projects",
    desc: "Advanced, industry-focused projects for final year students with end-to-end documentation, full implementation, and dedicated viva and presentation support.",
    chips: ["AI / ML", "Web App", "IoT", "Android", "Python"],
    outcomes: ["Source Code", "Project Report", "Viva Support", "PPT Included"],
  },
  {
    id: "mini-projects",
    icon: <FaProjectDiagram />,
    category: "Mini",
    title: "Mini Projects",
    desc: "Smart and simple mini project ideas built for diploma and undergraduate students — quick to build, easy to present, and low on cost.",
    chips: ["Beginner", "Low Cost", "Quick Build"],
    outcomes: ["Working Demo", "Basic Report", "Code Walkthrough", "Affordable"],
  },
  {
    id: "college-projects",
    icon: <FaLaptopCode />,
    category: "College",
    title: "College Projects",
    desc: "Complete college project support across all streams — delivered with source code, structured report, and a presentation-ready format.",
    chips: ["CSE", "IT", "ECE", "EEE", "Mechanical", "MBA", "Other Streams"],
    outcomes: ["Full Source Code", "IEEE Report", "Presentation", "All Streams"],
  },
  {
    id: "ieee-projects",
    icon: <FaBrain />,
    category: "IEEE",
    title: "IEEE Projects",
    desc: "Research-backed IEEE standard projects built on modern and emerging technologies — ideal for students aiming for publication or advanced academic evaluation.",
    chips: ["Deep Learning", "Cloud", "Research", "IoT"],
    outcomes: ["IEEE Format Report", "Research Base", "Implementation", "Paper Reference"],
  },
  {
    id: "ai-ml-projects",
    icon: <FaMobileAlt />,
    category: "AI / ML",
    title: "AI / ML Projects",
    desc: "Trending artificial intelligence and machine learning projects built with real datasets, model training pipelines, and evaluation metrics.",
    chips: ["Python", "NLP", "Prediction", "Computer Vision"],
    outcomes: ["Trained Model", "Dataset", "Code + Docs", "Demo Ready"],
  },
  {
    id: "web-development",
    icon: <FaGlobe />,
    category: "Web Dev",
    title: "Web Development Projects",
    desc: "Full-stack and frontend web development projects using modern frameworks and tools — built responsive, deployable, and fully documented.",
    chips: ["React", "Flask", "Node.js", "MongoDB"],
    outcomes: ["Source Code", "Deployed Link", "API Docs", "Responsive UI"],
  },
];

const highlights = [
  {
    num: "01",
    title: "End-to-End Support",
    text: "From topic selection to viva preparation — every project comes with full implementation, documentation, and presentation support.",
  },
  {
    num: "02",
    title: "All Streams Covered",
    text: "Projects available across CSE, IT, ECE, EEE, Mechanical, MBA, and more — tailored to each stream's academic requirements.",
  },
  {
    num: "03",
    title: "Ready to Submit",
    text: "Every deliverable is formatted to academic standards — source code, IEEE-style reports, and presentation slides included.",
  },
  {
    num: "04",
    title: "Viva & Demo Ready",
    text: "We prepare you for the viva with working demos, code walkthroughs, and Q&A guidance so you present with full confidence.",
  },
];

const ALL = "All";
const categories = [ALL, "Final Year", "Mini", "College", "IEEE", "AI / ML", "Web Dev"] as const;
type FilterCategory = (typeof categories)[number];

const Projects: React.FC = () => {
  const [active, setActive] = useState<FilterCategory>(ALL);

  const filtered =
    active === ALL
      ? projects
      : projects.filter((p) => p.category === (active as ProjectCategory));

  return (
    <section className="pp">
      {/* ── HERO ── */}
      <div className="pp-hero">
        <div className="pp-hero-inner">
          <span className="pp-eyebrow">Student Project Center</span>
          <h1 className="pp-h1">
            Final Year, College, IEEE,
            <br />
            AI/ML &amp; Web Dev Projects
          </h1>
          <p className="pp-lead">
            Project ideas, full implementation, structured documentation, and
            presentation-ready support — for every stream and every level.
          </p>
          <button
            className="pp-cta"
            onClick={() =>
              document
                .getElementById("pp-projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            type="button"
          >
            Explore Projects →
          </button>
          <div className="pp-stats">
            <div className="pp-stat">
              <strong>6</strong>
              <span>Project Types</span>
            </div>
            <div className="pp-stat">
              <strong>All</strong>
              <span>Streams Covered</span>
            </div>
            <div className="pp-stat">
              <strong>IEEE</strong>
              <span>Format Reports</span>
            </div>
            <div className="pp-stat">
              <strong>100%</strong>
              <span>Viva Ready</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pp-body">
        {/* ── WHY CHOOSE ── */}
        <section className="pp-section">
          <div className="pp-section-head">
            <h2>Why Choose Our Projects</h2>
            <p>
              Every project is delivered with complete academic support — from
              code to documentation to viva preparation.
            </p>
          </div>
          <div className="pp-highlights">
            {highlights.map((h) => (
              <div className="pp-hl-card" key={h.num}>
                <span className="pp-hl-num">{h.num}</span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="pp-section pp-section--last" id="pp-projects">
          <div className="pp-section-head">
            <h2>Available Project Categories</h2>
            <p>
              Filter by type to find the right project for your stream, level,
              and academic requirements.
            </p>
          </div>

          <div className="pp-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pp-filter-btn${active === cat ? " pp-filter-active" : ""}`}
                onClick={() => setActive(cat as FilterCategory)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="pp-grid">
            {filtered.map((project) => (
              <article
                className="pp-card"
                id={project.id}
                key={project.id}
                style={
                  {
                    "--cat-color": categoryColors[project.category],
                  } as React.CSSProperties
                }
              >
                <div className="pp-card-top">
                  <span
                    className="pp-badge"
                    style={{
                      color: categoryColors[project.category],
                      background: categoryColors[project.category] + "18",
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="pp-icon-box"
                    style={{
                      color: categoryColors[project.category],
                      background: categoryColors[project.category] + "15",
                    }}
                  >
                    {project.icon}
                  </span>
                </div>
                <h3 className="pp-card-title">{project.title}</h3>
                <p className="pp-card-desc">{project.desc}</p>
                <div className="pp-chips">
                  {project.chips.map((chip) => (
                    <span className="pp-chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="pp-outcomes">
                  <span className="pp-outcomes-label">What You Get</span>
                  <div className="pp-outcome-tags">
                    {project.outcomes.map((o) => (
                      <span className="pp-outcome-tag" key={o}>
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;