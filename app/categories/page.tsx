import React from "react";
import { Sparkles, Heart, Star, TrendingUp, Shield, Award } from "lucide-react";

// Mock data for demonstration
const products = [
  { id: 1, category: "feminino", name: "Produto 1" },
  { id: 2, category: "masculino", name: "Produto 2" },
  { id: 3, category: "acessorios", name: "Produto 3" },
  { id: 4, category: "feminino", name: "Produto 4" },
  { id: 5, category: "masculino", name: "Produto 5" },
  { id: 6, category: "acessorios", name: "Produto 6" },
  { id: 7, category: "feminino", name: "Produto 7" },
  { id: 8, category: "masculino", name: "Produto 8" },
  { id: 9, category: "acessorios", name: "Produto 9" },
  { id: 10, category: "feminino", name: "Produto 10" },
  { id: 11, category: "masculino", name: "Produto 11" },
  { id: 12, category: "acessorios", name: "Produto 12" },
];

const categories = [
  {
    id: "feminino",
    name: "Moda Feminina",
    description: "Elegância e sofisticação em cada peça",
    image: "/images/categories/womens-fashion.svg",
    productCount: products.filter((p) => p.category === "feminino").length,
  },
  {
    id: "masculino",
    name: "Moda Masculina",
    description: "Estilo e modernidade para o homem contemporâneo",
    image: "/images/categories/mans-fashion.svg",
    productCount: products.filter((p) => p.category === "masculino").length,
  },
  {
    id: "acessorios",
    name: "Acessórios",
    description: "Detalhes que fazem toda a diferença no seu look",
    image: "/images/categories/acessories-fashion.svg",
    productCount: products.filter((p) => p.category === "acessorios").length,
  },
];

// CategoryCard component with image paths
type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
};

const CategoryCard = ({ category }: { category: Category }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    <div className="h-48 relative overflow-hidden">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-purple-600 font-semibold">
          {category.productCount} produtos
        </span>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Explorar
        </button>
      </div>
    </div>
  </div>
);

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-9 text-center relative z-10">
          <div className="mb-6">
            <h1 className="text-6xl font-black tracking-tight mb-4">
              Explore Nossas Categorias
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Descubra peças únicas organizadas especialmente para você
              encontrar exatamente o que procura
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">{products.length}+</div>
              <div className="text-purple-200 text-sm">Produtos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{categories.length}</div>
              <div className="text-purple-200 text-sm">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-purple-200 text-sm">Qualidade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossas Coleções
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada categoria foi cuidadosamente curada para oferecer o melhor da
            moda atual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">
                Por que nos escolher?
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experiência Premium em Moda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos mais do que roupas - criamos experiências únicas que
              transformam seu estilo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Curadoria Especial
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cada peça é cuidadosamente selecionada por nossos especialistas
                em moda para garantir que você sempre esteja na tendência
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Qualidade Premium
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Trabalhamos apenas com fornecedores que garantem a melhor
                qualidade, durabilidade e conforto em cada produto
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tendências Atuais
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sempre atualizados com as últimas tendências da moda mundial
                para você estar sempre um passo à frente
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Estilo?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Explore nossas categorias e encontre as peças perfeitas para
            expressar sua personalidade única
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all duration-200 shadow-lg">
              Ver Todos os Produtos
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all duration-200 border border-white/30">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
