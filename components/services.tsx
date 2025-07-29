"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Scale, FileText, Users, Building } from "lucide-react"
import Image from "next/image"
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

  const bgColors = ["bg-primary", "bg-secondary", "bg-tertiary", "bg-quaternary"]
  const textColors = ["text-white", "text-gray-800", "text-white", "text-gray-800"]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white leading-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-5xl tracking-normal">{messages.services.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.services.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
          {messages.services.cards.map((card, index) => {
            const IconComponent = IconMap[card.icon]
            const currentBgColor = bgColors[index % bgColors.length]
            const currentTextColor = textColors[index % textColors.length]
            return (
              <Card key={index} className="flex flex-col overflow-hidden">
                <CardHeader
                  className={`relative p-6 ${currentBgColor} ${currentTextColor} rounded-t-lg flex flex-col items-center text-center overflow-hidden`}
                  style={{ clipPath: "inset(0)" }}
                >
                  <Image
                    src={card.backgroundImage || "/placeholder.svg"}
                    alt={`Background for ${card.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 opacity-40 rounded-t-lg"
                  />
                  <div className="relative z-20 flex flex-col items-center text-center">
                    {IconComponent && <IconComponent className="h-12 w-12 mb-4" />}
                    <CardTitle className="text-xl font-semibold">{card.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {card.subServices.map((subService, subIndex) => (
                      <li key={subIndex}>{subService}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
