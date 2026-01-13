import { CheckCircle, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionSlideLeft, MotionSlideRight, MotionFadeUp, motion, staggerItemVariants, staggerContainerVariants } from "@/components/ui/motion";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "12+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
];

const highlights = [
  "Industry-leading security standards",
  "Certified IT professionals",
  "Customized solutions for every business",
  "Transparent pricing with no hidden fees",
];

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <MotionSlideLeft>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              About Vinton Technologies
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-gradient">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              For over a decade, Vinton Technologies has been at the forefront of 
              delivering innovative IT solutions to businesses of all sizes. We combine 
              cutting-edge technology with personalized service to help our clients 
              achieve their digital transformation goals.
            </p>

            {/* Highlights */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainerVariants}
              className="space-y-4 mb-8"
            >
              {highlights.map((item) => (
                <motion.li key={item} variants={staggerItemVariants} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <Link to="/about">
              <Button variant="hero" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </MotionSlideLeft>

          {/* Right Content - Stats & Visual */}
          <MotionSlideRight className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-3xl" />

            {/* Stats Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainerVariants}
              className="relative grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItemVariants}
                  className={`glass-card card-3d p-6 text-center ${
                    index % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <div className="font-display text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Badge */}
            <MotionFadeUp delay={0.4} className="absolute -top-6 -right-6">
              <div className="glass-card pulse-glow p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">ISO Certified</div>
                    <div className="text-xs text-muted-foreground">Quality Assured</div>
                  </div>
                </div>
              </div>
            </MotionFadeUp>
          </MotionSlideRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
