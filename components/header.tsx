"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, MenuIcon, Mail } from "lucide-react"
import { useState, useEffect } from "react" // Importa useEffect
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useLocale } from "@/components/locale-provider"

export default function Header() {
  const { locale, setLocale, messages } = useLocale()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false) // Nuevo estado para el scroll

  useEffect(() => {
    const handleScroll = () => {
      // Cambia '80' por la altura de tu header o el punto donde quieres que cambie
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLanguageChange = (newLocale) => {
    setLocale(newLocale)
    setIsMobileMenuOpen(false)
  }

  if (!messages) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center justify-between px-4 md:px-6 transition-colors duration-300 ${
        scrolled ? "bg-gray-900 text-white" : "bg-transparent text-white"
      }`}
    >
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/images/vhq-logo.png" alt="VHQ Derecho Ambiental Logo" width={160} height={40} priority />
      </Link>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            {messages.header.nav.home}
          </Link>
          <Link href="/#about-us" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            {messages.header.nav.aboutUs}
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            {messages.header.nav.services}
          </Link>
          <Link
            href="/#legal-matrix"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            {messages.header.nav.legalMatrix}
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`text-sm font-medium px-2 py-1 h-auto ${
                scrolled ? "hover:bg-gray-700 text-white" : "hover:bg-white/10 text-white"
              }`}
            >
              {locale === "en" ? "EN" : "ES"}
              <ChevronDownIcon className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className={`transition-colors duration-300 ${
              scrolled ? "bg-gray-800 text-white border-gray-700" : "bg-black/80 text-white border-gray-700"
            }`}
          >
            <DropdownMenuItem
              onClick={() => handleLanguageChange("en")}
              className={`${scrolled ? "hover:bg-gray-700" : "hover:bg-white/10"}`}
            >
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleLanguageChange("es")}
              className={`${scrolled ? "hover:bg-gray-700" : "hover:bg-white/10"}`}
            >
              Español
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          className={`text-sm font-medium px-4 py-2 hidden md:inline-flex rounded-full border transition-colors duration-300 ${
            scrolled
              ? "bg-transparent hover:bg-gray-700 text-white border-white"
              : "bg-transparent hover:bg-white/10 text-white border-white"
          }`}
          asChild
        >
          <Link href="/#contact" prefetch={false} className="flex items-center gap-2">
            {messages.header.contactButton}
          </Link>
        </Button>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col bg-gray-900 text-white border-gray-700">
            <Link
              href="/"
              className="flex items-center gap-2 py-4 border-b border-gray-700"
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/images/vhq-logo.png" alt="VHQ Derecho Ambiental Logo" width={160} height={40} priority />
            </Link>
            <nav className="grid gap-4 py-6">
              <Link
                href="/"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.home}
              </Link>
              <Link
                href="/#about-us"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.aboutUs}
              </Link>
              <Link
                href="/#services"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.services}
              </Link>
              <Link
                href="/#legal-matrix"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {messages.header.nav.legalMatrix}
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-4 p-4 border-t border-gray-700">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium hover:bg-gray-700 px-2 py-1 h-auto w-full text-white"
                  >
                    {locale === "en" ? "EN" : "ES"}
                    <ChevronDownIcon className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                  <DropdownMenuItem onClick={() => handleLanguageChange("en")} className="hover:bg-gray-700">
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleLanguageChange("es")} className="hover:bg-gray-700">
                    Español
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                className="bg-transparent hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-md w-full border border-white"
                asChild
              >
                <Link
                  href="/#contact"
                  prefetch={false}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 justify-center"
                >
                  <Mail className="h-4 w-4" />
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
