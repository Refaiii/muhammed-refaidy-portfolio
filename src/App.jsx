import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const githubUrl = "https://github.com/Refaiii";
const linkedinUrl = "https://www.linkedin.com/in/muhammed-refaidy-834b34323";
const email = "refaiii03@gmail.com";
const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
const phone = "+91 884 890 4913";
const whatsappUrl = "https://wa.me/918848904913";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "BCA", label: "Academic Background" },
  { value: "15+", label: "Frontend Topics" },
  { value: "4+", label: "Portfolio Projects" },
  { value: "2028", label: "Graduation Goal" },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Responsive Design",
  "Git",
  "GitHub",
  "Figma",
  "Python",
  "C",
  "C++",
  "Java",
  "DBMS",
];

const projects = [
  {
    title: "Personal Portfolio Website",
    type: "React Portfolio",
    image: "/projects/project1.png",
    description:
      "A responsive developer portfolio with modern UI, dark/light theme, project showcase, contact links, and deployment-ready structure.",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    title: "Grade Checker Application",
    type: "JavaScript Logic",
    image: "/projects/project2.png",
    description:
      "A beginner-friendly JavaScript project using switch statements to display feedback based on entered grades.",
    tags: ["JavaScript", "Switch", "Forms"],
  },
  {
    title: "Responsive Form Design",
    type: "UI Component",
    image: "/projects/project3.png",
    description:
      "A clean and mobile-friendly form layout built with HTML and CSS, focused on spacing, usability, and visual hierarchy.",
    tags: ["HTML", "CSS", "UI"],
  },
  {
    title: "JavaScript Practice Programs",
    type: "Problem Solving",
    image: "/projects/project4.png",
    description:
      "A collection of JavaScript exercises including strings, arrays, loops, DOM tasks, guessing games, Fibonacci, and GCD programs.",
    tags: ["Arrays", "Strings", "DOM"],
  },
];

const journey = [
  {
    title: "JavaScript Fundamentals",
    text: "Practiced variables, operators, conditionals, loops, functions, objects, string methods, and array methods.",
  },
  {
    title: "DOM & Interaction",
    text: "Worked with DOM methods, events, event listeners, and problem-solving tasks for dynamic web pages.",
  },
  {
    title: "Figma Design Workflow",
    text: "Learned frames, components, instances, typography, spacing, prototyping, and portfolio layout planning.",
  },
  {
    title: "Portfolio Development",
    text: "Built a responsive portfolio, configured VS Code tools, connected GitHub, and prepared for online deployment.",
  },
];

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <a href="#home" className="brand-mark" aria-label="Go to home">
        <span>MR</span>
        <div>
          <strong>Refaidy</strong>
          <small>Frontend Portfolio</small>
        </div>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === "dark" ? "Day" : "Night"}</span>
        </button>
        <a href="/Muhammed_Refaidy_CV.pdf" download className="nav-resume">
          <Download size={17} /> CV
        </a>
        <button className="menu-btn" onClick={() => setOpen((current) => !current)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}

