import LocaleProvider from "@/components/locale-provider"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import AboutUs from "@/components/about-us"
import Distinctions from "@/components/distinctions"
import Clients from "@/components/clients"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

interface HomePageProps {
  searchParams: {
    locale?: string
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const initialLocale = "en"

  return (
    <LocaleProvider initialLocale={initialLocale}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {" "}
          {/* Eliminado pt-20 */}
          <Hero />
          <div id="services">
            <Services />
          </div>
          <div className="bg-secondary/10">
            <AboutUs />
          </div>
          <div className="bg-white">
            <Distinctions />
          </div>
          <div className="bg-secondary/20">
            <Clients />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  )
}
