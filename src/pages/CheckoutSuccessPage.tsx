
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ShoppingBag, PartyPopper, Package, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

const CheckoutSuccessPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    
    const confettiAnimation = () => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) return;
      
      const particleCount = 50 * (timeLeft / duration);
      
      // Launch confetti from both sides
      confetti({
        particleCount,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0, 0.3), y: randomInRange(0.2, 0.4) },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'],
        disableForReducedMotion: true
      });
      
      confetti({
        particleCount,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0.7, 1), y: randomInRange(0.2, 0.4) },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'],
        disableForReducedMotion: true
      });
      
      requestAnimationFrame(confettiAnimation);
    };
    
    // Start the animation
    requestAnimationFrame(confettiAnimation);
    
    // Set up the step animation
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev < 3 ? prev + 1 : prev));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const steps = [
    { icon: <Check className="text-white" size={24} />, label: "Order Confirmed", color: "bg-green-500" },
    { icon: <Package className="text-white" size={24} />, label: "Processing", color: "bg-blue-500" },
    { icon: <Truck className="text-white" size={24} />, label: "Shipping", color: "bg-purple-500" },
    { icon: <PartyPopper className="text-white" size={24} />, label: "Delivery", color: "bg-amber-500" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-16 flex flex-col items-center animate-fade-in">
        <div className="w-full max-w-3xl">
          {/* Success header with animation */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mx-auto mb-6 animate-scale-in">
              <PartyPopper size={48} className="text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Thank You for Your Order!
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              We're thrilled to confirm your order and can't wait for you to receive your items.
            </p>
          </div>
          
          {/* Order progress */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2"></div>
            
            <div className="flex justify-between relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full ${currentStep >= index ? step.color : 'bg-muted'} flex items-center justify-center transition-all duration-500 ${currentStep === index ? 'scale-125' : ''}`}>
                    {step.icon}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${currentStep >= index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order details */}
          <div className="bg-background border border-border rounded-lg overflow-hidden shadow-lg mb-8">
            <div className="bg-muted p-6 border-b border-border">
              <h2 className="text-2xl font-semibold">Order Details</h2>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Order Number</h3>
                  <p className="text-lg font-medium">{orderNumber}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Order Date</h3>
                  <p className="text-lg">{orderDate}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Payment Method</h3>
                  <p className="text-lg">Credit Card</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Estimated Delivery</h3>
                  <p className="text-lg">3-5 business days</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Delivery Address</h3>
                <address className="not-italic">
                  123 Main Street<br />
                  Apartment 4B<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </address>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                Continue Shopping
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="gap-2">
              <Link to="/products">
                <ShoppingBag size={18} />
                Browse More Products
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutSuccessPage;
