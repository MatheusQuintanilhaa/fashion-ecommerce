"use client"

import { useState, useMemo, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductSkeleton } from "@/components/product-skeleton"
import { ProductFilters } from "@/components/product-filters"
import { ErrorMessage } from "@/components/error-message"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal } from "lucide-react"
import { products } from "@/lib/data"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useSearchParams, useRouter } from "next/navigation"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialSearch = searchParams.get("search") || ""
  const initialCategory = searchParams.get("category") || "all"

  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedSize, setSelectedSize] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState("name")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch)
    }

    if (initialCategory !== "all") {
      setSelectedCategory(initialCategory)
    }
  }, [initialSearch, initialCategory])

  // Atualizar URL com filtros
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchTerm) params.set("search", searchTerm)
    if (selectedCategory !== "all") params.set("category", selectedCategory)
    if (selectedSize !== "all") params.set("size", selectedSize)
    if (sortBy !== "name") params.set("sort", sortBy)

    const newUrl = params.toString() ? `?${params.toString()}` : "/products"
    router.replace(newUrl, { scroll: false })
  }, [searchTerm, selectedCategory, selectedSize, sortBy, router])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSize = selectedSize === "all" || product.sizes.includes(selectedSize)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesSize && matchesPrice
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedSize, priceRange, sortBy])

  const breadcrumbItems = [
    { label: "Produtos", href: "/products" },
    ...(selectedCategory !== "all"
      ? [{ label: selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) }]
      : []),
  ]

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ErrorMessage
          title="Erro ao carregar produtos"
          message={error}
          onRetry={() => {
            setError(null)
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 1000)
          }}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossa Coleção</h1>
          <p className="text-xl text-gray-600">Descubra peças únicas para o seu estilo</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Sort Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          <div className="flex gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-white">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome A-Z</SelectItem>
                <SelectItem value="price-low">Menor Preço</SelectItem>
                <SelectItem value="price-high">Maior Preço</SelectItem>
              </SelectContent>
            </Select>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden bg-transparent">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-80">
            <ProductFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                {isLoading
                  ? "Carregando..."
                  : `${filteredProducts.length} produto${filteredProducts.length !== 1 ? "s" : ""} encontrado${filteredProducts.length !== 1 ? "s" : ""}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => <ProductSkeleton key={index} />)
                : filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>

            {!isLoading && filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500 mb-4">Nenhum produto encontrado</p>
                <p className="text-gray-400">Tente ajustar os filtros ou termo de busca</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
