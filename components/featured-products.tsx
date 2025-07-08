import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "@/lib/data";
import { ArrowRight, Star, TrendingUp, Crown } from "lucide-react";

export function FeaturedProducts() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-cyan-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-50/50 to-pink-50/50 rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139,69,19,0.3) 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-200/50 rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-amber-500" />
            <span className="text-slate-700 font-medium">Coleção Premium</span>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Produtos em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
              Destaque
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Selecionamos especialmente para você as peças mais desejadas da
            temporada
          </p>

          {/* Stats bar */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>+50% de vendas</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Avaliação 4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-purple-500" />
              <span>Exclusividade</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="relative">
          {/* Grid container with enhanced spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 grid-stable" style={{ '--cols': 4 } as React.CSSProperties}>
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative transform hover:scale-105 transition-all duration-500 ease-out h-full layout-stable"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Product card with enhanced styling */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group-hover:border-pink-200/50 h-full">
                  <ProductCard product={product} priority={index === 0} />

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Decorative elements around grid */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000" />
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          {/* Background element */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent rounded-3xl" />

          <div className="relative z-10 py-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Descubra nossa coleção completa
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Mais de 200 produtos exclusivos esperando por você
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/products" className="flex items-center gap-3">
                  Ver Todos os Produtos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-10 py-6 text-lg font-semibold rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Link href="/categories" className="flex items-center gap-2">
                  Explorar Categorias
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-32 left-16 w-3 h-3 bg-pink-400/60 rounded-full animate-bounce delay-0" />
      <div className="absolute top-48 right-24 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce delay-500" />
      <div className="absolute bottom-32 left-24 w-4 h-4 bg-indigo-400/60 rounded-full animate-bounce delay-1000" />
      <div className="absolute bottom-48 right-16 w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce delay-1500" />
    </section>
  );
}
