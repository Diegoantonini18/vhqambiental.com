"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MoreHorizontal } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

export default function Hero() {
  const { messages } = useLocale()

  if (!messages || !messages.hero.mainHero) return null

  const { mainHero } = messages.hero

  return (
    <section className="relative w-full h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[120px] shadow-xl">
      {/* Background Image */}
      <Image
        src={mainHero.backgroundImage || "/placeholder.svg"}
        alt="Wind turbines in a field at sunset"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
        priority
      />

      {/* Overlay for text and glassmorphism card */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-black/10 flex flex-col justify-between p-8 md:p-12 lg:p-16">
        {/* Top content: Label and Main Title */}
        <div className="flex flex-col items-start pt-16 md:pt-24 lg:pt-32">
          <p className="text-white text-sm md:text-base mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            {mainHero.topLabel}
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance max-w-4xl">
            {mainHero.title}
          </h1>
        </div>

        {/* Bottom content: CTAs, Project Card, and Stats */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full gap-8 mt-auto">
          {/* Left side: CTAs and Stats */}
          <div className="flex flex-col items-start gap-8 w-full md:w-auto">
            {/* CTAs */}
            <div className="flex gap-4">
              <Link
                href={mainHero.cta1.link}
                className="flex items-center gap-2 text-white text-lg font-medium border-b-2 border-white hover:border-primary transition-colors duration-300 pb-1"
                prefetch={false}
              >
                {mainHero.cta1.text}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                href={mainHero.cta2.link}
                className="flex items-center gap-2 text-white text-lg font-medium border-b-2 border-white hover:border-primary transition-colors duration-300 pb-1"
                prefetch={false}
              >
                {mainHero.cta2.text}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-white mt-8">
              {mainHero.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start">
                  <span className="text-3xl md:text-4xl font-bold">{stat.value}</span>
                  <span className="text-gray-300 text-sm md:text-base">{stat.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Glassmorphism Project Card */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/30 flex flex-col items-start w-full max-w-xs md:max-w-sm lg:max-w-md">
            <div className="flex justify-between items-center w-full mb-4">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
                <Image
                  src={mainHero.projectCard.image || "/placeholder.svg"}
                  alt="Recent project image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <MoreHorizontal className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{mainHero.projectCard.title}</h3>
            <Link
              href="#"
              className="flex items-center gap-2 text-white text-sm md:text-base hover:underline underline-offset-4"
              prefetch={false}
            >
              Discover <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
