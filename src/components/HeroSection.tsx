import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-gradient">TechDome</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Building the future of technology together. Join our community of innovators, 
              developers, and tech enthusiasts shaping tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/events" className="flex items-center">
                  Join Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted">
                Learn More
              </Button>
            </div>
          </div>

          {/* Space for 3D Model */}
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
            <div className="relative z-10 text-center space-y-4">
              <div className="text-6xl animate-float">🌐</div>
              <p className="text-sm text-muted-foreground">3D Model Space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
