
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { getProducts } from '@/lib/data';

const SalePage = () => {
  // Get products with discount
  const allProducts = getProducts();
  const saleProducts = allProducts.filter(product => product.discount && product.discount > 0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Sale Items</h1>
          
          {saleProducts.length > 0 ? (
            <ProductGrid products={saleProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No sale items available at the moment.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SalePage;
