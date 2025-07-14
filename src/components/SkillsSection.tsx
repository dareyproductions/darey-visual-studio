import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Palette, Volume2, Video, Zap, Award } from "lucide-react";

const SkillsSection = () => {
  const tools = [
    {
      name: "Adobe Premiere Pro",
      category: "Video Editing",
      icon: Video,
      description: "Professional video editing, color correction, and post-production workflows",
      proficiency: 95
    },
    {
      name: "Adobe After Effects",
      category: "Motion Graphics",
      icon: Palette,
      description: "Complex motion graphics, visual effects, and animation sequences",
      proficiency: 90
    },
    {
      name: "Adobe Audition",
      category: "Audio Production",
      icon: Volume2,
      description: "Audio editing, sound design, mixing, and noise reduction",
      proficiency: 85
    }
  ];

  const skills = [
    {
      category: "Video Editing",
      icon: Scissors,
      skills: ["Cutting & Pacing", "Transitions", "Color Grading", "Multi-cam Editing", "Proxy Workflows"]
    },
    {
      category: "Motion Graphics",
      icon: Palette,
      skills: ["2D Animation", "Logo Animation", "Kinetic Typography", "Particle Effects", "Compositing"]
    },
    {
      category: "Audio Post",
      icon: Volume2,
      skills: ["Sound Mixing", "Audio Sync", "Noise Reduction", "ADR", "Foley Integration"]
    },
    {
      category: "Workflow",
      icon: Zap,
      skills: ["Project Management", "File Organization", "Backup Systems", "Collaboration", "Quality Control"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Tools &</span>{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade tools and techniques for creating exceptional video content
          </p>
        </div>

        {/* Adobe Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.name} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{tool.name}</h3>
                  <Badge variant="outline" className="mb-4">{tool.category}</Badge>
                  
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  {/* Proficiency Bar */}
                  <div className="w-full bg-secondary rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tool.proficiency}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground">{tool.proficiency}% Proficiency</span>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.category} className="hover:shadow-card transition-all duration-300 bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Badge */}
        <div className="text-center mt-16">
          <Card className="inline-block bg-gradient-surface border-primary/20 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">5+ Years Experience</h3>
              </div>
              <p className="text-muted-foreground">
                Delivering high-quality video content for clients across multiple industries
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;