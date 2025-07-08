import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Users,
  Award,
  Truck,
  MapPin,
  Phone,
  Mail,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  // Dados dos membros da equipe com imagens reais
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Fundadora & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description:
        "Visionária e empreendedora, Ana fundou a Fashion com o sonho de democratizar a moda brasileira.",
    },
    {
      name: "Carlos Santos",
      role: "Diretor de Estilo",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description:
        "Especialista em tendências, Carlos cuida para que nossa coleção esteja sempre na vanguarda.",
    },
    {
      name: "Maria Oliveira",
      role: "Head de Experiência",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      description:
        "Responsável por garantir que cada cliente tenha uma experiência excepcional conosco.",
    },
  ];

  // Estatísticas da empresa
  const stats = [
    { number: "50k+", label: "Clientes Satisfeitos" },
    { number: "1000+", label: "Produtos Únicos" },
    { number: "5 anos", label: "No Mercado" },
    { number: "4.8★", label: "Avaliação Média" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nascemos da paixão pela moda e do desejo de democratizar o acesso
              ao estilo. Conheça a jornada que nos trouxe até aqui e descubra
              por que somos referência no Brasil.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section - NOVA SEÇÃO */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-xl p-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Como Tudo Começou
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Em 2020, em meio a um mundo em transformação, nasceu a Fashion
                com um propósito claro: tornar a moda acessível, sustentável e
                inclusiva para todos os brasileiros.
              </p>
              <p>
                Começamos como uma pequena loja online, mas com grandes sonhos.
                Nossa fundadora Ana Silva, apaixonada por moda desde criança,
                viu a oportunidade de criar algo diferente no mercado
                brasileiro.
              </p>
              <p>
                Hoje, somos uma das principais referências em moda online no
                país, atendendo mais de 50 mil clientes que confiam em nosso
                compromisso com qualidade e estilo.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="História da Fashion - Loja moderna"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Os princípios que guiam cada decisão que tomamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Paixão</h3>
                <p className="text-gray-600">
                  Amamos o que fazemos e isso se reflete em cada produto que
                  oferecemos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusão</h3>
                <p className="text-gray-600">
                  Moda para todos, independente de tamanho, estilo ou orçamento
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
                <p className="text-gray-600">
                  Compromisso com a excelência em cada peça que vendemos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                  <Truck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confiança</h3>
                <p className="text-gray-600">
                  Entrega rápida, atendimento excepcional e garantia total
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600">
            As pessoas talentosas por trás da Fashion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full"
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-medium mb-3">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Section - NOVA SEÇÃO */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Sede
            </h2>
            <p className="text-xl text-gray-600">Onde a magia acontece</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Escritório Fashion"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Ambiente Criativo e Inovador
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nosso escritório foi pensado para inspirar criatividade e
                colaboração. Cada espaço foi cuidadosamente projetado para
                refletir nossos valores.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600">São Paulo, SP - Brasil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600">contato@fashion.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 50 mil pessoas que já descobriram seu estilo
            conosco
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            <Link href="/products">Explorar Coleção</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
