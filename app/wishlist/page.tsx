"use client"

import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { products } from "@/lib/data"

export default function WishlistPage() {
  const { items, removeItem } = useWishlist()
  const { addItem } = useCart()

  const handleAddToCart = (item: any) => {
    const product = products.find((p) => p.id === item.id)
    if (product) {
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        size: product.sizes[0], // Primeiro tamanho disponível
        quantity: 1,
      })

      toast.success("Produto adicionado ao carrinho! 🛒", {
        description: item.name,
        action: {
          label: "Ver Carrinho",
          onClick: () => (window.location.href = "/cart"),
        },
      })
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sua lista de desejos está vazia</h1>
          <p className="text-gray-600 mb-8">Adicione produtos que você ama para encontrá-los facilmente depois</p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/products">Descobrir Produtos</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-red-500" />
            <h1 className="text-4xl font-bold text-gray-900">Minha Lista de Desejos</h1>
          </div>
          <p className="text-xl text-gray-600">
            {items.length} produto{items.length !== 1 ? "s" : ""} que você adorou
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>

                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-200 hover:scale-110"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>

                <div className="absolute top-4 left-4">
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">💖 Favorito</div>
                </div>
              </div>

              <CardContent className="p-6">
                <Link href={`/products/${item.id}`}>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                </Link>

                <div className="text-xl font-bold text-gray-900 mb-4">R$ {item.price.toFixed(2)}</div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>

                  <Button asChild variant="outline" size="sm" className="bg-transparent">
                    <Link href={`/products/${item.id}`}>Ver</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/products">Continuar Comprando</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                items.forEach((item) => handleAddToCart(item))
                toast.success(`${items.length} produtos adicionados ao carrinho! 🛒`)
              }}
              className="bg-transparent"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Adicionar Tudo ao Carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
