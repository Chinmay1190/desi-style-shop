
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '@/lib/types';
import { toast } from '@/components/ui/use-toast';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  getCartCount: () => number;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1, selectedSize?: string, selectedColor?: string) => {
    setItems(prev => {
      // Check if the item already exists in cart
      const existingItemIndex = prev.findIndex(item => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += quantity;
        if (selectedSize) updatedItems[existingItemIndex].selectedSize = selectedSize;
        if (selectedColor) updatedItems[existingItemIndex].selectedColor = selectedColor;
        
        toast({
          title: "Cart updated",
          description: `${product.name} quantity updated in cart.`,
        });
        
        return updatedItems;
      } else {
        // Item doesn't exist, add new item
        toast({
          title: "Added to cart",
          description: `${product.name} added to your cart.`,
        });
        
        return [...prev, { product, quantity, selectedSize, selectedColor }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(prev => {
      const updatedItems = prev.filter(item => item.product.id !== productId);
      return updatedItems;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems(prev => {
      return prev.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const isInCart = (productId: string) => {
    return items.some(item => item.product.id === productId);
  };

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isInCart,
      getCartCount,
      getCartTotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
