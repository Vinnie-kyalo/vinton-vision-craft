import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="orb w-[600px] h-[600px] -top-48 -right-48" />
      <div className="orb w-[400px] h-[400px] -bottom-32 -left-32 opacity-20" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 fade-in-section">
            <Shield className="w-4 h-4" />
            <span>Trusted by 500+ businesses worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 fade-in-section stagger-1">
            Powering Your Business with{" "}
            <span className="text-gradient">Next-Gen IT Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed fade-in-section stagger-2">
            From cutting-edge web development to enterprise IT infrastructure, 
            we deliver comprehensive technology solutions that drive growth, 
            enhance security, and transform your digital presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-section stagger-3">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="heroOutline" size="xl">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Rapid deployment with agile methodology",
                delay: "stagger-4",
              },
              {
                icon: Shield,
                title: "Secure Solutions",
                description: "Enterprise-grade security standards",
                delay: "stagger-5",
              },
              {
                icon: Globe,
                title: "Global Support",
                description: "24/7 technical assistance worldwide",
                delay: "stagger-6",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`glass-card card-3d p-6 text-left group fade-in-section ${feature.delay}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary/40 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Floating Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 float rotate-12 flex items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-primary/30" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-10 hidden lg:block">
          <div className="w-16 h-16 rounded-xl bg-secondary border border-border float-delayed -rotate-12 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary/40" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 hidden lg:block">
          <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 float rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
