export interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  images: string[]
  category: string
  sizes: string[]
  colors: string[]
  featured: boolean
  inStock: boolean
}
