import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

import internship from "../assets/internship.jpg";
import services from "../assets/services.jpg";
// import career from "../assets/career.jpeg";
import courses from "../assets/courses.png";
import projects from "../assets/projects.jpg";

const slides = [
  {
    title: "Internship Programs",
    desc: "Gain real-time industry experience with expert mentors.",
    details: [
      "Live Project Training with real-time scenarios.",
      "Industry Mentorship from experienced professionals.",
      "Hands-on Practical Sessions for better understanding.",
      "Certificate Provided after successful completion.",
  
    ],
    img: internship,
    link: "/internships"
  },

  {
    title: "Our Services",
    desc: "We provide high-quality IT and development services.",
    details: [
      "Web Development using modern frameworks.",
      "Mobile App Development for Android and iOS.",
      "UI/UX Design Solutions for better user experience.",
      "Software Testing and Quality Assurance.",
      "Maintenance and Support Services."
    ],
    img: services,
    link: "/services"
  },

  // {
  //   title: "Career Opportunities",
  //   desc: "Build your future with exciting career paths.",
  //   details: [
  //     "Job Placement Support through partner companies.",
  //     "Resume Building with professional templates.",
  //     "Mock Interviews with expert feedback.",
  //     "Technical Training based on industry needs.",
  //     "Career Guidance sessions."
  //   ],
  //   img: career,
  //   link: "/careers"
  // },

  {
    title: "Professional Courses",
    desc: "Learn industry-ready skills from professionals.",
    details: [
      "Full Stack Development training.",
      "Data Science with real-world datasets.",
      "Cloud Computing fundamentals and tools.",
      "Cybersecurity basics and practices.",
      "AI & Machine Learning concepts."
    ],
    img: courses,
    link: "/courses"
  },

  {
    title: "Project Development",
    desc: "Work on real-time projects and enhance your portfolio.",
    details: [
      "Academic Projects for diploma and degree students.",
      "Industry-Level Projects with real use cases.",
      "Mini & Major Projects support.",
      "IEEE Standard Projects guidance.",
      "Final Year Project Documentation support."
    ],
    img: projects,
    link: "/projects"
  }
];

const Carousel = () => {

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="carousel-wrapper">

      <div className="carousel">

        {slides.map((slide, i) => (

          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
          >

            {/* Image Box */}

            <div className="image-box">
              <img src={slide.img} alt={slide.title} />
            </div>

            {/* Content Box */}

            <div className="content-box">

              <h1>{slide.title}</h1>

              <p className="desc">
                {slide.desc}
              </p>

              {/* Details as Paragraph Points */}

              <div className="details">

                {slide.details.map((point, idx) => (

                  <p key={idx} className="detail-line">
                    {point}
                  </p>

                ))}

              </div>

              <button
                className="learn-btn"
                onClick={() => navigate(slide.link)}
              >
                Learn More
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Navigation Dots */}

      <div className="dots">

        {slides.map((_, i) => (

          <span
            key={i}
            className={`dot ${i === index ? "active-dot" : ""}`}
            onClick={() => setIndex(i)}
          />

        ))}

      </div>

    </div>

  );

};

export default Carousel;