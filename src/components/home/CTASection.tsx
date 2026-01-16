import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionFadeUp, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/motion";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="orb w-[600px] h-[600px] -top-48 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <MotionFadeUp>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              Ready to Transform Your Business?
            </span>
          </MotionFadeUp>

          {/* Heading */}
          <MotionFadeUp delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Build Your{" "}
              <span className="text-gradient">Digital Future</span> Together
            </h2>
          </MotionFadeUp>

          {/* Description */}
          <MotionFadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Partner with Vinton Technologies for comprehensive IT solutions 
              tailored to your business needs. Get a free consultation today.
            </p>
          </MotionFadeUp>

          {/* CTA Buttons */}
          <MotionFadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+254745557243">
                <Button variant="heroOutline" size="xl" className="group">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </MotionFadeUp>

          {/* Contact Info Cards */}
          <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <MotionStaggerItem>
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <div className="font-medium text-foreground">0745557243</div>
                </div>
              </div>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <div className="font-medium text-foreground">info@vintontechnologies.co.ke</div>
                </div>
              </div>
            </MotionStaggerItem>
          </MotionStaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
