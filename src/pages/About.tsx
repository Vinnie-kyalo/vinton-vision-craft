import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Eye, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously exploring cutting-edge technologies to deliver future-ready solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Putting our clients' needs first with personalized service and dedicated support.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards of quality in every project we undertake.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Building trust through open communication and honest business practices.",
  },
];

const team = [
  { name: "John Anderson", role: "CEO & Founder", initial: "JA" },
  { name: "Sarah Mitchell", role: "CTO", initial: "SM" },
  { name: "David Park", role: "Head of Development", initial: "DP" },
  { name: "Emily Chen", role: "Director of Operations", initial: "EC" },
];

const milestones = [
  { year: "2012", title: "Company Founded", description: "Started with a vision to transform IT services." },
  { year: "2015", title: "500 Clients", description: "Reached our first major client milestone." },
  { year: "2018", title: "ISO Certification", description: "Achieved ISO 9001 quality certification." },
  { year: "2021", title: "Global Expansion", description: "Expanded services to 3 continents." },
  { year: "2024", title: "Industry Leader", description: "Recognized as a top IT solutions provider." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="orb w-[500px] h-[500px] -top-32 -right-32" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Empowering Businesses Through{" "}
                <span className="text-gradient">Technology</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Since 2012, Vinton Technologies has been at the forefront of delivering 
                innovative IT solutions that drive business growth and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Vinton Technologies was founded with a simple yet powerful vision: to make 
                    enterprise-grade IT solutions accessible to businesses of all sizes. What 
                    started as a small consulting firm has grown into a comprehensive IT 
                    solutions provider serving clients worldwide.
                  </p>
                  <p>
                    Our journey has been marked by continuous innovation, unwavering commitment 
                    to quality, and a deep understanding of our clients' evolving needs. Today, 
                    we're proud to be trusted by over 500 businesses across various industries.
                  </p>
                  <p>
                    From web development and hosting to enterprise security systems and IT 
                    infrastructure, we offer end-to-end solutions designed to propel your 
                    business forward in the digital age.
                  </p>
                </div>
              </div>
              
              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="relative pl-12">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div className="glass-card p-4">
                        <span className="text-primary font-mono text-sm">{milestone.year}</span>
                        <h4 className="font-display font-semibold text-foreground">{milestone.title}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-card/50 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver innovative, reliable, and secure IT solutions that empower 
                  businesses to achieve their full potential in the digital landscape.
                </p>
              </div>
              <div className="glass-card p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted global partner for technology transformation, 
                  setting the standard for excellence in IT services and solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us Forward
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="glass-card card-3d p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-card/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Leadership Team
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Meet Our Experts
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="glass-card card-3d p-6 text-center group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors">
                    <span className="font-display font-bold text-2xl text-primary">{member.initial}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="orb w-[400px] h-[400px] bottom-0 left-1/2 -translate-x-1/2" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how Vinton Technologies can help transform your business.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
