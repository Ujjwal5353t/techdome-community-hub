import { ExternalLink } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      title: "AI Workshop Series",
      description: "Comprehensive machine learning and AI workshops for beginners to advanced.",
      category: "Education",
      image: "🤖",
    },
    {
      title: "Hackathon 2024",
      description: "Annual 48-hour coding marathon bringing together brilliant minds.",
      category: "Competition",
      image: "💻",
    },
    {
      title: "Open Source Initiative",
      description: "Contributing to open-source projects and building community tools.",
      category: "Development",
      image: "🔧",
    },
    {
      title: "Tech Talks",
      description: "Monthly speaker series featuring industry leaders and innovators.",
      category: "Networking",
      image: "🎤",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Initiatives and projects that drive our community forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-glow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{project.image}</div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
