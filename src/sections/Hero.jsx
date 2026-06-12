import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-28 sm:pt-32 pb-20 relative overflow-hidden">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for internship opportunities and learning projects
            </div>

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Muhammed Refaidy C
              <span className="block text-primary mt-2">Frontend Developer</span>
            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-foreground/90">
              BCA Student | UI-Focused Web Developer
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              BCA student at Safa College Pookkattiri under Calicut University, focused on
              building responsive, clean, and user-friendly websites using HTML, CSS,
              JavaScript, Git, GitHub, React, Tailwind CSS, and Figma.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <a href="#projects" className="primary-btn">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="outline-btn">
                Contact Me <Mail size={18} />
              </a>
              <a href="https://github.com/Refaiii" target="_blank" rel="noopener noreferrer" className="outline-btn">
                View GitHub <Download size={18} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-8 max-w-xl">
              <div className="mini-info"><MapPin size={18} /> Palakkad, Kerala</div>
              <a href="https://github.com/Refaiii" target="_blank" rel="noopener noreferrer" className="mini-info"><Github size={18} /> github.com/Refaiii</a>
              <a href="https://www.linkedin.com/in/muhammed-refaidy-834b34323?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="mini-info"><Linkedin size={18} /> LinkedIn Profile</a>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Refaiii" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-refaidy-834b34323?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="profile-card">
              <img
                src="/profile-photo.png"
                alt="Muhammed Refaidy C"
                className="w-64 sm:w-72 md:w-80 aspect-[4/5] object-cover rounded-3xl luxury-profile-img"
              />
              <div className="profile-badge">
                <p className="text-sm text-muted-foreground">Currently</p>
                <p className="font-semibold text-primary">Learning React & Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
