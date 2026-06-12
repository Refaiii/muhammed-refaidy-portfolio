import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold">
            Muhammed Refaidy C<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Frontend Developer | BCA Student
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Refaiii"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammed-refaidy-834b34323?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=refaiii03@gmail.com" target="_blank" rel="noopener noreferrer"
            className="icon-btn"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
