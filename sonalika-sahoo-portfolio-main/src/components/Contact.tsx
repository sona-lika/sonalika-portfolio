
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Initialize EmailJS with your public key
  emailjs.init("N9SEVUK0r8qVd8hTu");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_5syt048', // Service ID
        'template_qddtij4', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sonalikasahoo39@gmail.com' // Your email
        }
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you have a question, a comment, or just want to chat, you can reach me through 
            the contact form below, or by email and phone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-surface border-cyber-purple/20 cyber-glow hover:cyber-glow-accent transition-all duration-300 slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-primary">
                  <Send className="h-5 w-5 text-background" />
                </div>
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-cyber-blue">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-background/10 border-cyber-purple/20 focus:border-cyber-purple transition-colors"
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cyber-blue">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-background/10 border-cyber-purple/20 focus:border-cyber-purple transition-colors"
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cyber-blue">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    className="bg-background/10 border-cyber-purple/20 focus:border-cyber-purple transition-colors resize-none"
                    disabled={isLoading}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full gradient-primary cyber-glow hover:cyber-glow-accent transition-all duration-300"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 slide-up" style={{animationDelay: '0.2s'}}>
            {/* Direct Contact */}
            <Card className="bg-surface border-cyber-blue/20 hover:cyber-glow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-secondary">
                    <Mail className="h-5 w-5 text-background" />
                  </div>
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/5">
                  <Mail className="h-5 w-5 text-cyber-blue" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">sonalikasahoo39@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/5">
                  <MapPin className="h-5 w-5 text-cyber-green" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Berhampur, Odisha, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-surface border-cyber-green/20 hover:cyber-glow-success transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-accent">
                    <Linkedin className="h-5 w-5 text-background" />
                  </div>
                  Social Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-background transition-all duration-300"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/sonalika-sahoo-10022b28a" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-background transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-surface border-cyber-pink/20 hover:cyber-glow-accent transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-3 h-3 bg-cyber-green rounded-full mx-auto mb-3 pulse-glow"></div>
                  <h3 className="font-semibold text-cyber-green mb-2">Available for Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Open to internships, projects, and collaborations in Data Science, 
                    Machine Learning, and Web Development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="mt-16 text-center slide-up" style={{animationDelay: '0.4s'}}>
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-primary/10 border border-cyber-purple/20">
            <h3 className="text-xl font-semibold mb-2 text-cyber-purple">Thank You!</h3>
            <p className="text-muted-foreground">
              Thank you for taking the time to visit my portfolio. I look forward to connecting 
              with you and exploring opportunities for collaboration and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
