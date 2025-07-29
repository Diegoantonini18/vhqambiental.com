import LocaleProvider from "@/components/locale-provider"
import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import Distinctions from "@/components/distinctions"
import Clients from "@/components/clients"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

interface HomePageProps {
  searchParams: {
    locale?: string // Mantener searchParams por si se usa para algo más, pero no para el locale principal
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  // Determina el locale inicial basado en el parámetro de búsqueda locale
  const initialLocale = "en" // Siempre renderiza estáticamente con 'en' por defecto

  return (
    <LocaleProvider initialLocale={initialLocale}>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Ya no necesita props de mensajes o locale */}
        <main className="flex-1 pt-20">
          <HeroCarousel /> {/* Ya no necesita props de mensajes */}
          <div id="services">
            {" "}
            {/* Añadido ID para desplazamiento suave */}
            <Services /> {/* Ya no necesita props de mensajes */}
          </div>
          <div className="bg-secondary/10">
            <AboutUs /> {/* Ya no necesita props de mensajes */}
          </div>
          <div className="bg-white">
            <Distinctions /> {/* Ya no necesita props de mensajes */}
          </div>
          <div className="bg-secondary/20">
            <Clients /> {/* Ya no necesita props de mensajes */}
          </div>
          <div id="contact">
            {" "}
            {/* Añadido ID para desplazamiento suave */}
            <Contact /> {/* Ya no necesita props de mensajes */}
          </div>
        </main>
        <Footer /> {/* Ya no necesita props de mensajes o locale */}
      </div>
    </LocaleProvider>
  )
}