function ProfileRail() {
  return (
    <aside className="profile-rail reveal">
      <div className="profile-frame">
        <img src="/profile-photo.png" alt="Muhammed Refaidy C" />
      </div>
      <p className="eyebrow">Available for internships</p>
      <h2>Muhammed Refaidy C</h2>
      <p className="rail-role">Frontend Developer • BCA Student</p>

      <div className="rail-info">
        <span>
          <MapPin size={16} /> Palakkad, Kerala
        </span>
        <a href={emailUrl} target="_blank" rel="noopener noreferrer">
          <Mail size={16} /> {email}
        </a>
        <a href="tel:+918848904913">
          <Phone size={16} /> {phone}
        </a>
      </div>

      <div className="rail-socials">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <MessageCircle />
        </a>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy reveal">
        <span className="status-pill">
          <Sparkles size={16} /> UI-focused frontend learner
        </span>
        <h1>
          Designing clean interfaces and building responsive web experiences.
        </h1>
        <p>
          I am a BCA student at Safa College Pookkattiri under Calicut University, focused on
          HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, and Figma. I enjoy turning
          ideas into polished, user-friendly websites.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="luxury-btn">
            View Projects <ArrowUpRight size={18} />
          </a>
          <a href="/Muhammed_Refaidy_CV.pdf" download className="ghost-btn">
            Download CV <Download size={18} />
          </a>
        </div>
      </div>

      <div className="hero-dashboard reveal">
        <div className="dashboard-top">
          <span>Portfolio System</span>
          <span className="pulse-dot" />
        </div>
        <div className="dashboard-grid">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="focus-card">
          <Code2 />
          <div>
            <strong>Current Focus</strong>
            <p>React, JavaScript practice, responsive UI, portfolio deployment, and frontend projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: Code2, title: "Frontend Development", text: "Building responsive websites with HTML, CSS, JavaScript, React, and modern frontend practices." },
    { icon: Palette, title: "UI/UX Design", text: "Using Figma to plan layouts, colors, spacing, components, and better user interfaces before coding." },
    { icon: Rocket, title: "Continuous Learning", text: "Improving through internship tasks, coding practice, personal projects, GitHub workflow, and deployment." },
  ];

  return (
    <section id="about" className="section-block reveal">
      <div className="section-intro left">
        <span className="eyebrow">About Me</span>
        <h2>From design idea to working frontend project.</h2>
        <p>
          My primary focus is frontend development. I like creating visually appealing,
          responsive websites and improving them with clean structure, interaction,
          and practical UI design thinking.
        </p>
      </div>

      <div className="feature-strip">
        {cards.map((card) => (
          <article key={card.title} className="feature-card">
            <card.icon />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-block reveal">
      <div className="section-intro">
        <span className="eyebrow">Skills Stack</span>
        <h2>Tools and technologies I am building with.</h2>
      </div>
      <div className="skill-cloud">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="split-section reveal">
      <div className="education-card">
        <GraduationCap />
        <span className="eyebrow">Education</span>
        <h2>Bachelor of Computer Applications</h2>
        <p>SAFA College Pookkattiri • Calicut University</p>
        <div className="education-meta">
          <span>Current Semester: 5th</span>
          <span>Expected Graduation: 2028</span>
        </div>
      </div>

      <div className="learning-card">
        <BookOpen />
        <h3>Currently Learning</h3>
        <p>Advanced JavaScript, React, Figma UI design, GitHub workflow, responsive web design, and frontend project development.</p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-block reveal">
      <div className="section-intro">
        <span className="eyebrow">Selected Work</span>
        <h2>Projects presented in a fresh editorial layout.</h2>
        <p>Same project content, but redesigned to feel completely different from a common card template.</p>
      </div>

      <div className="project-stack">
        {projects.map((project, index) => (
          <article key={project.title} className={`project-row ${index % 2 ? "reverse" : ""}`}>
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section-block reveal">
      <div className="section-intro left">
        <span className="eyebrow">Learning Journey</span>
        <h2>What I built during my frontend training.</h2>
      </div>
      <div className="timeline-grid">
        {journey.map((item, index) => (
          <div key={item.title} className="timeline-item">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GithubActivity() {
  return (
    <section id="github" className="github-panel reveal">
      <div>
        <span className="eyebrow">GitHub Activity</span>
        <h2>Consistently learning and uploading projects.</h2>
        <p>My GitHub profile contains frontend practice projects, JavaScript programs, and portfolio improvements.</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="luxury-btn compact">
          Visit GitHub <Github size={17} />
        </a>
      </div>
      <div className="github-chart">
        <img src="https://ghchart.rshah.org/d8b45a/Refaiii" alt="Refaidy GitHub contribution chart" />
      </div>
    </section>
  );
}

function Contact() {
  const contactCards = [
    { icon: Mail, title: "Email", value: email, href: emailUrl },
    { icon: Phone, title: "Phone", value: phone, href: "tel:+918848904913" },
    { icon: MessageCircle, title: "WhatsApp", value: phone, href: whatsappUrl },
    { icon: Linkedin, title: "LinkedIn", value: "muhammed-refaidy", href: linkedinUrl },
  ];

  return (
    <section id="contact" className="section-block contact-section reveal">
      <div className="contact-copy">
        <span className="eyebrow">Contact</span>
        <h2>Let&apos;s connect for internships, projects, and learning opportunities.</h2>
        <p>
          I am open to frontend internships, project discussions, and opportunities where I can learn and build real web experiences.
        </p>
        <a href={emailUrl} target="_blank" rel="noopener noreferrer" className="luxury-btn">
          Send Email <Send size={18} />
        </a>
      </div>
      <div className="contact-grid">
        {contactCards.map((item) => (
          <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-tile">
            <item.icon />
            <span>{item.title}</span>
            <strong>{item.value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-panel">
      <div>
        <h2>Muhammed Refaidy C</h2>
        <p>Frontend Developer | BCA Student</p>
      </div>
      <div className="footer-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={emailUrl} target="_blank" rel="noopener noreferrer">Email</a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar theme={theme} toggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
      <div className="site-layout">
        <ProfileRail />
        <main className="main-stage">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Journey />
          <GithubActivity />
          <Contact />
          <Footer />
        </main>
      </div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
        <MessageCircle />
      </a>
    </div>
  );
}

export default App;
