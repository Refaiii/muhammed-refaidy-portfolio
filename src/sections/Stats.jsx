const stats = [
  {
    number: "BCA",
    label: "Academic Background",
    description: "BCA student under Calicut University",
  },
  {
    number: "15+",
    label: "Practice Topics",
    description: "HTML, CSS, JavaScript, Git, GitHub, Figma, and more",
  },
  {
    number: "4+",
    label: "Portfolio Projects",
    description: "Frontend and JavaScript practice projects",
  },
  {
    number: "2028",
    label: "Graduation Goal",
    description: "Expected BCA graduation year",
  },
];

export const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="clean-card text-center">
              <h3 className="text-4xl font-bold text-primary">{stat.number}</h3>
              <p className="font-semibold mt-3">{stat.label}</p>
              <p className="text-muted-foreground text-sm mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
