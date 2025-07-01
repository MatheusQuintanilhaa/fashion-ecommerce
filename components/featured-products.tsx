import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { products } from "@/lib/data"

export function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selecionamos especialmente para você as peças mais desejadas da temporada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg bg-transparent">
            <Link href="/products">Ver Todos os Produtos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
