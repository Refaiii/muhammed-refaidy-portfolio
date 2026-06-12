import {
  Brain,
  Code2,
  Github,
  Layout,
  Palette,
  Rocket,
} from "lucide-react";

const learningItems = [
  {
    icon: Code2,
    title: "Advanced JavaScript",
    description: "Improving logic, conditions, loops, functions, DOM concepts, and interactive web features.",
  },
  {
    icon: Rocket,
    title: "React.js",
    description: "Learning component-based frontend development for modern web applications.",
  },
  {
    icon: Layout,
    title: "Responsive Web Design",
    description: "Building layouts that adapt smoothly to different screen sizes and devices.",
  },
  {
    icon: Palette,
    title: "Figma UI Design",
    description: "Designing clean user interfaces, portfolio layouts, colors, spacing, and visual hierarchy.",
  },
  {
    icon: Github,
    title: "Git & GitHub",
    description: "Managing code, uploading projects, and learning deployment workflows.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Practicing beginner-to-intermediate programs to build confidence in coding.",
  },
];

export const CurrentLearning = () => {
  return (
    <section id="learning" className="section-space relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">Current Learning</span>
          <h2 className="section-title mt-4">
            What I&apos;m <span className="text-primary">Learning Right Now</span>
          </h2>

          <p className="section-description mt-5">
            Technologies and skills I am currently focusing on to become a
            professional frontend developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {learningItems.map((item) => (
            <div key={item.title} className="clean-card">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={28} />
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
