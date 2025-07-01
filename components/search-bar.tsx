"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export function SearchBar({ className = "", isMobile = false }: { className?: string; isMobile?: boolean }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(searchRef, () => setIsOpen(false))

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      setFilteredProducts(filtered.slice(0, 5)) // Limita a 5 resultados
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [searchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`)
      setIsOpen(false)
    }
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 ${isMobile ? "bg-gray-50" : "bg-gray-50"} border-gray-200`}
          />
        </div>
      </form>

      {isOpen && filteredProducts.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-[400px] overflow-auto">
          {filteredProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-12 h-12 relative flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{product.name}</p>
                <p className="text-sm text-gray-500">R$ {product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
          <div className="p-3 bg-gray-50 border-t border-gray-100">
            <button
              onClick={() => {
                router.push(`/products?search=${encodeURIComponent(searchTerm)}`)
                setIsOpen(false)
              }}
              className="text-sm text-purple-600 hover:text-purple-800 font-medium w-full text-center"
            >
              Ver todos os resultados
            </button>
          </div>
        </div>
      )}

      {isOpen && searchTerm.length > 1 && filteredProducts.length === 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 p-4 text-center">
          <p className="text-gray-500">Nenhum produto encontrado</p>
        </div>
      )}
    </div>
  )
}
