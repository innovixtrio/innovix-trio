import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import "./Career.css";

const Career: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [resume, setResume] = useState<File | null>(null);

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSuccess(false);

    if (!resume) {
      alert("Please upload your resume");
      return;
    }

    try {
      setLoading(true);

      const formPayload = new FormData();

      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("role", formData.role);

      formPayload.append("resume", resume);

      const response = await fetch(
        "http://localhost:5000/api/careers",
        {
          method: "POST",
          body: formPayload,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong"
        );
      }

      console.log("Application Submitted:", data);

      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
      });

      setResume(null);

      alert("Application submitted successfully");
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Submission failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-page">
      {/* HERO */}
      <section className="career-hero">
        <div className="eyebrow">Join Our Team</div>

        <h1>Build Your Career with Innovix Trio</h1>

        <p className="hero-text">
          We are looking for passionate students and
          professionals to work on real-time projects,
          internships, and innovative ideas.
        </p>
      </section>

      {/* FORM */}
      <section className="career-form-section">
        <div className="form-card">
          <h2>Apply Now</h2>

          <p className="form-note">
            Fill in your details and upload your
            resume. We’ll get back to you soon.
          </p>

          <form
            className="career-form"
            onSubmit={handleSubmit}
          >
            <label>
              Full Name

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email Address

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone Number

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Applying For

              <select
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">
                  Select Role
                </option>

                <option value="Frontend Developer">
                  Frontend Developer
                </option>

                <option value="Backend Developer">
                  Backend Developer
                </option>

                <option value="AI/ML Engineer">
                  AI/ML Engineer
                </option>

                <option value="UI/UX Designer">
                  UI/UX Designer
                </option>

                <option value="Graphic Designer">
                  Graphic Designer
                </option>

                <option value="Video Editor">
                  Video Editor
                </option>
              </select>
            </label>

            <label>
              Upload Resume (PDF)

              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                required
              />
            </label>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Application"}
            </button>
          </form>

          {success && (
            <div className="success-box">
              ✅ Your application has been submitted
              successfully!
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Career;