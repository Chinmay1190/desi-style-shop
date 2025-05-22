
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useCart } from '@/contexts/CartContext';
import { Search, Menu, ShoppingCart, X, User } from 'lucide-react';

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const cartCount = getCartCount();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 transition-all duration-200 animate-fade-in">
      <div className="container px-4 mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          StyleHub
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="px-1 py-2 hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/products" className="px-1 py-2 hover:text-accent transition-colors">
            Products
          </Link>
          <Link to="/category/men" className="px-1 py-2 hover:text-accent transition-colors">
            Men
          </Link>
          <Link to="/category/women" className="px-1 py-2 hover:text-accent transition-colors">
            Women
          </Link>
          <Link to="/category/kids" className="px-1 py-2 hover:text-accent transition-colors">
            Kids
          </Link>
          <Link to="/category/accessories" className="px-1 py-2 hover:text-accent transition-colors">
            Accessories
          </Link>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button onClick={toggleSearch} variant="ghost" size="icon" className="relative">
            <Search size={20} />
          </Button>
          
          <ThemeToggle />
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
          </Link>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground rounded-full">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border py-4 px-4 animate-slide-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="px-1 py-2 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="px-1 py-2 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/category/men" className="px-1 py-2 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Men
            </Link>
            <Link to="/category/women" className="px-1 py-2 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Women
            </Link>
            <Link to="/category/kids" className="px-1 py-2 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Kids
            </Link>
            <Link to="/category/accessories" className="px-1 py-2 hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Accessories
            </Link>
          </nav>
        </div>
      )}
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-background border-t border-border p-4 shadow-lg animate-fade-in">
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="flex-1 p-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              autoFocus
            />
            <Button onClick={toggleSearch} variant="ghost" className="ml-2">
              <X size={20} />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
