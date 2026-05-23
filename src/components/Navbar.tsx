import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

type MenuType = "internship" | "courses" | "services" | "projects" | null;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = (menu: MenuType) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
    setOpenMenu(null);
  };

  const closeMenu = () => {
    setOpenMenu(null);
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">
        <button
          className="menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
          aria-controls="primary-navigation"
          type="button"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        <div className="logo">
          <Link to="/" onClick={closeMenu} aria-label="Go to home">
            <img src={logo} alt="Innovix Trio logo" />
          </Link>
        </div>

        <ul
          id="primary-navigation"
          className={`nav-links ${mobileMenu ? "show-menu" : ""}`}
        >
          <li className="nav-item">
            <Link to="/" onClick={closeMenu} className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" onClick={closeMenu} className="nav-link">
              About
            </Link>
          </li>

          <li
            className={`nav-item dropdown ${
              openMenu === "internship" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() => toggleMenu("internship")}
              aria-expanded={openMenu === "internship"}
            >
              Internships <FaChevronDown />
            </button>

            {openMenu === "internship" && (
              <div className="dropdown-box mega">
                <div className="mega-col">
                  <h4>Software Development</h4>
                  <Link to="/internships#full-stack-development" onClick={closeMenu}>
                    Full Stack Development
                  </Link>
                  <Link to="/internships#python-programming" onClick={closeMenu}>
                    Python Programming
                  </Link>
                  <Link to="/internships#programming-fundamentals" onClick={closeMenu}>
                    Programming Fundamentals
                  </Link>
                  <Link to="/internships#software-engineering" onClick={closeMenu}>
                    Software Engineering
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Artificial Intelligence</h4>
                  <Link to="/internships#artificial-intelligence" onClick={closeMenu}>
                    Artificial Intelligence
                  </Link>
                  <Link to="/internships#machine-learning" onClick={closeMenu}>
                    Machine Learning
                  </Link>
                  <Link to="/internships#prompt-engineering" onClick={closeMenu}>
                    AI Prompt Engineering
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Cloud & DevOps</h4>
                  <Link to="/internships#cloud-computing" onClick={closeMenu}>
                    Cloud Computing
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Quality Assurance</h4>
                  <Link to="/internships#manual-testing" onClick={closeMenu}>
                    Manual Testing
                  </Link>
                  <Link to="/internships#automation-testing" onClick={closeMenu}>
                    Automation Testing
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Design & Media</h4>
                  <Link to="/internships#ui-ux-design" onClick={closeMenu}>
                    UI/UX Design
                  </Link>
                  <Link to="/internships#graphic-design" onClick={closeMenu}>
                    Graphic Design
                  </Link>
                  <Link to="/internships#video-editing" onClick={closeMenu}>
                    Video Editing
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li
            className={`nav-item dropdown ${
              openMenu === "courses" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() => toggleMenu("courses")}
              aria-expanded={openMenu === "courses"}
            >
              Courses <FaChevronDown />
            </button>

            {openMenu === "courses" && (
              <div className="dropdown-box mega">
                <div className="mega-col">
                  <h4>Development</h4>
                  <Link to="/courses#full-stack-development" onClick={closeMenu}>
                    Full Stack Development
                  </Link>
                  <Link to="/courses#mern-stack" onClick={closeMenu}>
                    MERN Stack
                  </Link>
                  <Link to="/courses#web-development" onClick={closeMenu}>
                    Web Development
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Artificial Intelligence</h4>
                  <Link to="/courses#artificial-intelligence" onClick={closeMenu}>
                    Artificial Intelligence
                  </Link>
                  <Link to="/courses#machine-learning" onClick={closeMenu}>
                    Machine Learning
                  </Link>
                  <Link to="/courses#prompt-engineering" onClick={closeMenu}>
                    AI Prompt Engineering
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Cloud & DevOps</h4>
                  <Link to="/courses#cloud-computing" onClick={closeMenu}>
                    Cloud Computing
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Quality Engineering</h4>
                  <Link to="/courses#software-testing" onClick={closeMenu}>
                    Software Testing
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Design & Media</h4>
                  <Link to="/courses#ui-ux-design" onClick={closeMenu}>
                    UI/UX Design
                  </Link>
                  <Link to="/courses#graphic-design" onClick={closeMenu}>
                    Graphic Design
                  </Link>
                  <Link to="/courses#video-editing" onClick={closeMenu}>
                    Video Editing
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li
            className={`nav-item dropdown ${
              openMenu === "services" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() => toggleMenu("services")}
              aria-expanded={openMenu === "services"}
            >
              Services <FaChevronDown />
            </button>

            {openMenu === "services" && (
              <div className="dropdown-box">
                <Link to="/services#graphic-design" onClick={closeMenu}>
                  Graphic Design
                </Link>

                <Link to="/services#ui-ux-design" onClick={closeMenu}>
                  UI/UX Design
                </Link>

                <Link to="/services#website-development" onClick={closeMenu}>
                  Website Development
                </Link>

                <Link to="/services#digital-marketing" onClick={closeMenu}>
                  Digital Marketing
                </Link>
              </div>
            )}
          </li>

          <li
            className={`nav-item dropdown ${
              openMenu === "projects" ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() => toggleMenu("projects")}
              aria-expanded={openMenu === "projects"}
            >
              Projects <FaChevronDown />
            </button>

            {openMenu === "projects" && (
              <div className="dropdown-box">
                <Link to="/projects#final-year" onClick={closeMenu}>
                  Final Year Projects
                </Link>

                <Link to="/projects#mini-projects" onClick={closeMenu}>
                  Mini Projects
                </Link>

                <Link to="/projects#college-projects" onClick={closeMenu}>
                  College Projects
                </Link>

                <Link to="/projects#ieee-projects" onClick={closeMenu}>
                  IEEE Projects
                </Link>

                <Link to="/projects#ai-ml-projects" onClick={closeMenu}>
                  AI / ML Projects
                </Link>

                <Link to="/projects#web-development" onClick={closeMenu}>
                  Web Development Projects
                </Link>
              </div>
            )}
          </li>

          <li className="nav-item">
            <Link to="/contact" onClick={closeMenu} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;