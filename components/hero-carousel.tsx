"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroCarouselProps {
  messages: {
    hero: {
      slides: {
        title: string
        subtitle: string
        image: string
      }[]
    }
  }
}

export default function HeroCarousel({ messages }: HeroCarouselProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true)

  const originalSlides = messages.hero.slides
  // Duplicamos la primera diapositiva al final para crear el efecto de bucle continuo
  const slides = [...originalSlides, originalSlides[0]]
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slideDisplayDuration = 5000 // 5 segundos mostrando cada slide
  const transitionDuration = 1500 // 1.5 segundos para la animación de deslizamiento (más suave)

  // Lógica para el avance automático del carrusel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => prev + 1)
    }, slideDisplayDuration)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [slideDisplayDuration])

  // Lógica para el bucle infinito sin salto brusco
  useEffect(() => {
    if (currentSlideIndex === slides.length - 1) {
      // Si estamos en la última diapositiva (la duplicada de la primera)
      const timeout = setTimeout(() => {
        setIsTransitionEnabled(false) // Desactivar la transición CSS
        setCurrentSlideIndex(0) // Saltar instantáneamente a la primera diapositiva real
      }, transitionDuration) // Esperar a que la animación de deslizamiento termine

      return () => clearTimeout(timeout)
    } else if (currentSlideIndex === 0 && !isTransitionEnabled) {
      // Si acabamos de saltar a la primera diapositiva (índice 0) y la transición estaba deshabilitada
      // la volvemos a habilitar para la siguiente animación
      const timeout = setTimeout(() => {
        setIsTransitionEnabled(true)
      }, 50) // Pequeño retraso para asegurar que el navegador aplique 'none' antes de re-habilitar
      return () => clearTimeout(timeout)
    } else {
      // Para todas las demás diapositivas, asegurarnos de que la transición esté habilitada
      setIsTransitionEnabled(true)
    }
  }, [currentSlideIndex, slides.length, transitionDuration, isTransitionEnabled])

  // Manejadores para las flechas de navegación
  const handleNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current) // Detener el auto-play al interactuar
    }
    setCurrentSlideIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current) // Detener el auto-play al interactuar
    }
    if (currentSlideIndex === 0) {
      // Si estamos en la primera diapositiva, saltar a la duplicada del final
      setIsTransitionEnabled(false)
      setCurrentSlideIndex(slides.length - 1)
      // Luego, después de un pequeño retraso, habilitar la transición y volver a la penúltima real
      setTimeout(() => {
        setIsTransitionEnabled(true)
        setCurrentSlideIndex(slides.length - 2)
      }, 50)
    } else {
      setCurrentSlideIndex((prev) => prev - 1)
    }
  }

  // Manejador para los indicadores de puntos
  const goToSlide = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current) // Detener el auto-play al interactuar
    }
    setCurrentSlideIndex(index)
    setIsTransitionEnabled(true) // Asegurar que la transición esté habilitada para el salto
  }

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Este div actúa como la pista del carrusel, conteniendo todos los slides */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentSlideIndex * 100}%)`,
          transition: isTransitionEnabled ? `transform ${transitionDuration}ms ease-in-out` : "none",
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full">
            {/* Imagen de fondo del slide */}
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              priority={index === 0} // Prioriza la carga de la primera imagen
            />

            {/* Superposición con el texto del slide */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
              <div className="bg-black/50 text-white p-8 md:p-12 rounded-lg max-w-4xl text-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-xl lg:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 rounded-full p-3"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-10 h-10" /> {/* Aumentado el tamaño */}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 rounded-full p-3"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-10 w-10" /> {/* Aumentado el tamaño */}
      </Button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {originalSlides.map((_, index) => (
          <Button
            key={index}
            variant="primary"
            size="icon"
            className={`h-3 w-3 rounded-full p-0 ${
              currentSlideIndex % originalSlides.length === index ? "bg-white" : "bg-gray-400/70 hover:bg-gray-300/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
