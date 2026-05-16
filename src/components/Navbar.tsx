import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type MenuType =
  | "about"
  | "internship"
  | "courses"
  | "services"
  | "projects"
  | null;

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<MenuType>(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = (menu: MenuType) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
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

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          onClick={toggleMobileMenu}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAV LINKS */}
        <ul
          className={`nav-links ${
            mobileMenu ? "show-menu" : ""
          }`}
        >
          <li className="nav-item">
            <Link
              to="/"
              onClick={closeMenu}
              className="nav-link"
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              onClick={closeMenu}
              className="nav-link"
            >
              About
            </Link>
          </li>

          {/* INTERNSHIPS */}
          <li
            className={`nav-item dropdown ${
              openMenu === "internship"
                ? "active"
                : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() =>
                toggleMenu("internship")
              }
            >
              Internships <FaChevronDown />
            </button>

            {openMenu === "internship" && (
              <div className="dropdown-box mega">
                <div className="mega-col">
                  <h4>Technical</h4>

                  <Link
                    to="/internships#full-stack-development"
                    onClick={closeMenu}
                  >
                    Full Stack Development
                  </Link>

                  <Link
                    to="/internships#machine-learning"
                    onClick={closeMenu}
                  >
                    Machine Learning
                  </Link>

                  <Link
                    to="/internships#artificial-intelligence"
                    onClick={closeMenu}
                  >
                    Artificial Intelligence
                  </Link>

                  <Link
                    to="/internships#python-programming"
                    onClick={closeMenu}
                  >
                    Python Programming
                  </Link>

                  <Link
                    to="/internships#c-cpp-java"
                    onClick={closeMenu}
                  >
                    C, C++, Java
                  </Link>

                  <Link
                    to="/internships#cloud-computing"
                    onClick={closeMenu}
                  >
                    Cloud Computing
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Creative & Testing</h4>

                  <Link
                    to="/internships#ui-ux-design"
                    onClick={closeMenu}
                  >
                    UI/UX Design
                  </Link>

                  <Link
                    to="/internships#graphic-design"
                    onClick={closeMenu}
                  >
                    Graphic Design
                  </Link>

                  <Link
                    to="/internships#video-editing"
                    onClick={closeMenu}
                  >
                    Video Editing
                  </Link>

                  <Link
                    to="/internships#manual-testing"
                    onClick={closeMenu}
                  >
                    Manual Testing
                  </Link>

                  <Link
                    to="/internships#automation-testing"
                    onClick={closeMenu}
                  >
                    Automation Testing
                  </Link>

                  <Link
                    to="/internships#software-engineering"
                    onClick={closeMenu}
                  >
                    Software Engineering
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* COURSES */}
          <li
            className={`nav-item dropdown ${
              openMenu === "courses"
                ? "active"
                : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() =>
                toggleMenu("courses")
              }
            >
              Courses <FaChevronDown />
            </button>

            {openMenu === "courses" && (
              <div className="dropdown-box mega">
                <div className="mega-col">
                  <h4>Development</h4>

                  <Link
                    to="/courses#full-stack-development"
                    onClick={closeMenu}
                  >
                    Full Stack
                  </Link>

                  <Link
                    to="/courses#mern-stack"
                    onClick={closeMenu}
                  >
                    MERN Stack
                  </Link>

                  <Link
                    to="/courses#web-development"
                    onClick={closeMenu}
                  >
                    Web Development
                  </Link>
                </div>

                <div className="mega-col">
                  <h4>Creative & Testing</h4>

                  <Link
                    to="/courses#ui-ux-design"
                    onClick={closeMenu}
                  >
                    UI/UX Design
                  </Link>

                  <Link
                    to="/courses#graphic-design"
                    onClick={closeMenu}
                  >
                    Graphic Design
                  </Link>

                  <Link
                    to="/courses#video-editing"
                    onClick={closeMenu}
                  >
                    Video Editing
                  </Link>

                  <Link
                    to="/courses#cloud-computing"
                    onClick={closeMenu}
                  >
                    Cloud Computing
                  </Link>

                  <Link
                    to="/courses#software-testing"
                    onClick={closeMenu}
                  >
                    Software Testing
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* SERVICES */}
          <li
            className={`nav-item dropdown ${
              openMenu === "services"
                ? "active"
                : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() =>
                toggleMenu("services")
              }
            >
              Services <FaChevronDown />
            </button>

            {openMenu === "services" && (
              <div className="dropdown-box">
                <Link
                  to="/services#graphic-design"
                  onClick={closeMenu}
                >
                  Graphic Design
                </Link>

                <Link
                  to="/services#ui-ux-design"
                  onClick={closeMenu}
                >
                  UI/UX Design
                </Link>

                <Link
                  to="/services#website-development"
                  onClick={closeMenu}
                >
                  Website Development
                </Link>

                <Link
                  to="/services#digital-marketing"
                  onClick={closeMenu}
                >
                  Digital Marketing
                </Link>
              </div>
            )}
          </li>

          {/* PROJECTS */}
          <li
            className={`nav-item dropdown ${
              openMenu === "projects"
                ? "active"
                : ""
            }`}
          >
            <button
              type="button"
              className="nav-button"
              onClick={() =>
                toggleMenu("projects")
              }
            >
              Projects <FaChevronDown />
            </button>

            {openMenu === "projects" && (
              <div className="dropdown-box">
                <Link
                  to="/projects#final-year"
                  onClick={closeMenu}
                >
                  Final Year Projects
                </Link>

                <Link
                  to="/projects#mini-projects"
                  onClick={closeMenu}
                >
                  Mini Projects
                </Link>

                <Link
                  to="/projects#college-projects"
                  onClick={closeMenu}
                >
                  College Projects
                </Link>

                <Link
                  to="/projects#ieee-projects"
                  onClick={closeMenu}
                >
                  IEEE Projects
                </Link>

                <Link
                  to="/projects#ai-ml-projects"
                  onClick={closeMenu}
                >
                  AI / ML Projects
                </Link>

                <Link
                  to="/projects#web-development"
                  onClick={closeMenu}
                >
                  Web Development Projects
                </Link>
              </div>
            )}
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="nav-link"
            >
              Contact
            </Link>
          </li>

          {/* MOBILE CONTACT */}
          <div className="contact-section">
            <a
              href="tel:9787473068"
              className="phone-box"
            >
              <FaPhoneAlt />
              <span>9787473068</span>
            </a>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;