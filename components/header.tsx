"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Heart,
  ShoppingCart,
  User,
  Menu,
  Search,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { SearchBar } from "@/components/search-bar";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistItems = wishlistItems.length;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full min-h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-75 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900 tracking-tight">
                Fashion
              </span>
              <span className="text-xs text-purple-600 font-medium tracking-wide">
                PREMIUM STORE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 ml-12 nav-stable layout-stable">
            <Link
              href="/"
              className="relative px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-200 rounded-lg hover:bg-purple-50 font-medium group whitespace-nowrap"
            >
              Início
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300" />
            </Link>
            <Link
              href="/products"
              className="relative px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-200 rounded-lg hover:bg-purple-50 font-medium group whitespace-nowrap"
            >
              Produtos
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300" />
            </Link>
            <Link
              href="/categories"
              className="relative px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-200 rounded-lg hover:bg-purple-50 font-medium group whitespace-nowrap"
            >
              Categorias
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300" />
            </Link>
            <Link
              href="/about"
              className="relative px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-200 rounded-lg hover:bg-purple-50 font-medium group whitespace-nowrap"
            >
              Sobre
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-3/4 transition-all duration-300" />
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
            <div className="w-full [&>*]:rounded-2xl [&>*]:bg-gray-50 [&>*]:border-gray-200 [&>*]:focus:ring-2 [&>*]:focus:ring-purple-500 [&>*]:focus:border-transparent [&>*]:transition-all [&>*]:duration-200 [&>*]:hover:bg-gray-100">
              <SearchBar />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Promo Badge */}
            <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-3 py-1.5 mr-3">
              <Sparkles className="w-3 h-3 text-purple-600" />
              <span className="text-xs font-semibold text-purple-700">
                FRETE GRÁTIS
              </span>
            </div>

            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-purple-50 rounded-full"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5 text-gray-600" />
            </Button>

            {/* Wishlist */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden md:flex relative hover:bg-purple-50 rounded-full transition-all duration-200"
            >
              <Link href="/wishlist">
                <Heart className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors" />
                {totalWishlistItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 border-2 border-white shadow-sm">
                    {totalWishlistItems}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:bg-purple-50 rounded-full transition-all duration-200"
            >
              <Link href="/profile">
                <User className="h-5 w-5 text-gray-600 hover:text-purple-600 transition-colors" />
              </Link>
            </Button>

            {/* Cart */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="relative hover:bg-purple-50 rounded-full transition-all duration-200 group"
            >
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-2 border-white shadow-sm animate-pulse">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-purple-50 rounded-full"
                >
                  <Menu className="h-5 w-5 text-gray-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <div>
                    <span className="text-xl font-black text-gray-900">
                      Fashion
                    </span>
                    <p className="text-xs text-purple-600 font-medium">
                      PREMIUM STORE
                    </p>
                  </div>
                </div>

                <nav className="flex flex-col space-y-2">
                  <Link
                    href="/"
                    className="text-lg font-semibold text-gray-900 hover:text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                  >
                    Início
                  </Link>
                  <Link
                    href="/products"
                    className="text-lg font-semibold text-gray-900 hover:text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                  >
                    Produtos
                  </Link>
                  <Link
                    href="/categories"
                    className="text-lg font-semibold text-gray-900 hover:text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                  >
                    Categorias
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-semibold text-gray-900 hover:text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                  >
                    Sobre
                  </Link>

                  <div className="pt-6 border-t border-gray-200 mt-6">
                    <Link
                      href="/wishlist"
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                    >
                      <Heart className="h-5 w-5" />
                      <span className="font-medium">Lista de Desejos</span>
                      {totalWishlistItems > 0 && (
                        <Badge className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600">
                          {totalWishlistItems}
                        </Badge>
                      )}
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-all duration-200"
                    >
                      <User className="h-5 w-5" />
                      <span className="font-medium">Minha Conta</span>
                    </Link>
                  </div>
                </nav>

                {/* Mobile Promo */}
                <div className="mt-8 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-bold text-purple-700">
                      OFERTA ESPECIAL
                    </span>
                  </div>
                  <p className="text-xs text-purple-600">
                    Frete grátis em compras acima de R$ 199
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="[&>*]:rounded-2xl [&>*]:bg-gray-50 [&>*]:border-gray-200 [&>*]:focus:ring-2 [&>*]:focus:ring-purple-500 [&>*]:focus:border-transparent [&>*]:transition-all [&>*]:duration-200">
              <SearchBar isMobile={true} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
