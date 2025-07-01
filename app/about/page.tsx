import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Truck } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nascemos da paixão pela moda e do desejo de democratizar o acesso ao estilo. Conheça a jornada que nos
              trouxe até aqui.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Tudo Começou</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Em 2020, em meio a um mundo em transformação, nasceu a Fashion com um propósito claro: tornar a moda
                acessível, sustentável e inclusiva para todos.
              </p>
              <p>
                Começamos como uma pequena loja online, mas com grandes sonhos. Nossa fundadora, apaixonada por moda
                desde criança, viu a oportunidade de criar algo diferente no mercado brasileiro.
              </p>
              <p>
                Hoje, somos uma das principais referências em moda online no país, atendendo milhares de clientes que
                confiam em nosso compromisso com qualidade e estilo.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/placeholder.svg?height=500&width=500')" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600">Os princípios que guiam cada decisão que tomamos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Paixão</h3>
                <p className="text-gray-600">Amamos o que fazemos e isso se reflete em cada produto que oferecemos</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusão</h3>
                <p className="text-gray-600">Moda para todos, independente de tamanho, estilo ou orçamento</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
                <p className="text-gray-600">Compromisso com a excelência em cada peça que vendemos</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confiança</h3>
                <p className="text-gray-600">Entrega rápida, atendimento excepcional e garantia total</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600">As pessoas por trás da Fashion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Ana Silva", role: "Fundadora & CEO", image: "/placeholder.svg?height=300&width=300" },
            { name: "Carlos Santos", role: "Diretor de Estilo", image: "/placeholder.svg?height=300&width=300" },
            { name: "Maria Oliveira", role: "Head de Experiência", image: "/placeholder.svg?height=300&width=300" },
          ].map((member) => (
            <Card key={member.name} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Faça Parte da Nossa História</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já descobriram seu estilo conosco
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/products">Explorar Coleção</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
