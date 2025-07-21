import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Brain, 
  Palette, 
  Globe,
  BarChart3
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "cyber-purple",
      skills: ["Python", "Java", "C"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "cyber-blue",
      skills: ["HTML", "CSS", "JavaScript", "React", "Django"]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "cyber-green",
      skills: ["SQL", "PostgreSQL", "Excel", "Power BI"]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      color: "cyber-pink",
      skills: ["TensorFlow", "Keras", "Machine Learning", "Data Visualization"]
    },
    {
      title: "Analytics & Visualization",
      icon: BarChart3,
      color: "cyber-blue",
      skills: ["Power BI", "Data Analysis", "Statistical Analysis"]
    },
    {
      title: "Design & Creativity",
      icon: Palette,
      color: "cyber-green",
      skills: ["Canva", "UI/UX Design", "Visual Design"]
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
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className={`bg-surface ${getBorderColor(category.color)} hover:cyber-glow-accent transition-all duration-300 group slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-full bg-background/10 group-hover:bg-gradient-primary transition-all duration-300`}>
                      <Icon className={`h-6 w-6 ${getIconColor(category.color)} group-hover:text-background transition-colors duration-300`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className={`${getIconColor(category.color)} bg-background/10 hover:bg-gradient-primary hover:text-background transition-all duration-300 cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Skills Animation */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-cyber-blue">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Data Science', 'Machine Learning', 'Python', 'Web Development', 'Problem Solving'].map((skill, index) => (
              <div 
                key={skill}
                className="px-6 py-3 rounded-full bg-gradient-primary text-background font-medium pulse-glow"
                style={{animationDelay: `${index * 0.5}s`}}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;