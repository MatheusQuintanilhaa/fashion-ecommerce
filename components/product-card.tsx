"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { useState } from "react"
import { toast } from "sonner"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()
  const [isLoading, setIsLoading] = useState(false)

  const isLiked = isInWishlist(product.id)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular delay de API
    await new Promise((resolve) => setTimeout(resolve, 500))

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      quantity: 1,
    })

    toast.success("Produto adicionado ao carrinho! 🛒", {
      description: product.name,
      action: {
        label: "Ver Carrinho",
        onClick: () => (window.location.href = "/cart"),
      },
    })

    setIsLoading(false)
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()

    if (isLiked) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      })
    }
  }

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {product.discount && (
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 animate-pulse">
              -{product.discount}%
            </Badge>
          )}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-200 hover:scale-110"
          >
            <Heart
              className={`h-4 w-4 transition-colors duration-200 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600 hover:text-red-500"}`}
            />
          </button>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>

        {/* Preços */}
        <div className="mb-4 h-12 flex flex-col justify-end">
          {product.originalPrice && (
            <div className="text-gray-400 line-through text-sm whitespace-nowrap">
              R$ {product.originalPrice.toFixed(2)}
            </div>
          )}
          <div className="text-xl font-bold text-gray-900 whitespace-nowrap">R$ {product.price.toFixed(2)}</div>
        </div>

        {/* Botão */}
        <Button
          size="sm"
          onClick={handleAddToCart}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white w-full mt-auto transition-all duration-200 hover:shadow-lg disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Adicionando...
            </div>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
