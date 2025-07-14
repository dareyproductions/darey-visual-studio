import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Film, Palette, Volume2 } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: Film },
    { id: 'films', label: 'Short Films', icon: Film },
    { id: 'client', label: 'Client Work', icon: ExternalLink },
    { id: 'motion', label: 'Motion Graphics', icon: Palette },
    { id: 'audio', label: 'Audio Sync', icon: Volume2 },
  ];

  const projects = [
    {
      id: 1,
      title: "Cinematic Short Film",
      category: "films",
      description: "A dramatic narrative piece with complex color grading and sound design.",
      duration: "3:45",
      tags: ["Premiere Pro", "After Effects", "Color Grading"],
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 2,
      title: "Brand Commercial",
      category: "client",
      description: "Fast-paced commercial with dynamic transitions and motion graphics.",
      duration: "1:30",
      tags: ["Motion Graphics", "Brand Identity", "After Effects"],
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 3,
      title: "Logo Animation",
      category: "motion",
      description: "Clean, professional logo reveal with particle effects.",
      duration: "0:15",
      tags: ["After Effects", "Motion Design", "Branding"],
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 4,
      title: "Music Video Edit",
      category: "audio",
      description: "Rhythmic editing synchronized with beat and musical elements.",
      duration: "4:20",
      tags: ["Audition", "Beat Sync", "Music Video"],
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 5,
      title: "Documentary Feature",
      category: "films",
      description: "Long-form documentary with interview cuts and B-roll integration.",
      duration: "12:30",
      tags: ["Documentary", "Interview Editing", "Sound Mix"],
      thumbnail: "/api/placeholder/400/225"
    },
    {
      id: 6,
      title: "Social Media Package",
      category: "client",
      description: "Series of short-form content optimized for various platforms.",
      duration: "Multiple",
      tags: ["Social Media", "Short Form", "Vertical Video"],
      thumbnail: "/api/placeholder/400/225"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured</span>{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my best video editing and motion graphics projects
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "ghost"}
                onClick={() => setActiveFilter(category.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-surface rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/30 transition-colors">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                      <p className="text-sm text-muted-foreground">Video Preview</p>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.duration}
                    </Badge>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="hero" size="sm">
                      <Play className="w-4 h-4" />
                      Watch Now
                    </Button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="animate-glow-pulse">
            <ExternalLink className="w-5 h-5" />
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;