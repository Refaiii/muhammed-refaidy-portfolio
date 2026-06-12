const experiences = [
  {
    year: "2026 - Present",
    title: "Frontend Development Internship",
    company: "Practical Training & Internship Activities",
    points: [
      "Learning HTML, CSS, JavaScript, Git, GitHub, and responsive web design",
      "Practicing real tasks such as forms, tables, grid layouts, and JavaScript logic programs",
      "Preparing daily scrum updates and improving communication about technical work",
      "Building portfolio and mini projects to strengthen frontend development skills",
    ],
  },
  {
    year: "2026",
    title: "Portfolio & UI Design Journey",
    company: "Personal Projects",
    points: [
      "Designing a professional developer portfolio using modern UI principles",
      "Learning Figma for wireframes, layouts, spacing, colors, and visual hierarchy",
      "Creating clean sections for skills, projects, education, contact, and career goals",
    ],
  },
  {
    year: "2025 - Present",
    title: "Self Learning Journey",
    company: "Continuous Learning",
    points: [
      "Improving programming fundamentals using C, C++, Java, Python, and DBMS",
      "Practicing JavaScript conditions, loops, functions, and problem-solving tasks",
      "Learning GitHub project management and deployment basics",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Learning Journey</span>
          <h2 className="section-title">
            Growth <span className="text-primary">Timeline</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-14 space-y-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="clean-card">
              <span className="text-primary font-semibold">{exp.year}</span>
              <h3 className="text-2xl font-bold mt-2">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>

              <ul className="mt-5 space-y-2 text-muted-foreground">
                {exp.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
