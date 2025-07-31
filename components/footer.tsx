"use client"

import Link from "next/link"
import { useLocale } from "@/components/locale-provider"
import { Facebook, Twitter, Youtube } from "lucide-react" // Importa los iconos de redes sociales

export default function Footer() {
  const { messages } = useLocale()

  if (!messages) return null

  const { columns, copyright, privacyPolicy, termsOfUse } = messages.footer

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          {/* Columna 1: Descripción */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed">{columns.col1.content}</p>
          </div>

          {/* Columna 2: Direcciones */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-lime-500 uppercase tracking-wider">{columns.col2.title1}</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">{columns.col2.address1}</p>
            {columns.col2.title2 && (
              <>
                <h3 className="text-lg font-semibold text-lime-500 uppercase tracking-wider mt-4">
                  {columns.col2.title2}
                </h3>
                <p className="text-sm leading-relaxed whitespace-pre-line">{columns.col2.address2}</p>
              </>
            )}
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-lime-500 uppercase tracking-wider">{columns.col3.title1}</h3>
            <p className="text-sm leading-relaxed">Email: {columns.col3.email}</p>
            <h3 className="text-lg font-semibold text-lime-500 uppercase tracking-wider mt-4">{columns.col3.title2}</h3>
            <p className="text-sm leading-relaxed">{columns.col3.phone}</p>
          </div>

          {/* Columna 4: Ayuda y Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-lime-500 uppercase tracking-wider">{columns.col4.title1}</h3>
            <Link href={columns.col4.helpLinkUrl} className="block text-sm hover:text-white" prefetch={false}>
              {columns.col4.helpLinkText}
            </Link>
            <h3 className="text-lg font-semibold text-lime-500 uppercase tracking-wider mt-4">{columns.col4.title2}</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-gray-400" aria-label="Facebook" prefetch={false}>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-400" aria-label="Twitter" prefetch={false}>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-400" aria-label="YouTube" prefetch={false}>
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Sección de copyright y políticas (se mantiene en la parte inferior) */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-sm border-t border-gray-700 mt-8">
          <p className="mb-4 md:mb-0">{copyright}</p>
          <nav className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white" prefetch={false}>
              {privacyPolicy}
            </Link>
            <Link href="/terms-of-use" className="hover:text-white" prefetch={false}>
              {termsOfUse}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
