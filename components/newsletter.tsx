import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <Mail className="h-16 w-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-4xl font-bold mb-4">Fique por Dentro das Novidades</h2>
        <p className="text-xl mb-8 opacity-90">
          Receba em primeira mão nossos lançamentos, promoções exclusivas e dicas de estilo
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Seu melhor e-mail" className="bg-white text-gray-900 border-0 flex-1" />
          <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8">Inscrever-se</Button>
        </div>

        <p className="text-sm mt-4 opacity-75">Não enviamos spam. Você pode cancelar a qualquer momento.</p>
      </div>
    </section>
  )
}
