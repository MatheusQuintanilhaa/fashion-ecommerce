import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Package, MapPin, Clock, Shield } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Entrega e Frete</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Informações completas sobre nossas opções de entrega e política de frete
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Free Shipping Banner */}
        <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8 text-center">
            <Truck className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-800 mb-2">Frete Grátis</h2>
            <p className="text-xl text-green-700">Para compras acima de R$ 200,00 em todo o Brasil!</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Shipping Options */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-6 w-6 text-purple-600" />
                Opções de Entrega
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg mb-2">Entrega Padrão</h3>
                <p className="text-gray-600 mb-2">Via Correios (PAC)</p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">5-8 dias úteis</Badge>
                  <Badge variant="outline">R$ 15,90</Badge>
                </div>
                <p className="text-sm text-gray-500">Ideal para compras sem pressa</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg mb-2">Entrega Expressa</h3>
                <p className="text-gray-600 mb-2">Via Correios (SEDEX)</p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">2-4 dias úteis</Badge>
                  <Badge variant="outline">R$ 25,90</Badge>
                </div>
                <p className="text-sm text-gray-500">Para quando você precisa receber rapidinho</p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-semibold text-lg mb-2">Entrega Premium</h3>
                <p className="text-gray-600 mb-2">Via Transportadora</p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">1-2 dias úteis</Badge>
                  <Badge variant="outline">R$ 35,90</Badge>
                </div>
                <p className="text-sm text-gray-500">Disponível apenas para capitais</p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Regions */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-purple-600" />
                Prazos por Região
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Região Sudeste</p>
                  <p className="text-sm text-gray-600">SP, RJ, MG, ES</p>
                </div>
                <Badge>2-4 dias</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Região Sul</p>
                  <p className="text-sm text-gray-600">RS, SC, PR</p>
                </div>
                <Badge>3-5 dias</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Região Centro-Oeste</p>
                  <p className="text-sm text-gray-600">GO, MT, MS, DF</p>
                </div>
                <Badge>4-6 dias</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Região Nordeste</p>
                  <p className="text-sm text-gray-600">BA, PE, CE, etc.</p>
                </div>
                <Badge>5-8 dias</Badge>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Região Norte</p>
                  <p className="text-sm text-gray-600">AM, PA, RO, etc.</p>
                </div>
                <Badge>7-12 dias</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg border-0">
            <CardContent className="p-8">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Processamento</h3>
              <p className="text-gray-600">Pedidos são processados em até 24h após confirmação do pagamento</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">Todos os produtos são embalados com cuidado e proteção extra</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0">
            <CardContent className="p-8">
              <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Rastreamento</h3>
              <p className="text-gray-600">Código de rastreamento enviado por e-mail após o despacho</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
