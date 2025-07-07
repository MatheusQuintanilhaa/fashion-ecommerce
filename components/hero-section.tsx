import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-white/90">Nova Coleção 2025</span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tight">
          <span className="block text-white drop-shadow-2xl">Fashion</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-2xl animate-pulse">
            Redefined
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
          Descubra as últimas tendências da moda com nossa coleção exclusiva.
          <span className="block mt-2 text-white/80">
            Estilo, qualidade e elegância em cada peça.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 text-lg px-10 py-7 rounded-full font-semibold shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
          >
            <Link href="/products" className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              Explorar Coleção
              <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-10 py-7 rounded-full font-semibold bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Link href="/about" className="flex items-center gap-2">
              Nossa História
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>

        {/* Stats or features */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-white/70 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Entrega Grátis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span>Troca Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span>Qualidade Premium</span>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400/60 rounded-full animate-bounce delay-0" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce delay-300" />
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400/60 rounded-full animate-bounce delay-700" />
      <div className="absolute bottom-20 right-40 w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce delay-1000" />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm" />
    </section>
  );
}
