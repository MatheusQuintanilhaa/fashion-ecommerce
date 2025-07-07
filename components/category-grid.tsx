import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Crown } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Feminino",
    description: "Elegância e sofisticação",
    image: "/images/categories/female.svg",
    href: "/products?category=feminino",
    icon: Crown,
    color: "from-pink-500 to-rose-500",
    accent: "pink",
  },
  {
    id: 2,
    name: "Masculino",
    description: "Estilo e modernidade",
    image: "/images/categories/male.svg",
    href: "/products?category=masculino",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    accent: "blue",
  },
  {
    id: 3,
    name: "Acessórios",
    description: "Detalhes que fazem a diferença",
    image: "/images/categories/acessories.svg",
    href: "/products?category=acessorios",
    icon: Sparkles,
    color: "from-purple-500 to-violet-500",
    accent: "purple",
  },
];

export function CategoryGrid() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-white backdrop-blur-sm border border-slate-200/50 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-slate-700 font-medium">
              Categorias Exclusivas
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Explore por{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
              Categoria
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Encontre exatamente o que você procura
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 aspect-[3/4] hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500`}
                />

                {/* Colored accent overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  {/* Top section - Icon */}
                  <div className="flex justify-end">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Bottom section - Text and CTA */}
                  <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-lg text-white/90 leading-relaxed font-light">
                        {category.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className="group/btn w-fit bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-white hover:text-slate-900 border-0 px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Link
                        href={category.href}
                        className="flex items-center gap-3"
                      >
                        Explorar
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                <div className="absolute top-8 left-8 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 text-lg">
            Não encontrou o que procura?
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-10 py-6 text-lg font-semibold rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Link href="/products" className="flex items-center gap-3">
              Ver Todos os Produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
