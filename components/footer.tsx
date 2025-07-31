"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, CheckCircle, Linkedin, X, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/components/locale-provider"

export default function Footer() {
  const { messages } = useLocale()

  if (!messages) return null

  const SocialIconMap = {
    Linkedin: Linkedin,
    X: X,
    Facebook: Facebook,
    Instagram: Instagram,
  }

  return (
    <footer className="w-full bg-black text-gray-300 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Top Section: Call to Action */}
        <div className="grid lg:grid-cols-2 gap-8 pb-12 md:pb-16 border-b border-gray-700 mb-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {messages.footer.topSection.title.split(",")[0]}
              <span className="text-gray-500">{messages.footer.topSection.title.split(",")[1] || ""}</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {messages.footer.topSection.features.map((feature, index) => {
                const IconComponent = CheckCircle
                return (
                  <div key={index} className="flex items-center gap-2 text-white">
                    {IconComponent && <IconComponent className="h-5 w-5 text-green-500" />}
                    <span className="text-sm">{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end justify-between space-y-6">
            <p className="text-gray-400 leading-relaxed max-w-md lg:text-right">
              {messages.footer.topSection.description}
            </p>
            <Button
              className="bg-white hover:bg-gray-100 text-black text-base font-medium px-8 py-4 rounded-full shadow-md transition-colors duration-300 flex items-center gap-2"
              asChild
            >
              <Link href={messages.footer.topSection.cta.link} prefetch={false}>
                {messages.footer.topSection.cta.text}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-b border-gray-700">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" prefetch={false}>
            <Image src="/images/vhq-logo-abreviado.png" alt="VHQ Logo" width={40} height={40} priority />
          </Link>
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 text-sm font-medium">
            {messages.footer.navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="hover:text-white transition-colors duration-200"
                prefetch={false}
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4">
            {messages.footer.socialLinks.map((social, index) => {
              const IconComponent = SocialIconMap[social.icon as keyof typeof SocialIconMap]
              return (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={social.icon}
                >
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm">
          <p className="mb-4 md:mb-0 text-gray-400">{messages.footer.copyright}</p>
          <nav className="flex gap-4 text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white" prefetch={false}>
              {messages.footer.privacyPolicy}
            </Link>
            <Link href="/terms-of-use" className="hover:text-white" prefetch={false}>
              {messages.footer.termsOfUse}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
