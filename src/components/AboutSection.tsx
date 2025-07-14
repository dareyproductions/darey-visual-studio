import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Coffee, Clock, Star, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: Star, label: "Projects Completed", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Coffee, label: "Coffee Consumed", value: "∞" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Photo and Stats */}
          <div className="space-y-8">
            {/* Profile Photo Placeholder */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-surface rounded-2xl overflow-hidden shadow-elevated border border-border/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="text-center hover:shadow-card transition-all duration-300 bg-card border-border/50">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">About</span>{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">John</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a passionate video editor and motion graphics designer with over 5 years of experience 
                  in creating compelling visual narratives. My journey began with a fascination for storytelling 
                  through moving images, and has evolved into a professional craft that combines technical expertise 
                  with creative vision.
                </p>
                
                <p>
                  Specializing in Adobe Premiere Pro, After Effects, and Audition, I bring stories to life through 
                  precise editing, dynamic motion graphics, and immersive audio experiences. Whether it's a short film, 
                  commercial project, or social media content, I approach each project with meticulous attention to 
                  detail and a commitment to excellence.
                </p>
                
                <p>
                  My work spans across various industries including entertainment, corporate communications, 
                  and digital marketing. I believe that every frame matters, and I'm dedicated to creating 
                  content that not only looks great but also effectively communicates the intended message.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Narrative Editing",
                  "Color Grading",
                  "Motion Graphics",
                  "Audio Post-Production",
                  "Visual Effects",
                  "Multi-Camera Editing",
                  "Documentary Editing",
                  "Commercial Production"
                ].map((expertise) => (
                  <div key={expertise} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{expertise}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="animate-glow-pulse">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              <Button variant="glass" size="lg">
                <Coffee className="w-5 h-5" />
                Let's Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;