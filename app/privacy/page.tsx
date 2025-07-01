import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl font-bold mb-6">Política de Privacidade</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Sua privacidade é nossa prioridade. Conheça como coletamos, usamos e protegemos seus dados.
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
                <Eye className="h-6 w-6 text-purple-600" />
                Introdução
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                A Fashion ("nós", "nosso" ou "empresa") está comprometida em proteger e respeitar sua privacidade. Esta
                Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando
                você visita nosso site ou faz uma compra conosco.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-purple-600" />
                Informações que Coletamos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Informações Pessoais</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nome completo e informações de contato</li>
                    <li>Endereço de e-mail e número de telefone</li>
                    <li>Endereço de entrega e cobrança</li>
                    <li>Informações de pagamento (processadas com segurança)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Informações de Navegação</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Endereço IP e localização aproximada</li>
                    <li>Tipo de navegador e dispositivo</li>
                    <li>Páginas visitadas e tempo de permanência</li>
                    <li>Cookies e tecnologias similares</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Data */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-purple-600" />
                Como Usamos suas Informações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Processar e entregar seus pedidos</li>
                <li>Comunicar sobre o status do pedido</li>
                <li>Fornecer atendimento ao cliente</li>
                <li>Personalizar sua experiência de compra</li>
                <li>Enviar ofertas e promoções (com seu consentimento)</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-purple-600" />
                Proteção de Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas
                  informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Criptografia SSL</h4>
                    <p className="text-green-700 text-sm">Todas as transmissões são criptografadas</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Servidores Seguros</h4>
                    <p className="text-blue-700 text-sm">Dados armazenados em servidores protegidos</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem os seguintes direitos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Acesso aos seus dados</li>
                  <li>Correção de dados incorretos</li>
                  <li>Exclusão de dados desnecessários</li>
                  <li>Portabilidade dos dados</li>
                </ul>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Revogação do consentimento</li>
                  <li>Informações sobre compartilhamento</li>
                  <li>Oposição ao tratamento</li>
                  <li>Revisão de decisões automatizadas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Mail className="h-6 w-6" />
                Entre em Contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em
                contato conosco:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>E-mail:</strong> privacidade@fashion.com
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
