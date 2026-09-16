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
        {["Work", "About", "Contact"].map((item) => (
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
    <section className="hero" id="home">
      <div className="hero-heading">
        <div className="eyebrow">WEB DEVELOPER · TETOVO, NORTH MACEDONIA</div>
        <h1>
          DURO ALITI<span className="title-dot">.</span>
        </h1>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="intro">
            Thoughtful design.
            <br />
            Purposeful code.
            <br />
            <span>Websites that work.</span>
          </p>
          <p className="hero-description">
            I design and build complete web experiences — from interface and
            responsive design to backend functionality, databases and
            deployment.
          </p>
          <a className="pill-link" href="#work">
            Explore my work <span aria-hidden="true">↘</span>
          </a>
          <div className="hero-note">
            <span className="small-line" />
            Frontend · Backend · Digital Experiences
            <p className="availability">
              <span aria-hidden="true" />
              Available for freelance projects
            </p>
          </div>
        </div>
        <figure className="portrait">
          <img
            src="/duro-aliti.webp"
            alt="Duro Aliti sitting at a desk"
            width="1122"
            height="1402"
            fetchPriority="high"
          />
          <figcaption>
            <span>A little about the person behind the pixels.</span>
            <span>01 / INTRO</span>
          </figcaption>
        </figure>
      </div>
      <a className="scroll-link" href="#work">
        <span>SCROLL TO DISCOVER</span>
        <span aria-hidden="true">↓</span>
      </a>
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
          <div className="browser-bar">
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
          />
        </div>
        <div className="mobile-preview">
          <img
            src={`/${p.image}-mobile.webp`}
            alt={`${p.name} website mobile preview`}
            width="390"
            height="844"
            loading="lazy"
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
    <section id="work" className="section work">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">A FEW THINGS I'VE BUILT</p>
          <h2>
            Selected work<span className="count">({String(projects.length).padStart(2, "0")})</span>
          </h2>
        </div>
        <p>
          Real businesses.
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
function Capabilities() {
  const capabilities = [
    "Frontend Development",
    "Backend Development",
    "Responsive Web Design",
    "UI Implementation",
    "Database Integration",
    "Deployment & Maintenance",
  ];
  return (
    <section id="capabilities" className="section capabilities">
      <div className="section-heading reveal">
        <h2>Capabilities</h2>
        <p>
          From idea to deployment,
          <br />I build complete web experiences.
        </p>
      </div>
      <ol className="capability-list">
        {capabilities.map((capability, index) => (
          <li className="reveal" key={capability}>
            <span className="row-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{capability}</h3>
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
    <section id="credentials" className="section credentials">
      <div className="section-heading reveal">
        <h2>
          Selected credentials<span className="count">(05)</span>
        </h2>
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
    <section id="about" className="section about reveal">
      <div className="about-label">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          Curious mind.
          <br />
          Careful craft.
        </h2>
        <span className="about-location">Tetovo, North Macedonia</span>
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
    <section id="contact" className="contact">
      <div className="contact-inner reveal">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>
          Let's build
          <br />
          something<span>.</span>
        </h2>
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
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
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
      <main id="main">
        <Hero />
        <SelectedWork />
        <Capabilities />
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
