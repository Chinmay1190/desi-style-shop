
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts, getNewArrivals } from '@/lib/data';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop" 
              alt="Hero Fashion" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-lg animate-fade-in">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                New Season Arrivals
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Discover the latest trends in fashion and get up to 30% off on your first order.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/category/women">Shop Women</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30" asChild>
                  <Link to="/category/men">Shop Men</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Men", image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1287&auto=format&fit=crop", link: "/category/men" },
              { name: "Women", image: "https://images.unsplash.com/photo-1568252542512-9fe8fe6c5fc7?q=80&w=1319&auto=format&fit=crop", link: "/category/women" },
              { name: "Kids", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1372&auto=format&fit=crop", link: "/category/kids" },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1287&auto=format&fit=crop", link: "/category/accessories" },
            ].map((category) => (
              <Link 
                key={category.name} 
                to={category.link}
                className="group relative h-60 overflow-hidden rounded-lg animate-fade-in"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/featured" className="text-accent hover:underline">View All</Link>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </section>
        
        {/* Banner */}
        <section className="bg-muted py-16 my-12 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">Limited Time Offer</span>
                  <h2 className="text-3xl font-bold mb-4">Special Discount</h2>
                  <p className="text-muted-foreground mb-6">Get up to 50% off on selected items. Hurry, offer valid till stocks last!</p>
                  <Button className="w-fit" asChild>
                    <Link to="/sale">Shop Now</Link>
                  </Button>
                </div>
                <div className="relative h-60 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1470&auto=format&fit=crop" 
                    alt="Special Offer" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Arrivals */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <Link to="/new-arrivals" className="text-accent hover:underline">View All</Link>
          </div>
          
          <ProductGrid products={newArrivals} />
        </section>
        
        {/* Testimonials */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                review: "I'm extremely satisfied with my purchase. The quality of the clothes is excellent and the delivery was faster than expected!",
                rating: 5
              },
              {
                name: "Rahul Patel",
                review: "Great collection of products at reasonable prices. The size guide was very accurate, and customer service was excellent.",
                rating: 4
              },
              {
                name: "Anita Desai",
                review: "StyleHub has become my go-to store for fashion. The quality and designs are top-notch, and returns are hassle-free.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 animate-fade-in">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.review}</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
