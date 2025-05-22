
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft, CreditCard, BadgeIndianRupee, Info } from 'lucide-react';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const cartTotal = getCartTotal();
  const shippingCost = cartTotal > 0 ? (cartTotal > 5000 ? 0 : 150) : 0;
  const tax = Math.round(cartTotal * 0.18); // 18% GST
  const orderTotal = cartTotal + shippingCost + tax;
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some items to your cart before checking out.
          </p>
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Your order has been placed and will be processed shortly.",
      });
      
      // Clear cart and navigate to success page
      clearCart();
      navigate('/checkout-success');
      
      setIsSubmitting(false);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <div className="flex items-center">
            <div className={`h-2 w-2/4 ${step === 1 ? 'bg-accent' : 'bg-muted'} rounded-l-full`} />
            <div className={`h-2 w-2/4 ${step === 2 ? 'bg-accent' : 'bg-muted'} rounded-r-full`} />
          </div>
        </div>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="bg-background border border-border rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="johndoe@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="9876543210"
                        required
                        className="mt-1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        For delivery updates
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="apartment">Apartment, Suite, etc. (optional)</Label>
                      <Input
                        id="apartment"
                        placeholder="Apartment 1A"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Mumbai"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          placeholder="Maharashtra"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input
                          id="pincode"
                          placeholder="400001"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Order Notes (optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any specific instructions for delivery"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-background border border-border rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-medium mb-6">Payment Method</h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-2 border border-input rounded-md p-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2">
                        <CreditCard size={20} />
                        <div>
                          <span className="font-medium">Credit/Debit Card</span>
                          <p className="text-sm text-muted-foreground">Pay securely using your card</p>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border border-input rounded-md p-4">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex items-center gap-2">
                        <BadgeIndianRupee size={20} />
                        <div>
                          <span className="font-medium">UPI Payment</span>
                          <p className="text-sm text-muted-foreground">Pay using UPI apps like Google Pay, PhonePe, etc.</p>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 border border-input rounded-md p-4">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center gap-2">
                        <Info size={20} />
                        <div>
                          <span className="font-medium">Cash on Delivery</span>
                          <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'card' && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            type="password"
                            placeholder="123"
                            required
                            maxLength={4}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'upi' && (
                    <div className="mt-6">
                      <Label htmlFor="upiId">UPI ID</Label>
                      <Input
                        id="upiId"
                        placeholder="example@upi"
                        required
                        className="mt-1"
                      />
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex justify-between">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    Back to Shipping
                  </Button>
                )}
                
                <Button
                  type="submit"
                  className={step === 1 ? 'ml-auto' : ''}
                  disabled={isSubmitting}
                >
                  {step === 1 ? 'Continue to Payment' : 'Place Order'}
                  {isSubmitting && <span className="ml-2 animate-spin">◌</span>}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-background border border-border rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="max-h-60 overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center py-2">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-border">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-sm font-medium">
                              {item.product.name}
                            </h3>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Qty: {item.quantity}
                              {item.selectedSize && <span> | Size: {item.selectedSize}</span>}
                              {item.selectedColor && <span> | Color: {item.selectedColor}</span>}
                            </p>
                          </div>
                          <p className="text-sm font-medium">
                            {formatPrice(item.product.price * item.quantity, item.product.currency)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-4 space-y-4">
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
                  
                  <div className="border-t border-border pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPrice(orderTotal, "₹")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
