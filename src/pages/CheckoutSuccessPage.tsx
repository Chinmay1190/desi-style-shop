
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, MapPin, Package, Truck } from 'lucide-react';
import { useAddress } from '@/contexts/AddressContext';
import confetti from 'canvas-confetti';

const CheckoutSuccessPage = () => {
  const { deliveryAddress } = useAddress();
  
  // Launch confetti when the page loads
  useEffect(() => {
    const launchConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    };
    
    launchConfetti();
    
    // Launch confetti again after a delay
    const timer = setTimeout(() => {
      launchConfetti();
    }, 700);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block p-3 rounded-full bg-green-100 dark:bg-green-900 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-300" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>
          
          {/* Order Status */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-6">Order Status</h2>
              
              <div className="relative">
                <div className="absolute left-[18px] top-0 h-full w-[2px] bg-muted"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="absolute -left-1 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="ml-12">
                      <h3 className="font-medium">Order Confirmed</h3>
                      <p className="text-sm text-muted-foreground mt-1">Your order has been received and is being processed.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute -left-1 h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <Package className="h-5 w-5" />
                    </div>
                    <div className="ml-12">
                      <h3 className="font-medium">Order Processing</h3>
                      <p className="text-sm text-muted-foreground mt-1">We're preparing your items for shipment.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute -left-1 h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div className="ml-12">
                      <h3 className="font-medium">Shipping</h3>
                      <p className="text-sm text-muted-foreground mt-1">Your items will be shipped soon.</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="absolute -left-1 h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-12">
                      <h3 className="font-medium">Delivery</h3>
                      <p className="text-sm text-muted-foreground mt-1">Your items will be delivered soon.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Delivery Address */}
          {deliveryAddress && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">Delivery Address</h2>
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">{deliveryAddress.firstName} {deliveryAddress.lastName}</p>
                  <p>{deliveryAddress.address}</p>
                  {deliveryAddress.apartment && <p>{deliveryAddress.apartment}</p>}
                  <p>{deliveryAddress.city}, {deliveryAddress.state} {deliveryAddress.pincode}</p>
                  <p>Phone: {deliveryAddress.phone}</p>
                  <p>Email: {deliveryAddress.email}</p>
                  {deliveryAddress.notes && (
                    <div className="mt-4">
                      <p className="font-medium">Delivery Notes:</p>
                      <p className="text-muted-foreground">{deliveryAddress.notes}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Estimated Delivery */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Estimated Delivery</h2>
                <Truck className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <div>
                <p className="font-medium text-lg">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-muted-foreground mt-1">
                  Your order is expected to arrive within 5-7 business days.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button asChild size="lg">
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutSuccessPage;
