import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CoursePage.css";

type Course = {
  id: string;
  title: string;
  category: "Development" | "Creative" | "Testing" | "Cloud";
  overview: string;
  skills: string[];
};

const courses: Course[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    category: "Development",
    overview:
      "Learn frontend and backend development together. Build complete web applications, understand databases, APIs, authentication, and deployment.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: "mern-stack",
    title: "MERN Stack",
    category: "Development",
    overview:
      "Master MongoDB, Express, React, and Node.js to create modern full-stack web apps with real project practice.",
    skills: ["MongoDB", "Express", "React", "Node.js", "REST API"],
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Development",
    overview:
      "Build beautiful and responsive websites using HTML, CSS, JavaScript, and modern frontend concepts.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Creative",
    overview:
      "Create user-friendly digital experiences using wireframes, prototypes, design systems, and user research.",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Creative",
    overview:
      "Learn visual design for posters, banners, branding, and social media content using professional design principles.",
    skills: ["Photoshop", "Illustrator", "Branding", "Layouts"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Creative",
    overview:
      "Edit reels, ads, and promotional videos using cutting, transitions, effects, audio syncing, and timeline editing.",
    skills: ["Premiere Pro", "Cutting", "Transitions", "Audio Sync"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    category: "Cloud",
    overview:
      "Understand cloud services, deployment, storage, networking, and infrastructure used in modern software systems.",
    skills: ["AWS Basics", "Deployment", "Networking", "Storage"],
  },
  {
    id: "software-testing",
    title: "Software Testing",
    category: "Testing",
    overview:
      "Learn manual and automation testing, test cases, bug reporting, and quality assurance for software applications.",
    skills: ["Test Cases", "Bug Reporting", "SDLC", "Selenium"],
  },
];

const CoursePage: React.FC = () => {
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
    <section className="course-page">
      <div className="course-hero">
        <p className="eyebrow">Our Courses</p>
        <h1>Learn Practical Skills. Build Projects. Get Industry Ready.</h1>
        <p className="hero-text">
          Choose from development, creative, cloud, and testing courses designed
          with clear explanations, hands-on practice, and career-focused learning.
        </p>

        <div className="hero-actions">
          {/* Backend not connected yet, so the enquiry button is commented out for now. */}
          <button
            onClick={() =>
              document.getElementById("course-list")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="secondary-btn"
          >
            View Courses
          </button>
        </div>
      </div>

      <div className="course-section">
        <div className="section-title">
          <h2>Course Details</h2>
          <p>
            Each course below includes a simple explanation and the skills you will
            learn.
          </p>
        </div>

        <div className="course-grid" id="course-list">
          {courses.map((course) => (
            <article className="course-card" key={course.id} id={course.id}>
              <div className="course-top">
                <span className="badge">{course.category}</span>
              </div>

              <h3>{course.title}</h3>
              <p className="desc">{course.overview}</p>

              <div className="mini-block">
                <h4>Skills Covered</h4>
                <div className="chip-row">
                  {course.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
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

export default CoursePage;