"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneIcon as Whatsapp } from "lucide-react" // Importa el icono de WhatsApp

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
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-110"
      >
        <Whatsapp className="h-8 w-8" />
      </Button>
    </Link>
  )
}
