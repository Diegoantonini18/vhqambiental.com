"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image" // Importa Image para la imagen de fondo
import { useLocale } from "@/components/locale-provider"

export default function Contact() {
  const { messages } = useLocale()

  if (!messages) return null

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden flex items-center justify-center">
      {/* Imagen de fondo */}
      <Image
        src={messages.contact.backgroundImage || "/placeholder.svg"}
        alt="Contact background"
        fill
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
      />

      {/* Superposición oscura para mejorar la legibilidad del formulario */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Contenedor del formulario centrado */}
      <div className="relative z-20 container px-4 md:px-6 flex justify-center">
        <Card className="w-full max-w-lg p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader className="px-0 pt-0 pb-4 text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">{messages.contact.title}</CardTitle>
            <p className="text-gray-700 mt-2">{messages.contact.description}</p>
          </CardHeader>
          <CardContent className="px-0 py-0">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">{messages.contact.fullNameLabel}</Label>
                <Input id="fullName" placeholder={messages.contact.fullNamePlaceholder} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{messages.contact.emailLabel}</Label>
                <Input id="email" type="email" placeholder={messages.contact.emailPlaceholder} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">{messages.contact.companyLabel}</Label>
                <Input id="company" placeholder={messages.contact.companyPlaceholder} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{messages.contact.subjectLabel}</Label>
                <Input id="subject" placeholder={messages.contact.subjectPlaceholder} required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">{messages.contact.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={messages.contact.messagePlaceholder}
                  className="min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full md:col-span-2 bg-lime-500 hover:bg-lime-600 text-black">
                {messages.contact.submitButton}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
