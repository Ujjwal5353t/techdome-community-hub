import { Github, Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Community Lead",
      image: "👨‍💻",
    },
    {
      name: "Sarah Johnson",
      role: "Technical Director",
      image: "👩‍💻",
    },
    {
      name: "Marcus Williams",
      role: "Events Coordinator",
      image: "👨‍🎓",
    },
    {
      name: "Emily Davis",
      role: "Design Lead",
      image: "👩‍🎨",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals dedicated to building an amazing tech community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-glow text-center"
            >
              <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {member.image}
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
