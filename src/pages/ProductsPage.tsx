
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { products } from '@/lib/data';
import { ProductCategory } from '@/lib/types';
import { Filter, ArrowDownUp, ChevronDown, ChevronUp } from 'lucide-react';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState<string>('');
  const [showSortOptions, setShowSortOptions] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by price
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category));
    }
    
    // Apply sorting
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortOption === 'newest') {
      result = result.filter(product => product.isNew).concat(result.filter(product => !product.isNew));
    }
    
    setFilteredProducts(result);
  }, [priceRange, selectedCategories, sortOption]);
  
  // Get unique categories
  const categories: ProductCategory[] = [...new Set(products.map((product) => product.category))];
  
  const toggleCategory = (category: ProductCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };
  
  const clearFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedCategories([]);
    setSortOption('');
  };
  
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'men':
        return "Men's";
      case 'women':
        return "Women's";
      case 'kids':
        return "Kids'";
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };
  
  const getSortLabel = () => {
    switch (sortOption) {
      case 'price-asc':
        return 'Price: Low to High';
      case 'price-desc':
        return 'Price: High to Low';
      case 'rating':
        return 'Best Rated';
      case 'newest':
        return 'Newest First';
      default:
        return 'Sort By';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">All Products</h1>
            
            <div className="flex flex-wrap gap-2">
              {/* Category quick links */}
              {categories.map((category) => (
                <Link 
                  key={category} 
                  to={`/category/${category}`} 
                  className="inline-block px-3 py-1 rounded-full bg-muted hover:bg-muted/80 text-sm transition-colors"
                >
                  {getCategoryLabel(category)}
                </Link>
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground mt-2">
            Showing {filteredProducts.length} products
          </p>
        </div>
        
        {/* Sorting & Filter controls (mobile) */}
        <div className="flex gap-2 mb-4 md:hidden">
          <Button 
            variant="outline" 
            className="flex-1 flex gap-2 items-center justify-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
            Filters
          </Button>
          
          <div className="relative flex-1">
            <Button 
              variant="outline" 
              className="w-full flex gap-2 items-center justify-center"
              onClick={() => setShowSortOptions(!showSortOptions)}
            >
              <ArrowDownUp size={18} />
              {getSortLabel()}
              {showSortOptions ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
            
            {showSortOptions && (
              <div className="absolute top-full mt-1 left-0 right-0 bg-background border border-border rounded-md p-2 z-10 shadow-md">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start mb-1" 
                  onClick={() => {setSortOption('price-asc'); setShowSortOptions(false);}}
                >
                  Price: Low to High
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start mb-1" 
                  onClick={() => {setSortOption('price-desc'); setShowSortOptions(false);}}
                >
                  Price: High to Low
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start mb-1" 
                  onClick={() => {setSortOption('rating'); setShowSortOptions(false);}}
                >
                  Best Rated
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => {setSortOption('newest'); setShowSortOptions(false);}}
                >
                  Newest First
                </Button>
              </div>
            )}
          </div>
        </div>
        
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters - Desktop */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:col-span-1 animate-fade-in`}>
            <div className="bg-background border border-border rounded-lg p-6 sticky top-20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium">Filters</h2>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-4">Price Range</h3>
                <Slider
                  value={priceRange}
                  min={0}
                  max={10000}
                  step={100}
                  onValueChange={handlePriceChange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm capitalize"
                      >
                        {getCategoryLabel(category)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sort Options - Desktop */}
              <div className="hidden lg:block">
                <h3 className="text-sm font-medium mb-2">Sort By</h3>
                <div className="space-y-2 mt-2">
                  <Button 
                    variant={sortOption === 'price-asc' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm" 
                    onClick={() => setSortOption('price-asc')}
                  >
                    Price: Low to High
                  </Button>
                  <Button 
                    variant={sortOption === 'price-desc' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm" 
                    onClick={() => setSortOption('price-desc')}
                  >
                    Price: High to Low
                  </Button>
                  <Button 
                    variant={sortOption === 'rating' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm" 
                    onClick={() => setSortOption('rating')}
                  >
                    Best Rated
                  </Button>
                  <Button 
                    variant={sortOption === 'newest' ? 'default' : 'ghost'} 
                    className="w-full justify-start" 
                    size="sm" 
                    onClick={() => setSortOption('newest')}
                  >
                    Newest First
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="flex flex-col items-center justify-center py-12 bg-background border border-border rounded-lg">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
