import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ServicePage.css";

type ServiceCategory =
  | "Design"
  | "Development"
  | "Media";

type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  turnaround: string;
  overview: string;
  features: string[];
  deliverables: string[];
};

const categoryColors: Record<ServiceCategory, string> = {
  Design: "#6d28d9",
  Development: "#0369a1",
  Media: "#be185d",
};

const services: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Design",
    turnaround: "3–5 Days",
    overview:
      "Create visually compelling posters, banners, social media creatives, and branding materials built on professional design principles, colour theory, and typographic craft.",
    features: ["Poster Design", "Banner Design", "Social Media Creatives", "Brand Identity Kits"],
    deliverables: ["Print-Ready Files", "Source Files", "Multiple Formats", "Revision Rounds"],
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design",
    category: "Design",
    turnaround: "5–10 Days",
    overview:
      "Design user-friendly digital experiences grounded in research, wireframing, interactive prototyping, and design systems — built to convert and delight users across every screen.",
    features: ["Wireframing", "Interactive Prototyping", "User Research", "Figma Design Systems"],
    deliverables: ["Figma File", "Prototype Link", "Component Library", "Handoff Specs"],
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "Development",
    turnaround: "7–14 Days",
    overview:
      "Build responsive, modern websites with clean code, smooth layouts, and strong cross-device performance — from landing pages and portfolios to fully custom business sites.",
    features: ["Responsive Layouts", "Frontend Development", "Landing Pages", "Custom UI Components"],
    deliverables: ["Source Code", "Deployed Site", "CMS Setup", "Performance Report"],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Media",
    turnaround: "3–7 Days",
    overview:
      "Edit reels, promotional videos, and branded content with professional timeline editing, smooth transitions, motion graphics, audio sync, and colour grading for digital delivery.",
    features: ["Reels & Short-Form", "Promo Videos", "Motion Graphics", "Colour Grading"],
    deliverables: ["HD Export", "Social Formats", "Raw + Edited Files", "Audio Mastering"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Media",
    turnaround: "Ongoing",
    overview:
      "Promote your business online using strategic content planning, social media management, SEO basics, and ad campaign setup — driving measurable reach, visibility, and engagement.",
    features: ["Social Media Marketing", "SEO Fundamentals", "Ad Campaign Setup", "Content Strategy"],
    deliverables: ["Monthly Report", "Content Calendar", "Ad Creatives", "Analytics Summary"],
  },
];

const highlights = [
  {
    num: "01",
    title: "Professional Quality",
    text: "Every deliverable is crafted to industry standards — polished, purposeful, and ready for real-world use from day one.",
  },
  {
    num: "02",
    title: "Clear Communication",
    text: "We keep you informed at every step — from brief to delivery — with structured updates and defined revision rounds.",
  },
  {
    num: "03",
    title: "Timely Delivery",
    text: "Realistic turnaround timelines are set upfront and respected — no surprises, no delays without prior notice.",
  },
  {
    num: "04",
    title: "Ongoing Support",
    text: "Post-delivery support and minor adjustments are covered within the agreed period to ensure complete satisfaction.",
  },
];

const terms = [
  "All service engagements begin only after the receipt of a confirmed project brief, signed agreement, and applicable advance payment as specified in the quotation.",
  "Project timelines are estimates based on scope at the time of briefing. Additions to scope mid-project may extend the timeline and attract additional charges.",
  "Clients are entitled to a defined number of revision rounds as stated in the service agreement. Revisions beyond the agreed limit will be billed separately.",
  "Final deliverables are released only upon receipt of the full outstanding balance. Source files are shared exclusively where explicitly included in the service package.",
  "All work produced remains the intellectual property of the service provider until full payment is received, at which point ownership transfers to the client as agreed.",
  "Clients must provide all required assets — including logos, brand guidelines, images, and copy — within 3 business days of project initiation to avoid timeline delays.",
  "Feedback and approval responses are expected within 3 business days of deliverable submission. Delays in client feedback may result in revised delivery timelines.",
  "Rush requests — defined as work required within 50% of the standard turnaround time — are subject to a priority surcharge communicated at the time of request.",
  "Advance payments are non-refundable once active work has commenced. Cancellations prior to work commencement are subject to a processing fee.",
  "Digital marketing and ongoing retainer services operate on a monthly billing cycle. Either party may terminate with 30 days written notice.",
  "The organisation does not guarantee specific performance outcomes — such as follower counts, leads, or search rankings — as these are subject to external platform variables.",
  "The service provider reserves the right to display completed work in its portfolio and marketing materials unless a confidentiality clause is explicitly agreed upon in writing.",
];

