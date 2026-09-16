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
            I design and build modern digital experiences for businesses and
            ideas worth noticing.
          </p>
          <a className="pill-link" href="#work">
            Explore my work <span aria-hidden="true">↘</span>
          </a>
          <div className="hero-note">
            <span className="small-line" />
            Computer Science Student
            <br />
            Based in North Macedonia
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
            Selected work<span className="count">(02)</span>
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
          I'm Duro Aliti, a Computer Science student and web developer based in
          North Macedonia. I enjoy turning ideas into modern, functional
          websites with a strong focus on clean design and user experience.
        </p>
        <p>
          I've worked on real-world projects for local businesses and continue
          to expand my skills across modern frontend and full-stack development.
        </p>
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
          <p>Good things start with a conversation.</p>
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
        <About />
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
