"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Briefcase, Star, Gavel, ShieldCheck, Car, Sun, Wind, Award } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  const { messages } = useLocale()

  if (!messages) return null

  const { aboutUs, header } = messages

  // Mapeo de nombres de iconos a componentes de Lucide React
  const AchievementIconMap = {
    Briefcase: Briefcase,
    Star: Star,
    Gavel: Gavel,
    ShieldCheck: ShieldCheck,
  }

  const ProblemSolvingIconMap = {
    Car: Car,
    Sun: Sun,
    Wind: Wind,
  }

  const TeamFeatureIconMap = {
    Award: Award,
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* Leaders Section (Left Column: Title, Paragraphs, CTA, and Achievement Cards; Right Column: Main Image) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col items-start space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {aboutUs.leadersSection.title.split(",")[0]}
              <span className="text-gray-500">{aboutUs.leadersSection.title.split(",")[1] || ""}</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">{aboutUs.leadersSection.paragraph1}</p>
            <p className="text-gray-700 leading-relaxed">{aboutUs.leadersSection.paragraph2}</p>
            <Link
              href={header.contactButton.link || "/#contact"}
              className="inline-flex items-center justify-center gap-2 bg-service-teal hover:bg-service-teal/90 text-white text-base font-medium px-6 py-3 rounded-full shadow-md transition-colors duration-300"
              prefetch={false}
            >
              {header.contactButton.text}
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            {/* Achievement Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-8">
              {aboutUs.leadersSection.achievements.map((achievement, index) => {
                const IconComponent = AchievementIconMap[achievement.icon as keyof typeof AchievementIconMap]
                return (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-gray-400 text-xl font-semibold mb-2">0{index + 1}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                      {achievement.text}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Main Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/1-solidez-1.jpeg"
              alt="Equipo de VHQ trabajando en un entorno profesional"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Problem Solving Section (New Style) */}
        <div className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            {/* Title */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                {aboutUs.problemSolvingSection.title.split(",")[0]}
                <span className="text-gray-500">{aboutUs.problemSolvingSection.title.split(",")[1] || ""}</span>
              </h2>
            </div>

            {/* Main Card with Image and Text */}
            <Card className="p-6 md:p-8 lg:p-10 shadow-lg rounded-xl grid lg:grid-cols-2 gap-8 items-center">
              <CardContent className="flex flex-col justify-center p-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {aboutUs.problemSolvingSection.card.company}
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                  &quot;{aboutUs.problemSolvingSection.card.quote}&quot;
                </p>
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white text-base font-medium px-6 py-3 rounded-full shadow-md transition-colors duration-300 w-fit flex items-center gap-2"
                  asChild
                >
                  <Link href={aboutUs.problemSolvingSection.card.cta.link} prefetch={false}>
                    {aboutUs.problemSolvingSection.card.cta.text}
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-gray-600 text-sm mt-6">
                  <span className="font-semibold">{aboutUs.problemSolvingSection.card.author}</span> -{" "}
                  {aboutUs.problemSolvingSection.card.authorTitle}
                </p>
              </CardContent>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={aboutUs.problemSolvingSection.card.image || "/placeholder.svg"}
                  alt="Solar panel car charging station"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </Card>

            {/* Features/Icons below the card */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {aboutUs.problemSolvingSection.features.map((feature, index) => {
                const IconComponent = ProblemSolvingIconMap[feature.icon as keyof typeof ProblemSolvingIconMap]
                return (
                  <div key={index} className="flex items-center gap-2 text-gray-700 text-base">
                    {IconComponent && <IconComponent className="h-5 w-5 text-green-500" />}
                    <span>{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Team Section (New Style) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          {/* Left Column: Title and Description */}
          <div className="flex flex-col items-start space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {aboutUs.teamSection.title.split(",")[0]}
              <span className="text-gray-500">{aboutUs.teamSection.title.split(",")[1] || ""}</span>
            </h2>
            <p className="text-gray-600 md:text-lg leading-relaxed">{aboutUs.teamSection.description}</p>
          </div>

          {/* Right Column: Circular Team Members */}
          <div className="flex flex-wrap justify-center gap-8 py-12">
            {aboutUs.teamSection.members.map((member, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-50 border border-gray-200 shadow-sm cursor-pointer transition-all duration-300 ease-in-out
                  ${index === 0 ? "shadow-md scale-105" : "hover:shadow-md hover:scale-105"}`}
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 text-center px-4 mt-2">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* New Team Features/Icons below the team members */}
        {aboutUs.teamSection.features && (
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {aboutUs.teamSection.features.map((feature, index) => {
              const IconComponent = TeamFeatureIconMap[feature.icon as keyof typeof TeamFeatureIconMap]
              return (
                <div key={index} className="flex items-center gap-2 text-gray-700 text-base">
                  {IconComponent && <IconComponent className="h-5 w-5 text-green-500" />}
                  <span>{feature.text}</span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