const ALL = "All";
const categories = [ALL, "Design", "Development", "Media"] as const;
type FilterCategory = (typeof categories)[number];

const ServicePage: React.FC = () => {
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
      ? services
      : services.filter((s) => s.category === (active as ServiceCategory));

  return (
    <section className="sp">
      {/* ── HERO ── */}
      <div className="sp-hero">
        <div className="sp-hero-inner">
          <span className="sp-eyebrow">Professional Services</span>
          <h1 className="sp-h1">
            Creative &amp; Digital Services
            <br />
            Tailored for Modern Businesses
          </h1>
          <p className="sp-lead">
            End-to-end design, development, and media services — delivered with
            professional craft, clear communication, and results that matter.
          </p>
          <button
            className="sp-cta"
            onClick={() =>
              document
                .getElementById("sp-services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            type="button"
          >
            Explore Services →
          </button>
          <div className="sp-stats">
            <div className="sp-stat">
              <strong>5</strong>
              <span>Services Offered</span>
            </div>
            <div className="sp-stat">
              <strong>3</strong>
              <span>Domains Covered</span>
            </div>
            <div className="sp-stat">
              <strong>3–14</strong>
              <span>Day Turnaround</span>
            </div>
            <div className="sp-stat">
              <strong>100%</strong>
              <span>Client Focused</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-body">
        {/* ── WHY CHOOSE ── */}
        <section className="sp-section">
          <div className="sp-section-head">
            <h2>Why Work With Us</h2>
            <p>
              Every service is delivered with clear processes, professional
              standards, and a commitment to quality that goes beyond the brief.
            </p>
          </div>
          <div className="sp-highlights">
            {highlights.map((h) => (
              <div className="sp-hl-card" key={h.num}>
                <span className="sp-hl-num">{h.num}</span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="sp-section" id="sp-services">
          <div className="sp-section-head">
            <h2>Available Services</h2>
            <p>
              Filter by category to find the service that fits your project
              needs and business goals.
            </p>
          </div>

          <div className="sp-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`sp-filter-btn${active === cat ? " sp-filter-active" : ""}`}
                onClick={() => setActive(cat as FilterCategory)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="sp-grid">
            {filtered.map((service) => (
              <article
                className="sp-card"
                id={service.id}
                key={service.id}
                style={
                  {
                    "--cat-color": categoryColors[service.category],
                  } as React.CSSProperties
                }
              >
                <div className="sp-card-top">
                  <span
                    className="sp-badge"
                    style={{
                      color: categoryColors[service.category],
                      background: categoryColors[service.category] + "18",
                    }}
                  >
                    {service.category}
                  </span>
                  <span className="sp-turnaround">{service.turnaround}</span>
                </div>
                <h3 className="sp-card-title">{service.title}</h3>
                <p className="sp-card-desc">{service.overview}</p>

                <div className="sp-chips">
                  {service.features.map((f) => (
                    <span className="sp-chip" key={f}>
                      {f}
                    </span>
                  ))}
                </div>

                <div className="sp-deliverables">
                  <span className="sp-deliverables-label">What You Get</span>
                  <div className="sp-deliverable-tags">
                    {service.deliverables.map((d) => (
                      <span className="sp-deliverable-tag" key={d}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── TERMS ── */}
        <section className="sp-section sp-section--last">
          <div className="sp-section-head">
            <h2>Terms &amp; Conditions</h2>
            <p>
              Please read and understand the following terms before engaging
              any of our services.
            </p>
          </div>
          <div className="sp-terms">
            {terms.map((term, i) => (
              <div className="sp-term-row" key={i}>
                <span className="sp-term-num">
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

export default ServicePage;