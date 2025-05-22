
import { Link } from 'react-router-dom';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem, isInCart } = useCart();
  const { id, name, price, currency, images, isNew, discount, rating, reviewCount } = product;
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    addItem(product, 1);
  };
  
  return (
    <Link 
      to={`/product/${id}`} 
      className="group relative block" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-sm hover-card card-hover-effect animate-fade-in transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={images[0]} 
            alt={name}
            className="product-image group-hover:scale-110 transition-all duration-700"
          />
          
          {/* Second image on hover */}
          {images.length > 1 && (
            <img 
              src={images[1]} 
              alt={`${name} - alternate view`}
              className={`absolute inset-0 product-image transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          )}
          
          {/* Bottom overlay for quick actions */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button 
              onClick={handleAddToCart}
              variant={isInCart(id) ? "secondary" : "default"}
              className="w-full text-sm gap-2 transition-all duration-300 hover:scale-105"
              size="sm"
            >
              <ShoppingCart size={16} className={isInCart(id) ? "" : "animate-bounce-once"} />
              {isInCart(id) ? 'Added' : 'Add to Cart'}
            </Button>
          </div>
          
          {/* Rating badge */}
          {rating && (
            <div className="absolute top-2 left-2 bg-black/60 text-white backdrop-blur-sm rounded-full px-2 py-1 text-xs flex items-center gap-1">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
              {reviewCount && <span className="text-gray-300 text-[10px]">({reviewCount})</span>}
            </div>
          )}
          
          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-2 right-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart 
              size={16} 
              className={`${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors duration-300`} 
            />
          </button>
          
          {/* Badges */}
          {isNew && <span className="badge-new animate-pulse">New</span>}
          {discount && <span className="badge-sale">{discount}% OFF</span>}
        </div>
        
        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-accent transition-colors duration-300">{name}</h3>
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
