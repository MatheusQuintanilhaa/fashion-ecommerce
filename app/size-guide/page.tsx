import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ruler, User, Users, Footprints } from "lucide-react"

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Guia de Tamanhos</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Encontre o tamanho perfeito para você com nosso guia completo de medidas
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* How to Measure */}
        <Card className="mb-12 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Ruler className="h-6 w-6 text-purple-600" />
              Como Tirar suas Medidas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📏</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Busto/Peito</h3>
                <p className="text-gray-600 text-sm">
                  Meça na parte mais larga do busto, mantendo a fita métrica paralela ao chão
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📐</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Cintura</h3>
                <p className="text-gray-600 text-sm">
                  Meça na parte mais estreita da cintura, geralmente acima do umbigo
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Quadril</h3>
                <p className="text-gray-600 text-sm">Meça na parte mais larga do quadril, mantendo os pés juntos</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👟</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Pés</h3>
                <p className="text-gray-600 text-sm">
                  Meça do calcanhar até a ponta do dedo mais longo, em pé e com peso distribuído
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Women's Sizes */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-pink-600" />
                Tamanhos Femininos - Roupas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Tamanho</th>
                      <th className="text-center py-2">Busto (cm)</th>
                      <th className="text-center py-2">Cintura (cm)</th>
                      <th className="text-center py-2">Quadril (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">PP</Badge>
                      </td>
                      <td className="text-center py-2">80-84</td>
                      <td className="text-center py-2">60-64</td>
                      <td className="text-center py-2">86-90</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">P</Badge>
                      </td>
                      <td className="text-center py-2">84-88</td>
                      <td className="text-center py-2">64-68</td>
                      <td className="text-center py-2">90-94</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">M</Badge>
                      </td>
                      <td className="text-center py-2">88-92</td>
                      <td className="text-center py-2">68-72</td>
                      <td className="text-center py-2">94-98</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">G</Badge>
                      </td>
                      <td className="text-center py-2">92-96</td>
                      <td className="text-center py-2">72-76</td>
                      <td className="text-center py-2">98-102</td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <Badge variant="outline">GG</Badge>
                      </td>
                      <td className="text-center py-2">96-100</td>
                      <td className="text-center py-2">76-80</td>
                      <td className="text-center py-2">102-106</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Men's Sizes */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Tamanhos Masculinos - Roupas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Tamanho</th>
                      <th className="text-center py-2">Peito (cm)</th>
                      <th className="text-center py-2">Cintura (cm)</th>
                      <th className="text-center py-2">Quadril (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">P</Badge>
                      </td>
                      <td className="text-center py-2">88-92</td>
                      <td className="text-center py-2">74-78</td>
                      <td className="text-center py-2">92-96</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">M</Badge>
                      </td>
                      <td className="text-center py-2">92-96</td>
                      <td className="text-center py-2">78-82</td>
                      <td className="text-center py-2">96-100</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">G</Badge>
                      </td>
                      <td className="text-center py-2">96-100</td>
                      <td className="text-center py-2">82-86</td>
                      <td className="text-center py-2">100-104</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">
                        <Badge variant="outline">GG</Badge>
                      </td>
                      <td className="text-center py-2">100-104</td>
                      <td className="text-center py-2">86-90</td>
                      <td className="text-center py-2">104-108</td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <Badge variant="outline">XGG</Badge>
                      </td>
                      <td className="text-center py-2">104-108</td>
                      <td className="text-center py-2">90-94</td>
                      <td className="text-center py-2">108-112</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shoe Sizes */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Footprints className="h-6 w-6 text-purple-600" />
              Tamanhos de Calçados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-pink-600 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Feminino
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { br: "33", cm: "21.0" },
                    { br: "34", cm: "21.7" },
                    { br: "35", cm: "22.3" },
                    { br: "36", cm: "23.0" },
                    { br: "37", cm: "23.7" },
                    { br: "38", cm: "24.3" },
                    { br: "39", cm: "25.0" },
                    { br: "40", cm: "25.7" },
                    { br: "41", cm: "26.3" },
                  ].map((size) => (
                    <div key={size.br} className="text-center p-2 bg-pink-50 rounded">
                      <div className="font-semibold">{size.br}</div>
                      <div className="text-xs text-gray-600">{size.cm}cm</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-blue-600 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Masculino
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { br: "38", cm: "24.3" },
                    { br: "39", cm: "25.0" },
                    { br: "40", cm: "25.7" },
                    { br: "41", cm: "26.3" },
                    { br: "42", cm: "27.0" },
                    { br: "43", cm: "27.7" },
                    { br: "44", cm: "28.3" },
                    { br: "45", cm: "29.0" },
                    { br: "46", cm: "29.7" },
                  ].map((size) => (
                    <div key={size.br} className="text-center p-2 bg-blue-50 rounded">
                      <div className="font-semibold">{size.br}</div>
                      <div className="text-xs text-gray-600">{size.cm}cm</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shoe Measurement Tip */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                <span className="text-lg">👟</span>
                Dica para Calçados
              </h4>
              <p className="text-gray-700 text-sm">
                <strong>Meça seus pés no final do dia</strong>, quando estão ligeiramente inchados. Isso garante um
                ajuste mais confortável. Se um pé for maior que o outro, escolha o tamanho do pé maior.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="text-purple-800">Dicas Importantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">💡</span>
              </div>
              <p className="text-gray-700">
                <strong>Meça sempre sem roupa</strong> ou com roupas bem justas para maior precisão
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">📏</span>
              </div>
              <p className="text-gray-700">
                <strong>Use uma fita métrica flexível</strong> e mantenha-a sempre paralela ao chão
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">🤝</span>
              </div>
              <p className="text-gray-700">
                <strong>Peça ajuda</strong> para alguém tirar suas medidas, será mais preciso
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">❓</span>
              </div>
              <p className="text-gray-700">
                <strong>Em dúvida entre dois tamanhos?</strong> Escolha sempre o maior para maior conforto
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">📞</span>
              </div>
              <p className="text-gray-700">
                <strong>Ainda com dúvidas?</strong> Entre em contato conosco, nossa equipe está pronta para ajudar!
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">👕</span>
              </div>
              <p className="text-gray-700">
                <strong>Tecidos diferentes</strong> podem ter caimentos distintos, considere isso na escolha do tamanho
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
