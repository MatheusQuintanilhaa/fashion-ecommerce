import type { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Camisa Social Masculina Branca",
    description:
      "Camisa social branca de alta qualidade. Ideal para o ambiente corporativo e eventos formais.",
    price: 299.9,
    originalPrice: 399.9,
    discount: 25,
    images: ["/images/products/t-shirt-social-branca/branca-frente.jpg"],
    category: "masculino",
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: ["Branco"],
    featured: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Camisa Social Masculina",
    description:
      "Camisa social slim fit em algodão premium. Ideal para o ambiente corporativo e eventos formais.",
    price: 189.9,
    images: [
      "https://images.unsplash.com/photo-1713881842156-3d9ef36418cc?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "masculino",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Azul"],
    featured: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Jaqueta Jeans Feminina",
    description:
      "Jaqueta jeans clássica com lavagem especial. Versátil e atemporal para compor diversos looks.",
    price: 249.9,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "feminino",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Azul"],
    featured: false,
    inStock: true,
  },
  {
    id: 4,
    name: "Tênis Casual Branco",
    description:
      "Tênis casual confortável para o dia a dia. Design moderno e minimalista.",
    price: 199.9,
    originalPrice: 249.9,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1655476546240-d25fcff696bf?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "acessorios",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    colors: ["Branco"],
    featured: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Blusa Floral Feminina",
    description:
      "Blusa feminina com estampa floral delicada. Tecido leve e confortável para o verão.",
    price: 129.9,
    images: [
      "https://images.unsplash.com/photo-1693989241284-b1bc01263135?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "feminino",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Rosa", "Azul"],
    featured: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Calça Chino Masculina",
    description:
      "Calça chino em sarja de algodão. Corte moderno e versátil para diversas ocasiões.",
    price: 159.9,
    images: [
      "https://plus.unsplash.com/premium_photo-1690359589674-b85931ae8d28?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "masculino",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Bege", "Marinho"],
    featured: false,
    inStock: true,
  },
  {
    id: 7,
    name: "Bolsa Transversal Couro",
    description:
      "Bolsa transversal em couro legítimo. Prática e elegante para o dia a dia.",
    price: 349.9,
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "acessorios",
    sizes: ["Único"],
    colors: ["Preto", "Marrom"],
    featured: true,
    inStock: true,
  },
  {
    id: 8,
    name: "Saia Midi Plissada",
    description:
      "Saia midi plissada em tecido fluido. Elegante e feminina para diversas ocasiões.",
    price: 179.9,
    images: [
      "https://images.unsplash.com/photo-1615898290907-0ad011905389?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "feminino",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Preto", "Nude"],
    featured: false,
    inStock: true,
  },
  {
    id: 9,
    name: " Camisa Casual Masculina",
    description:
      "Camisa casual masculina em tecido leve. Ideal para o dia a dia.",
    price: 139.9,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "masculino",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Marinho", "Preto"],
    featured: false,
    inStock: true,
  },
  {
    id: 10,
    name: "Óculos de Sol Aviador",
    description:
      "Óculos de sol estilo aviador com proteção UV400. Clássico e atemporal.",
    price: 89.9,
    originalPrice: 129.9,
    discount: 31,
    images: [
      "https://images.unsplash.com/photo-1567473810954-507d59716c25?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "acessorios",
    sizes: ["Único"],
    colors: ["Dourado", "Prata"],
    featured: false,
    inStock: true,
  },
  {
    id: 11,
    name: "Vestido Longo ",
    description:
      "Vestido longo, perfeito para ocasiões especiais e eventos ao ar livre.",
    price: 389.9,
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "feminino",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Estampado"],
    featured: true,
    inStock: true,
  },
  {
    id: 12,
    name: "Blazer Masculino Slim",
    description:
      "Blazer masculino corte slim em tecido misto. Elegância e sofisticação para o guarda-roupa masculino.",
    price: 449.9,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=75&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    category: "masculino",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Marinho", "Cinza"],
    featured: false,
    inStock: true,
  },
];
