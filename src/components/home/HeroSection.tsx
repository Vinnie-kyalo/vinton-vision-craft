import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "@/components/ui/motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80" />
      
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>Trusted by 500+ businesses worldwide</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0.1}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Powering Your Business with{" "}
            <span className="text-gradient">Next-Gen IT Solutions</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0.2}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            From cutting-edge web development to enterprise IT infrastructure, 
            we deliver comprehensive technology solutions that drive growth, 
            enhance security, and transform your digital presence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            custom={0.3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
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
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Rapid deployment with agile methodology",
              },
              {
                icon: Shield,
                title: "Secure Solutions",
                description: "Enterprise-grade security standards",
              },
              {
                icon: Globe,
                title: "Global Support",
                description: "24/7 technical assistance worldwide",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItemVariants}
                className="glass-card card-3d p-6 text-left group"
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3D Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 float rotate-12 flex items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-primary/30" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-1/4 right-10 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-xl bg-secondary border border-border float-delayed -rotate-12 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary/40" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-1/3 right-1/4 hidden lg:block"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 float rotate-45" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
