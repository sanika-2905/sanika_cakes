import birthday from "@/assets/cake-birthday.jpg";
import wedding from "@/assets/cake-wedding.jpg";
import chocolate from "@/assets/cake-chocolate.jpg";
import cupcakes from "@/assets/cake-cupcakes.jpg";
import photo from "@/assets/cake-photo.jpg";
import custom from "@/assets/cake-custom.jpg";
import strawberry from "@/assets/cake-strawberry.jpg";

export type CakeCategory =
  | "Birthday Cakes"
  | "Wedding Cakes"
  | "Chocolate Cakes"
  | "Cupcakes"
  | "Photo Cakes"
  | "Custom Cakes";

export interface Cake {
  id: string;
  name: string;
  price: number;
  category: CakeCategory;
  image: string;
  description: string;
  flavors: string[];
  weights: string[];
  rating: number;
  trending?: boolean;
  featured?: boolean;
}

export const categories: CakeCategory[] = [
  "Birthday Cakes",
  "Wedding Cakes",
  "Chocolate Cakes",
  "Cupcakes",
  "Photo Cakes",
  "Custom Cakes",
];

export const cakes: Cake[] = [
  {
    id: "rose-bloom",
    name: "Rose Bloom Birthday Cake",
    price: 1299,
    category: "Birthday Cakes",
    image: birthday,
    description: "Hand-piped pink buttercream roses on a fluffy vanilla sponge.",
    flavors: ["Vanilla", "Strawberry", "Red Velvet"],
    weights: ["500g", "1kg", "2kg"],
    rating: 4.9,
    featured: true,
    trending: true,
  },
  {
    id: "pearl-tier",
    name: "Pearl Tier Wedding Cake",
    price: 5499,
    category: "Wedding Cakes",
    image: wedding,
    description: "Three-tier ivory fondant with sugar pearls and fresh roses.",
    flavors: ["Vanilla", "Lemon", "Almond"],
    weights: ["3kg", "5kg", "7kg"],
    rating: 5.0,
    featured: true,
  },
  {
    id: "cocoa-drip",
    name: "Cocoa Drip Indulgence",
    price: 1099,
    category: "Chocolate Cakes",
    image: chocolate,
    description: "Rich Belgian chocolate ganache with a glossy drip finish.",
    flavors: ["Dark Chocolate", "Milk Chocolate", "Hazelnut"],
    weights: ["500g", "1kg", "2kg"],
    rating: 4.8,
    trending: true,
    featured: true,
  },
  {
    id: "blush-cupcakes",
    name: "Blush Cupcake Box",
    price: 599,
    category: "Cupcakes",
    image: cupcakes,
    description: "Six pastel cupcakes with sprinkles and pearl toppers.",
    flavors: ["Vanilla", "Chocolate", "Red Velvet"],
    weights: ["Box of 6", "Box of 12"],
    rating: 4.7,
    trending: true,
  },
  {
    id: "memory-photo",
    name: "Memory Photo Cake",
    price: 1499,
    category: "Photo Cakes",
    image: photo,
    description: "Edible photo print on a soft pink buttercream base.",
    flavors: ["Vanilla", "Pineapple", "Butterscotch"],
    weights: ["1kg", "1.5kg", "2kg"],
    rating: 4.8,
  },
  {
    id: "ombre-couture",
    name: "Ombre Couture Custom",
    price: 2499,
    category: "Custom Cakes",
    image: custom,
    description: "Pastel ombre fondant with edible gold leaf and sugar florals.",
    flavors: ["Vanilla", "Strawberry", "Lemon"],
    weights: ["1kg", "2kg", "3kg"],
    rating: 4.9,
    featured: true,
    trending: true,
  },
  {
    id: "strawberry-dream",
    name: "Strawberry Dream Shortcake",
    price: 899,
    category: "Birthday Cakes",
    image: strawberry,
    description: "Fresh strawberries layered with whipped pink cream.",
    flavors: ["Strawberry", "Vanilla"],
    weights: ["500g", "1kg"],
    rating: 4.8,
    trending: true,
  },
];

export const getCake = (id: string) => cakes.find((c) => c.id === id);
