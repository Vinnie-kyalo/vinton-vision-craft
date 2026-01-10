import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Monitor, Code, Server, Cpu, Globe, Shield, 
  ArrowRight, CheckCircle, Zap, Clock, Users 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "IT Solutions & Consulting",
    description: "Strategic technology consulting to optimize your IT infrastructure and drive digital transformation.",
    features: [
      "IT Infrastructure Assessment",
      "Digital Transformation Strategy",
      "Technology Roadmap Planning",
      "Cost Optimization Analysis",
      "Vendor Management",
      "IT Governance & Compliance",
    ],
  },
  {
    icon: Code,
    title: "Web Design & Development",
    description: "Custom web applications and responsive websites built with cutting-edge technologies.",
    features: [
      "Custom Web Application Development",
      "Responsive Website Design",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "UI/UX Design",
      "Website Maintenance",
    ],
  },
  {
    icon: Server,
    title: "Web & Email Hosting",
    description: "Reliable, secure, and high-performance hosting solutions with guaranteed uptime.",
    features: [
      "Managed Cloud Hosting",
      "Dedicated Server Hosting",
      "Email Hosting & Migration",
      "SSL Certificate Management",
      "Domain Registration",
      "Automated Backups",
    ],
  },
  {
    icon: Cpu,
    title: "Programming Services",
    description: "Custom software development and integrations tailored to your specific business needs.",
    features: [
      "Custom Software Development",
      "API Development & Integration",
      "Database Design & Management",
      "System Automation",
      "Legacy System Migration",
      "Code Review & Optimization",
    ],
  },
  {
    icon: Globe,
    title: "Online IT Services",
    description: "Comprehensive remote IT support and managed services to keep you running 24/7.",
    features: [
      "Remote IT Support",
      "Cloud Migration Services",
      "Network Monitoring",
      "Data Backup & Recovery",
      "Cybersecurity Services",
      "Help Desk Support",
    ],
  },
  {
    icon: Shield,
    title: "IT Products & Hardware",
    description: "Premium IT hardware including security systems, servers, and networking equipment.",
    features: [
      "CCTV & Security Systems",
      "Server Equipment",
      "Networking Devices",
      "Business Laptops & Computers",
      "IT Accessories",
      "Hardware Installation",
    ],
  },
];

const processSteps = [
  { number: "01", title: "Consultation", description: "We analyze your needs and goals." },
  { number: "02", title: "Planning", description: "Custom solution design and roadmap." },
  { number: "03", title: "Implementation", description: "Expert execution with best practices." },
  { number: "04", title: "Support", description: "Ongoing maintenance and optimization." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="orb w-[500px] h-[500px] -top-32 -left-32" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Comprehensive IT Solutions for{" "}
                <span className="text-gradient">Modern Business</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From consulting to implementation, we offer end-to-end technology 
                services designed to accelerate your digital journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <Button variant="hero" size="lg" className="group">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className={`glass-card p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h4 className="font-display font-semibold text-foreground mb-4">What's Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                How We Work
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="glass-card p-6 text-center h-full">
                    <span className="font-display text-4xl font-bold text-gradient">{step.number}</span>
                    <h3 className="font-display font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                The Vinton Advantage
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Zap, title: "Fast Delivery", description: "Agile methodology for rapid deployment" },
                { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance" },
                { icon: Users, title: "Expert Team", description: "Certified professionals at your service" },
              ].map((item) => (
                <div key={item.title} className="glass-card card-3d p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="orb w-[400px] h-[400px] bottom-0 left-1/2 -translate-x-1/2" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-card p-12 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get a free consultation and discover how our services can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button variant="heroOutline" size="lg">
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
