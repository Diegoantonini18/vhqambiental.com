"use client"

// Importa los archivos JSON directamente para que Webpack los incluya en el bundle del cliente
const clientDictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  es: () => import("@/messages/es.json").then((module) => module.default),
}

export const getClientDictionary = async (locale: "en" | "es") => {
  if (clientDictionaries[locale]) {
    return clientDictionaries[locale]()
  }
  // Fallback a inglés si el locale no se encuentra
  return clientDictionaries.en()
}
