"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react" // Importa ArrowRight para el botón "Learn more"
import Image from "next/image"
import Link from "next/link" // Importa Link para los botones "Learn more"
import { useLocale } from "@/components/locale-provider"

export default function Services() {
  const { messages } = useLocale()

  if (!messages) return null

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-[1fr_2fr] gap-12">
        {/* Columna izquierda: Etiqueta y Título principal */}
        <div className="flex flex-col justify-center space-y-6 lg:pr-12">
          <span className="bg-lime-500 text-black px-3 py-1 text-xs font-semibold rounded-full inline-block self-start">
            {messages.services.tag}
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            {messages.services.mainTitle}
          </h2>
        </div>

        {/* Columna derecha: Grid de tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.services.cards.map((card, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-md rounded-lg">
              <div className="relative w-full aspect-square">
                <Image
                  src={card.backgroundImage || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="bg-gray-800 text-white p-6 flex flex-col justify-between flex-grow rounded-b-lg">
                <h3 className="text-lime-500 text-xl font-semibold mb-4">{card.title}</h3>
                <Link href="/#contact" prefetch={false} className="flex items-center gap-2 text-white hover:underline">
                  {messages.services.learnMoreText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
