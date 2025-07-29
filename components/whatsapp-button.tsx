"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image" // Importar Image para usar el SVG

interface WhatsAppButtonProps {
  phoneNumber: string // Número de teléfono con código de país, sin '+' ni espacios
  message?: string // Mensaje predefinido (opcional)
}

export default function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="icon"
        className="h-20 w-20 rounded-full bg-primary hover:bg-[#1DA851] text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-110"
      >
        <Image
          src="/images/whatsapp-icon.svg" // Usar la ruta del SVG
          alt="WhatsApp Icon"
          width={40} // Ajustar el tamaño del SVG dentro del botón
          height={40}
          className="h-10 w-10" // Clases de Tailwind para el tamaño final
        />
      </Button>
    </Link>
  )
}
