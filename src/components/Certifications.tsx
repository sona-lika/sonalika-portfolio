import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Shield, Cloud, Eye } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Problem Solving in C",
      issuer: "NPTEL",
      description: "Comprehensive course covering advanced problem-solving techniques and algorithmic thinking using C programming language.",
      icon: Code,
      color: "cyber-purple",
      skills: ["C Programming", "Algorithms", "Problem Solving", "Data Structures"]
    },
    {
      title: "Computer Vision Using ML",
      issuer: "NIST University",
      description: "Advanced course in computer vision techniques, image processing, and machine learning applications in visual recognition.",
      icon: Eye,
      color: "cyber-blue",
      skills: ["Computer Vision", "Image Processing", "Machine Learning", "OpenCV"]
    },
    {
      title: "Full Stack Development (J2EE & Web 2.0)",
      issuer: "RINL",
      description: "Enterprise-level web development using Java technologies, including servlet programming and modern web frameworks.",
      icon: Code,
      color: "cyber-green",
      skills: ["Java", "J2EE", "Web Development", "Servlets", "JSP"]
    },
    {
      title: "AWS Academy Graduate - Data Engineering",
      issuer: "AWS Academy",
      description: "Comprehensive cloud data engineering program covering AWS services, data pipelines, and big data processing.",
      icon: Cloud,
      color: "cyber-pink",
      skills: ["AWS", "Data Engineering", "Cloud Computing", "Big Data", "ETL"]
    },
    {
      title: "ML for Cyber Security Bootcamp",
      issuer: "C-DAC Hyderabad",
      description: "Specialized training in applying machine learning techniques to cybersecurity challenges and threat detection.",
      icon: Shield,
      color: "cyber-blue",
      skills: ["Machine Learning", "Cybersecurity", "Threat Detection", "Data Analysis"]
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
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span> & Training
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning through industry-recognized programs and specialized training
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card 
                key={cert.title}
                className={`bg-surface ${getBorderColor(cert.color)} hover:cyber-glow-accent transition-all duration-300 group slide-up h-full`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full bg-background/10 group-hover:bg-gradient-primary transition-all duration-300`}>
                      <Icon className={`h-6 w-6 ${getIconColor(cert.color)} group-hover:text-background transition-colors duration-300`} />
                    </div>
                    <Award className={`h-5 w-5 ${getIconColor(cert.color)}`} />
                  </div>
                  <CardTitle className="text-xl leading-tight">{cert.title}</CardTitle>
                  <p className={`text-sm font-medium ${getIconColor(cert.color)}`}>{cert.issuer}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-cyber-blue mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className={`text-xs ${getIconColor(cert.color)} bg-background/10 hover:bg-gradient-primary hover:text-background transition-all duration-300 cursor-default`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Certifications", color: "cyber-purple" },
            { number: "3+", label: "Specializations", color: "cyber-blue" },
            { number: "100+", label: "Hours Trained", color: "cyber-green" },
            { number: "4+", label: "Technical Domains", color: "cyber-pink" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`text-3xl md:text-4xl font-bold text-${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;