import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Fashion
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Redefined
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Descubra as últimas tendências da moda com nossa coleção exclusiva. Estilo, qualidade e elegância em cada
          peça.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6">
            <Link href="/products">
              Explorar Coleção
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent"
          >
            <Link href="/about">Nossa História</Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
    </section>
  )
}
