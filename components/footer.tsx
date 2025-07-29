"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/components/locale-provider" // Importa el hook useLocale

export default function Footer() {
  const { locale, messages } = useLocale() // Usa el hook para obtener el locale y los mensajes

  if (!messages) return null // Muestra un estado de carga o null si los mensajes aún no están disponibles

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              {" "}
              {/* Eliminado ?locale=${locale} */}
              <Image src="/images/vhq-logo.png" alt="VHQ Derecho Ambiental Logo" width={160} height={40} priority />
            </Link>
            <p className="text-sm leading-relaxed">{messages.footer.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{messages.footer.quickLinksTitle}</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
                {messages.footer.quickLinks.home}
              </Link>
              <Link href="/#services" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
                {messages.footer.quickLinks.services}
              </Link>
              <Link href="/#about-us" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
                {messages.footer.quickLinks.aboutUs}
              </Link>
              <Link href="/#contact" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
                {messages.footer.quickLinks.contact}
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{messages.footer.servicesTitle}</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/#services" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
                {messages.footer.services.environmentalConsulting}
              </Link>
              <Link href="/#services" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
                {messages.footer.services.environmentalLitigation}
              </Link>
              <Link href="/#services" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
                {messages.footer.services.regulatoryCompliance}
              </Link>
              <Link href="/#services" className="block hover:text-white" prefetch={false}>
                {" "}
                {/* Eliminado ?locale=${locale} */}
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
            <Link href="/privacy-policy" className="hover:text-white" prefetch={false}>
              {" "}
              {/* Asumiendo rutas estáticas */}
              {messages.footer.privacyPolicy}
            </Link>
            <Link href="/terms-of-use" className="hover:text-white" prefetch={false}>
              {" "}
              {/* Asumiendo rutas estáticas */}
              {messages.footer.termsOfUse}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
