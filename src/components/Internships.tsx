import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Internships.css";

type Internship = {
  id: string;
  title: string;
  category: "Technical" | "Creative" | "Testing";
  duration: string;
  overview: string;
  skills: string[];
};

const internships: Internship[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    category: "Technical",
    duration: "2 / 3 / 6 Months",
    overview:
      "Build complete web applications from frontend to backend with real project workflows, deployment awareness, and industry practices.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Technical",
    duration: "2 / 3 / 6 Months",
    overview:
      "Learn data preprocessing, model building, training, evaluation, and prediction with hands-on problem solving.",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Data Analysis"],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "Technical",
    duration: "2 / 3 / 6 Months",
    overview:
      "Explore AI concepts, automation thinking, and intelligent solutions for modern business and product use cases.",
    skills: ["AI Concepts", "Python", "Problem Solving", "Automation"],
  },
  {
    id: "python-programming",
    title: "Python Programming",
    category: "Technical",
    duration: "1 / 2 / 3 Months",
    overview:
      "Build a strong coding foundation through Python syntax, scripting, logic building, and practical exercises.",
    skills: ["Python Basics", "Functions", "OOP", "File Handling", "Modules"],
  },
  {
    id: "c-cpp-java",
    title: "C, C++, Java",
    category: "Technical",
    duration: "1 / 2 / 3 Months",
    overview:
      "Strengthen programming fundamentals and logic building through core languages used in interviews and academics.",
    skills: ["Syntax", "Logic Building", "OOP", "DSA Basics"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    category: "Technical",
    duration: "2 / 3 / 6 Months",
    overview:
      "Understand cloud concepts, deployment flow, storage, networking, and infrastructure basics for modern applications.",
    skills: ["AWS Basics", "Deployment", "Networking", "Storage Concepts"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Creative",
    duration: "1 / 2 / 3 Months",
    overview:
      "Create user-friendly interfaces and experiences using research, wireframes, prototypes, and modern design tools.",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Creative",
    duration: "1 / 2 / 3 Months",
    overview:
      "Create visual content for branding, social media, and digital marketing with strong design principles.",
    skills: ["Photoshop", "Illustrator", "Branding", "Layouts"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Creative",
    duration: "1 / 2 / 3 Months",
    overview:
      "Learn editing, transitions, motion basics, and content shaping for reels, ads, and promotional videos.",
    skills: ["Premiere Pro", "Cutting", "Transitions", "Audio Sync"],
  },
  {
    id: "manual-testing",
    title: "Manual Testing",
    category: "Testing",
    duration: "1 / 2 / 3 Months",
    overview:
      "Understand testing life cycle, test cases, defect tracking, and quality assurance practices.",
    skills: ["Test Cases", "Bug Reporting", "SDLC", "STLC"],
  },
  {
    id: "automation-testing",
    title: "Automation Testing",
    category: "Testing",
    duration: "2 / 3 / 6 Months",
    overview:
      "Automate repetitive testing processes using scripting and frameworks commonly used in the industry.",
    skills: ["Selenium", "TestNG", "Java/Python", "Framework Basics"],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    category: "Technical",
    duration: "3 / 6 Months",
    overview:
      "Learn software development lifecycle, architecture basics, teamwork, and project execution.",
    skills: ["SDLC", "Agile", "Git", "Project Workflow"],
  },
];

const Internships: React.FC = () => {
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
    <section className="internship-page">
      <div className="internship-hero">
        <p className="eyebrow">Internship Programs</p>

        <h1>
          Build Skills. Work on Real Projects. Get Career Ready.
        </h1>

        <p className="hero-text">
          Explore our internship programs designed with practical learning,
          guided mentorship, and industry-focused project experience.
        </p>

        <div className="hero-actions">
          <button
            onClick={() =>
              document.getElementById("internship-list")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="secondary-btn"
          >
            View All Programs
          </button>
        </div>
      </div>

      <div className="program-list" id="internship-list">
        <div className="section-title">
          <h2>Available Internship Programs</h2>

          <p>
            Each program is structured with clear outcomes, practical tasks,
            and professional guidance.
          </p>
        </div>

        <div className="program-grid">
          {internships.map((item) => (
            <article className="program-card" id={item.id} key={item.id}>
              <div className="program-top">
                <span className="badge">{item.category}</span>
                <span className="duration">{item.duration}</span>
              </div>

              <h3>{item.title}</h3>

              <p className="desc">{item.overview}</p>

              <div className="mini-block">
                <h4>Skills Covered</h4>

                <div className="chip-row">
                  {item.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;