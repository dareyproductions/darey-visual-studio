import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 John Darey. Crafting visual stories through video editing and motion graphics.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
