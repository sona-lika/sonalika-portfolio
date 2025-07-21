import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Blood Donation Management System",
      description: "A comprehensive web application for managing blood donation processes with real-time tracking, secure authentication, and intuitive user interface.",
      tech: ["Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
      features: [
        "Secure user authentication and authorization",
        "Real-time blood inventory tracking",
        "Donor and recipient management",
        "Admin dashboard with analytics"
      ],
      icon: Database,
      color: "cyber-red",
      github: "#",
      demo: "#"
    },
    {
      title: "RINL Auction System",
      description: "A real-time auction platform with role-based access control, live bidding functionality, and comprehensive auction management.",
      tech: ["React", "Java", "Spring Boot", "WebSocket"],
      features: [
        "Real-time bidding interface",
        "Role-based access control",
        "Live auction notifications",
        "Comprehensive auction analytics"
      ],
      icon: Code,
      color: "cyber-blue",
      github: "#",
      demo: "#"
    },
    {
      title: "Number Recognition System - ML",
      description: "Handwritten digit classifier using deep learning with TensorFlow/Keras, featuring real-time prediction interface and high accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
      features: [
        "MNIST dataset training with 98%+ accuracy",
        "Real-time digit recognition",
        "Interactive web interface",
        "Model visualization and metrics"
      ],
      icon: Brain,
      color: "cyber-green",
      github: "#",
      demo: "#"
    }
  ];

  const getIconColor = (color: string) => {
    switch(color) {
      case 'cyber-red': return 'text-red-400';
      case 'cyber-blue': return 'text-cyber-blue';
      case 'cyber-green': return 'text-cyber-green';
      default: return 'text-cyber-purple';
    }
  };

  const getBorderColor = (color: string) => {
    switch(color) {
      case 'cyber-red': return 'border-red-400/20';
      case 'cyber-blue': return 'border-cyber-blue/20';
      case 'cyber-green': return 'border-cyber-green/20';
      default: return 'border-cyber-purple/20';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my skills in web development, machine learning, and system design
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className={`bg-surface ${getBorderColor(project.color)} hover:cyber-glow-accent transition-all duration-300 group slide-up overflow-hidden`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Project Info */}
                  <div className="lg:col-span-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-full bg-background/10 group-hover:bg-gradient-primary transition-all duration-300`}>
                          <Icon className={`h-8 w-8 ${getIconColor(project.color)} group-hover:text-background transition-colors duration-300`} />
                        </div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-cyber-blue mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="secondary"
                              className="bg-background/10 hover:bg-gradient-primary hover:text-background transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button 
                          variant="outline" 
                          className={`${getBorderColor(project.color)} ${getIconColor(project.color)} hover:bg-gradient-primary hover:text-background hover:border-transparent transition-all duration-300`}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button 
                          className="gradient-primary cyber-glow hover:cyber-glow-accent transition-all duration-300"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Features */}
                  <div className="bg-background/5 p-6 border-l border-border/20">
                    <h4 className="text-lg font-semibold mb-4 text-cyber-green">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyber-green mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            className="gradient-secondary cyber-glow hover:cyber-glow-success transition-all duration-300"
            size="lg"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;