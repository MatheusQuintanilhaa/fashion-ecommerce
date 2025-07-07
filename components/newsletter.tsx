"use client";

import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setStatus("error");
      setMessage("Por favor, digite seu e-mail");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Por favor, digite um e-mail válido");
      return;
    }

    setStatus("loading");

    // Simular chamada para API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setMessage("Inscrição realizada com sucesso! Verifique seu e-mail.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Erro ao realizar inscrição. Tente novamente.");
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <div className="mb-6">
          <Mail className="h-16 w-16 mx-auto opacity-90 animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
          Fique por Dentro das Novidades
        </h2>

        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Receba em primeira mão nossos lançamentos, promoções exclusivas e
          dicas de estilo
        </p>

        <div className="max-w-md mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-4 focus:ring-purple-300 focus:outline-none placeholder-gray-500 text-sm"
                disabled={status === "loading"}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={status === "loading" || status === "success"}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                status === "success"
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : "bg-white text-purple-600 hover:bg-gray-100 hover:scale-105 active:scale-95"
              } ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status === "loading" && (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </div>
              )}
              {status === "success" && (
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Inscrito!
                </div>
              )}
              {status === "idle" && "Inscrever-se"}
              {status === "error" && "Tentar Novamente"}
            </button>
          </div>
        </div>

        {message && (
          <div
            className={`p-3 rounded-lg mb-4 max-w-md mx-auto flex items-center gap-2 ${
              status === "success"
                ? "bg-green-500/20 text-green-100 border border-green-400/30"
                : "bg-red-500/20 text-red-100 border border-red-400/30"
            }`}
          >
            {status === "success" ? (
              <Check className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span className="text-sm">{message}</span>
          </div>
        )}

        <p className="text-sm opacity-75 mb-8">
          Não enviamos spam. Você pode cancelar a qualquer momento.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-1">Ofertas Exclusivas</h4>
            <p className="text-sm opacity-80">
              Descontos especiais só para assinantes
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">👗</div>
            <h4 className="font-semibold mb-1">Lançamentos</h4>
            <p className="text-sm opacity-80">
              Seja o primeiro a conhecer nossas novidades
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">💡</div>
            <h4 className="font-semibold mb-1">Dicas de Estilo</h4>
            <p className="text-sm opacity-80">
              Conselhos de moda direto no seu e-mail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
