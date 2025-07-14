import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,rgba(68,68,68,.1)_25%,rgba(68,68,68,.1)_26%,transparent_27%,transparent_74%,rgba(68,68,68,.1)_75%,rgba(68,68,68,.1)_76%,transparent_77%,transparent)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">John</span>{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Darey</span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
            <span className="block mb-2">Video Editor · Motion Graphics Designer</span>
            <span className="text-primary">Audio Post-Production Specialist</span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up leading-relaxed">
            Crafting compelling visual narratives through precision editing, dynamic motion graphics, 
            and immersive audio experiences. Every frame tells a story.
          </p>
          
          {/* Video Player Section */}
          <div className="relative mb-12 animate-scale-in">
            <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-elevated border border-border/20">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-surface flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-primary/30 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground">Demo Reel Coming Soon</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Click to watch showreel</p>
                </div>
              </div>
              
              {/* Video overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Video Controls Placeholder */}
            <div className="mt-4 flex justify-center space-x-4">
              <Button variant="hero" size="lg" className="animate-glow-pulse">
                <Play className="w-5 h-5" />
                Watch Showreel
              </Button>
              <Button variant="glass" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;