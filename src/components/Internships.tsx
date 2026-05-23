import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Internships.css";

type InternshipCategory =
  | "Software Development"
  | "Artificial Intelligence"
  | "Cloud & DevOps"
  | "Quality Assurance"
  | "Design & Media";

type Internship = {
  id: string;
  title: string;
  category: InternshipCategory;
  duration: string;
  overview: string;
  skills: string[];
};

const categoryColors: Record<InternshipCategory, string> = {
  "Software Development": "#5b21b6",
  "Artificial Intelligence": "#0284c7",
  "Cloud & DevOps": "#059669",
  "Quality Assurance": "#d97706",
  "Design & Media": "#db2777",
};

const internships: Internship[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    category: "Software Development",
    duration: "1 / 2 / 3 Months",
    overview:
      "Build complete web applications from frontend to backend with real project workflows, API integration, and deployment practices used in professional development teams.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: "python-programming",
    title: "Python Programming",
    category: "Software Development",
    duration: "1 / 2 / 3 Months",
    overview:
      "Develop strong programming foundations through Python syntax, object-oriented design, scripting, and structured problem-solving exercises.",
    skills: ["Python Basics", "Functions", "OOP", "File Handling", "Modules"],
  },
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    category: "Software Development",
    duration: "1 / 2 / 3 Months",
    overview:
      "Build core programming confidence in C, C++, and Java with a focus on logic building, data structures, and interview-ready coding skills.",
    skills: ["C / C++", "Java", "OOP", "Logic Building", "DSA Basics"],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    category: "Software Development",
    duration: "1 / 2 / 3 Months",
    overview:
      "Learn software development lifecycle concepts, version control, Agile collaboration, and structured project execution methods used in modern engineering teams.",
    skills: ["SDLC", "Agile", "Git", "Project Workflow", "Documentation"],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "Artificial Intelligence",
    duration: "1 / 2 / 3 Months",
    overview:
      "Explore core AI concepts, intelligent automation, and practical use cases across industries — building both foundational knowledge and applied awareness.",
    skills: ["AI Concepts", "Python", "Problem Solving", "Automation", "Use Cases"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Artificial Intelligence",
    duration: "1 / 2 / 3 Months",
    overview:
      "Learn data preparation, supervised and unsupervised learning, model training, and evaluation pipelines through guided, hands-on practice.",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Model Evaluation"],
  },
  {
    id: "prompt-engineering",
    title: "AI Prompt Engineering",
    category: "Artificial Intelligence",
    duration: "1 / 2 / 3 Months",
    overview:
      "Master the design of effective prompts for generative AI platforms, optimizing workflows and output quality for business, content, and productivity use cases.",
    skills: ["Prompt Design", "ChatGPT", "Generative AI", "AI Workflow", "Output Optimization"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    category: "Cloud & DevOps",
    duration: "1 / 2 / 3 Months",
    overview:
      "Understand cloud architecture, service models, deployment strategies, and infrastructure fundamentals used in real-world cloud environments.",
    skills: ["AWS Basics", "Cloud Services", "Networking", "Storage", "Deployment"],
  },
  {
    id: "manual-testing",
    title: "Manual Testing",
    category: "Quality Assurance",
    duration: "1 / 2 / 3 Months",
    overview:
      "Learn the complete software testing lifecycle — writing test cases, tracking defects, and executing quality assurance processes on real project scenarios.",
    skills: ["Test Cases", "Bug Reporting", "SDLC", "STLC", "QA Process"],
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    category: "Quality Assurance",
    duration: "1 / 2 / 3 Months",
    overview:
      "Automate repetitive testing workflows using industry-standard tools and frameworks, building reusable test scripts for professional project environments.",
    skills: ["Selenium", "TestNG", "Java / Python", "Framework Design", "Test Scripts"],
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    category: "Design & Media",
    duration: "1 / 2 / 3 Months",
    overview:
      "Design intuitive digital experiences using research, wireframes, and interactive prototypes with a focus on user-centered design thinking and visual clarity.",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Design & Media",
    duration: "1 / 2 / 3 Months",
    overview:
      "Create professional visual content for brands and digital platforms with strong design principles, typography, color theory, and layout fundamentals.",
    skills: ["Photoshop", "Illustrator", "Branding", "Typography", "Layouts"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Design & Media",
    duration: "1 / 2 / 3 Months",
    overview:
      "Learn professional editing techniques — cuts, transitions, pacing, and audio sync — to produce polished short-form content for digital platforms.",
    skills: ["Premiere Pro", "Cutting & Pacing", "Transitions", "Audio Sync", "Color Grading"],
  },
];

const highlights = [
  {
    num: "01",
    title: "Real Project Work",
    text: "Every track includes hands-on project tasks modeled after actual industry workflows and deliverables.",
  },
  {
    num: "02",
    title: "Mentor-Led Guidance",
    text: "Dedicated mentors provide structured support, feedback, and direction throughout your program.",
  },
  {
    num: "03",
    title: "Verified Certificate",
    text: "Earn an official completion certificate after successfully passing your project review and assessment.",
  },
  {
    num: "04",
    title: "Career Readiness",
    text: "Resume building, mock interviews, and portfolio guidance designed to support your next career move.",
  },
];

const certificateDetails = [
  "Official Internship Completion Certificate",
  "Project Completion Acknowledgment",
  "Assessment-Based Performance Review",
  "Skill Evaluation & Competency Summary",
  "Portfolio Reference & Documentation Support",
];

const placementItems = [
  {
    title: "Resume Building",
    text: "Craft an ATS-optimized, domain-specific resume tailored for internship applications and entry-level job roles.",
  },
  {
    title: "Interview Preparation",
    text: "Build confidence through structured technical and HR mock interview sessions with focused feedback.",
  },
  {
    title: "Portfolio Guidance",
    text: "Present your work professionally through project showcases, GitHub profiles, or curated design portfolios.",
  },
  {
    title: "Career Direction",
    text: "Receive guidance on job roles, career paths, and the right next steps aligned to your skills and goals.",
  },
];

const terms = [
  "All internship programs are offered for durations of 1, 2, or 3 months based on the selected track and learning plan.",
  "Enrollment requires submission of a valid student ID, graduation certificate, or equivalent verification document at the time of registration.",
  "Participants must maintain a minimum of 80% task completion and active program engagement to qualify for a completion certificate.",
  "The internship completion certificate is issued solely upon successful project submission and passing the internal assessment review — partial completion does not qualify.",
  "Certificates are non-transferable and issued only in the name of the enrolled and verified participant. No duplicate certificates will be issued except upon written request.",
  "All participants are expected to maintain professional conduct — including meeting assigned deadlines, communicating proactively with mentors, and engaging with program activities respectfully.",
  "Any form of plagiarism, copied project submissions, or misrepresentation of work will result in immediate and permanent disqualification from the program without refund.",
  "Track transfers must be requested within 3 business days of enrollment. Refund eligibility is subject to management review and the applicable refund policy in effect at the time of enrollment.",
  "Placement support is purely advisory and guidance-based. It does not constitute a guarantee, promise, or contractual assurance of employment, job placement, or interview selection by any employer.",
  "Program content, curriculum structure, and learning materials may be revised periodically to reflect current industry standards and technology requirements without prior individual notice.",
  "The organization reserves the right to modify, pause, or discontinue any program with reasonable prior notice communicated to all enrolled participants via registered contact information.",
  "By enrolling, participants consent to the use of anonymized feedback, project summaries, and testimonials for internal program improvement and promotional purposes, with the option to opt out on written request.",
];

const ALL = "All";
const categories = [
  ALL,
  "Software Development",
  "Artificial Intelligence",
  "Cloud & DevOps",
  "Quality Assurance",
  "Design & Media",
] as const;

type FilterCategory = (typeof categories)[number];

const Internships: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState<FilterCategory>(ALL);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  const filtered =
    active === ALL
      ? internships
      : internships.filter((i) => i.category === (active as InternshipCategory));

  return (
    <section className="ip">
      {/* ── HERO ── */}
      <div className="ip-hero">
        <div className="ip-hero-inner">
          <span className="ip-eyebrow">Internship Programs</span>
          <h1 className="ip-h1">
            Industry-Aligned Internships
            <br />
            Built for Career Starters
          </h1>
          <p className="ip-lead">
            Gain hands-on experience across software, AI, cloud, QA, and design
            tracks — structured around real projects, mentor support, and
            professional certification.
          </p>
          <button
            className="ip-cta"
            onClick={() =>
              document
                .getElementById("ip-programs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            type="button"
          >
            Explore Programs →
          </button>
          <div className="ip-stats">
            <div className="ip-stat">
              <strong>13</strong>
              <span>Internship Tracks</span>
            </div>
            <div className="ip-stat">
              <strong>5</strong>
              <span>Domains Covered</span>
            </div>
            <div className="ip-stat">
              <strong>1–3</strong>
              <span>Month Duration</span>
            </div>
            <div className="ip-stat">
              <strong>100%</strong>
              <span>Project Based</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ip-body">
        {/* ── WHY JOIN ── */}
        <section className="ip-section">
          <div className="ip-section-head">
            <h2>Why Choose Our Programs</h2>
            <p>
              Every track is built with clear outcomes, guided project work, and
              professional support so you grow with both skill and confidence.
            </p>
          </div>
          <div className="ip-highlights">
            {highlights.map((h) => (
              <div className="ip-hl-card" key={h.num}>
                <span className="ip-hl-num">{h.num}</span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROGRAMS ── */}
        <section className="ip-section" id="ip-programs">
          <div className="ip-section-head">
            <h2>Available Internship Tracks</h2>
            <p>
              Choose a domain, pick your duration, and start building real
              skills with professional guidance and project-based learning.
            </p>
          </div>

          <div className="ip-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`ip-filter-btn${active === cat ? " ip-filter-active" : ""}`}
                onClick={() => setActive(cat as FilterCategory)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="ip-grid">
            {filtered.map((item) => (
              <article
                className="ip-card"
                id={item.id}
                key={item.id}
                style={
                  {
                    "--cat-color": categoryColors[item.category],
                  } as React.CSSProperties
                }
              >
                <div className="ip-card-top">
                  <span
                    className="ip-badge"
                    style={{
                      color: categoryColors[item.category],
                      background: categoryColors[item.category] + "18",
                    }}
                  >
                    {item.category}
                  </span>
                  <span className="ip-duration">{item.duration}</span>
                </div>
                <h3 className="ip-card-title">{item.title}</h3>
                <p className="ip-card-desc">{item.overview}</p>
                <div className="ip-chips">
                  {item.skills.map((skill) => (
                    <span className="ip-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATE ── */}
        <section className="ip-section">
          <div className="ip-two-col">
            <div className="ip-section-head ip-section-head--flush">
              <h2>Completion Certificate</h2>
              <p>
                Participants who complete their track, submit their project, and
                clear the internal assessment receive an official internship
                completion certificate recognised for professional use.
              </p>
            </div>
            <ul className="ip-cert-list">
              {certificateDetails.map((point) => (
                <li key={point}>
                  <span className="ip-check">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── PLACEMENT ── */}
        <section className="ip-section">
          <div className="ip-section-head">
            <h2>Placement &amp; Career Support</h2>
            <p>
              We equip you with the tools to present your skills professionally
              and navigate your next career step with clarity and confidence.
            </p>
          </div>
          <div className="ip-placement-grid">
            {placementItems.map((item) => (
              <article className="ip-placement-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── TERMS ── */}
        <section className="ip-section ip-section--last">
          <div className="ip-section-head">
            <h2>Terms &amp; Conditions</h2>
            <p>
              Please read and understand the following terms before enrolling
              in any internship track.
            </p>
          </div>
          <div className="ip-terms">
            {terms.map((term, i) => (
              <div className="ip-term-row" key={i}>
                <span className="ip-term-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{term}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Internships;