
import { Product, ProductCategory } from "./types";

export const products: Product[] = [
  // Men's Clothing
  {
    id: "men-shirt-1",
    name: "Classic Fit Cotton Shirt",
    description: "A versatile cotton shirt perfect for any occasion with breathable fabric and modern fit.",
    price: 1499,
    currency: "₹",
    category: "men",
    subcategory: "shirts",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1025&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Black"],
    stock: 50,
    isFeatured: true,
    rating: 4.5,
    reviewCount: 124,
  },
  {
    id: "men-tshirt-1",
    name: "Premium Cotton T-Shirt",
    description: "Ultra-soft premium cotton t-shirt with a comfortable fit and stylish design.",
    price: 999,
    currency: "₹",
    category: "men",
    subcategory: "t-shirts",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"],
    discount: 10,
    stock: 75,
    rating: 4.3,
    reviewCount: 98,
  },
  {
    id: "men-jeans-1",
    name: "Slim Fit Denim Jeans",
    description: "Modern slim fit jeans with stretch comfort and premium denim fabric.",
    price: 2499,
    currency: "₹",
    category: "men",
    subcategory: "jeans",
    images: [
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Blue", "Black", "Grey"],
    stock: 40,
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: "men-jacket-1",
    name: "Lightweight Bomber Jacket",
    description: "Stylish bomber jacket with a lightweight design, perfect for layering in transitional weather.",
    price: 3999,
    currency: "₹",
    category: "men",
    subcategory: "jackets",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552641156-93ea2a5f78e2?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Navy"],
    stock: 30,
    isNew: true,
    rating: 4.7,
    reviewCount: 45,
  },
  {
    id: "men-formal-1",
    name: "Classic Fit Suit Blazer",
    description: "Elegant suit blazer with a tailored fit, perfect for formal occasions.",
    price: 5999,
    currency: "₹",
    category: "men",
    subcategory: "formal",
    images: [
      "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1471&auto=format&fit=crop"
    ],
    sizes: ["38", "40", "42", "44"],
    colors: ["Black", "Navy", "Grey"],
    stock: 25,
    rating: 4.8,
    reviewCount: 72,
  },
  
  // Women's Clothing
  {
    id: "women-dress-1",
    name: "Floral Print Maxi Dress",
    description: "Beautiful floral print maxi dress, perfect for summer occasions with a flowing silhouette.",
    price: 2999,
    currency: "₹",
    category: "women",
    subcategory: "dresses",
    images: [
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1473&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue", "Pink", "Yellow"],
    stock: 35,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 138,
  },
  {
    id: "women-top-1",
    name: "Casual Cotton Blouse",
    description: "Lightweight cotton blouse with a relaxed fit, perfect for everyday wear.",
    price: 1299,
    currency: "₹",
    category: "women",
    subcategory: "tops",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1410&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Pink", "Blue"],
    stock: 60,
    rating: 4.2,
    reviewCount: 86,
    discount: 15,
  },
  {
    id: "women-jeans-1",
    name: "High-Waist Skinny Jeans",
    description: "Flattering high-waist skinny jeans with stretch comfort for a perfect fit.",
    price: 2199,
    currency: "₹",
    category: "women",
    subcategory: "jeans",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1286&auto=format&fit=crop"
    ],
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Blue", "Black", "Grey"],
    stock: 45,
    rating: 4.6,
    reviewCount: 112,
  },
  {
    id: "women-skirt-1",
    name: "A-Line Midi Skirt",
    description: "Elegant A-line midi skirt with a flattering silhouette, suitable for both casual and formal occasions.",
    price: 1899,
    currency: "₹",
    category: "women",
    subcategory: "skirts",
    images: [
      "https://images.unsplash.com/photo-1577900232427-20fca6e3f701?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1364&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Beige", "Navy"],
    stock: 30,
    isNew: true,
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "women-jacket-1",
    name: "Structured Blazer",
    description: "Tailored blazer with a structured fit, perfect for professional settings or smart-casual looks.",
    price: 4299,
    currency: "₹",
    category: "women",
    subcategory: "jackets",
    images: [
      "https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548778943-5bbeeb1ba6f1?q=80&w=1286&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Camel", "Navy"],
    stock: 25,
    rating: 4.7,
    reviewCount: 91,
  },
  
  // Kids' Clothing
  {
    id: "kids-tshirt-1",
    name: "Kids Graphic T-Shirt",
    description: "Fun graphic t-shirt for kids made with soft cotton for comfort during play.",
    price: 599,
    currency: "₹",
    category: "kids",
    subcategory: "t-shirts",
    images: [
      "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Blue", "Red", "Yellow"],
    stock: 50,
    rating: 4.4,
    reviewCount: 78,
    isNew: true,
  },
  {
    id: "kids-jeans-1",
    name: "Kids Comfortable Denim Jeans",
    description: "Durable denim jeans for kids with an adjustable waistband for growing children.",
    price: 899,
    currency: "₹",
    category: "kids",
    subcategory: "jeans",
    images: [
      "https://images.unsplash.com/photo-1560506840-ec148e82a604?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516689807549-04b4c3b4ee35?q=80&w=1470&auto=format&fit=crop"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Black"],
    stock: 40,
    rating: 4.3,
    reviewCount: 56,
  },
  {
    id: "kids-dress-1",
    name: "Girls Party Dress",
    description: "Beautiful party dress for girls with tulle detailing, perfect for special occasions.",
    price: 1499,
    currency: "₹",
    category: "kids",
    subcategory: "dresses",
    images: [
      "https://images.unsplash.com/photo-1603570613018-6abc633e92b8?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1643993448504-4d68d4233e5a?q=80&w=1374&auto=format&fit=crop"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Pink", "Purple", "White"],
    stock: 30,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "kids-jacket-1",
    name: "Kids Winter Jacket",
    description: "Warm and cozy winter jacket for kids with water-resistant exterior and soft fleece lining.",
    price: 1999,
    currency: "₹",
    category: "kids",
    subcategory: "jackets",
    images: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1364&auto=format&fit=crop"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue", "Red", "Black"],
    stock: 25,
    rating: 4.6,
    reviewCount: 62,
  },
  
  // Accessories
  {
    id: "accessories-bag-1",
    name: "Designer Tote Bag",
    description: "Spacious tote bag with stylish design, perfect for everyday use with multiple compartments.",
    price: 2499,
    currency: "₹",
    category: "accessories",
    subcategory: "bags",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1438&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Black", "Brown", "Tan"],
    stock: 30,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 104,
  },
  {
    id: "accessories-watch-1",
    name: "Classic Analog Watch",
    description: "Elegant analog watch with stainless steel strap and premium craftsmanship.",
    price: 3999,
    currency: "₹",
    category: "accessories",
    subcategory: "watches",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1288&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1342&auto=format&fit=crop"
    ],
    colors: ["Silver", "Gold", "Black"],
    stock: 20,
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: "accessories-sunglasses-1",
    name: "Designer Sunglasses",
    description: "Premium sunglasses with UV protection and stylish design for both fashion and function.",
    price: 1999,
    currency: "₹",
    category: "accessories",
    subcategory: "sunglasses",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1470&auto=format&fit=crop"
    ],
    colors: ["Black", "Tortoise", "Brown"],
    stock: 35,
    isNew: true,
    rating: 4.5,
    reviewCount: 76,
  },
  {
    id: "accessories-belt-1",
    name: "Premium Leather Belt",
    description: "High-quality genuine leather belt with a stylish buckle, perfect for formal and casual wear.",
    price: 1499,
    currency: "₹",
    category: "accessories",
    subcategory: "belts",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60fe8ff?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553703189-e5220cfd390b?q=80&w=1374&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Tan"],
    stock: 40,
    rating: 4.4,
    reviewCount: 58,
  },
  {
    id: "accessories-wallet-1",
    name: "RFID-Protected Leather Wallet",
    description: "Genuine leather wallet with RFID protection, multiple card slots, and a coin pocket.",
    price: 1299,
    currency: "₹",
    category: "accessories",
    subcategory: "wallets",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616142578296-4617d689c107?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Black", "Brown", "Navy"],
    stock: 45,
    rating: 4.6,
    reviewCount: 82,
  },
  
  // Footwear
  {
    id: "footwear-sneakers-1",
    name: "Casual Comfort Sneakers",
    description: "Lightweight and comfortable sneakers with memory foam insole, perfect for daily wear.",
    price: 2499,
    currency: "₹",
    category: "footwear",
    subcategory: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Grey"],
    stock: 40,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 118,
  },
  {
    id: "footwear-formal-1",
    name: "Classic Leather Formal Shoes",
    description: "Handcrafted leather formal shoes with a timeless design, perfect for business and formal occasions.",
    price: 3999,
    currency: "₹",
    category: "footwear",
    subcategory: "formal",
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=1470&auto=format&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "Brown"],
    stock: 25,
    rating: 4.8,
    reviewCount: 93,
  },
  {
    id: "footwear-sandals-1",
    name: "Comfortable Daily Sandals",
    description: "Ergonomic sandals with arch support and cushioned footbed for all-day comfort.",
    price: 1299,
    currency: "₹",
    category: "footwear",
    subcategory: "sandals",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1373&auto=format&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "Brown", "Tan"],
    stock: 35,
    rating: 4.5,
    reviewCount: 76,
  },
  {
    id: "footwear-boots-1",
    name: "Waterproof Hiking Boots",
    description: "Durable waterproof hiking boots with excellent grip and ankle support for outdoor adventures.",
    price: 4499,
    currency: "₹",
    category: "footwear",
    subcategory: "boots",
    images: [
      "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=1374&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1312&auto=format&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Brown", "Black", "Olive"],
    stock: 20,
    isNew: true,
    rating: 4.9,
    reviewCount: 67,
  },
  
  // Home
  {
    id: "home-bedding-1",
    name: "Premium Cotton Bed Sheet Set",
    description: "Luxurious 400 thread count cotton bed sheet set including fitted sheet, flat sheet, and pillowcases.",
    price: 3499,
    currency: "₹",
    category: "home",
    subcategory: "bedding",
    images: [
      "https://images.unsplash.com/photo-1629949009710-f7417e1505f9?q=80&w=1364&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1374&auto=format&fit=crop"
    ],
    sizes: ["Single", "Double", "King"],
    colors: ["White", "Grey", "Blue"],
    stock: 30,
    rating: 4.8,
    reviewCount: 85,
  },
  {
    id: "home-cushion-1",
    name: "Decorative Cushion Covers",
    description: "Set of 4 decorative cushion covers with elegant designs to enhance your living space.",
    price: 1299,
    currency: "₹",
    category: "home",
    subcategory: "decor",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615972430478-0752d5d770fd?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["16\"x16\"", "18\"x18\""],
    colors: ["Blue", "Grey", "Beige"],
    stock: 40,
    isFeatured: true,
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: "home-lighting-1",
    name: "Modern Floor Lamp",
    description: "Contemporary floor lamp with adjustable brightness, perfect for creating ambient lighting in any room.",
    price: 3999,
    currency: "₹",
    category: "home",
    subcategory: "lighting",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Black", "Gold", "Silver"],
    stock: 15,
    isNew: true,
    rating: 4.7,
    reviewCount: 53,
  },
  {
    id: "home-kitchen-1",
    name: "Non-Stick Cookware Set",
    description: "Complete 8-piece non-stick cookware set including pans, pots, and cooking utensils.",
    price: 4999,
    currency: "₹",
    category: "home",
    subcategory: "kitchen",
    images: [
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=1332&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=1470&auto=format&fit=crop"
    ],
    colors: ["Black", "Grey", "Red"],
    stock: 20,
    rating: 4.9,
    reviewCount: 96,
  },
  
  // Beauty
  {
    id: "beauty-skin-1",
    name: "Premium Skincare Gift Set",
    description: "Complete skincare routine set including cleanser, toner, moisturizer, and serum for radiant skin.",
    price: 2999,
    currency: "₹",
    category: "beauty",
    subcategory: "skincare",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1335&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1287&auto=format&fit=crop"
    ],
    stock: 25,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 114,
  },
  {
    id: "beauty-makeup-1",
    name: "Professional Makeup Brush Set",
    description: "Set of 12 professional makeup brushes with synthetic bristles and ergonomic handles.",
    price: 1999,
    currency: "₹",
    category: "beauty",
    subcategory: "makeup",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1487&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=1295&auto=format&fit=crop"
    ],
    stock: 30,
    isNew: true,
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: "beauty-hair-1",
    name: "Hair Care Gift Box",
    description: "Complete hair care set with shampoo, conditioner, hair mask, and styling products.",
    price: 2499,
    currency: "₹",
    category: "beauty",
    subcategory: "haircare",
    images: [
      "https://images.unsplash.com/photo-1626120032630-b51c96a544de?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635521806562-efee96a56c8b?q=80&w=1287&auto=format&fit=crop"
    ],
    stock: 20,
    rating: 4.7,
    reviewCount: 68,
  },
  {
    id: "beauty-perfume-1",
    name: "Designer Fragrance",
    description: "Elegant designer fragrance with long-lasting scent notes of jasmine, vanilla, and sandalwood.",
    price: 3999,
    currency: "₹",
    category: "beauty",
    subcategory: "fragrance",
    images: [
      "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601295452829-3d76270e2823?q=80&w=1372&auto=format&fit=crop"
    ],
    stock: 15,
    rating: 4.9,
    reviewCount: 93,
  },
  
  // Sports
  {
    id: "sports-yoga-1",
    name: "Premium Yoga Mat",
    description: "Eco-friendly non-slip yoga mat with perfect thickness for comfort and stability.",
    price: 1499,
    currency: "₹",
    category: "sports",
    subcategory: "yoga",
    images: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop"
    ],
    colors: ["Purple", "Blue", "Black"],
    stock: 40,
    rating: 4.5,
    reviewCount: 76,
  },
  {
    id: "sports-running-1",
    name: "Performance Running Shorts",
    description: "Lightweight running shorts with moisture-wicking fabric and built-in liner for maximum comfort.",
    price: 999,
    currency: "₹",
    category: "sports",
    subcategory: "running",
    images: [
      "https://images.unsplash.com/photo-1539186607619-df476afe6ff1?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Blue"],
    stock: 35,
    isNew: true,
    rating: 4.6,
    reviewCount: 64,
  },
  {
    id: "sports-bag-1",
    name: "Durable Sports Duffel Bag",
    description: "Spacious gym duffel bag with separate compartments for shoes, clothes, and accessories.",
    price: 1999,
    currency: "₹",
    category: "sports",
    subcategory: "accessories",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Black", "Navy", "Grey"],
    stock: 25,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 58,
  },
  {
    id: "sports-weights-1",
    name: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbell set with weight range from 2.5kg to 25kg per dumbbell.",
    price: 9999,
    currency: "₹",
    category: "sports",
    subcategory: "fitness",
    images: [
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1498&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1471&auto=format&fit=crop"
    ],
    stock: 10,
    rating: 4.9,
    reviewCount: 47,
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const formatPrice = (price: number, currency: string = "₹"): string => {
  return `${currency}${price.toLocaleString('en-IN')}`;
};
