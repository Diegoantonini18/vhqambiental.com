"use client"

import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react" // Importa ArrowLeft y ArrowRight
import { Button } from "@/components/ui/button"
import { useLocale } from "@/components/locale-provider"

export default function Clients() {
  const { messages } = useLocale()

  if (!messages || !messages.clients) return null

  const testimonial = messages.clients.testimonial

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        {/* Sección superior: Título y subtítulo */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <span className="bg-lime-500 text-black px-3 py-1 text-xs font-semibold rounded-full inline-block">
            {messages.clients.tag}
          </span>
          <h2 className="text-3xl font-bold sm:text-5xl tracking-normal text-gray-900">{messages.clients.mainTitle}</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {messages.clients.subtitle}
          </p>
        </div>

        {/* Tarjeta de testimonio */}
        <div className="bg-white p-8 rounded-lg shadow-lg grid lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Columna izquierda: Descripción y detalles del testimonio */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">{testimonial.description}</p>
            <div className="h-0.5 w-20 bg-lime-500" /> {/* Línea verde */}
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
            <div className="flex gap-4">
              {/* Flechas de navegación (mantengo por si se desea un carrusel de testimonios en el futuro) */}
              <Button variant="ghost" size="icon" aria-label="Previous testimonial">
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Next testimonial">
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Columna derecha: Imagen del testimonio */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Cuadrícula de logos de clientes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {messages.clients.logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Client Logo ${index + 1}`}
                width={160}
                height={80}
                objectFit="contain"
                className="max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
