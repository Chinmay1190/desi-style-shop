
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { getProductsByCategory } from '@/lib/data';
import { Product, ProductCategory } from '@/lib/types';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    if (category) {
      const categoryProducts = getProductsByCategory(category as ProductCategory);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
      
      // Reset filters when category changes
      setPriceRange([0, 10000]);
      setSelectedSubcategories([]);
      setSelectedSizes([]);
    }
  }, [category]);
  
  useEffect(() => {
    if (products.length) {
      let filtered = [...products];
      
      // Filter by price
      filtered = filtered.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      
      // Filter by subcategory
      if (selectedSubcategories.length > 0) {
        filtered = filtered.filter((product) => selectedSubcategories.includes(product.subcategory));
      }
      
      // Filter by size
      if (selectedSizes.length > 0) {
        filtered = filtered.filter(
          (product) => product.sizes?.some(size => selectedSizes.includes(size))
        );
      }
      
      setFilteredProducts(filtered);
    }
  }, [products, priceRange, selectedSubcategories, selectedSizes]);
  
  // Get unique subcategories
  const subcategories = [...new Set(products.map((product) => product.subcategory))];
  
  // Get unique sizes
  const sizes = [...new Set(products.flatMap((product) => product.sizes || []))];
  
  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory)
        : [...prev, subcategory]
    );
  };
  
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size]
    );
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };
  
  const clearFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedSubcategories([]);
    setSelectedSizes([]);
  };
  
  const getCategoryTitle = () => {
    switch (category) {
      case 'men':
        return "Men's Collection";
      case 'women':
        return "Women's Collection";
      case 'kids':
        return "Kids' Collection";
      case 'accessories':
        return "Accessories";
      case 'footwear':
        return "Footwear";
      case 'home':
        return "Home & Living";
      case 'beauty':
        return "Beauty Products";
      case 'sports':
        return "Sports & Fitness";
      default:
        return "Products";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{getCategoryTitle()}</h1>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline" className="w-full">
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Filters */}
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
              
              {/* Subcategories */}
              {subcategories.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-2">Subcategories</h3>
                  <div className="space-y-2">
                    {subcategories.map((subcategory) => (
                      <div key={subcategory} className="flex items-center">
                        <Checkbox
                          id={`subcategory-${subcategory}`}
                          checked={selectedSubcategories.includes(subcategory)}
                          onCheckedChange={() => toggleSubcategory(subcategory)}
                        />
                        <label
                          htmlFor={`subcategory-${subcategory}`}
                          className="ml-2 text-sm capitalize"
                        >
                          {subcategory}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sizes */}
              {sizes.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-2">Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-3 py-1 text-sm rounded-md border ${selectedSizes.includes(size)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background border-input'
                          }`}
                        onClick={() => toggleSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
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

export default CategoryPage;
