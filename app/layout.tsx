import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local" // Importar localFont
import WhatsAppButton from "@/components/whatsapp-button" // Importar el componente WhatsAppButton

const questrial = localFont({
  src: "../public/fonts/Questrial-Regular.ttf", // Ruta a tu archivo de fuente
  variable: "--font-questrial",
  display: "swap", // Asegura que la fuente se muestre rápidamente
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${questrial.variable}`}>
      <head>{/* No es necesario un bloque <style> aquí si se usa Tailwind con la variable */}</head>
      <body className="font-questrial">
        {children}
        <WhatsAppButton
          phoneNumber="5491112345678"
          message="Hola, me gustaría obtener más información sobre sus servicios."
        />
      </body>
    </html>
  )
}
