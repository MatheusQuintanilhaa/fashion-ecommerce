import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: 1,
    name: "Feminino",
    description: "Elegância e sofisticação",
    image: "/placeholder.svg?height=400&width=300",
    href: "/products?category=feminino",
  },
  {
    id: 2,
    name: "Masculino",
    description: "Estilo e modernidade",
    image: "/placeholder.svg?height=400&width=300",
    href: "/products?category=masculino",
  },
  {
    id: 3,
    name: "Acessórios",
    description: "Detalhes que fazem a diferença",
    image: "/placeholder.svg?height=400&width=300",
    href: "/products?category=acessorios",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore por Categoria</h2>
          <p className="text-xl text-gray-600">Encontre exatamente o que você procura</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                <p className="text-lg mb-6 opacity-90">{category.description}</p>
                <Button asChild className="w-fit bg-white text-black hover:bg-gray-100">
                  <Link href={category.href}>Explorar</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
