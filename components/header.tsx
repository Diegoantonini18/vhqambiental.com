"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, MenuIcon } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useLocale } from "@/components/locale-provider" // Importa el hook useLocale

export default function Header() {
  const { locale, setLocale, messages } = useLocale() // Usa el hook para obtener el locale y los mensajes
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLanguageChange = (newLocale: "en" | "es") => {
    setLocale(newLocale) // Cambia el estado del locale
    setIsMobileMenuOpen(false) // Cierra el menú después del cambio de idioma
  }

  if (!messages) return null // Muestra un estado de carga o null si los mensajes aún no están disponibles

  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-6 bg-white">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        {" "}
        {/* Eliminado ?locale=${locale} */}
        <Image src="/images/vhq-logo.png" alt="VHQ Derecho Ambiental Logo" width={160} height={40} priority />
      </Link>

      {/* Centered Navigation */}
      <nav className="hidden md:flex items-center justify-center flex-grow gap-6">
        <Link
          href="/#about-us" // Asumiendo que tienes un ID "about-us" en la sección
          className="text-sm font-medium hover:text-primary transition-colors duration-200"
          prefetch={false}
        >
          {messages.header.nav.aboutUs}
        </Link>
        <Link
          href="/#services" // Enlace directo a la sección de servicios
          className="text-sm font-medium hover:text-primary transition-colors duration-200"
          prefetch={false}
        >
          {messages.header.nav.services}
        </Link>
        <Link
          href="/#legal-matrix" // Enlace directo a la sección de matriz legal
          className="text-sm font-medium hover:text-primary transition-colors duration-200"
          prefetch={false}
        >
          {messages.header.nav.legalMatrix}
        </Link>
      </nav>

      {/* Right-aligned elements */}
      <div className="flex items-center gap-4 md:gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium hover:bg-gray-100 px-2 py-1 h-auto">
              {locale === "en" ? "EN" : "ES"}
              <ChevronDownIcon className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLanguageChange("es")}>Español</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          className="bg-service-teal hover:bg-service-teal/90 text-white text-sm font-medium px-6 py-3 hidden md:inline-flex rounded-full shadow-md"
          asChild
        >
          <Link href="/#contact" prefetch={false}>
            {" "}
            {/* Enlace directo a la sección de contacto */}
            {messages.header.contactButton.text}
          </Link>
        </Button>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-2 py-4 border-b"
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/images/vhq-logo.png" alt="VHQ Derecho Ambiental Logo" width={160} height={40} priority />
            </Link>
            <nav className="grid gap-4 py-6">
              <Link
                href="/#about-us"
                className="text-lg font-medium hover:text-primary transition-colors duration-200"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.aboutUs}
              </Link>
              <Link
                href="/#services"
                className="text-lg font-medium hover:text-primary transition-colors duration-200"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.services}
              </Link>
              <Link
                href="/#legal-matrix"
                className="text-lg font-medium hover:text-primary transition-colors duration-200"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.legalMatrix}
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-4 p-4 border-t">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium hover:bg-gray-100 px-2 py-1 h-auto w-full">
                    {locale === "en" ? "EN" : "ES"}
                    <ChevronDownIcon className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLanguageChange("es")}>Español</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="bg-service-teal hover:bg-service-teal/90 text-white text-sm font-medium px-6 py-3 rounded-full w-full shadow-md"
                asChild
              >
                <Link href="/#contact" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                  {messages.header.contactButton.text}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
