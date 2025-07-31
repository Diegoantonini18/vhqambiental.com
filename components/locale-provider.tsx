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
      home: string
      aboutUs: string
      services: string
      legalMatrix: string
      contact: string
    }
    contactButton: string
    languageSwitcher: string
  }
  hero: {
    tag: string
    buttonText: string
    slides: {
      title: string
      subtitle: string
      image: string
    }[]
  }
  services: {
    tag: string
    mainTitle: string
    learnMoreText: string
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
    tag: string
    mainTitle: string
    paragraph1: string
    paragraph2: string
    establishedYear: string
    establishedSince: string
    tabs: {
      title: string
      content: string
    }[]
    missionVisionValues: {
      missionTitle: string
      missionDescription: string
      visionTitle: string
      visionDescription: string
      valuesTitle: string
      valuesList: string[]
    }
  }
  distinctions: {
    tag: string
    mainTitle: string
    subtitle: string
    members: {
      image: string
      name: string
      title: string
      specialty: string
      description: string
    }[]
    logos: string[]
  }
  clients: {
    tag: string
    mainTitle: string
    subtitle: string
    testimonial: {
      description: string
      name: string
      company: string
      image: string
    }
    logos: string[]
  }
  contact: {
    title: string
    description: string
    backgroundImage: string
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
    columns: {
      col1: {
        title: string
        content: string
      }
      col2: {
        title1: string
        address1: string
        title2: string
        address2: string
      }
      col3: {
        title1: string
        email: string
        title2: string
        phone: string
      }
      col4: {
        title1: string
        helpLinkText: string
        helpLinkUrl: string
        title2: string
      }
    }
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
    const storedLocale = localStorage.getItem("locale") as Locale
    if (storedLocale && ["en", "es"].includes(storedLocale)) {
      setLocaleState(storedLocale)
    }
  }, [])

  useEffect(() => {
    const loadMessages = async () => {
      const dict = await getClientDictionary(locale)
      setMessages(dict as Messages)
      localStorage.setItem("locale", locale)
    }
    loadMessages()
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  return <LocaleContext.Provider value={{ locale, setLocale, messages }}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
