"use client";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Send,
  ShoppingBag,
  Users,
  Award,
  Truck,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-gray-800 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <ShoppingBag className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-sm text-gray-400">Produtos Vendidos</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-white">5K+</div>
              <div className="text-sm text-gray-400">Clientes Satisfeitos</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-400">Avaliação Positiva</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Truck className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white">24h</div>
              <div className="text-sm text-gray-400">Entrega Rápida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-75 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight">
                  Fashion
                </span>
                <span className="text-xs text-purple-400 font-medium tracking-wide">
                  PREMIUM STORE
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformamos seu estilo com as últimas tendências da moda
              internacional. Qualidade premium, preços justos e atendimento
              excepcional.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="group bg-gray-800 hover:bg-purple-600 p-3 rounded-lg transition-all duration-300"
              >
                <Facebook className="h-5 w-5 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="group bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-all duration-300"
              >
                <Instagram className="h-5 w-5 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="group bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300"
              >
                <Twitter className="h-5 w-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative">
              Links Rápidos
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Produtos", href: "/products" },
                { name: "Categorias", href: "/categories" },
                { name: "Ofertas", href: "/offers" },
                { name: "Novidades", href: "/new" },
                { name: "Lookbook", href: "/lookbook" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative">
              Atendimento
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Central de Ajuda", href: "/help" },
                { name: "Entrega e Frete", href: "/shipping" },
                { name: "Trocas e Devoluções", href: "/returns" },
                { name: "Guia de Tamanhos", href: "/size-guide" },
                { name: "Política de Privacidade", href: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white relative">
                Newsletter
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </h3>
              <p className="text-gray-400 text-sm">
                Receba ofertas exclusivas e novidades
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-sm"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    subscribed
                      ? "bg-green-600 text-white"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  }`}
                >
                  {subscribed ? "✓" : <Send className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <Mail className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-gray-400 text-sm">
                    contato@fashion.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-gray-400 text-sm">(11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <MapPin className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-gray-400 text-sm">São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2024 Fashion. Feito com</p>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <p className="text-gray-400 text-sm">no Brasil</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacidade
              </a>
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-2 rounded-full transition-all duration-200 hover:scale-110"
              >
                <ArrowUp className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
