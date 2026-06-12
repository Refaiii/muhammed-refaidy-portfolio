import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Education", path: "#education" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Journey", path: "#timeline" },
  { name: "GitHub", path: "#github" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <a href="#home" className="text-2xl font-bold whitespace-nowrap">
          Refaidy<span className="text-primary">.</span>
        </a>

        <div className="hidden xl:flex items-center gap-7">
          {links.map((link) => (
            <a key={link.name} href={link.path} className="text-muted-foreground hover:text-primary transition">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle day night mode">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === "dark" ? "Day" : "Night"}</span>
          </button>
          <a href="#contact" className="primary-btn">Contact Me</a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="theme-toggle icon-only" aria-label="Toggle day night mode">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="icon-btn">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="xl:hidden bg-background px-6 pb-6 space-y-4 border-b border-border">
          {links.map((link) => (
            <a key={link.name} href={link.path} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-primary">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex primary-btn">Contact Me</a>
        </div>
      )}
    </header>
  );
};
