import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Camera, Plane, Palette, TreePine } from "lucide-react";

const SocialActivity = () => {
  const activities = [
    {
      category: "Community Service",
      title: "National Service Scheme (NSS)",
      description: "Active participant in NSS, contributing to community development and social service initiatives at university level.",
      icon: Users,
      color: "cyber-blue",
      highlights: [
        "Community engagement programs",
        "University-level service activities",
        "Social awareness campaigns",
        "Environmental conservation drives"
      ]
    },
    {
      category: "Creative Pursuits",
      title: "Photography & Visual Arts",
      description: "Passionate about capturing moments and expressing creativity through various artistic mediums.",
      icon: Camera,
      color: "cyber-purple",
      highlights: [
        "Digital photography",
        "Nature and landscape photography",
        "Visual storytelling",
        "Creative composition"
      ]
    },
    {
      category: "Exploration",
      title: "Travel & Adventure",
      description: "Love exploring new places, experiencing different cultures, and creating memories through travel.",
      icon: Plane,
      color: "cyber-green",
      highlights: [
        "Cultural exploration",
        "Adventure photography",
        "Local experiences",
        "Travel documentation"
      ]
    },
    {
      category: "Artistic Expression",
      title: "Painting & Design",
      description: "Expressing creativity through traditional and digital art forms, combining technical skills with artistic vision.",
      icon: Palette,
      color: "cyber-pink",
      highlights: [
        "Traditional painting techniques",
        "Digital art creation",
        "Color theory application",
        "Creative design thinking"
      ]
    },
    {
      category: "Recreation",
      title: "Outdoor Sports & Games",
      description: "Active lifestyle through various outdoor activities and sports, promoting physical wellness and team spirit.",
      icon: TreePine,
      color: "cyber-blue",
      highlights: [
        "Team sports participation",
        "Outdoor adventure activities",
        "Physical fitness",
        "Leadership in sports"
      ]
    }
  ];

  const getIconColor = (color: string) => {
    switch(color) {
      case 'cyber-purple': return 'text-cyber-purple';
      case 'cyber-blue': return 'text-cyber-blue';
      case 'cyber-green': return 'text-cyber-green';
      case 'cyber-pink': return 'text-cyber-pink';
      default: return 'text-cyber-purple';
    }
  };

  const getBorderColor = (color: string) => {
    switch(color) {
      case 'cyber-purple': return 'border-cyber-purple/20';
      case 'cyber-blue': return 'border-cyber-blue/20';
      case 'cyber-green': return 'border-cyber-green/20';
      case 'cyber-pink': return 'border-cyber-pink/20';
      default: return 'border-cyber-purple/20';
    }
  };

  return (
    <section id="social" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Social <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond technology - community engagement, creative pursuits, and personal growth
          </p>
        </div>

        {/* Volunteering Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-full bg-gradient-primary">
              <Heart className="h-6 w-6 text-background" />
            </div>
            <h3 className="text-2xl font-semibold text-cyber-blue">Volunteering & Service</h3>
          </div>
          
          <Card className="bg-surface border-cyber-blue/20 cyber-glow hover:cyber-glow-accent transition-all duration-300 slide-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-4">National Service Scheme (NSS)</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Actively contributing to society through NSS activities, focusing on community development, 
                    social awareness, and environmental conservation. Engaging in meaningful service that creates 
                    positive impact at both university and community levels.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Community Service", "Social Impact", "Leadership", "Team Collaboration"].map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="bg-cyber-blue/10 text-cyber-blue"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-background/5 border border-cyber-blue/20">
                    <h5 className="font-medium text-cyber-blue mb-2">Impact Areas</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Community development programs</li>
                      <li>• Environmental awareness campaigns</li>
                      <li>• Educational outreach initiatives</li>
                      <li>• Social welfare activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hobbies & Creativity */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-full bg-gradient-secondary">
              <Palette className="h-6 w-6 text-background" />
            </div>
            <h3 className="text-2xl font-semibold text-cyber-green">Hobbies & Creative Pursuits</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.slice(1).map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card 
                  key={activity.title}
                  className={`bg-surface ${getBorderColor(activity.color)} hover:cyber-glow-accent transition-all duration-300 group slide-up h-full`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-full bg-background/10 group-hover:bg-gradient-primary transition-all duration-300`}>
                        <Icon className={`h-5 w-5 ${getIconColor(activity.color)} group-hover:text-background transition-colors duration-300`} />
                      </div>
                      <Badge variant="outline" className={`text-xs ${getIconColor(activity.color)} border-current`}>
                        {activity.category}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div className="space-y-2">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${getIconColor(activity.color).replace('text-', 'bg-')}`}></div>
                          <span className="text-xs text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-primary/10 border border-cyber-purple/20 slide-up">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Life Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "I believe in maintaining a balanced life where technology meets humanity. Through community service, 
              creative expression, and continuous learning, I strive to make a positive impact while staying 
              grounded in my values and passions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialActivity;