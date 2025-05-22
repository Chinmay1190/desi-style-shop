
import { Link } from 'react-router-dom';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, isInCart } = useCart();
  const { id, name, price, currency, images, isNew, discount } = product;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    addItem(product, 1);
  };
  
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-background border border-border hover-card card-hover-effect animate-fade-in">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={images[0]} 
            alt={name}
            className="product-image group-hover:scale-105"
          />
          
          {/* Bottom overlay for quick actions */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button 
              onClick={handleAddToCart}
              variant={isInCart(id) ? "secondary" : "default"}
              className="w-full text-sm gap-2"
              size="sm"
            >
              <ShoppingCart size={16} />
              {isInCart(id) ? 'Added' : 'Add to Cart'}
            </Button>
          </div>
          
          {/* Badges */}
          {isNew && <span className="badge-new">New</span>}
          {discount && <span className="badge-sale">{discount}% OFF</span>}
        </div>
        
        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-2 mb-1">{name}</h3>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">
              {formatPrice(price, currency)}
              
              {discount && (
                <span className="ml-2 text-xs text-muted-foreground line-through">
                  {formatPrice(price + (price * discount / 100), currency)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
