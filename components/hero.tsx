"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

export default function Hero() {
  const { messages } = useLocale()

  // Usamos el primer slide para el contenido del héroe estático
  const heroContent = messages ? messages.hero.slides[0] : null

  if (!heroContent) return null

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={heroContent.image || "/placeholder.svg"}
        alt={heroContent.title}
        fill
        objectFit="cover"
        className="absolute inset-0"
        priority
      />

      {/* Superposición con el texto del héroe */}
      <div className="absolute inset-0 z-10 flex items-center p-4 md:p-8 lg:p-12 bg-black/50">
        <div className="max-w-4xl text-left space-y-6">
          {/* Etiqueta "INDUSTRY" */}
          <span className="bg-lime-500 text-black px-3 py-1 text-xs font-semibold rounded-full inline-block">
            {messages.hero.tag}
          </span>

          {/* Título principal */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">{heroContent.title}</h1>

          {/* Descripción */}
          <p className="text-white text-lg md:text-xl max-w-xl">{heroContent.subtitle}</p>

          {/* Botón "Learn More" */}
          <Button
            className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 rounded-full flex items-center gap-2 text-lg font-semibold"
            asChild
          >
            <Link href="/#services" prefetch={false}>
              {messages.hero.buttonText}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
