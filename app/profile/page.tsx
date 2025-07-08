"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  MapPin,
  ShoppingBag,
  Heart,
  CreditCard,
  Star,
  Edit,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [userData, setUserData] = useState({
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "(11) 99999-9999",
    birthDate: "1990-05-15",
    address: "Rua das Flores, 123 - Vila Madalena, São Paulo/SP",
    cep: "05435-000",
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Perfil atualizado com sucesso! ✅");
  };

  // Histórico completo de pedidos
  const fullOrderHistory = [
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
    {
      id: "#12342",
      date: "28/11/2023",
      status: "Entregue",
      total: 159.9,
      items: 1,
    },
    {
      id: "#12341",
      date: "20/11/2023",
      status: "Entregue",
      total: 329.8,
      items: 2,
    },
    {
      id: "#12340",
      date: "15/11/2023",
      status: "Entregue",
      total: 89.9,
      items: 1,
    },
    {
      id: "#12339",
      date: "08/11/2023",
      status: "Entregue",
      total: 259.7,
      items: 2,
    },
    {
      id: "#12338",
      date: "01/11/2023",
      status: "Entregue",
      total: 199.9,
      items: 1,
    },
  ];

  // Mostra apenas os 3 primeiros pedidos inicialmente
  const displayedOrders = showAllOrders
    ? fullOrderHistory
    : fullOrderHistory.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <User className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">Meu Perfil</h1>
              <p className="text-xl text-purple-100">
                Gerencie suas informações e pedidos
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl border-0 sticky top-8 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {userData.name}
                  </h2>
                  <p className="text-gray-600 mb-3 text-sm">{userData.email}</p>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg text-xs">
                    ✨ Cliente VIP
                  </Badge>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        Pedidos
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-white font-semibold text-xs"
                    >
                      {fullOrderHistory.length}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Heart className="h-4 w-4 text-red-500" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        Favoritos
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-white font-semibold text-xs"
                    >
                      8
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        Avaliações
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-white font-semibold text-xs"
                    >
                      5
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  Informações Pessoais
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-white/80 hover:bg-purple-50 border-purple-200 text-purple-700 hover:text-purple-800 font-medium"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancelar" : "Editar"}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-gray-700 font-medium text-sm"
                    >
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      value={userData.name}
                      onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                      }
                      disabled={!isEditing}
                      className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-medium text-sm"
                    >
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      disabled={!isEditing}
                      className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 font-medium text-sm"
                    >
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      value={userData.phone}
                      onChange={(e) =>
                        setUserData({ ...userData, phone: e.target.value })
                      }
                      disabled={!isEditing}
                      className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="birthDate"
                      className="text-gray-700 font-medium text-sm"
                    >
                      Data de Nascimento
                    </Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={userData.birthDate}
                      onChange={(e) =>
                        setUserData({ ...userData, birthDate: e.target.value })
                      }
                      disabled={!isEditing}
                      className="bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="address"
                    className="text-gray-700 font-medium text-sm"
                  >
                    Endereço
                  </Label>
                  <Textarea
                    id="address"
                    value={userData.address}
                    onChange={(e) =>
                      setUserData({ ...userData, address: e.target.value })
                    }
                    disabled={!isEditing}
                    className="min-h-[80px] bg-gray-50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
                    >
                      Salvar Alterações
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="bg-white/80 hover:bg-gray-50"
                    >
                      Cancelar
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order History */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-white" />
                  </div>
                  Histórico de Pedidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {displayedOrders.map((order, index) => (
                    <div
                      key={order.id}
                      className={`flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md ${
                        index >= 3
                          ? "animate-in slide-in-from-top-1 fade-in-0 duration-700"
                          : ""
                      }`}
                      style={{
                        animationDelay:
                          index >= 3 ? `${(index - 3) * 150}ms` : "0ms",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                          <ShoppingBag className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-base">
                            {order.id}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {order.date} • {order.items} item
                            {order.items > 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 text-lg mb-1">
                          R$ {order.total.toFixed(2)}
                        </p>
                        <Badge
                          className={
                            order.status === "Entregue"
                              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-md"
                              : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-md"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllOrders(!showAllOrders)}
                    className="bg-white/80 hover:bg-purple-50 border-purple-200 text-purple-700 hover:text-purple-800 font-medium shadow-lg transition-all duration-500 hover:scale-105"
                  >
                    {showAllOrders ? (
                      <>
                        <ChevronUp
                          className={`mr-2 h-4 w-4 transition-transform duration-500 ${
                            showAllOrders ? "rotate-180" : "rotate-0"
                          }`}
                        />
                        Mostrar Menos
                      </>
                    ) : (
                      <>
                        <ChevronDown
                          className={`mr-2 h-4 w-4 transition-transform duration-500 ${
                            showAllOrders ? "rotate-180" : "rotate-0"
                          }`}
                        />
                        Ver Todos os Pedidos ({fullOrderHistory.length - 3}{" "}
                        mais)
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/95 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    Lista de Desejos
                  </h3>
                  <p className="text-gray-600">8 produtos salvos</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/95 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    Pagamentos
                  </h3>
                  <p className="text-gray-600">Gerenciar cartões</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/95 backdrop-blur-sm hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    Endereços
                  </h3>
                  <p className="text-gray-600">Gerenciar entregas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
