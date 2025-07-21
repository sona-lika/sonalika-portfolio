import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code2, Database } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 via-background to-cyber-blue/10"></div>
        
        {/* Tech Grid */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyber-purple/30 to-cyber-pink/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyber-blue/30 to-cyber-green/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-cyber-purple rounded-full floating-animation shadow-glow-primary"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-cyber-blue rounded-full floating-animation shadow-glow-accent" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-cyber-green rounded-full floating-animation shadow-glow-success" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-cyber-pink rounded-full floating-animation" style={{animationDelay: '3s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-16 w-8 h-8 border-2 border-cyber-blue/50 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-cyber-green/50 animate-bounce"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content Section */}
          <div className="text-center lg:text-left slide-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 backdrop-blur-md border border-cyber-purple/30 mb-6">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="text-sm text-cyber-green font-medium">Available for Opportunities</span>
            </div>
            
            {/* Enhanced Typography */}
            <div className="space-y-2 mb-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-gradient animate-gradient">Sonalika</span>
              </h1>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-gradient">
                Sahoo
              </h1>
            </div>
            
            {/* Animated Subtitle with Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-cyber-purple animate-pulse" />
                <h2 className="text-2xl md:text-3xl text-cyber-blue font-mono font-semibold">
                  Data Science & ML Enthusiast
                </h2>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-xl text-muted-foreground/90 mb-8 max-w-2xl leading-relaxed">
              B.Tech Computer Science student passionate about transforming 
              <span className="text-cyber-blue font-semibold"> data into insights</span>. 
              Building intelligent solutions with Machine Learning, Python, and modern web technologies.
            </p>
            
            {/* Skills Highlight */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface/30 backdrop-blur-sm border border-cyber-purple/20">
                <Code2 className="h-4 w-4 text-cyber-purple" />
                <span className="text-sm text-cyber-purple">Python</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface/30 backdrop-blur-sm border border-cyber-blue/20">
                <Database className="h-4 w-4 text-cyber-blue" />
                <span className="text-sm text-cyber-blue">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface/30 backdrop-blur-sm border border-cyber-green/20">
                <Sparkles className="h-4 w-4 text-cyber-green" />
                <span className="text-sm text-cyber-green">Data Science</span>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden bg-gradient-to-r from-cyber-purple to-cyber-blue hover:from-cyber-blue hover:to-cyber-purple text-white border-0 cyber-glow hover:cyber-glow-accent transition-all duration-500 transform hover:scale-105"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  View Projects 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-surface/20 backdrop-blur-md border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10 hover:text-cyber-blue hover:border-cyber-blue transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Let's Connect 
                <Mail className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon" 
                className="group relative bg-surface/20 backdrop-blur-md hover:bg-cyber-blue/10 hover:text-cyber-blue border border-transparent hover:border-cyber-blue/30 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="group relative bg-surface/20 backdrop-blur-md hover:bg-cyber-green/10 hover:text-cyber-green border border-transparent hover:border-cyber-green/30 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="group relative bg-surface/20 backdrop-blur-md hover:bg-cyber-purple/10 hover:text-cyber-purple border border-transparent hover:border-cyber-purple/30 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-60 scale-110 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-blue rounded-full blur-xl opacity-40 scale-105 group-hover:scale-120 transition-transform duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-green cyber-glow pulse-glow group-hover:border-8 transition-all duration-500">
                <img 
                  src={profileImage} 
                  alt="Sonalika Sahoo - Data Science & ML Enthusiast" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/20 via-transparent to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-full pulse-glow animate-bounce shadow-glow-success"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-cyber-pink to-cyber-purple rounded-full pulse-glow animate-pulse shadow-glow-primary"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-cyber-blue rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-cyber-green rounded-full animate-bounce"></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-8 left-1/4 p-2 bg-surface/30 backdrop-blur-md rounded-lg border border-cyber-purple/30 floating-animation">
                <Code2 className="h-4 w-4 text-cyber-purple" />
              </div>
              <div className="absolute -bottom-8 right-1/4 p-2 bg-surface/30 backdrop-blur-md rounded-lg border border-cyber-blue/30 floating-animation" style={{animationDelay: '1s'}}>
                <Database className="h-4 w-4 text-cyber-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;