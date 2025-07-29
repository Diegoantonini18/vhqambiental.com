import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import Distinctions from "@/components/distinctions" // Import the new Distinctions component
import Clients from "@/components/clients"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/dictionaries"

interface HomePageProps {
  searchParams: {
    locale?: string
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const locale = searchParams.locale === "es" ? "es" : "en" // Default to English

  const messages = await getDictionary(locale)

  return (
    <div className="flex flex-col min-h-screen">
      <Header messages={messages} locale={locale} />
      <main className="flex-1 pt-20">
        <HeroCarousel messages={messages} />
        <div id="services">
          {" "}
          {/* Add ID for smooth scrolling */}
          <Services messages={messages} />
        </div>
        <div className="bg-secondary/10">
          <AboutUs messages={messages} />
        </div>
        <div className="bg-white">
          <Distinctions messages={messages} />
        </div>
        <div className="bg-secondary/20">
          <Clients messages={messages} />
        </div>
        <div id="contact">
          {" "}
          {/* Add ID for smooth scrolling */}
          <Contact messages={messages} />
        </div>
      </main>
      <Footer messages={messages} locale={locale} />
    </div>
  )
}
