import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, ShoppingCart, CreditCard, Truck, RotateCcw } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <Scale className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl font-bold mb-6">Termos de Uso</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Conheça os termos e condições para uso de nossos serviços e realização de compras.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Last Updated */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 font-medium">
            <FileText className="inline h-4 w-4 mr-2" />
            Última atualização: 1º de janeiro de 2024
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-purple-600" />
                Aceitação dos Termos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e usar o site da Fashion, você concorda em cumprir e estar vinculado aos seguintes termos e
                condições de uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso site ou
                serviços.
              </p>
            </CardContent>
          </Card>

          {/* Use of Website */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-purple-600" />
                Uso do Site
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Uso Permitido</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Navegar e comprar produtos para uso pessoal</li>
                    <li>Criar uma conta para gerenciar pedidos</li>
                    <li>Deixar avaliações honestas sobre produtos</li>
                    <li>Entrar em contato com nosso suporte</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Uso Proibido</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Usar o site para atividades ilegais</li>
                    <li>Tentar hackear ou comprometer a segurança</li>
                    <li>Copiar conteúdo sem autorização</li>
                    <li>Criar contas falsas ou múltiplas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orders and Payment */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-purple-600" />
                Pedidos e Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Processamento de Pedidos</h3>
                  <p className="text-gray-700 mb-2">
                    Todos os pedidos estão sujeitos à disponibilidade e confirmação do preço. Reservamo-nos o direito de
                    recusar qualquer pedido.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Preços e Pagamento</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Preços podem mudar sem aviso prévio</li>
                    <li>Pagamento deve ser feito no momento da compra</li>
                    <li>Aceitamos cartões de crédito, débito e PIX</li>
                    <li>Todas as transações são processadas com segurança</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-purple-600" />
                Entrega
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Entregamos em todo território nacional</li>
                <li>Prazos de entrega são estimativas e podem variar</li>
                <li>Frete grátis para compras acima de R$ 200</li>
                <li>Cliente é responsável por fornecer endereço correto</li>
                <li>Não nos responsabilizamos por atrasos dos Correios</li>
              </ul>
            </CardContent>
          </Card>

          {/* Returns */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="h-6 w-6 text-purple-600" />
                Trocas e Devoluções
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">Você tem 30 dias para solicitar troca ou devolução, desde que:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Produto esteja em perfeitas condições</li>
                  <li>Etiquetas originais preservadas</li>
                  <li>Embalagem original</li>
                  <li>Sem sinais de uso</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Propriedade Intelectual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Todo o conteúdo do site, incluindo textos, imagens, logos, e design, é propriedade da Fashion e está
                protegido por leis de direitos autorais.
              </p>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 font-medium">
                  ⚠️ É proibida a reprodução, distribuição ou uso comercial sem autorização expressa.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Limitação de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                A Fashion não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso do
                site ou produtos, exceto quando exigido por lei.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Alterações nos Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
                imediatamente após a publicação no site. É sua responsabilidade revisar periodicamente estes termos.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Para dúvidas sobre estes Termos de Uso, entre em contato:</p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>E-mail:</strong> juridico@fashion.com
                </p>
                <p>
                  <strong>Telefone:</strong> (11) 3000-0000
                </p>
                <p>
                  <strong>Endereço:</strong> Rua da Moda, 123 - Vila Olímpia, São Paulo/SP
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
