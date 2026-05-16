import React, { useState, type ChangeEvent, type FormEvent } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,

  FaPaperPlane,
} from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // You can connect this to backend later
    console.log("Contact Form Data:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="eyebrow">Contact Us</div>
        <h1>Get in Touch with Innovix Trio</h1>
        <p className="hero-text">
          Reach out for projects, internships, website development, AI/ML
          projects, and student support.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h2>Contact Information</h2>
            <p className="info-text">
              We are always ready to help you with your project requirements and
              career support.
            </p>

            <div className="info-item">
              <span className="info-icon">
                <FaPhoneAlt />
              </span>
              <div>
                <h4>Phone</h4>
                <a href="tel:9787473068">9787473068</a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FaEnvelope />
              </span>
              <div>
                <h4>Email</h4>
                <a href="mailto:innovixtrio@gmail.com">innovixtrio@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FaFacebookF />
              </span>
              <div>
                <h4>Facebook</h4>
                <a
                  href="https://www.facebook.com/innovixtrio"
                  target="_blank"
                  rel="noreferrer"
                >
                  innovixtrio
                </a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">
                <FaInstagram />
              </span>
              <div>
                <h4>Instagram</h4>
                <a
                  href="https://www.instagram.com/innovix_trio"
                  target="_blank"
                  rel="noreferrer"
                >
                  innovix_trio
                </a>
              </div>
            </div>

          </div>

          <div className="contact-form-card">
            <h2>Send a Message</h2>
            <p className="form-note">
              Fill in the form below and we will get back to you soon.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>

            {submitted && (
              <div className="success-box">
                 Your message has been sent successfully!
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;