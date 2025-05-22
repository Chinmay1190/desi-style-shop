
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useCart } from '@/contexts/CartContext';
import { getProductById, formatPrice, getRelatedProducts } from '@/lib/data';
import { ShoppingCart, ArrowLeft, Check, ShoppingBag } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem, isInCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="text-muted-foreground mb-8">
            The product you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button onClick={() => navigate(-1)} variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Go back
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }
    
    addItem(product, quantity, selectedSize || undefined, selectedColor || undefined);
  };
  
  const handleQuantityChange = (value: number) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <ol className="flex items-center space-x-1">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-accent">
                Home
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link to={`/category/${product.category}`} className="text-muted-foreground hover:text-accent">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>
        
        <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-border bg-background">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-md overflow-hidden h-20 w-20 flex-shrink-0 border-2 ${
                      selectedImage === index ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div>
            {product.isNew && (
              <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                New Arrival
              </span>
            )}
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-bold">
                {formatPrice(product.price, product.currency)}
              </span>
              
              {product.discount && (
                <>
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.price + (product.price * product.discount / 100), product.currency)}
                  </span>
                  <span className="text-sm font-medium text-red-500">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            )}
            
            {/* Description */}
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm rounded-md border ${
                        selectedSize === size
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-input'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-sm rounded-md border ${
                        selectedColor === color
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-input'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-8">
              <h3 className="text-sm font-medium mr-4">Quantity</h3>
              <div className="flex border border-input rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="px-3 py-1 border-r border-input disabled:opacity-50"
                >
                  -
                </button>
                <span className="px-6 py-1 flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                  className="px-3 py-1 border-l border-input disabled:opacity-50"
                >
                  +
                </button>
              </div>
              <span className="ml-4 text-sm text-muted-foreground">
                {product.stock} available
              </span>
            </div>
            
            {/* Add to Cart Button */}
            <div className="flex space-x-4 mb-8">
              <Button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2"
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? (
                  <>
                    <Check size={18} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </Button>
              
              <Button
                variant="secondary"
                className="flex-1 flex items-center justify-center gap-2"
                asChild
              >
                <Link to="/checkout">
                  <ShoppingBag size={18} />
                  Buy Now
                </Link>
              </Button>
            </div>
            
            {/* Additional Information */}
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="p-4">
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </TabsContent>
              <TabsContent value="details" className="p-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Category:</strong> {product.category}</li>
                  <li><strong>Subcategory:</strong> {product.subcategory}</li>
                  {product.sizes && <li><strong>Available Sizes:</strong> {product.sizes.join(', ')}</li>}
                  {product.colors && <li><strong>Available Colors:</strong> {product.colors.join(', ')}</li>}
                  <li><strong>In Stock:</strong> {product.stock} units</li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="p-4">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {product.rating} out of 5
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on {product.reviewCount} reviews
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 animate-fade-in">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
