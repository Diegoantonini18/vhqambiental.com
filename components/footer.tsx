"use client" // Asegúrate de que este componente sea un Client Component si usa Image de next/image

import Link from "next/link"
import Image from "next/image" // Importar el componente Image

interface FooterProps {
  messages: {
    header: {
      logo: {
        line1: string
        line2: string
        line3: string
      }
    }
    footer: {
      description: string
      quickLinksTitle: string
      quickLinks: {
        home: string
        services: string
        aboutUs: string
        contact: string
      }
      servicesTitle: string
      services: {
        environmentalConsulting: string
        environmentalLitigation: string
        regulatoryCompliance: string
        sustainableDevelopment: string
      }
      contactTitle: string
      address: string
      phone: string
      email: string
      copyright: string
      privacyPolicy: string
      termsOfUse: string
    }
  }
  locale: string
}

export default function Footer({ messages, locale }: FooterProps) {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          <div className="space-y-4">
            <Link href={`/?locale=${locale}`} className="flex items-center gap-2" prefetch={false}>
              <Image
                src="/images/vhq-logo.png" // Usar la misma ruta del logo del header
                alt="VHQ Derecho Ambiental Logo"
                width={160} // Ajustar el tamaño según sea necesario para el footer
                height={40}
                priority // Considerar si es necesario 'priority' en el footer
              />
            </Link>
            <p className="text-sm leading-relaxed">{messages.footer.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{messages.footer.quickLinksTitle}</h3>
            <nav className="space-y-2 text-sm">
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.quickLinks.home}
              </Link>
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.quickLinks.services}
              </Link>
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.quickLinks.aboutUs}
              </Link>
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.quickLinks.contact}
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{messages.footer.servicesTitle}</h3>
            <nav className="space-y-2 text-sm">
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.services.environmentalConsulting}
              </Link>
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.services.environmentalLitigation}
              </Link>
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.services.regulatoryCompliance}
              </Link>
              <Link href={`/?locale=${locale}`} className="block hover:text-white" prefetch={false}>
                {messages.footer.services.sustainableDevelopment}
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{messages.footer.contactTitle}</h3>
            <div className="space-y-2 text-sm">
              <p className="whitespace-pre-line">{messages.footer.address}</p>
              <p>{messages.footer.phone}</p>
              <p>{messages.footer.email}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm">
          <p className="mb-4 md:mb-0">{messages.footer.copyright}</p>
          <nav className="flex gap-4">
            <Link href={`/?locale=${locale}`} className="hover:text-white" prefetch={false}>
              {messages.footer.privacyPolicy}
            </Link>
            <Link href={`/?locale=${locale}`} className="hover:text-white" prefetch={false}>
              {messages.footer.termsOfUse}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
