import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    description: string
    image: string
    productCount: number
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${category.image})` }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{category.productCount} produtos</span>
          <Button asChild className="bg-purple-600 hover:bg-purple-700">
            <Link href={`/products?category=${category.id}`}>
              Explorar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
