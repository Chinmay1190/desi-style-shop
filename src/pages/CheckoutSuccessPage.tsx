
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ShoppingBag } from 'lucide-react';

const CheckoutSuccessPage = () => {
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  const orderDate = new Date().toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center animate-fade-in">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <Check size={32} className="text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-muted-foreground text-lg mb-8 text-center">
          Thank you for your purchase. We've received your order and will process it shortly.
        </p>
        
        <div className="bg-background border border-border rounded-lg p-8 w-full max-w-lg mb-8">
          <h2 className="text-xl font-medium mb-6">Order Details</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between pb-4 border-b border-border">
              <span className="text-muted-foreground">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            
            <div className="flex justify-between pb-4 border-b border-border">
              <span className="text-muted-foreground">Date:</span>
              <span>{orderDate}</span>
            </div>
            
            <div className="flex justify-between pb-4 border-b border-border">
              <span className="text-muted-foreground">Payment Method:</span>
              <span>Credit Card</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Delivery:</span>
              <span>3-5 business days</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/">
              Continue Shopping
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <Link to="/account/orders" className="flex items-center gap-2">
              <ShoppingBag size={18} />
              View Orders
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutSuccessPage;
