import "server-only"

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  es: () => import("@/messages/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "es") => {
  if (dictionaries[locale]) {
    return dictionaries[locale]()
  }
  // Fallback to English if the locale is not found
  return dictionaries.en()
}
