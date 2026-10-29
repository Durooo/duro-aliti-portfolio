import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { projects, type Project } from "./projects";
import "./styles.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
        Duro Aliti<span className="brand-dot">.</span>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="navigation"
        className={open ? "is-open" : ""}
        aria-label="Main navigation"
      >
        {["Work", "Services", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {item}
            {item === "Contact" && <span aria-hidden="true"> ↗</span>}
          </a>
        ))}
      </nav>
    </header>
  );
}
function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-heading">
        <div className="hero-topline">
          <p className="eyebrow">INDEPENDENT WEB DESIGN & DEVELOPMENT</p>
          <p className="availability">
            <span aria-hidden="true" />
            Available for projects
          </p>
        </div>
        <h1 id="hero-title">
          Digital experiences
          <br />
          built to <span className="hero-emphasis">stand out.</span>
        </h1>
      </div>
      <div className="hero-bottom">
        <p className="hero-signature">
          Good design. Thoughtful development.
          <br />
          <span>Made for your business.</span>
        </p>
        <div className="hero-copy">
          <p className="hero-description">
            I’m Duro, a web developer helping local and international businesses
            turn their ideas into clear, considered websites. From the first
            impression to the last detail.
          </p>
          <div className="hero-actions">
            <a className="pill-link" href="mailto:Duroalitii@gmail.com">
              Let’s talk about your project <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-footnote">
        <span>BASED IN TETOVO · WORKING WORLDWIDE</span>
        <a href="#work">
          SELECTED WORK BELOW <span aria-hidden="true">↘</span>
        </a>
      </div>
    </section>
  );
}
function ProjectShowcase({ project: p }: { project: Project }) {
  return (
    <article className="project reveal">
      <a
        className={`project-visual ${p.theme}`}
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${p.name} live site (opens in a new tab)`}
      >
        <div className="desktop-preview">
          <div className="browser-bar" aria-hidden="true">
            <span className="browser-dots">
              <i />
              <i />
              <i />
            </span>
            <span>{new URL(p.url).hostname}</span>
            <span aria-hidden="true">↗</span>
          </div>
          <img
            src={`/${p.image}-desktop.webp`}
            alt={`${p.name} website desktop preview`}
            width="1440"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mobile-preview">
          <img
            src={`/${p.image}-mobile.webp`}
            alt={`${p.name} website mobile preview`}
            width="390"
            height="844"
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="preview-visit" aria-hidden="true">
          View site ↗
        </span>
      </a>
      <div className="project-info">
        <div className="project-name">
          <span className="project-number">/{p.number}</span>
          <div>
            <h3>{p.name}</h3>
            <p className="category">{p.category}</p>
          </div>
        </div>
        <div className="project-detail">
          <p>{p.description}</p>
          <a
            className="text-link"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Site <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <dl className="project-metadata">
        <div>
          <dt>Year</dt>
          <dd>{p.year}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{p.role}</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>{p.focus}</dd>
        </div>
      </dl>
    </article>
  );
}
function SelectedWork() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Selected work
            <span className="count">
              ({String(projects.length).padStart(2, "0")})
            </span>
          </h2>
        </div>
        <p>
          Real businesses.{" "}
          <br />
          Thoughtfully built for the web.
        </p>
      </div>
      {projects.map((project) => (
        <ProjectShowcase key={project.number} project={project} />
      ))}
    </section>
  );
}
function Services() {
  const services = [
    {
      name: "Business Websites",
      description:
        "A considered home for your business online. Introduce your services, showcase your work and make it easy for the right people to get in touch.",
      detail: "Business presence · Project showcases · Responsive design",
    },
    {
      name: "Custom Web Development",
      description:
        "When your website needs to do more. Frontend and backend development shaped around your business, from online ordering to database integration.",
      detail: "React & TypeScript · PHP & MySQL · UI implementation",
    },
    {
      name: "Website Improvements",
      description:
        "Give your existing website a clearer direction. Refine the interface, improve the mobile experience and resolve the details that get in your visitors’ way.",
      detail:
        "Interface refinements · Responsive fixes · Deployment & maintenance",
    },
  ];
  return (
    <section
      id="services"
      className="section services"
      aria-labelledby="services-title"
    >
      <span id="capabilities" className="anchor-alias" aria-hidden="true" />
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">02 / HOW I CAN HELP</p>
          <h2 id="services-title">
            A better website.
            <br />A stronger presence.
          </h2>
        </div>
        <p>
          For businesses ready to take{" "}
          <br />
          their next step online.
        </p>
      </div>
      <ol className="service-list">
        {services.map((service, index) => (
          <li className="reveal" key={service.name}>
            <span className="row-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{service.name}</h3>
            <div>
              <p>{service.description}</p>
              <p className="service-detail">{service.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

const credentials = [
  {
    title: "CS50x — Introduction to Computer Science",
    issuer: "CS50",
    year: "2026",
    url: "https://cs50.harvard.edu/certificates/6e18d819-2ce0-4e4e-829d-f6fde67f9474",
  },
  { title: "Back-End Developer", issuer: "Digital School", year: "2025" },
  { title: "Front-End Developer", issuer: "Digital School", year: "2024" },
  {
    title: "Summer Code Fest — Best Front-End Development Project",
    issuer: "Digital School",
    year: "2024",
  },
  {
    title: "National Coding Olympiad — Certificate of Recognition",
    issuer: "Codingal",
    year: "2024",
  },
];

function Credentials() {
  return (
    <section
      id="credentials"
      className="section credentials"
      aria-labelledby="credentials-title"
    >
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">04 / CONTINUOUS LEARNING</p>
          <h2 id="credentials-title">
            Selected credentials<span className="count">(05)</span>
          </h2>
        </div>
      </div>
      <ol className="credential-list">
        {credentials.map((credential, index) => (
          <li className="credential-row reveal" key={credential.title}>
            <span className="row-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{credential.title}</h3>
            <div className="credential-meta">
              <span>{credential.issuer}</span>
              <span className="credential-year">{credential.year}</span>
            </div>
            {credential.url && (
              <a
                className="verify-link"
                href={credential.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify CS50x certificate (opens in a new tab)"
              >
                Verify <span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h3 className="eyebrow">MY TOOLKIT</h3>
      <ul>
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "TSX",
          "React",
          "Bootstrap",
          "PHP",
          "MySQL",
          "WordPress",
          "Git",
          "GitHub",
        ].map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="about-label">
        <p className="eyebrow">03 / THE PERSON BEHIND THE WORK</p>
        <h2 id="about-title">
          Curious mind.
          <br />
          Careful craft.
        </h2>
        <span className="about-location">Tetovo, North Macedonia</span>
        <figure className="portrait reveal">
          <img
            src="/duro-aliti.webp"
            alt="Duro Aliti sitting at a desk"
            width="1122"
            height="1402"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Duro Aliti / Independent web developer</figcaption>
        </figure>
      </div>
      <div className="about-body">
        <p>
          I'm Duro Aliti, a web developer based in North Macedonia. I build
          modern websites from concept to deployment, working across frontend
          development, backend functionality, databases, responsive design and
          user experience.
        </p>
        <p>
          My work focuses on creating websites that are visually considered,
          technically reliable and practical for real businesses. Alongside
          client and personal projects, I'm currently studying Computer Science
          at South East European University.
        </p>
        <div className="education">
          <h3>BSc Computer Science</h3>
          <p>South East European University</p>
          <span>2025 — Present</span>
        </div>
        <Skills />
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner reveal">
        <p className="eyebrow">05 / LET’S MAKE SOMETHING GOOD</p>
        <h2 id="contact-title">
          Your next chapter.
          <br />
          <span>Let’s build it.</span>
        </h2>
        <p className="contact-description">
          Have a new website in mind, or an existing one that needs attention?{" "}
          <br />
          Tell me about your business and what you’d like to create.
        </p>
        <a className="email-link" href="mailto:Duroalitii@gmail.com">
          Duroalitii@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-bottom">
          <p>Available for freelance projects and collaborations.</p>
          <div className="social-links">
            <a
              href="https://github.com/Durooo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdurahman-duro-aliti-a6b2681a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="/Abdurahman_Duro_Aliti_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV ↗
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <a href="#home">
        Duro Aliti <span>Web Developer</span>
      </a>
      <span>© 2026</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
function App() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.05 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <Services />
        <About />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
