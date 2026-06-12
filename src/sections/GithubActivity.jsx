import { Github, GitBranch, Star } from "lucide-react";

export const GithubActivity = () => {
  return (
    <section id="github" className="section-space">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-label">GitHub</span>
          <h2 className="section-title">
            Coding <span className="text-primary">Activity</span>
          </h2>
          <p className="section-description mt-5">
            My GitHub profile shows the projects I am building and the consistency of my learning journey.
          </p>
        </div>

        <div className="clean-card mt-14 max-w-5xl mx-auto text-center overflow-hidden">
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl bg-surface border border-border p-5">
              <Github className="text-primary mx-auto mb-2" />
              <p className="font-semibold">GitHub Profile</p>
              <p className="text-muted-foreground text-sm">Refaiii</p>
            </div>
            <div className="rounded-2xl bg-surface border border-border p-5">
              <GitBranch className="text-primary mx-auto mb-2" />
              <p className="font-semibold">Projects</p>
              <p className="text-muted-foreground text-sm">HTML • CSS • JS • React</p>
            </div>
            <div className="rounded-2xl bg-surface border border-border p-5">
              <Star className="text-primary mx-auto mb-2" />
              <p className="font-semibold">Focus</p>
              <p className="text-muted-foreground text-sm">Frontend improvement</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/d4af37/Refaiii"
              alt="Muhammed Refaidy C GitHub contribution heatmap"
              className="min-w-[760px] w-full"
            />
          </div>

          <a href="https://github.com/Refaiii" target="_blank" rel="noopener noreferrer" className="primary-btn mt-8">
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};
