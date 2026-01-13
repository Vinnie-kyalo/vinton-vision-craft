import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { MotionFadeUp, MotionScaleUp } from "@/components/ui/motion";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Michael Chen",
    role: "CTO, TechCorp Industries",
    content: "Vinton Technologies transformed our entire IT infrastructure. Their expertise in cloud migration saved us 40% on operational costs while improving our system reliability significantly.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Operations Director, Global Retail Co.",
    content: "The CCTV and security solutions they provided are exceptional. The team's professionalism and ongoing support have made them our trusted IT partner for over 5 years.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder, StartupHub",
    content: "From web development to hosting, Vinton Technologies delivered everything on time and within budget. Their attention to detail and technical expertise are unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "IT Manager, Healthcare Plus",
    content: "Their 24/7 support is truly world-class. Any issues we've had were resolved within hours. Vinton Technologies understands the critical nature of healthcare IT.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <div className="orb w-[400px] h-[400px] bottom-0 left-1/4 opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <MotionFadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our clients have to say about working with Vinton Technologies.
          </p>
        </MotionFadeUp>

        {/* Testimonials Carousel */}
        <MotionScaleUp className="max-w-4xl mx-auto">
          <div className="relative glass-card p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote with animation */}
              <div className="h-[120px] md:h-[100px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl text-foreground font-medium leading-relaxed"
                  >
                    "{testimonials[activeIndex].content}"
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="font-display font-bold text-primary text-lg">
                        {testimonials[activeIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-foreground">
                        {testimonials[activeIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </MotionScaleUp>
      </div>
    </section>
  );
};

export default TestimonialsSection;
