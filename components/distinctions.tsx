import Image from "next/image"

interface DistinctionsProps {
  messages: {
    distinctions: {
      title: string
      logos: string[]
    }
  }
}

export default function Distinctions({ messages }: DistinctionsProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.distinctions.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center leading-10">
          {/* Fila superior: Imágenes 2, 3, 4 */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 items-center justify-center w-full mb-8 ml-10 mr-0 py-[] px-[4rem]">
            {messages.distinctions.logos.slice(1, 4).map((logo, index) => (
              <div
                key={`top-${index}`}
                className="relative flex justify-center items-center p-2 md:p-4 h-[150px] md:h-[200px]"
              >
                {" "}
                {/* Contenedor con altura definida y relative */}
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Distinction Logo ${index + 2}`}
                  layout="fill" // Usar layout="fill"
                  objectFit="contain" // Mantener la proporción y contener dentro del espacio
                  className="w-full h-full" // Asegurar que la imagen llene el contenedor
                />
              </div>
            ))}
          </div>

          {/* Fila inferior: Imágenes 1, 5 */}
          <div className="grid grid-cols-2 gap-4 md:gap-8 items-center justify-center max-w-3xl mx-auto w-full">
            {messages.distinctions.logos
              .filter((_, index) => index === 0 || index === 4)
              .map((logo, index) => (
                <div
                  key={`bottom-${index}`}
                  className="relative flex justify-center items-center p-2 md:p-4 h-[100px] md:h-[120px]"
                >
                  {" "}
                  {/* Contenedor con altura definida y relative */}
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Distinction Logo ${index === 0 ? 1 : 5}`}
                    layout="fill" // Usar layout="fill"
                    objectFit="contain" // Mantener la proporción y contener dentro del espacio
                    className="w-full h-full" // Asegurar que la imagen llene el contenedor
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
