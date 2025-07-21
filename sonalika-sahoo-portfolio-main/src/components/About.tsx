import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Code2, Brain, Camera, Palette, TreePine, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Programming",
      description: "Strong foundation in multiple programming languages and frameworks"
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      description: "Passionate about extracting insights from data and building intelligent systems"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring creativity through the lens"
    },
    {
      icon: Palette,
      title: "Painting",
      description: "Expressing creativity through colors and artistic imagination"
    },
    {
      icon: TreePine,
      title: "Outdoor Activities",
      description: "Enjoying nature through travel and outdoor games"
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Actively involved in NSS activities and community development"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8 slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyber-blue flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-primary">
                  <Brain className="h-5 w-5 text-background" />
                </div>
                My Journey
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-foreground">
                  Aspiring B.Tech in Computer Science student with a passion for <span className="text-cyber-blue font-semibold">Data Science and Machine Learning</span>. 
                  Seeking an opportunity to contribute my skills and knowledge in a dynamic environment.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Strong foundation in programming, data analysis, and problem-solving, with hands-on experience 
                  in building real-world applications. I believe in <span className="text-cyber-green font-semibold">continuous learning</span> and staying updated with 
                  the latest technological advancements.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-cyber-blue">What I Love</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="bg-surface/50 border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300 hover:cyber-glow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-gradient-primary/20 flex-shrink-0">
                            <IconComponent className="h-4 w-4 text-cyber-blue" />
                          </div>
                          <div className="space-y-1">
                            <h5 className="font-semibold text-sm">{item.title}</h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quote Card */}
            <Card className="bg-gradient-primary/10 border-cyber-blue/30 cyber-glow">
              <CardContent className="p-6">
                <blockquote className="text-center">
                  <p className="text-lg italic text-cyber-blue mb-2">
                    "Technology is best when it brings people together and solves real-world problems."
                  </p>
                  <footer className="text-sm text-muted-foreground">— My Philosophy</footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div className="slide-up" style={{animationDelay: '0.2s'}}>
            <Card className="bg-surface border-cyber-purple/20 cyber-glow hover:cyber-glow-accent transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gradient-primary">
                    <GraduationCap className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-cyber-blue">Education</h3>
                    <p className="text-sm text-muted-foreground">Academic Journey</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Bachelor's Degree */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold">
                      Bachelor of Technology in Computer Science and Engineering
                    </h4>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>NIST University, Berhampur, Odisha</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2022 - 2026</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-cyber-blue/10 p-3 rounded-lg border border-cyber-blue/20">
                      <span className="text-cyber-blue font-semibold">CGPA: 8.84</span>
                      <span className="text-xs text-cyber-blue/80">Excellent Performance</span>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-background/5 border border-cyber-green/20">
                      <p className="text-sm text-cyber-green font-medium">
                        Current Focus: Data Science, Machine Learning, and Full-Stack Development
                      </p>
                    </div>
                  </div>

                  {/* Intermediate */}
                  <div className="space-y-3 pt-4 border-t border-cyber-purple/20">
                    <h4 className="text-lg font-semibold">
                      Intermediate (Class XII)
                    </h4>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Ramadevi Women's Higher Secondary School, Bhubaneswar</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2020 - 2022</span>
                    </div>
                    
                    <div className="bg-cyber-purple/10 p-2 rounded border border-cyber-purple/20">
                      <span className="text-cyber-purple font-semibold">Score: 79.17%</span>
                    </div>
                  </div>

                  {/* Matriculation */}
                  <div className="space-y-3 pt-4 border-t border-cyber-purple/20">
                    <h4 className="text-lg font-semibold">
                      Matriculation (Class X)
                    </h4>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>SSVM, Dharmavihar, Bhubaneswar</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2019 - 2020</span>
                    </div>
                    
                    <div className="bg-cyber-green/10 p-2 rounded border border-cyber-green/20">
                      <span className="text-cyber-green font-semibold">Score: 83.17%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;