"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, MenuIcon } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

interface HeaderProps {
  messages: {
    header: {
      logo: {
        line1: string
        line2: string
        line3: string
      }
      nav: {
        aboutUs: string
        services: string
        contact: string
        legalMatrix: string
      }
      legalMatrixButton: string
      languageSwitcher: string
      contactButton: string
    }
  }
  locale: string
}

export default function Header({ messages, locale }: HeaderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentLocale, setCurrentLocale] = useState(locale)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setCurrentLocale(locale)
  }, [locale])

  const handleLanguageChange = (newLocale: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("locale", newLocale)
    router.push(`${pathname}?${params.toString()}`)
    setIsMobileMenuOpen(false) // Cierra el menú después del cambio de idioma
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center justify-between px-4 md:px-6 border-b bg-white">
      <Link href={`/?locale=${currentLocale}`} className="flex items-center gap-2" prefetch={false}>
        <Image src="/images/vhq-logo.png" alt="VHQ Derecho Ambiental Logo" width={160} height={40} priority />
      </Link>
      <div className="flex items-center gap-6">
        {" "}
        {/* Contenedor unificado para todos los elementos de la derecha */}
        <nav className="hidden md:flex items-center gap-6">
          {" "}
          {/* Navegación de escritorio */}
          <Link
            href={`/?locale=${currentLocale}`}
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {messages.header.nav.aboutUs}
          </Link>
          <Link
            href={`/?locale=${currentLocale}#services`}
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {messages.header.nav.services}
          </Link>
          <Link
            href={`/?locale=${currentLocale}#legal-matrix`}
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {messages.header.nav.legalMatrix}
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium hover:bg-gray-100 px-2 py-1 h-auto">
              {currentLocale === "en" ? "EN" : "ES"}
              <ChevronDownIcon className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLanguageChange("es")}>Español</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-md hidden md:inline-flex"
          asChild // Add asChild to allow Link to render the Button
        >
          <Link href={`/?locale=${currentLocale}#contact`} prefetch={false}>
            {messages.header.contactButton}
          </Link>
        </Button>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <Link
              href={`/?locale=${currentLocale}`}
              className="flex items-center gap-2 py-4 border-b"
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/images/vhq-logo.png" alt="VHQ Derecho Ambiental Logo" width={160} height={40} priority />
            </Link>
            <nav className="grid gap-4 py-6">
              <Link
                href={`/?locale=${currentLocale}`}
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.aboutUs}
              </Link>
              <Link
                href={`/?locale=${currentLocale}#services`}
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.services}
              </Link>
              <Link
                href={`/?locale=${currentLocale}#legal-matrix`}
                className="text-lg font-medium hover:underline underline-offset-4"
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
                    {currentLocale === "en" ? "EN" : "ES"}
                    <ChevronDownIcon className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLanguageChange("es")}>Español</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-md w-full"
                asChild // Add asChild to allow Link to render the Button
              >
                <Link
                  href={`/?locale=${currentLocale}#contact`}
                  prefetch={false}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {messages.header.contactButton}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
