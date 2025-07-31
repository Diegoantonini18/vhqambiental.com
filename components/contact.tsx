"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/components/locale-provider"
import Image from "next/image"

export default function Contact() {
  const { messages } = useLocale()

  if (!messages) return null

  const IconMap = {
    Mail: Mail,
    Phone: Phone,
    MapPin: MapPin,
    Clock: Clock,
  }

  const titleParts = messages.contact.title.split(",")
  const firstPart = titleParts[0]
  const secondPart = titleParts.slice(1).join(",")

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        {/* Title and Description Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {firstPart}
              <span className="text-gray-500">{secondPart || ""}</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 md:text-lg leading-relaxed">{messages.contact.description}</p>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {messages.contact.infoItems.map((item, index) => {
            const IconComponent = IconMap[item.icon as keyof typeof IconMap]
            return (
              <Card key={index} className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="flex flex-col items-start p-0">
                  <div className="bg-green-100 p-3 rounded-lg mb-4">
                    {IconComponent && <IconComponent className="h-8 w-8 text-green-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white p-8 rounded-xl shadow-lg">
            <CardContent className="px-0 py-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {messages.contact.formTitle.split(",")[0]}
                <span className="text-gray-500">{messages.contact.formTitle.split(",")[1] || ""}</span>
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700">
                    {messages.contact.fullNameLabel}
                  </Label>
                  <Input
                    id="fullName"
                    placeholder={messages.contact.fullNamePlaceholder}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    {messages.contact.emailLabel}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={messages.contact.emailPlaceholder}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">
                    {messages.contact.companyLabel}
                  </Label>
                  <Input
                    id="company"
                    placeholder={messages.contact.companyPlaceholder}
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700">
                    {messages.contact.subjectLabel}
                  </Label>
                  <Input
                    id="subject"
                    placeholder={messages.contact.subjectPlaceholder}
                    required
                    className="border-gray-300 focus:border-primary focus:ring-primary rounded-full"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message" className="text-gray-700">
                    {messages.contact.messageLabel}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={messages.contact.messagePlaceholder}
                    className="min-h-[120px] border-gray-300 focus:border-primary focus:ring-primary rounded-xl"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:col-span-2 bg-primary hover:bg-primary/90 text-white text-lg font-semibold py-3 rounded-full shadow-md transition-colors duration-300"
                >
                  {messages.contact.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <div className="relative h-[300px] md:h-[400px] lg:h-auto min-h-[300px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/1-solidez-1.jpeg?height=400&width=600"
              alt="Map of Buenos Aires"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
