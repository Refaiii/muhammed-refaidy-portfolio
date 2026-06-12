import { Download, ArrowRight } from "lucide-react";

export const ResumeCTA = () => {
  return (
    <section className="section-space relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="clean-card text-center max-w-5xl mx-auto p-10 md:p-16">
          <span className="section-label">Career Goal</span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Aiming to Become a
            <span className="text-primary"> Professional Frontend Developer</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            My goal is to master frontend development, JavaScript, React, UI design,
            and later grow into Full-Stack JavaScript development by building real
            projects and improving every day.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#contact" className="primary-btn">
              Contact Me
              <ArrowRight size={18} />
            </a>

            <a href="https://github.com/Refaiii" target="_blank" rel="noopener noreferrer" className="outline-btn">
              View GitHub
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
