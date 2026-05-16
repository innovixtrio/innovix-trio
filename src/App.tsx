import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ ADD THIS

import Home from "./pages/Home";
import About from "./components/About";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Courses from "./components/CoursePage";
import Services from "./components/ServicePage";
import Careers from "./components/Career";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container"> {/* ✅ wrapper */}

        <Navbar />

        <div className="content"> {/* ✅ page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* ✅ Footer will now show on ALL pages */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;