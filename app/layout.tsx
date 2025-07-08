import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/hooks/use-cart"
import { WishlistProvider } from "@/hooks/use-wishlist"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Fashion - Sua Loja de Moda Online",
    template: "%s | Fashion",
  },
  description:
    "Descubra as últimas tendências da moda com nossa coleção exclusiva. Estilo, qualidade e elegância em cada peça. Roupas femininas, masculinas e acessórios.",
  keywords: ["moda", "roupas", "fashion", "estilo", "tendências", "feminino", "masculino", "acessórios"],
  authors: [{ name: "Fashion Team" }],
  creator: "Fashion",
  publisher: "Fashion",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/placeholder-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/placeholder-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fashion-store.vercel.app",
    siteName: "Fashion",
    title: "Fashion - Sua Loja de Moda Online",
    description: "Descubra as últimas tendências da moda com nossa coleção exclusiva.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fashion - Loja de Moda Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion - Sua Loja de Moda Online",
    description: "Descubra as últimas tendências da moda com nossa coleção exclusiva.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ErrorBoundary>
          <CartProvider>
            <WishlistProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <Toaster
                position="top-right"
                richColors
                closeButton
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: "white",
                    border: "1px solid #e5e7eb",
                    color: "#374151",
                  },
                }}
              />
            </WishlistProvider>
          </CartProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
