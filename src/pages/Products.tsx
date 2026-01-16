import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Filter, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

// Product images
import serverImg from "@/assets/products/server.jpg";
import cctvImg from "@/assets/products/cctv.jpg";
import laptopImg from "@/assets/products/laptop.jpg";
import switchImg from "@/assets/products/switch.jpg";
import accessPointImg from "@/assets/products/access-point.jpg";
import nvrImg from "@/assets/products/nvr.jpg";
import towerServerImg from "@/assets/products/tower-server.jpg";
import dockingStationImg from "@/assets/products/docking-station.jpg";

const categories = ["All", "Servers", "Security", "Networking", "Laptops", "Accessories"];

const products = [
  {
    id: 1,
    name: "Enterprise Server Pro X500",
    category: "Servers",
    price: 2499,
    rating: 4.9,
    reviews: 128,
    description: "High-performance rack server designed for enterprise workloads with redundant power and advanced cooling.",
    specs: ["Intel Xeon Scalable", "128GB DDR4 ECC", "4TB NVMe SSD", "Dual PSU"],
    inStock: true,
    image: serverImg,
  },
  {
    id: 2,
    name: "AI-Powered CCTV System 4K",
    category: "Security",
    price: 899,
    rating: 4.8,
    reviews: 256,
    description: "Smart surveillance system with AI-powered motion detection, facial recognition, and 4K resolution.",
    specs: ["4K Ultra HD", "Night Vision", "AI Detection", "Cloud Storage"],
    inStock: true,
    image: cctvImg,
  },
  {
    id: 3,
    name: "Business Laptop Elite 15",
    category: "Laptops",
    price: 1299,
    rating: 4.7,
    reviews: 312,
    description: "Premium business laptop with military-grade durability and all-day battery life.",
    specs: ["Intel Core i7", "16GB RAM", "512GB SSD", "15.6\" FHD"],
    inStock: true,
    image: laptopImg,
  },
  {
    id: 4,
    name: "Managed Switch 48-Port PoE+",
    category: "Networking",
    price: 649,
    rating: 4.9,
    reviews: 89,
    description: "Enterprise-grade managed Gigabit switch with PoE+ support for all 48 ports.",
    specs: ["48x GbE Ports", "4x 10G SFP+", "740W PoE Budget", "L3 Managed"],
    inStock: true,
    image: switchImg,
  },
  {
    id: 5,
    name: "Wireless Access Point Pro",
    category: "Networking",
    price: 349,
    rating: 4.6,
    reviews: 167,
    description: "High-density WiFi 6E access point with seamless roaming and mesh capability.",
    specs: ["WiFi 6E", "2.5GbE", "Mesh Ready", "Cloud Managed"],
    inStock: false,
    image: accessPointImg,
  },
  {
    id: 6,
    name: "NVR Security Recorder 16CH",
    category: "Security",
    price: 599,
    rating: 4.8,
    reviews: 145,
    description: "16-channel network video recorder with AI analytics and 8TB storage capacity.",
    specs: ["16 Channels", "8TB Storage", "4K Playback", "Remote Access"],
    inStock: true,
    image: nvrImg,
  },
  {
    id: 7,
    name: "Tower Server Workstation",
    category: "Servers",
    price: 1899,
    rating: 4.7,
    reviews: 78,
    description: "Compact tower server perfect for small business and remote office deployments.",
    specs: ["Intel Xeon E", "64GB DDR4", "2TB RAID", "Quiet Operation"],
    inStock: true,
    image: towerServerImg,
  },
  {
    id: 8,
    name: "USB-C Docking Station Pro",
    category: "Accessories",
    price: 199,
    rating: 4.5,
    reviews: 423,
    description: "Universal USB-C docking station with dual 4K display support and 100W power delivery.",
    specs: ["Dual 4K@60Hz", "100W PD", "USB 3.2 Gen 2", "SD Card Reader"],
    inStock: true,
    image: dockingStationImg,
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="orb w-[500px] h-[500px] -top-32 right-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                IT Products
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Premium IT{" "}
                <span className="text-gradient">Hardware Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade servers, security systems, networking equipment, 
                and accessories from trusted brands.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50 border-border"
                />
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
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
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="glass-card card-3d group overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-secondary to-muted/50 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                        {product.category}
                      </span>
                      {!product.inStock && (
                        <span className="px-3 py-1 rounded-full bg-destructive/80 backdrop-blur-sm text-xs font-medium text-destructive-foreground">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm font-medium text-foreground">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.specs.slice(0, 2).map((spec) => (
                        <span key={spec} className="px-2 py-1 rounded bg-secondary/50 text-xs text-muted-foreground">
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl font-bold text-gradient">
                        ${product.price.toLocaleString()}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group/btn"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Need Custom Solutions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact our team for bulk orders, custom configurations, or enterprise quotes.
              </p>
              <Button variant="hero" size="lg" className="group">
                Request Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
