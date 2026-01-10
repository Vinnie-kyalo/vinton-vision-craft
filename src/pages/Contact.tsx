import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, Phone, MapPin, Clock, Send, 
  CheckCircle, ArrowRight, MessageSquare
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-890",
      subContent: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@vintontech.com",
      subContent: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Tech Street, Suite 100",
      subContent: "Silicon Valley, CA 94000",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      subContent: "9:00 AM - 6:00 PM EST",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="orb w-[500px] h-[500px] -top-32 -right-32" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Let's Start a{" "}
                <span className="text-gradient">Conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or need IT support? Get in touch with our 
                team and we'll help you find the right solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((item) => (
                <div key={item.title} className="glass-card card-3d p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground">{item.content}</p>
                  <p className="text-sm text-muted-foreground">{item.subContent}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">Send Us a Message</h2>
                    <p className="text-sm text-muted-foreground">Fill out the form and we'll get back to you</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`bg-secondary/50 border-border ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`bg-secondary/50 border-border ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Phone
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={`bg-secondary/50 border-border ${errors.subject ? 'border-destructive' : ''}`}
                    />
                    {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      className={`bg-secondary/50 border-border resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Map & Quick Info */}
              <div className="space-y-6">
                {/* Map Placeholder */}
                <div className="glass-card h-80 bg-gradient-to-br from-secondary to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  <div className="text-center relative z-10">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground font-medium">123 Tech Street, Suite 100</p>
                    <p className="text-sm text-muted-foreground">Silicon Valley, CA 94000</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="glass-card p-6">
                  <h3 className="font-display font-semibold text-foreground mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Free initial consultation",
                      "Response within 24 hours",
                      "Dedicated project manager",
                      "Flexible engagement models",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emergency Support */}
                <div className="glass-card p-6 border-primary/20">
                  <h3 className="font-display font-semibold text-foreground mb-2">24/7 Emergency Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Critical IT issues? Our emergency support team is available around the clock.
                  </p>
                  <a href="tel:+1234567899">
                    <Button variant="heroOutline" className="w-full">
                      <Phone className="w-4 h-4" />
                      +1 (234) 567-899
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">Quick answers to common questions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope. Small projects typically take 2-4 weeks, while larger enterprise solutions may take 2-6 months.",
                },
                {
                  q: "Do you offer ongoing support?",
                  a: "Yes, we offer flexible support packages including 24/7 monitoring, maintenance, and dedicated support teams.",
                },
                {
                  q: "What industries do you serve?",
                  a: "We serve all industries including healthcare, finance, retail, manufacturing, education, and more.",
                },
                {
                  q: "How do you handle data security?",
                  a: "We follow industry best practices including encryption, regular audits, and compliance with GDPR, HIPAA, and other standards.",
                },
              ].map((faq) => (
                <div key={faq.q} className="glass-card p-6">
                  <h4 className="font-display font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
