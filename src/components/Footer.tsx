import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ABOUT */}
        <div className="footer-col">
          <h2 className="brand">InnovixTrio</h2>
          <p>
            Empowering students with real-world skills through internships and
            professional courses.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/innovixtrio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/innovix_trio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/internships">Internships</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> <a href="tel:9787473068">9787473068</a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:innovixtrio@gmail.com">innovixtrio@gmail.com</a>
          </p>
          <p>
            <FaMapMarkerAlt /> Thanjavur, Tamil Nadu
          </p>
        </div>

        {/* MAP */}
        <div className="footer-col">
          <h3>Our Location</h3>

          <iframe
            src="https://www.google.com/maps?q=Thanjavur&output=embed"
            title="map"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InnovixTrio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;