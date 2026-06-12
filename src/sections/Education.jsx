import { GraduationCap, Calendar, School } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic <span className="text-primary">Background</span>
          </h2>
          <p className="section-description mt-5">
            My academic foundation and the subjects supporting my growth as a web developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-14 clean-card">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0">
              <GraduationCap className="text-primary" size={34} />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-primary font-semibold mt-2">
                Safa College Pookkattiri • Calicut University
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                <div className="mini-info"><School size={18} /> Current Semester: 5th</div>
                <div className="mini-info"><Calendar size={18} /> Expected Graduation: 2028</div>
              </div>

              <p className="text-muted-foreground mt-6 leading-relaxed">
                Focused on programming fundamentals, web development, database concepts,
                software development practices, problem solving, and practical project building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
