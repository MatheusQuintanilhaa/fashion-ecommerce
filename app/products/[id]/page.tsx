"use client"

import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react"
import { products } from "@/lib/data"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { toast } from "sonner"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ProductDetailPage() {
  const params = useParams()
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const product = products.find((p) => p.id === Number.parseInt(params.id as string))
  const isLiked = product ? isInWishlist(product.id) : false

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <p className="text-gray-600">O produto que você está procurando não existe.</p>
        </div>
      </div>
    )
  }

  const handleAddToCart = async () => {
    if (!selectedSize) {
      toast.error("Por favor, selecione um tamanho")
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity,
    })

    toast.success("Produto adicionado ao carrinho! 🛒", {
      description: `${product.name} - Tamanho ${selectedSize}`,
      action: {
        label: "Ver Carrinho",
        onClick: () => (window.location.href = "/cart"),
      },
    })

    setIsLoading(false)
  }

  const handleWishlistToggle = () => {
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

  const breadcrumbItems = [
    { label: "Produtos", href: "/products" },
    {
      label: product.category.charAt(0).toUpperCase() + product.category.slice(1),
      href: `/products?category=${product.category}`,
    },
    { label: product.name },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-white">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.discount && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">-{product.discount}%</Badge>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-purple-500 ring-2 ring-purple-200"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">(127 avaliações)</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">R$ {product.originalPrice.toFixed(2)}</span>
              )}
              <span className="text-3xl font-bold text-gray-900">R$ {product.price.toFixed(2)}</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Tamanho</Label>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "hover:border-purple-300 hover:text-purple-600"
                    }`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Quantidade</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:bg-purple-50"
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:bg-purple-50"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white h-14 text-lg transition-all duration-200 hover:shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Adicionando...
                  </div>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Adicionar ao Carrinho
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 bg-transparent hover:bg-purple-50 transition-all duration-200"
                onClick={handleWishlistToggle}
              >
                <Heart
                  className={`h-6 w-6 transition-colors duration-200 ${isLiked ? "fill-red-500 text-red-500" : "hover:text-red-500"}`}
                />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <Truck className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">Frete Grátis</p>
                  <p className="text-sm text-green-600">Acima de R$ 200</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <Shield className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-800">Compra Segura</p>
                  <p className="text-sm text-blue-600">Dados protegidos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                <RotateCcw className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-purple-800">Troca Fácil</p>
                  <p className="text-sm text-purple-600">30 dias para trocar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
