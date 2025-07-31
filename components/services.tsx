"use client"

import { Leaf, Scale, FileText, Users, Building } from "lucide-react"
import { useLocale } from "@/components/locale-provider" // Importa el hook useLocale

export default function Services() {
  const { messages } = useLocale() // Usa el hook para obtener los mensajes

  if (!messages) return null // Muestra un estado de carga o null si los mensajes aún no están disponibles

  const IconMap = {
    Leaf: Leaf,
    Scale: Scale,
    FileText: FileText,
    Users: Users,
    Building: Building,
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Sección de Título y Descripción */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {messages.services.title.split(",")[0]}
              <span className="text-gray-500">{messages.services.title.split(",")[1] || ""}</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 md:text-lg leading-relaxed">{messages.services.description}</p>
          </div>
        </div>

        {/* Sección de Círculos de Servicios */}
        <div className="flex flex-wrap justify-center gap-8 py-12">
          {messages.services.cards.map((card, index) => {
            const IconComponent = IconMap[card.icon]
            // Usar el color de la tarjeta para el icono, si está definido, o un color por defecto
            const iconColorClass = card.color.replace("bg-", "text-") // Convert bg-primary to text-primary

            return (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-50 border border-gray-200 shadow-sm cursor-pointer transition-all duration-300 ease-in-out
                  ${index === 0 ? "shadow-md scale-105" : "hover:shadow-md hover:scale-105"}`}
              >
                {IconComponent && <IconComponent className={`h-16 w-16 mb-4 ${iconColorClass}`} />}
                <h3 className="text-lg font-semibold text-gray-800 text-center px-4">{card.title}</h3>
                {/* Nota: La descripción y sub-servicios no se muestran directamente en este diseño circular.
                    Si se necesitan, se podría implementar un tooltip, modal o enlace a una página de detalles. */}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
