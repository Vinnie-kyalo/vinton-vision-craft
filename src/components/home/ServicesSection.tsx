import { Code, Server, Shield, Globe, Monitor, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionFadeUp, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: Monitor,
    title: "IT Solutions & Consulting",
    description: "Strategic technology consulting to optimize your IT infrastructure, reduce costs, and drive digital transformation.",
    features: ["Infrastructure Assessment", "Digital Strategy", "Technology Roadmap"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications and responsive websites built with modern technologies and best practices.",
    features: ["Custom Web Apps", "E-commerce", "Progressive Web Apps"],
  },
  {
    icon: Server,
    title: "Web & Email Hosting",
    description: "Reliable, secure, and scalable hosting solutions with 99.9% uptime guarantee and 24/7 support.",
    features: ["Cloud Hosting", "Email Solutions", "SSL Certificates"],
  },
  {
    icon: Cpu,
    title: "Programming Services",
    description: "Bespoke software development and API integrations tailored to your unique business requirements.",
    features: ["Custom Software", "API Integration", "System Automation"],
  },
  {
    icon: Globe,
    title: "Online IT Services",
    description: "Comprehensive remote IT support and managed services to keep your operations running smoothly.",
    features: ["Remote Support", "Cloud Migration", "Data Backup"],
  },
  {
    icon: Shield,
    title: "IT Products",
    description: "Premium IT hardware including CCTV systems, servers, networking equipment, and accessories.",
    features: ["CCTV Systems", "Network Devices", "Server Equipment"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Services
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end technology solutions designed to empower your business 
            with cutting-edge infrastructure and expert support.
          </p>
        </MotionFadeUp>

        {/* Services Grid */}
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <MotionStaggerItem key={service.title}>
              <div className="glass-card card-3d p-8 group h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>

        {/* CTA */}
        <MotionFadeUp delay={0.3} className="text-center mt-12">
          <Link to="/services">
            <Button variant="heroOutline" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </MotionFadeUp>
      </div>
    </section>
  );
};

export default ServicesSection;
