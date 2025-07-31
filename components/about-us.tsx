"use client"

import Image from "next/image"
import { useState } from "react"
import { Lightbulb, Target, Handshake } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

export default function AboutUs() {
  const { messages } = useLocale()
  const [activeTab, setActiveTab] = useState(0)

  if (!messages) return null

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        {/* Sección de Líderes con Imagen (adaptada al nuevo diseño) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col space-y-6">
            {/* Etiqueta "COMPANY" */}
            <span className="bg-lime-500 text-black px-3 py-1 text-xs font-semibold rounded-full inline-block self-start">
              {messages.aboutUs.tag}
            </span>

            {/* Título principal */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              {messages.aboutUs.mainTitle}
            </h2>

            {/* Párrafos de descripción */}
            <p className="text-gray-700 leading-relaxed">{messages.aboutUs.paragraph1}</p>
            <p className="text-gray-700 leading-relaxed">{messages.aboutUs.paragraph2}</p>

            {/* Sección de pestañas */}
            <div className="mt-8">
              <div className="flex border-b border-gray-300">
                {messages.aboutUs.tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 text-lg font-medium ${activeTab === index ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-gray-900"}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="bg-white p-6 rounded-b-lg shadow-sm">
                <p className="text-gray-700">{messages.aboutUs.tabs[activeTab].content}</p>
              </div>
            </div>
          </div>
          {/* Columna derecha: Imagen con overlay de año */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/3-creatividad-1.jpeg"
              alt="Industrial plant"
              fill
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-0 right-0 bg-gray-800 text-white p-6 text-center rounded-bl-lg">
              <span className="block text-5xl font-bold text-lime-500">{messages.aboutUs.establishedYear}</span>
              <span className="block text-sm uppercase tracking-wider">{messages.aboutUs.establishedSince}</span>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  )
}
