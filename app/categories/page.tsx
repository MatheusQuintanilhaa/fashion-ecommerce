import { CategoryCard } from "@/components/category-card"
import { products } from "@/lib/data"

const categories = [
  {
    id: "feminino",
    name: "Moda Feminina",
    description: "Elegância e sofisticação em cada peça",
    image: "/placeholder.svg?height=400&width=600",
    productCount: products.filter((p) => p.category === "feminino").length,
  },
  {
    id: "masculino",
    name: "Moda Masculina",
    description: "Estilo e modernidade para o homem contemporâneo",
    image: "/placeholder.svg?height=400&width=600",
    productCount: products.filter((p) => p.category === "masculino").length,
  },
  {
    id: "acessorios",
    name: "Acessórios",
    description: "Detalhes que fazem toda a diferença no seu look",
    image: "/placeholder.svg?height=400&width=600",
    productCount: products.filter((p) => p.category === "acessorios").length,
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Explore Nossas Categorias</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Descubra peças únicas organizadas especialmente para você encontrar exatamente o que procura
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Por que escolher nossas categorias?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Curadoria Especial</h3>
              <p className="text-gray-600">Cada peça é cuidadosamente selecionada por nossos especialistas em moda</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">Trabalhamos apenas com fornecedores que garantem a melhor qualidade</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tendências Atuais</h3>
              <p className="text-gray-600">Sempre atualizados com as últimas tendências da moda mundial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
