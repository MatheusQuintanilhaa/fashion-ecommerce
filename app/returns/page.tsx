import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, CheckCircle, XCircle, AlertCircle, Package } from "lucide-react"
import Link from "next/link"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Trocas e Devoluções</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Sua satisfação é nossa prioridade. Conheça nossa política de trocas e devoluções
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Policy Overview */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8 text-center">
            <RotateCcw className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-800 mb-2">30 Dias para Trocar</h2>
            <p className="text-xl text-green-700">Você tem até 30 dias para solicitar troca ou devolução!</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* How to Return */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-6 w-6 text-purple-600" />
                Como Solicitar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Entre em Contato</h3>
                  <p className="text-gray-600 text-sm">
                    Envie um e-mail para trocas@fashion.com ou ligue para (11) 3000-0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Informe os Dados</h3>
                  <p className="text-gray-600 text-sm">Número do pedido, produto e motivo da troca/devolução</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Receba a Etiqueta</h3>
                  <p className="text-gray-600 text-sm">Enviaremos uma etiqueta de postagem gratuita por e-mail</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Envie o Produto</h3>
                  <p className="text-gray-600 text-sm">Embale bem o produto e poste nos Correios com nossa etiqueta</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conditions */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Condições para Troca
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm">Produto em perfeitas condições</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm">Etiquetas originais preservadas</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm">Embalagem original</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm">Sem sinais de uso</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm">Dentro do prazo de 30 dias</p>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-sm">Nota fiscal ou comprovante</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Cannot Be Returned */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <XCircle className="h-6 w-6" />
              Produtos que NÃO podem ser trocados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">Produtos íntimos (lingerie, moda praia)</p>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">Produtos personalizados</p>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">Produtos com sinais de uso</p>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">Produtos danificados pelo cliente</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Refund Timeline */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-blue-600" />
              Prazos de Reembolso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Cartão de Crédito</h3>
                <Badge className="bg-blue-600">5-10 dias úteis</Badge>
                <p className="text-sm text-blue-700 mt-2">Após análise do produto</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">PIX</h3>
                <Badge className="bg-green-600">1-2 dias úteis</Badge>
                <p className="text-sm text-green-700 mt-2">Após análise do produto</p>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Boleto</h3>
                <Badge className="bg-orange-600">3-5 dias úteis</Badge>
                <p className="text-sm text-orange-700 mt-2">Após análise do produto</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="text-center shadow-lg border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Precisa de Ajuda?</h2>
            <p className="text-gray-600 mb-6">Nossa equipe está pronta para ajudar você com sua troca ou devolução</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/contact">Falar com Suporte</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="mailto:trocas@fashion.com">trocas@fashion.com</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
