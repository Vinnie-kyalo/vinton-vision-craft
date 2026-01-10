import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All", "Web Development", "IT Infrastructure", "Security Systems", "Cloud Solutions"];

const projects = [
  {
    id: 1,
    title: "Global Financial Corp - Cloud Migration",
    category: "Cloud Solutions",
    description: "Complete migration of legacy systems to AWS with 99.99% uptime achievement.",
    results: ["40% cost reduction", "99.99% uptime", "Zero data loss"],
    client: "Financial Services",
  },
  {
    id: 2,
    title: "HealthCare Plus - Hospital Network",
    category: "IT Infrastructure",
    description: "Designed and implemented secure network infrastructure for 5 hospital locations.",
    results: ["HIPAA compliant", "500+ endpoints", "24/7 monitoring"],
    client: "Healthcare",
  },
  {
    id: 3,
    title: "TechStart - E-commerce Platform",
    category: "Web Development",
    description: "Built a high-performance e-commerce platform handling 100k+ daily transactions.",
    results: ["3s load time", "100k+ daily orders", "99.9% uptime"],
    client: "E-commerce",
  },
  {
    id: 4,
    title: "Metro Mall - Security Installation",
    category: "Security Systems",
    description: "Comprehensive CCTV and access control system for a 500,000 sq ft retail complex.",
    results: ["200+ cameras", "AI analytics", "Central monitoring"],
    client: "Retail",
  },
  {
    id: 5,
    title: "EduLearn - Learning Management System",
    category: "Web Development",
    description: "Custom LMS platform serving 50,000+ students with video streaming and assessments.",
    results: ["50k+ users", "4K streaming", "Mobile apps"],
    client: "Education",
  },
  {
    id: 6,
    title: "Manufacturing Inc - Network Overhaul",
    category: "IT Infrastructure",
    description: "Complete network infrastructure upgrade across 3 manufacturing facilities.",
    results: ["10Gbps backbone", "IoT integration", "Reduced downtime"],
    client: "Manufacturing",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="orb w-[500px] h-[500px] -top-32 -left-32" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Our Portfolio
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Proven Results,{" "}
                <span className="text-gradient">Real Impact</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our successful projects across various industries and 
                see how we've helped businesses transform through technology.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card card-3d group overflow-hidden"
                >
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-secondary to-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-12 h-12 rounded-xl bg-primary/20" />
                    </div>
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {project.client}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="space-y-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/50 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "12+", label: "Years Experience" },
                { value: "50+", label: "Industry Awards" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can help transform your business with our IT solutions.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Start Your Project
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

export default Portfolio;
