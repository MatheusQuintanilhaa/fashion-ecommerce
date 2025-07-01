import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Como faço para rastrear meu pedido?",
    answer:
      "Após a confirmação do pagamento, você receberá um e-mail com o código de rastreamento. Você também pode acompanhar o status do seu pedido na área 'Meus Pedidos' da sua conta.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo de entrega varia conforme sua localização: Região Sudeste: 2-4 dias úteis, Região Sul: 3-5 dias úteis, Demais regiões: 5-8 dias úteis. Para compras acima de R$ 200, o frete é grátis!",
  },
  {
    question: "Como posso trocar ou devolver um produto?",
    answer:
      "Você tem até 30 dias para solicitar troca ou devolução. O produto deve estar em perfeitas condições, com etiquetas e na embalagem original. Entre em contato conosco para iniciar o processo.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos cartões de crédito (Visa, Mastercard, Elo), cartões de débito, PIX, boleto bancário e parcelamento em até 12x sem juros no cartão de crédito.",
  },
  {
    question: "Como sei qual tamanho escolher?",
    answer:
      "Temos um guia de tamanhos detalhado em cada produto. Recomendamos medir suas medidas e comparar com nossa tabela. Em caso de dúvida, nossa equipe está disponível para ajudar!",
  },
  {
    question: "Vocês fazem entrega em todo o Brasil?",
    answer:
      "Sim! Entregamos em todo território nacional através dos Correios e transportadoras parceiras. O frete é calculado automaticamente no checkout baseado no seu CEP.",
  },
  {
    question: "Como posso cancelar meu pedido?",
    answer:
      "Pedidos podem ser cancelados em até 2 horas após a confirmação do pagamento. Após esse prazo, entre em contato conosco para verificar se ainda é possível cancelar.",
  },
  {
    question: "Vocês têm loja física?",
    answer:
      "Atualmente somos uma loja 100% online, mas temos um showroom em São Paulo para atendimento personalizado mediante agendamento. Entre em contato para agendar sua visita.",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Central de Ajuda</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Encontre respostas para suas dúvidas ou entre em contato conosco
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Buscar por dúvidas..." className="pl-10 bg-white text-gray-900 border-0" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 mb-8">
              <CardHeader>
                <CardTitle>Precisa de Ajuda Rápida?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat Online
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="tel:+551130000000">
                    <Phone className="mr-2 h-4 w-4" />
                    (11) 3000-0000
                  </Link>
                </Button>

                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="mailto:suporte@fashion.com">
                    <Mail className="mr-2 h-4 w-4" />
                    E-mail Suporte
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Links Úteis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/shipping" className="block text-purple-600 hover:underline">
                  Entrega e Frete
                </Link>
                <Link href="/returns" className="block text-purple-600 hover:underline">
                  Trocas e Devoluções
                </Link>
                <Link href="/size-guide" className="block text-purple-600 hover:underline">
                  Guia de Tamanhos
                </Link>
                <Link href="/contact" className="block text-purple-600 hover:underline">
                  Contato
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
