"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, MapPin, ShoppingBag, Heart, CreditCard, Star, Edit } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 99999-9999",
    birthDate: "1990-05-15",
    address: "Rua das Flores, 123 - Vila Madalena, São Paulo/SP",
    cep: "05435-000",
  })

  const handleSave = () => {
    setIsEditing(false)
    toast.success("Perfil atualizado com sucesso! ✅")
  }

  const orderHistory = [
    {
      id: "#12345",
      date: "15/12/2023",
      status: "Entregue",
      total: 299.9,
      items: 2,
    },
    {
      id: "#12344",
      date: "10/12/2023",
      status: "Em trânsito",
      total: 189.9,
      items: 1,
    },
    {
      id: "#12343",
      date: "05/12/2023",
      status: "Entregue",
      total: 449.8,
      items: 3,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Meu Perfil</h1>
              <p className="text-xl text-gray-600">Gerencie suas informações e pedidos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{userData.name}</h2>
                  <p className="text-gray-600">{userData.email}</p>
                  <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">Cliente VIP</Badge>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">Pedidos</span>
                    </div>
                    <Badge variant="outline">12</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700">Favoritos</span>
                    </div>
                    <Badge variant="outline">8</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-gray-700">Avaliações</span>
                    </div>
                    <Badge variant="outline">5</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <Card className="shadow-lg border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-6 w-6 text-purple-600" />
                  Informações Pessoais
                </CardTitle>
                <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="bg-transparent">
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancelar" : "Editar"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Data de Nascimento</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={userData.birthDate}
                      onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Textarea
                    id="address"
                    value={userData.address}
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                    disabled={!isEditing}
                    className="min-h-[80px]"
                  />
                </div>

                {isEditing && (
                  <div className="flex gap-4">
                    <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
                      Salvar Alterações
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)} className="bg-transparent">
                      Cancelar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order History */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-purple-600" />
                  Histórico de Pedidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <ShoppingBag className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-600">
                            {order.date} • {order.items} item{order.items > 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">R$ {order.total.toFixed(2)}</p>
                        <Badge
                          className={
                            order.status === "Entregue"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="bg-transparent">
                    Ver Todos os Pedidos
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Lista de Desejos</h3>
                  <p className="text-gray-600 text-sm">8 produtos salvos</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Pagamentos</h3>
                  <p className="text-gray-600 text-sm">Gerenciar cartões</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Endereços</h3>
                  <p className="text-gray-600 text-sm">Gerenciar entregas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
