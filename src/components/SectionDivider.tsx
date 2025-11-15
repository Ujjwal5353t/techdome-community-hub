interface SectionDividerProps {
  variant?: "primary" | "secondary" | "gradient";
}

const SectionDivider = ({ variant = "gradient" }: SectionDividerProps) => {
  const variants = {
    primary: "from-transparent via-primary/50 to-transparent",
    secondary: "from-transparent via-secondary/50 to-transparent",
    gradient: "from-primary/30 via-secondary/30 to-accent/30",
  };

  return (
    <div className="relative w-full py-8 overflow-hidden">
      {/* Main glowing line */}
      <div className={`h-px w-full bg-gradient-to-r ${variants[variant]} animate-pulse-glow`} />
      
      {/* Additional glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`h-8 w-1/2 bg-gradient-to-r ${variants[variant]} blur-xl opacity-30`} />
      </div>
      
      {/* Decorative dots */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default SectionDivider;
