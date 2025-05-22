
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/data';
import { Trash2, ShoppingBag, X } from 'lucide-react';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } = useCart();
  
  const cartTotal = getCartTotal();
  const shippingCost = cartTotal > 0 ? (cartTotal > 5000 ? 0 : 150) : 0;
  const tax = Math.round(cartTotal * 0.18); // 18% GST
  const orderTotal = cartTotal + shippingCost + tax;
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center animate-fade-in">
          <ShoppingBag size={64} className="text-muted-foreground mb-6" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link to="/">Start Shopping</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            {/* Cart Items */}
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              <div className="p-6 flex justify-between items-center border-b border-border">
                <h2 className="text-xl font-medium">
                  Cart Items ({items.length})
                </h2>
                <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground">
                  <X size={16} className="mr-2" />
                  Clear All
                </Button>
              </div>
              
              <ul>
                {items.map((item) => (
                  <li key={item.product.id} className="border-b border-border last:border-0 p-6">
                    <div className="flex items-center">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link to={`/product/${item.product.id}`} className="hover:text-accent">
                                {item.product.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.selectedSize && <span>Size: {item.selectedSize}&nbsp;|&nbsp;</span>}
                              {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                            </p>
                            <p className="mt-1 text-sm font-medium">
                              {formatPrice(item.product.price, item.product.currency)}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex border border-input rounded-md">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="px-3 py-1 border-r border-input"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 flex items-center justify-center min-w-[40px]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                disabled={item.quantity >= item.product.stock}
                                className="px-3 py-1 border-l border-input"
                              >
                                +
                              </button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.product.id)}
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <Trash2 size={18} />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </div>
                        </div>
                        
                        <p className="mt-2 text-sm font-medium">
                          Subtotal: {formatPrice(item.product.price * item.quantity, item.product.currency)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Button variant="outline" asChild className="flex items-center gap-2">
                <Link to="/">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-background border border-border rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(cartTotal, "₹")}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  {shippingCost === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <span>{formatPrice(shippingCost, "₹")}</span>
                  )}
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (18% GST)</span>
                  <span>{formatPrice(tax, "₹")}</span>
                </div>
                
                {shippingCost > 0 && (
                  <div className="text-sm text-muted-foreground">
                    Free shipping on orders above ₹5,000
                  </div>
                )}
                
                <div className="border-t border-border pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(orderTotal, "₹")}</span>
                </div>
              </div>
              
              <Button className="w-full mt-6" size="lg" asChild>
                <Link to="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
              
              <p className="mt-4 text-sm text-muted-foreground text-center">
                Delivery time: 3-5 business days
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
