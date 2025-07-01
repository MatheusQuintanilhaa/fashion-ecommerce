"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, ShoppingCart, User, Menu } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"
import { SearchBar } from "@/components/search-bar"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { items } = useCart()
  const { items: wishlistItems } = useWishlist()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalWishlistItems = wishlistItems.length

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Fashion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-12">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Início
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors">
              Produtos
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-purple-600 transition-colors">
              Categorias
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              Sobre
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <span className="sr-only">Buscar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </Button>

            {/* Wishlist */}
            <Button asChild variant="ghost" size="icon" className="hidden md:flex relative">
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
                {totalWishlistItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 hover:bg-red-600">
                    {totalWishlistItems}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User */}
            <Button asChild variant="ghost" size="icon" className="hidden md:flex">
              <Link href="/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            {/* Cart */}
            <Button asChild variant="ghost" size="icon" className="relative">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-purple-600">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-purple-600">
                    Início
                  </Link>
                  <Link href="/products" className="text-lg font-semibold text-gray-900 hover:text-purple-600">
                    Produtos
                  </Link>
                  <Link href="/categories" className="text-lg font-semibold text-gray-900 hover:text-purple-600">
                    Categorias
                  </Link>
                  <Link href="/about" className="text-lg font-semibold text-gray-900 hover:text-purple-600">
                    Sobre
                  </Link>
                  <div className="pt-4 border-t">
                    <Link href="/wishlist" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                      <Heart className="h-5 w-5" />
                      <span>Lista de Desejos</span>
                      {totalWishlistItems > 0 && (
                        <Badge className="bg-red-500 hover:bg-red-600">{totalWishlistItems}</Badge>
                      )}
                    </Link>
                  </div>
                  <Link href="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <User className="h-5 w-5" />
                    <span>Minha Conta</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t">
            <SearchBar isMobile={true} />
          </div>
        )}
      </div>
    </header>
  )
}
