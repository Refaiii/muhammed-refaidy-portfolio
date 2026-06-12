import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A premium responsive portfolio built with React and Tailwind CSS to showcase my profile, education, skills, projects, learning journey, and contact details.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    github: "https://github.com/Refaiii",
    demo: "#home",
    highlight: "Portfolio Project",
  },
  {
    title: "Grade Checker Application",
    description:
      "A JavaScript practice project using switch statements to display feedback based on letter grades like A, B, C, D, and F.",
    image: "/projects/project2.png",
    tags: ["JavaScript", "Switch Case", "Logic"],
    github: "https://github.com/Refaiii",
    demo: "#projects",
    highlight: "JS Logic",
  },
  {
    title: "Responsive Form Design",
    description:
      "A clean responsive form interface built using HTML and CSS, focusing on layout, spacing, input styling, and usability.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "Responsive"],
    github: "https://github.com/Refaiii",
    demo: "#projects",
    highlight: "Frontend Task",
  },
  {
    title: "JavaScript Practice Programs",
    description:
      "A collection of beginner-to-intermediate JavaScript tasks including conditions, loops, functions, GCD, Fibonacci, guessing game, and mini projects.",
    image: "/projects/project4.png",
    tags: ["JavaScript", "Problem Solving", "Practice"],
    github: "https://github.com/Refaiii",
    demo: "#projects",
    highlight: "Practice Collection",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="section-description mt-5">
            Projects and practice works that show my frontend learning,
            JavaScript logic building, and practical development progress.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8 mt-14">
          {projects.map((project) => (
            <article key={project.title} className="project-card group">
              <div className="project-thumb relative aspect-video overflow-hidden rounded-2xl">
                <img src={project.image} alt={`${project.title} thumbnail`} />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 border border-border px-3 py-1 text-xs text-primary font-semibold backdrop-blur">
                  {project.highlight}
                </span>
              </div>

              <div className="mt-6">
                <div className="flex justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <ArrowUpRight className="text-primary shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-btn"
                  >
                    GitHub <Github size={16} />
                  </a>
                  <a href={project.demo} className="primary-btn">
                    View Details <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
