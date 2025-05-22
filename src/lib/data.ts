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
  
  // Additional Products
  // More Men's Clothing
  {
    id: "men-shirt-2",
    name: "Linen Summer Shirt",
    description: "Lightweight linen shirt perfect for hot summer days with a relaxed fit and breathable fabric.",
    price: 1699,
    currency: "₹",
    category: "men",
    subcategory: "shirts",
    images: [
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Light Blue", "White"],
    stock: 35,
    isNew: true,
    rating: 4.3,
    reviewCount: 67,
  },
  {
    id: "men-shirt-3",
    name: "Oxford Button-Down Shirt",
    description: "Classic Oxford button-down shirt with durable fabric, perfect for formal and business settings.",
    price: 1899,
    currency: "₹",
    category: "men",
    subcategory: "shirts",
    images: [
      "https://images.unsplash.com/photo-1602810316693-3667c854239a?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Pink"],
    stock: 45,
    rating: 4.6,
    reviewCount: 93,
  },
  {
    id: "men-tshirt-2",
    name: "Graphic Print T-Shirt",
    description: "Bold graphic print t-shirt with premium cotton fabric and contemporary design.",
    price: 899,
    currency: "₹",
    category: "men",
    subcategory: "t-shirts",
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Red"],
    stock: 60,
    rating: 4.2,
    reviewCount: 76,
    discount: 15,
  },
  {
    id: "men-jeans-2",
    name: "Distressed Denim Jeans",
    description: "Stylish distressed jeans with modern fit and authentic washed look.",
    price: 2699,
    currency: "₹",
    category: "men",
    subcategory: "jeans",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1326&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Dark Blue"],
    stock: 35,
    isNew: true,
    rating: 4.4,
    reviewCount: 52,
  },
  
  // More Women's Clothing
  {
    id: "women-dress-2",
    name: "Evening Cocktail Dress",
    description: "Elegant evening dress perfect for cocktail parties and formal events with flattering silhouette.",
    price: 3499,
    currency: "₹",
    category: "women",
    subcategory: "dresses",
    images: [
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Red", "Navy"],
    stock: 25,
    rating: 4.8,
    reviewCount: 74,
    isFeatured: true,
  },
  {
    id: "women-dress-3",
    name: "Casual Summer Dress",
    description: "Light and breezy summer dress with floral pattern, perfect for warm days.",
    price: 1899,
    currency: "₹",
    category: "women",
    subcategory: "dresses",
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral", "Blue", "Yellow"],
    stock: 40,
    isNew: true,
    rating: 4.5,
    reviewCount: 63,
  },
  {
    id: "women-top-2",
    name: "Silk V-Neck Blouse",
    description: "Luxurious silk blouse with elegant V-neck design, perfect for office or evening wear.",
    price: 1799,
    currency: "₹",
    category: "women",
    subcategory: "tops",
    images: [
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Burgundy"],
    stock: 30,
    rating: 4.6,
    reviewCount: 48,
  },
  
  // More Kids' Clothing
  {
    id: "kids-tshirt-2",
    name: "Superhero Kids T-Shirt",
    description: "Fun superhero-themed t-shirt for kids with vibrant colors and comfortable fabric.",
    price: 699,
    currency: "₹",
    category: "kids",
    subcategory: "t-shirts",
    images: [
      "https://images.unsplash.com/photo-1534184942210-17633862fcbd?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1330&auto=format&fit=crop"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Red", "Blue", "Yellow"],
    stock: 45,
    rating: 4.7,
    reviewCount: 52,
  },
  {
    id: "kids-shorts-1",
    name: "Kids Casual Shorts",
    description: "Comfortable cotton shorts for kids with elastic waistband and fun patterns.",
    price: 799,
    currency: "₹",
    category: "kids",
    subcategory: "shorts",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1364&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519457851-8c8a4768d4ce?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Blue", "Green", "Red"],
    stock: 35,
    isNew: true,
    rating: 4.4,
    reviewCount: 38,
  },
  
  // More Accessories
  {
    id: "accessories-bag-2",
    name: "Leather Crossbody Bag",
    description: "Stylish leather crossbody bag with adjustable strap and multiple compartments for everyday use.",
    price: 2899,
    currency: "₹",
    category: "accessories",
    subcategory: "bags",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Brown", "Black", "Tan"],
    stock: 25,
    rating: 4.8,
    reviewCount: 76,
  },
  {
    id: "accessories-watch-2",
    name: "Smart Fitness Watch",
    description: "Advanced smartwatch with fitness tracking, heart rate monitoring and smartphone notifications.",
    price: 3499,
    currency: "₹",
    category: "accessories",
    subcategory: "watches",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1327&auto=format&fit=crop"
    ],
    colors: ["Black", "Silver", "Rose Gold"],
    stock: 30,
    isNew: true,
    rating: 4.6,
    reviewCount: 93,
  },
  {
    id: "accessories-hat-1",
    name: "Straw Summer Hat",
    description: "Wide-brimmed straw hat perfect for beach days and summer outings with UV protection.",
    price: 899,
    currency: "₹",
    category: "accessories",
    subcategory: "hats",
    images: [
      "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Natural", "White", "Black"],
    stock: 40,
    rating: 4.3,
    reviewCount: 45,
  },
  
  // More Footwear
  {
    id: "footwear-sneakers-2",
    name: "Performance Running Shoes",
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper for optimal performance.",
    price: 3299,
    currency: "₹",
    category: "footwear",
    subcategory: "sneakers",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Red", "Black", "Blue"],
    stock: 35,
    isNew: true,
    rating: 4.8,
    reviewCount: 87,
  },
  {
    id: "footwear-sandals-2",
    name: "Leather Strappy Sandals",
    description: "Elegant leather sandals with comfortable footbed and adjustable straps for a perfect fit.",
    price: 1699,
    currency: "₹",
    category: "footwear",
    subcategory: "sandals",
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["5", "6", "7", "8", "9"],
    colors: ["Tan", "Black", "White"],
    stock: 30,
    rating: 4.5,
    reviewCount: 56,
  },
  
  // More Home Products
  {
    id: "home-bedding-2",
    name: "Luxury Duvet Set",
    description: "Premium quality duvet cover set with two matching pillow cases in elegant design.",
    price: 3999,
    currency: "₹",
    category: "home",
    subcategory: "bedding",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1287&auto=format&fit=crop"
    ],
    sizes: ["Single", "Double", "King"],
    colors: ["White", "Gray", "Navy"],
    stock: 25,
    rating: 4.9,
    reviewCount: 64,
  },
  {
    id: "home-decor-1",
    name: "Handcrafted Ceramic Vase",
    description: "Artisanal ceramic vase with unique glaze finish, perfect for fresh or dried flower arrangements.",
    price: 1299,
    currency: "₹",
    category: "home",
    subcategory: "decor",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1290&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1280&auto=format&fit=crop"
    ],
    colors: ["Blue", "White", "Terracotta"],
    stock: 20,
    isNew: true,
    rating: 4.7,
    reviewCount: 42,
  },
  {
    id: "home-kitchen-2",
    name: "Premium Chef Knife Set",
    description: "Professional grade chef knife set with high-carbon stainless steel and ergonomic handles.",
    price: 4999,
    currency: "₹",
    category: "home",
    subcategory: "kitchen",
    images: [
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=1335&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566454419290-57a0589c9c51?q=80&w=1287&auto=format&fit=crop"
    ],
    stock: 15,
    rating: 4.9,
    reviewCount: 78,
    isFeatured: true,
  },
  
  // More Beauty Products
  {
    id: "beauty-skin-2",
    name: "Hydrating Face Serum",
    description: "Intensive hydrating serum with hyaluronic acid and vitamin C for radiant skin.",
    price: 1299,
    currency: "₹",
    category: "beauty",
    subcategory: "skincare",
    images: [
      "https://images.unsplash.com/photo-1570194065650-d99b4242721c?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1287&auto=format&fit=crop"
    ],
    stock: 40,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: "beauty-makeup-2",
    name: "Luxury Eyeshadow Palette",
    description: "Highly pigmented eyeshadow palette with matte and shimmer finishes in versatile color range.",
    price: 2499,
    currency: "₹",
    category: "beauty",
    subcategory: "makeup",
    images: [
      "https://images.unsplash.com/photo-1583241475880-083f84372725?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1287&auto=format&fit=crop"
    ],
    stock: 30,
    isNew: true,
    rating: 4.8,
    reviewCount: 75,
  },
  
  // More Sports Products
  {
    id: "sports-yoga-2",
    name: "Yoga Block Set",
    description: "Set of two high-density foam yoga blocks for improved balance and deeper stretches.",
    price: 899,
    currency: "₹",
    category: "sports",
    subcategory: "yoga",
    images: [
      "https://images.unsplash.com/photo-1517637382994-f02da38c6728?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1636402085396-5cb4a3932d30?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Purple", "Blue", "Black"],
    stock: 50,
    rating: 4.6,
    reviewCount: 63,
  },
  {
    id: "sports-running-2",
    name: "Fitness Activity Tracker",
    description: "Waterproof activity tracking wristband with heart rate monitor and sleep tracking.",
    price: 2499,
    currency: "₹",
    category: "sports",
    subcategory: "fitness",
    images: [
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=1362&auto=format&fit=crop"
    ],
    colors: ["Black", "Blue", "Pink"],
    stock: 35,
    isNew: true,
    rating: 4.7,
    reviewCount: 87,
  },
  {
    id: "sports-water-bottle",
    name: "Insulated Sports Water Bottle",
    description: "Vacuum insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 999,
    currency: "₹",
    category: "sports",
    subcategory: "accessories",
    images: [
      "https://images.unsplash.com/photo-1555475660-3df469f5d6d7?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Silver", "Black", "Blue"],
    stock: 60,
    rating: 4.5,
    reviewCount: 94,
  },
  
  // Additional Home Decor
  {
    id: "home-throw-blanket",
    name: "Luxury Throw Blanket",
    description: "Super soft knitted throw blanket perfect for adding warmth and style to your living space.",
    price: 1799,
    currency: "₹",
    category: "home",
    subcategory: "decor",
    images: [
      "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4a?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600369671236-e74451ea2881?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Gray", "Cream", "Navy"],
    stock: 30,
    rating: 4.8,
    reviewCount: 56,
  },
  {
    id: "home-candles",
    name: "Scented Soy Candle Set",
    description: "Set of three artisanal scented soy candles in beautiful glass containers.",
    price: 1499,
    currency: "₹",
    category: "home",
    subcategory: "decor",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=1287&auto=format&fit=crop"
    ],
    scents: ["Vanilla", "Sandalwood", "Lavender"],
    stock: 25,
    isNew: true,
    rating: 4.7,
    reviewCount: 39,
  },
  
  // More Accessories
  {
    id: "accessories-scarf",
    name: "Silk Print Scarf",
    description: "Elegant silk scarf with artistic print, perfect for adding a touch of sophistication to any outfit.",
    price: 1299,
    currency: "₹",
    category: "accessories",
    subcategory: "scarves",
    images: [
      "https://images.unsplash.com/photo-1581044748991-195c6afb3aff?q=80&w=1286&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609803384069-19f3e4a15a3e?q=80&w=1287&auto=format&fit=crop"
    ],
    colors: ["Multicolor", "Blue", "Red"],
    stock: 35,
    rating: 4.6,
    reviewCount: 48,
  }
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
