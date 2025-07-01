"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

interface ProductFiltersProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedSize: string
  setSelectedSize: (size: string) => void
  priceRange: number[]
  setPriceRange: (range: number[]) => void
}

export function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  selectedSize,
  setSelectedSize,
  priceRange,
  setPriceRange,
}: ProductFiltersProps) {
  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "feminino", label: "Feminino" },
    { value: "masculino", label: "Masculino" },
    { value: "acessorios", label: "Acessórios" },
  ]

  const sizes = [
    { value: "all", label: "Todos os Tamanhos" },
    { value: "PP", label: "PP" },
    { value: "P", label: "P" },
    { value: "M", label: "M" },
    { value: "G", label: "G" },
    { value: "GG", label: "GG" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
            {categories.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <RadioGroupItem value={category.value} id={category.value} />
                <Label htmlFor={category.value}>{category.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tamanho</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
            {sizes.map((size) => (
              <div key={size.value} className="flex items-center space-x-2">
                <RadioGroupItem value={size.value} id={size.value} />
                <Label htmlFor={size.value}>{size.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Faixa de Preço</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} min={0} step={10} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>R$ {priceRange[0]}</span>
              <span>R$ {priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
