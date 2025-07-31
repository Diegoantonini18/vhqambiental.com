"use client"

import { ShieldCheck, Globe, Briefcase, Heart, Activity, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/components/locale-provider"

export default function Clients() {
  const { messages } = useLocale()

  if (!messages) return null

  const IconMap = {
    ShieldCheck: ShieldCheck,
    Globe: Globe,
    Briefcase: Briefcase,
    Heart: Heart,
    Activity: Activity,
    Zap: Zap,
  }

  const titleParts = messages.clients.title.split(",")
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
            <p className="text-gray-600 md:text-lg leading-relaxed">{messages.clients.description}</p>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.clients.items.map((item, index) => {
            const IconComponent = IconMap[item.icon as keyof typeof IconMap]
            return (
              <Card key={index} className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="flex flex-col items-start p-0">
                  <div className="bg-green-100 p-3 rounded-lg mb-4">
                    {IconComponent && <IconComponent className="h-8 w-8 text-green-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
