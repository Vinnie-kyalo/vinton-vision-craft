import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Star, 
  ArrowLeft, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Truck,
  Headphones 
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { getProductById, getRelatedProducts, Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const product = id ? getProductById(parseInt(id)) : undefined;
  const relatedProducts = product ? getRelatedProducts(product) : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Product Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate("/products")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.images[0],
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const isInCart = items.some((item) => item.id === product.id);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-primary transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square glass-card overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIndex}
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Stock Badge */}
                {!product.inStock && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-medium">
                    Out of Stock
                  </div>
                )}
              </div>
              
              {/* Thumbnail Strip */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index
                          ? "border-primary"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-foreground font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Price */}
              <div className="py-6 border-y border-border">
                <span className="font-display text-4xl font-bold text-gradient">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground ml-2">excl. VAT</span>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant={isInCart ? "default" : "hero"}
                  size="lg"
                  className="flex-1"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  {isInCart ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Warranty</p>
                    <p className="text-xs text-muted-foreground">Full Coverage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30">
                  <Truck className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30">
                  <Headphones className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">24/7 Support</p>
                    <p className="text-xs text-muted-foreground">Expert assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Technical Specifications
          </h2>
          <div className="glass-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.fullSpecs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center py-4 ${
                    index < product.fullSpecs.length - 2 ? "border-b border-border/50" : ""
                  }`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

const RelatedProductCard = ({ product }: { product: Product }) => {
  const { addItem, items } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.images[0],
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const isInCart = items.some((item) => item.id === product.id);

  return (
    <Link
      to={`/products/${product.id}`}
      className="glass-card card-3d group overflow-hidden block"
    >
      <div className="relative h-40 bg-gradient-to-br from-secondary to-muted/50 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-primary text-primary" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
        </div>
        <h3 className="font-medium text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-gradient">
            ${product.price.toLocaleString()}
          </span>
          <Button
            variant={isInCart ? "default" : "ghost"}
            size="icon"
            className="w-8 h-8"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {isInCart ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductDetail;
