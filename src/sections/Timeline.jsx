const steps = [
  { year: "Step 1", title: "HTML & CSS Foundation", text: "Learning semantic HTML, forms, tables, CSS selectors, box model, positioning, flexbox, grid, transitions, animations, and media queries." },
  { year: "Step 2", title: "JavaScript Logic", text: "Practicing variables, operators, conditions, switch cases, loops, functions, arrays, DOM basics, and beginner-friendly mini projects." },
  { year: "Step 3", title: "Git & GitHub", text: "Managing project files, creating repositories, uploading work, writing README files, and preparing projects for recruiters." },
  { year: "Step 4", title: "Figma UI Design", text: "Creating portfolio layouts, understanding spacing, colors, typography, cards, visual hierarchy, and design-to-code workflow." },
  { year: "Step 5", title: "React & Tailwind CSS", text: "Learning component-based UI development and building modern responsive pages with reusable sections." },
  { year: "Step 6", title: "Portfolio & Deployment", text: "Building a professional portfolio, showcasing projects, and preparing to publish online using GitHub Pages or similar platforms." },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Roadmap</span>
          <h2 className="section-title">
            How I Am <span className="text-primary">Progressing</span>
          </h2>
          <p className="section-description mt-5">
            A simple timeline of my frontend learning journey and project-building path.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-14 space-y-5">
          {steps.map((step) => (
            <div key={step.title} className="clean-card flex flex-col md:flex-row gap-5">
              <div className="text-primary font-bold md:w-28 shrink-0">{step.year}</div>
              <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
