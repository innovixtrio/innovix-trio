import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CoursePage.css";

type CourseCategory =
  | "Development"
  | "Artificial Intelligence"
  | "Cloud & DevOps"
  | "Quality Engineering"
  | "Design & Media";

type Course = {
  id: string;
  title: string;
  category: CourseCategory;
  duration: string;
  overview: string;
  skills: string[];
  careers: string[];
};

const categoryColors: Record<CourseCategory, string> = {
  "Development": "#5b21b6",
  "Artificial Intelligence": "#0284c7",
  "Cloud & DevOps": "#059669",
  "Quality Engineering": "#d97706",
  "Design & Media": "#db2777",
};

const courses: Course[] = [
  {
    id: "full-stack-development",
    title: "Full Stack Development",
    category: "Development",
    duration: "8–12 Weeks",
    overview:
      "Learn frontend, backend, database integration, authentication, REST APIs, and deployment through structured, project-based training built for real-world readiness.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    careers: ["Frontend Developer", "Full Stack Developer", "Backend Developer"],
  },
  {
    id: "mern-stack",
    title: "MERN Stack",
    category: "Development",
    duration: "8–12 Weeks",
    overview:
      "Build modern web applications using MongoDB, Express, React, and Node.js — working through full architecture, API design, and end-to-end deployment.",
    skills: ["MongoDB", "Express", "React", "Node.js", "REST APIs"],
    careers: ["MERN Developer", "Web Application Developer", "JavaScript Developer"],
  },
  {
    id: "web-development",
    title: "Web Development",
    category: "Development",
    duration: "6–8 Weeks",
    overview:
      "Build polished, responsive websites using clean HTML, CSS, JavaScript, and modern frontend practices — focused on structure, layout, and usability.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI Structure"],
    careers: ["Web Developer", "Frontend Associate", "UI Developer"],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "Artificial Intelligence",
    duration: "6–8 Weeks",
    overview:
      "Explore core AI concepts, intelligent automation, and applied use cases shaping modern industries — building both conceptual clarity and practical awareness.",
    skills: ["AI Fundamentals", "Python Basics", "Automation", "Problem Solving", "Use Cases"],
    careers: ["AI Intern", "AI Analyst", "Automation Associate"],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Artificial Intelligence",
    duration: "8–12 Weeks",
    overview:
      "Master data preparation, supervised and unsupervised learning, model training, evaluation, and prediction pipelines through hands-on guided practice.",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Model Evaluation"],
    careers: ["ML Associate", "Data Science Intern", "AI/ML Trainee"],
  },
  {
    id: "prompt-engineering",
    title: "AI Prompt Engineering",
    category: "Artificial Intelligence",
    duration: "3–4 Weeks",
    overview:
      "Master structured prompt design for AI tools like ChatGPT and other generative platforms — improving output quality, workflow efficiency, and content generation.",
    skills: ["Prompt Design", "Generative AI", "ChatGPT", "Workflow Automation", "Content Generation"],
    careers: ["Prompt Engineer", "AI Content Associate", "AI Workflow Specialist"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    category: "Cloud & DevOps",
    duration: "6–8 Weeks",
    overview:
      "Understand cloud platforms, service models, deployment workflows, storage, networking, and infrastructure fundamentals used in modern software environments.",
    skills: ["AWS Basics", "Cloud Services", "Deployment", "Networking", "Storage"],
    careers: ["Cloud Associate", "Deployment Engineer", "DevOps Trainee"],
  },
  {
    id: "software-testing",
    title: "Software Testing",
    category: "Quality Engineering",
    duration: "6–8 Weeks",
    overview:
      "Learn manual testing, test case design, defect tracking, and QA processes used in professional software teams — with a focus on real project scenarios.",
    skills: ["Test Cases", "Bug Reporting", "STLC", "Selenium Basics", "QA Process"],
    careers: ["QA Trainee", "Software Tester", "Quality Analyst"],
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    category: "Design & Media",
    duration: "6–8 Weeks",
    overview:
      "Learn user-centered design thinking, wireframing, interactive prototyping, and interface planning with practical tools used across product teams.",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"],
    careers: ["UI Designer", "UX Designer", "Product Design Intern"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Design & Media",
    duration: "4–6 Weeks",
    overview:
      "Build strong visual communication skills for branding, social media, and marketing creatives — applying design principles, typography, and layout fundamentals.",
    skills: ["Photoshop", "Illustrator", "Branding", "Typography", "Layouts"],
    careers: ["Graphic Designer", "Creative Designer", "Branding Associate"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Design & Media",
    duration: "4–6 Weeks",
    overview:
      "Edit reels, ads, and promotional videos using timeline editing, transitions, motion basics, and audio sync for professional digital media delivery.",
    skills: ["Premiere Pro", "Cutting & Pacing", "Transitions", "Audio Sync", "Color Grading"],
    careers: ["Video Editor", "Content Creator", "Motion Support Associate"],
  },
];

const highlights = [
  {
    num: "01",
    title: "Structured Curriculum",
    text: "Every course follows a clear syllabus — from fundamentals to applied practice — with well-defined milestones and outcomes.",
  },
  {
    num: "02",
    title: "Project-Driven Learning",
    text: "Hands-on tasks and project-based exercises to build real confidence, portfolio value, and practical working experience.",
  },
  {
    num: "03",
    title: "Career Guidance",
    text: "Professional direction on resumes, interview preparation, and skill positioning to help you enter the right roles.",
  },
  {
    num: "04",
    title: "Completion Certificate",
    text: "Earn a verified completion certificate after meeting the course requirements — useful for portfolios and job applications.",
  },
];

const terms = [
  "All course programs are available for the durations specified per track, based on the selected learning plan and batch schedule.",
  "Enrollment requires submission of a valid student ID, graduation certificate, or equivalent verification document at the time of registration.",
  "A minimum of 80% assignment completion and active participation is required to qualify for the course completion certificate.",
  "Completion certificates are issued solely after successful project submission and passing the internal assessment review — partial course completion does not qualify.",
  "Certificates are non-transferable and issued only in the name of the enrolled and verified participant. No duplicate certificates will be issued except upon written request.",
  "Fees paid are non-refundable after 3 business days from the date of enrollment. Refund requests within that window are subject to management review and applicable policy.",
  "Learners are expected to maintain professional conduct — meeting assignment deadlines, communicating with instructors respectfully, and engaging with course activities actively.",
  "Any form of plagiarism, copied submissions, or misrepresentation of project work will result in immediate disqualification from certificate eligibility without refund.",
  "Career guidance, placement support, and interview preparation offered are purely advisory in nature and do not constitute a guarantee or assurance of employment or job placement.",
  "Course content, curriculum structure, and learning materials may be revised periodically to align with current industry requirements and technology standards.",
  "The organization reserves the right to reschedule, modify, or discontinue any course program with reasonable prior notice communicated to enrolled learners.",
  "By enrolling, participants consent to the use of anonymized feedback, project summaries, and testimonials for internal program improvement and promotional use, with the option to opt out on written request.",
];

const ALL = "All";
const categories = [
  ALL,
  "Development",
  "Artificial Intelligence",
  "Cloud & DevOps",
  "Quality Engineering",
  "Design & Media",
] as const;

type FilterCategory = (typeof categories)[number];

const CoursePage: React.FC = () => {
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
      ? courses
      : courses.filter((c) => c.category === (active as CourseCategory));

  return (
    <section className="cp">
      {/* ── HERO ── */}
      <div className="cp-hero">
        <div className="cp-hero-inner">
          <span className="cp-eyebrow">Professional Training Programs</span>
          <h1 className="cp-h1">
            Build Job-Ready Skills with
            <br />
            Industry-Focused Learning
          </h1>
          <p className="cp-lead">
            Carefully designed courses across development, AI, cloud, quality
            engineering, and design — combining clear concepts, guided practice,
            and professional outcomes.
          </p>
          <button
            className="cp-cta"
            onClick={() =>
              document
                .getElementById("cp-courses")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            type="button"
          >
            Explore Courses →
          </button>
          <div className="cp-stats">
            <div className="cp-stat">
              <strong>11</strong>
              <span>Course Programs</span>
            </div>
            <div className="cp-stat">
              <strong>5</strong>
              <span>Domains Covered</span>
            </div>
            <div className="cp-stat">
              <strong>3–12</strong>
              <span>Week Duration</span>
            </div>
            <div className="cp-stat">
              <strong>100%</strong>
              <span>Project Based</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cp-body">
        {/* ── WHY CHOOSE ── */}
        <section className="cp-section">
          <div className="cp-section-head">
            <h2>Why Choose Our Courses</h2>
            <p>
              Training content is practical, structured, and designed to move
              learners from fundamentals to professional application with
              clarity and confidence.
            </p>
          </div>
          <div className="cp-highlights">
            {highlights.map((h) => (
              <div className="cp-hl-card" key={h.num}>
                <span className="cp-hl-num">{h.num}</span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COURSES ── */}
        <section className="cp-section" id="cp-courses">
          <div className="cp-section-head">
            <h2>Available Course Programs</h2>
            <p>
              Select a domain to filter programs and find the course that
              matches your learning goals and career direction.
            </p>
          </div>

          <div className="cp-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cp-filter-btn${active === cat ? " cp-filter-active" : ""}`}
                onClick={() => setActive(cat as FilterCategory)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="cp-grid">
            {filtered.map((course) => (
              <article
                className="cp-card"
                id={course.id}
                key={course.id}
                style={
                  {
                    "--cat-color": categoryColors[course.category],
                  } as React.CSSProperties
                }
              >
                <div className="cp-card-top">
                  <span
                    className="cp-badge"
                    style={{
                      color: categoryColors[course.category],
                      background: categoryColors[course.category] + "18",
                    }}
                  >
                    {course.category}
                  </span>
                  <span className="cp-duration">{course.duration}</span>
                </div>
                <h3 className="cp-card-title">{course.title}</h3>
                <p className="cp-card-desc">{course.overview}</p>
                <div className="cp-chips">
                  {course.skills.map((skill) => (
                    <span className="cp-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="cp-careers">
                  <span className="cp-careers-label">Career Paths</span>
                  <div className="cp-career-tags">
                    {course.careers.map((c) => (
                      <span className="cp-career-tag" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── TERMS ── */}
        <section className="cp-section cp-section--last">
          <div className="cp-section-head">
            <h2>Terms &amp; Conditions</h2>
            <p>
              Please read and understand the following terms before enrolling
              in any course program.
            </p>
          </div>
          <div className="cp-terms">
            {terms.map((term, i) => (
              <div className="cp-term-row" key={i}>
                <span className="cp-term-num">
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

export default CoursePage;