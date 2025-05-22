
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Add products with a staggered delay for a nice animation effect
    const timer = setTimeout(() => {
      setVisibleProducts([]);
      
      // Show products one by one with a small delay between each
      products.forEach((product, index) => {
        setTimeout(() => {
          setVisibleProducts(prev => [...prev, product]);
        }, index * 50); // 50ms delay between each product
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [products]);
  
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">{title}</h2>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {visibleProducts.map((product, index) => (
          <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
