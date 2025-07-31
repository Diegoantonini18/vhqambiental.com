"use client"

import Image from "next/image"
import { useLocale } from "@/components/locale-provider"

export default function Distinctions() {
  const { messages } = useLocale()

  if (!messages || !messages.distinctions || !messages.distinctions.members) return null

  const members = messages.distinctions.members

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        {/* Sección superior: Título y subtítulo */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <span className="bg-lime-500 text-black px-3 py-1 text-xs font-semibold rounded-full inline-block">
            {messages.distinctions.tag}
          </span>
          <h2 className="text-3xl font-bold sm:text-5xl tracking-normal text-gray-900">
            {messages.distinctions.mainTitle}
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {messages.distinctions.subtitle}
          </p>
        </div>

        {/* Cuadrícula de miembros del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-center">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-md text-gray-700 mb-1">{member.title}</p>
              <p className="text-sm text-gray-500">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
