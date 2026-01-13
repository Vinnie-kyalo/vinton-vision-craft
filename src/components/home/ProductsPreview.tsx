import { ShoppingCart, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MotionFadeUp, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/motion";

const products = [
  {
    name: "Enterprise Server Pro",
    category: "Servers",
    price: "$2,499",
    rating: 4.9,
    image: "server",
    description: "High-performance rack server for enterprise workloads",
  },
  {
    name: "Smart CCTV System",
    category: "Security",
    price: "$899",
    rating: 4.8,
    image: "cctv",
    description: "AI-powered surveillance with 4K resolution",
  },
  {
    name: "Business Laptop Elite",
    category: "Laptops",
    price: "$1,299",
    rating: 4.7,
    image: "laptop",
    description: "Professional laptop with premium build quality",
  },
  {
    name: "Network Switch 48-Port",
    category: "Networking",
    price: "$649",
    rating: 4.9,
    image: "switch",
    description: "Managed Gigabit switch for enterprise networks",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <MotionFadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              IT Products
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Premium Hardware Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover our curated selection of enterprise-grade IT equipment, 
              from servers to security systems.
            </p>
          </div>
          <Link to="/products">
            <Button variant="heroOutline" size="lg" className="group">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </MotionFadeUp>

        {/* Products Grid */}
        <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <MotionStaggerItem key={product.name}>
              <div className="glass-card card-3d group overflow-hidden h-full">
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-secondary to-muted/50 flex items-center justify-center overflow-hidden">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-xl bg-primary/20" />
                  </div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  </div>

                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-gradient">
                      {product.price}
                    </span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </section>
  );
};

export default ProductsPreview;
