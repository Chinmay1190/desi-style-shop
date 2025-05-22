
export type ProductCategory = 
  | "men" 
  | "women" 
  | "kids" 
  | "accessories" 
  | "footwear"
  | "home"
  | "beauty"
  | "sports";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: ProductCategory;
  subcategory: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
  stock: number;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
