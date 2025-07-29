import Image from "next/image"

interface ClientsProps {
  messages: {
    clients: {
      title: string
      logos: string[]
    }
  }
}

export default function Clients({ messages }: ClientsProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.clients.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {messages.clients.logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Client Logo ${index + 1}`}
                width={160}
                height={80}
                objectFit="contain"
                className="max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
