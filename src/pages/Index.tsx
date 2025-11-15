import Navigation from "@/components/Navigation";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import WorkSection from "@/components/WorkSection";
import FAQSection from "@/components/FAQSection";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider variant="gradient" />
        <AboutSection />
        <SectionDivider variant="primary" />
        <WorkSection />
        <SectionDivider variant="secondary" />
        <TeamSection />
        <SectionDivider variant="gradient" />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
