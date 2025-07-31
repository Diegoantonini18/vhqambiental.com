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
    contactButton: {
      text: string
      link: string
    }
    languageSwitcher: string
  }
  hero: {
    mainHero: {
      topLabel: string
      title: string
      cta1: {
        text: string
        link: string
      }
      cta2: {
        text: string
        link: string
      }
      projectCard: {
        image: string
        title: string
      }
      stats: {
        value: string
        description: string
      }[]
      backgroundImage: string
    }
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
      achievements: { text: string; icon: string }[]
    }
    problemSolvingSection: {
      title: string
      card: {
        company: string
        quote: string
        cta: {
          text: string
          link: string
        }
        author: string
        authorTitle: string
        image: string
      }
      features: {
        text: string
        icon: "Car" | "Sun" | "Wind"
      }[]
    }
    teamSection: {
      title: string
      description: string // Added description for teamSection
      members: {
        image: string
        name: string
        title: string
        specialty: string
        description: string
      }[]
      features: {
        text: string
        icon: "Award" // New icon type for team features
      }[]
    }
  }
  distinctions: {
    title: string
    logos: string[] // Reverted to logos array
  }
  clients: {
    title: string
    description: string // Added description for clients
    items: {
      icon: "ShieldCheck" | "Globe" | "Briefcase" | "Heart" | "Activity" | "Zap" // Specific icons for clients
      title: string
      description: string
    }[]
  }
  contact: {
    title: string
    description: string
    infoItems: {
      icon: "Mail" | "Phone" | "MapPin" | "Clock"
      title: string
      description: string
    }[]
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
    topSection: {
      title: string
      description: string
      cta: {
        text: string
        link: string
      }
      features: {
        text: string
        icon: "CheckCircle"
      }[]
    }
    navLinks: {
      text: string
      link: string
    }[]
    socialLinks: {
      icon: "Linkedin" | "X" | "Facebook" | "Instagram"
      link: string
    }[]
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
