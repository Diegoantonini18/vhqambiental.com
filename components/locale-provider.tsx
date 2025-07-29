"use client"

import { createContext, useState, useEffect, useContext, type ReactNode } from "react"
import { getClientDictionary } from "@/lib/client-dictionaries"

// Define los tipos para el locale y la estructura de los mensajes
type Locale = "en" | "es"

interface Messages {
  header: {
    logo: {
      line1: string
      line2: string
      line3: string
    }
    nav: {
      aboutUs: string
      services: string
      legalMatrix: string // Añadido legalMatrix
      contact: string // Mantener contact para el footer y otros usos si es necesario
    }
    contactButton: string // Cambiado de legalMatrixButton
    languageSwitcher: string
  }
  hero: {
    slides: {
      title: string
      subtitle: string
      image: string
    }[]
  }
  services: {
    title: string
    description: string
    cards: {
      icon: "Leaf" | "Scale" | "FileText" | "Users" | "Building"
      color: string
      title: string
      description: string
      subServices: string[]
      backgroundImage: string
    }[]
  }
  aboutUs: {
    title: string
    leadersSection: {
      title: string
      paragraph1: string
      paragraph2: string
      paragraph3: string
      achievements: string[]
    }
    missionVisionValues: {
      missionTitle: string
      missionDescription: string
      visionTitle: string
      visionDescription: string
      valuesTitle: string
      valuesList: string[]
    }
    teamSection: {
      title: string
      members: {
        image: string
        name: string
        title: string
        specialty: string
        description: string
      }[]
    }
  }
  distinctions: {
    title: string
    logos: string[]
  }
  clients: {
    title: string
    logos: string[]
  }
  contact: {
    title: string
    description: string
    infoTitle: string
    email: {
      label: string
      address1: string
      address2?: string
    }
    phone: {
      label: string
      number1: string
      number2?: string
    }
    address: {
      label: string
      street: string
      city: string
    }
    hours: {
      label: string
      weekday: string
      saturday: string
    }
    formTitle: string
    fullNameLabel: string
    fullNamePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitButton: string
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

interface LocaleContextType {
  locale: Locale
  setLocale: (newLocale: Locale) => void
  messages: Messages | null
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

interface LocaleProviderProps {
  children: ReactNode
  initialLocale: Locale
}

export default function LocaleProvider({ children, initialLocale }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [messages, setMessages] = useState<Messages | null>(null)

  useEffect(() => {
    // Intenta cargar el locale desde localStorage al montar el componente
    const storedLocale = localStorage.getItem("locale") as Locale
    if (storedLocale && ["en", "es"].includes(storedLocale)) {
      setLocaleState(storedLocale)
    }
  }, [])

  useEffect(() => {
    // Carga los mensajes basados en el locale actual
    const loadMessages = async () => {
      const dict = await getClientDictionary(locale)
      setMessages(dict as Messages) // Asegura el tipo
      localStorage.setItem("locale", locale) // Guarda el locale en localStorage
    }
    loadMessages()
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  return <LocaleContext.Provider value={{ locale, setLocale, messages }}>{children}</LocaleContext.Provider>
}

// Hook personalizado para consumir el contexto
export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
