import { Code2, Layout, Palette, Rocket } from "lucide-react";

const aboutCards = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "Creating responsive websites with HTML, CSS, JavaScript, and modern frontend practices.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    text: "Building layouts that work smoothly on mobile, tablet, and desktop screens.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Learning Figma to design clean, modern, and user-friendly interfaces before coding.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    text: "Improving through internship tasks, mini projects, coding practice, and self-learning.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-space">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="section-label">About Me</span>

            <h2 className="section-title mt-4">
              My Journey Into <span className="text-primary">Web Development</span>
            </h2>

            <div className="space-y-5 mt-6 text-muted-foreground leading-relaxed">
              <p>
                I am Muhammed Refaidy C, a BCA student at Safa College
                Pookkattiri under Calicut University with a strong interest in
                web development and modern user interface design.
              </p>

              <p>
                My primary focus is frontend development, where I enjoy turning
                ideas into responsive and visually appealing websites using HTML,
                CSS, JavaScript, Git, GitHub, and modern development tools.
              </p>

              <p>
                I am currently improving my skills through internship training,
                personal projects, coding practice, and UI design with Figma.
                My goal is to become a skilled Frontend Developer and later grow
                into Full-Stack JavaScript development.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aboutCards.map((card) => (
              <div key={card.title} className="clean-card">
                <card.icon className="text-primary mb-5" size={32} />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-muted-foreground text-sm mt-3">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
