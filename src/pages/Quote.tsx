import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  ShoppingCart, ArrowLeft, Trash2, Minus, Plus, 
  Send, CheckCircle, Mail, Phone, Building2 
} from "lucide-react";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const Quote = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add products before requesting a quote.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const validatedData = quoteSchema.parse(formData);
      
      // Build the message with cart items
      const cartSummary = items
        .map((item) => `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}`)
        .join("\n");
      
      const fullMessage = `
QUOTE REQUEST

Products:
${cartSummary}

Estimated Total: $${totalPrice.toLocaleString()}

Additional Notes:
${validatedData.message || "No additional notes"}
      `.trim();

      // Submit to contact_submissions table
      const { error } = await supabase.from("contact_submissions").insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        company: validatedData.company || null,
        subject: `Quote Request - ${items.length} product(s) - $${totalPrice.toLocaleString()}`,
        message: fullMessage,
      });

      if (error) throw error;

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with pricing details.",
      });

      clearCart();
      navigate("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof QuoteFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof QuoteFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Failed to submit quote request. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Request Quote
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Get Your{" "}
                <span className="text-gradient">Custom Quote</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Review your selected products and submit your details. 
                We'll get back to you with personalized pricing within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {items.length === 0 ? (
              <div className="max-w-md mx-auto text-center py-20">
                <div className="w-24 h-24 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground mb-8">
                  Add products to your cart before requesting a quote.
                </p>
                <Button variant="hero" onClick={() => navigate("/products")}>
                  <ArrowLeft className="w-4 h-4" />
                  Browse Products
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Cart Summary */}
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Your Products ({items.length})
                    </h2>
                    <Button variant="ghost" size="sm" onClick={() => navigate("/products")}>
                      <ArrowLeft className="w-4 h-4" />
                      Add More
                    </Button>
                  </div>

                  <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border border-border/50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm line-clamp-2 mb-1">
                            {item.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">{item.category}</p>
                          <div className="flex items-center justify-between">
                            <p className="font-display font-semibold text-primary">
                              ${(item.price * item.quantity).toLocaleString()}
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 bg-secondary rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-1.5 hover:bg-primary/10 rounded-l-lg transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-2 text-sm font-medium min-w-[24px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1.5 hover:bg-primary/10 rounded-r-lg transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">Estimated Total</span>
                      <span className="font-display text-2xl font-bold text-gradient">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Final pricing may include volume discounts, shipping, and taxes.
                    </p>
                  </div>
                </div>

                {/* Quote Form */}
                <div className="glass-card p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    Your Contact Details
                  </h2>

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
                          placeholder="john@company.com"
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
                          placeholder="+254 700 000 000"
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
                        Additional Notes
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any specific requirements, configurations, or questions..."
                        rows={4}
                        className="bg-secondary/50 border-border resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Request..."
                      ) : (
                        <>
                          Submit Quote Request
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Benefits */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { icon: CheckCircle, text: "Response within 24 hours" },
                        { icon: CheckCircle, text: "Volume discounts available" },
                        { icon: CheckCircle, text: "Free consultation included" },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
