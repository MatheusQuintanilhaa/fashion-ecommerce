"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ruler, Info } from "lucide-react";

interface SizeGuideModalProps {
  category: string;
}

export function SizeGuideModal({ category }: SizeGuideModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getSizeData = () => {
    switch (category.toLowerCase()) {
      case "masculino":
        return {
          title: "Guia de Tamanhos - Masculino",
          description:
            "Medidas em centímetros. Para melhores resultados, meça sobre a roupa íntima.",
          tables: [
            {
              title: "Camisas e Polos",
              headers: ["Tamanho", "Peito", "Cintura", "Quadril"],
              rows: [
                ["PP", "88-92", "76-80", "88-92"],
                ["P", "92-96", "80-84", "92-96"],
                ["M", "96-100", "84-88", "96-100"],
                ["G", "100-104", "88-92", "100-104"],
                ["GG", "104-108", "92-96", "104-108"],
              ],
            },
            {
              title: "Calças",
              headers: ["Tamanho", "Cintura", "Quadril", "Coxa"],
              rows: [
                ["38", "76-80", "88-92", "56-60"],
                ["40", "80-84", "92-96", "60-64"],
                ["42", "84-88", "96-100", "64-68"],
                ["44", "88-92", "100-104", "68-72"],
                ["46", "92-96", "104-108", "72-76"],
              ],
            },
          ],
        };
      case "feminino":
        return {
          title: "Guia de Tamanhos - Feminino",
          description:
            "Medidas em centímetros. Para melhores resultados, meça sobre a roupa íntima.",
          tables: [
            {
              title: "Blusas e Vestidos",
              headers: ["Tamanho", "Busto", "Cintura", "Quadril"],
              rows: [
                ["PP", "80-84", "60-64", "88-92"],
                ["P", "84-88", "64-68", "92-96"],
                ["M", "88-92", "68-72", "96-100"],
                ["G", "92-96", "72-76", "100-104"],
              ],
            },
            {
              title: "Saias e Calças",
              headers: ["Tamanho", "Cintura", "Quadril", "Coxa"],
              rows: [
                ["PP", "60-64", "88-92", "50-54"],
                ["P", "64-68", "92-96", "54-58"],
                ["M", "68-72", "96-100", "58-62"],
                ["G", "72-76", "100-104", "62-66"],
              ],
            },
          ],
        };
      case "acessorios":
        return {
          title: "Guia de Tamanhos - Calçados",
          description:
            "Medidas em centímetros. Meça o pé em pé, preferencialmente à tarde.",
          tables: [
            {
              title: "Calçados Unissex",
              headers: ["Tamanho", "Comprimento (cm)", "Largura (cm)"],
              rows: [
                ["36", "22.5", "8.5"],
                ["37", "23.0", "8.7"],
                ["38", "24.0", "9.0"],
                ["39", "24.5", "9.2"],
                ["40", "25.0", "9.5"],
                ["41", "26.0", "9.7"],
                ["42", "26.5", "10.0"],
              ],
            },
          ],
        };
      default:
        return {
          title: "Guia de Tamanhos",
          description: "Consulte as medidas para encontrar o tamanho ideal.",
          tables: [
            {
              title: "Tamanhos Gerais",
              headers: ["Tamanho", "Descrição"],
              rows: [
                ["PP", "Extra Pequeno"],
                ["P", "Pequeno"],
                ["M", "Médio"],
                ["G", "Grande"],
                ["GG", "Extra Grande"],
              ],
            },
          ],
        };
    }
  };

  const sizeData = getSizeData();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-2 h-8 text-sm font-medium"
        >
          <Ruler className="h-4 w-4 mr-1.5" />
          Guia de tamanhos
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Ruler className="h-5 w-5 text-purple-600" />
            {sizeData.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {sizeData.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {sizeData.tables.map((table, tableIndex) => (
            <div key={tableIndex} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {table.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-purple-50">
                      {table.headers.map((header, index) => (
                        <th
                          key={index}
                          className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className={
                          rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-3 text-gray-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900">
                  Dicas importantes:
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Meça sempre sobre a roupa íntima ou roupa justa</li>
                  <li>• Use uma fita métrica flexível</li>
                  <li>• Não aperte demais a fita durante a medição</li>
                  <li>
                    • Em caso de dúvida entre dois tamanhos, escolha o maior
                  </li>
                  <li>• As medidas podem variar entre diferentes modelos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-3">
              📏 Como medir corretamente:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-800">
              <div>
                <p className="font-medium mb-1">• Busto/Peito:</p>
                <p>Meça na parte mais larga do tórax</p>
              </div>
              <div>
                <p className="font-medium mb-1">• Cintura:</p>
                <p>Meça na parte mais estreita do tronco</p>
              </div>
              <div>
                <p className="font-medium mb-1">• Quadril:</p>
                <p>Meça na parte mais larga dos quadris</p>
              </div>
              <div>
                <p className="font-medium mb-1">• Comprimento do pé:</p>
                <p>Do calcanhar até o dedo mais longo</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Ainda com dúvidas? Entre em contato conosco pelo{" "}
              <span className="text-purple-600 font-medium">
                WhatsApp (11) 99999-9999
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
