import { Code2, Users, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Learn & Grow",
      description: "Access workshops, tutorials, and mentorship from industry experts.",
    },
    {
      icon: Users,
      title: "Connect",
      description: "Network with like-minded tech enthusiasts and build lasting relationships.",
    },
    {
      icon: Rocket,
      title: "Build Together",
      description: "Collaborate on projects and bring innovative ideas to life.",
    },
    {
      icon: Zap,
      title: "Innovate",
      description: "Push boundaries with cutting-edge technology and creative solutions.",
    },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">TechDome</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            TechDome is a student-led technology community dedicated to empowering learners and early-career technologists through hands-on innovation. We organize learning sessions, hackathons, mentorship circles, and collaborative project squads designed to help members build real-world solutions and grow their technical expertise. Whether you're beginning your tech journey or aiming to level up, TechDome offers the guidance, resources, and network you need to accelerate your development and thrive in the tech ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:card-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
