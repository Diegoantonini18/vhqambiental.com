import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google" // Usar Google Fonts como alternativa
import WhatsAppButton from "@/components/whatsapp-button" // Importar el componente WhatsAppButton

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VHQ Derecho Ambiental",
  description: "Expertos en derecho ambiental con más de 15 años de experiencia",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>{/* No es necesario un bloque <style> aquí si se usa Tailwind con la variable */}</head>
      <body className="font-inter">
        {children}
        <WhatsAppButton
          phoneNumber="5491112345678"
          message="Hola, me gustaría obtener más información sobre sus servicios."
        />
      </body>
    </html>
  )
}
