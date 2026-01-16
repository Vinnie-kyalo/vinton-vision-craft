import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Your Cart ({totalItems} items)
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 rounded-2xl bg-secondary/50 flex items-center justify-center mb-4">
              <ShoppingCart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-6">Add products to request a quote</p>
            <Button variant="heroOutline" onClick={() => setIsOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
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
                    <p className="font-display font-semibold text-primary">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
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
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-xl font-bold text-gradient">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Final pricing may vary based on configuration and volume discounts.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={clearCart} className="flex-1">
                  Clear Cart
                </Button>
                <Link to="/quote" className="flex-1" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full group">
                    Request Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
