export type Destination = {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  price: string;
  category: "india" | "international";
};

export const destinations: Destination[] = [
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    description: "Backwaters, lush hills, local cuisine and slow coastal escapes.",
    price: "₹24,999",
    category: "india"
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    country: "India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
    description: "Mountain villages, pine forests and unforgettable Himalayan views.",
    price: "₹19,999",
    category: "india"
  },
  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85",
    description: "High-altitude landscapes, monasteries and dramatic road journeys.",
    price: "₹34,999",
    category: "india"
  },
  {
    id: "andaman",
    name: "Andaman",
    country: "India",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=85",
    description: "Turquoise waters, island sunsets and easy-going beach days.",
    price: "₹29,999",
    category: "india"
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    description: "Golden beaches, Portuguese heritage and vibrant coastal nights.",
    price: "₹14,999",
    category: "india"
  },
  {
    id: "kenya",
    name: "Kenya",
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
    description: "Big Five safaris, Maasai culture and wide-open savannahs.",
    price: "₹89,999",
    category: "international"
  },
  {
    id: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
    description: "Street food, ancient towns and the limestone bays of the north.",
    price: "₹64,999",
    category: "international"
  },
  {
    id: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
    description: "Serengeti safaris, Ngorongoro and spectacular wildlife encounters.",
    price: "₹99,999",
    category: "international"
  },
  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=85",
    description: "Waterfalls, volcanic landscapes, glaciers and northern skies.",
    price: "₹1,29,999",
    category: "international"
  },
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    image: "https://images.unsplash.com/photo-1518599807935-37015b9b6e9c?auto=format&fit=crop&w=1200&q=85",
    description: "Tea country, tropical beaches, wildlife and rich island history.",
    price: "₹49,999",
    category: "international"
  }
];