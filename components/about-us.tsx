import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Lightbulb, Target, Handshake } from "lucide-react" // Iconos para Misión, Visión, Valores

interface AboutUsProps {
  messages: {
    aboutUs: {
      title: string
      leadersSection: {
        title: string
        paragraph1: string
        paragraph2: string
        paragraph3: string
        achievements: string[]
      }
      missionVisionValues: {
        missionTitle: string
        missionDescription: string
        visionTitle: string
        visionDescription: string
        valuesTitle: string
        valuesList: string[]
      }
      teamSection: {
        title: string
        members: {
          image: string
          name: string
          title: string
          specialty: string
          description: string
        }[]
      }
    }
  }
}

export default function AboutUs({ messages }: AboutUsProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        {/* Título principal de la sección */}
        <div className="flex flex-col justify-center space-y-4 text-center mb-12 items-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.aboutUs.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
        </div>

        {/* Sección de Líderes con Imagen */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">{messages.aboutUs.leadersSection.title}</h3>
            <p className="text-gray-700 leading-relaxed">{messages.aboutUs.leadersSection.paragraph1}</p>
            <p className="text-gray-700 leading-relaxed">{messages.aboutUs.leadersSection.paragraph2}</p>
            <p className="text-gray-700 leading-relaxed">{messages.aboutUs.leadersSection.paragraph3}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              {messages.aboutUs.leadersSection.achievements.map((achievement, index) => (
                <span key={index} className="bg-primary text-white text-sm px-4 py-2 rounded-full font-medium">
                  {achievement}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/1-solidez-1.jpeg"
              alt="Equipo de Aristarain & Asociados trabajando en un entorno profesional"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Sección de Misión, Visión y Valores */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Lightbulb className="h-12 w-12 text-primary mx-auto" />
              <h4 className="text-2xl font-bold">{messages.aboutUs.missionVisionValues.missionTitle}</h4>
              <p className="text-gray-700">{messages.aboutUs.missionVisionValues.missionDescription}</p>
            </div>
            <div className="space-y-4">
              <Target className="h-12 w-12 text-service-teal mx-auto" />
              <h4 className="text-2xl font-bold">{messages.aboutUs.missionVisionValues.visionTitle}</h4>
              <p className="text-gray-700">{messages.aboutUs.missionVisionValues.visionDescription}</p>
            </div>
            <div className="space-y-4">
              <Handshake className="h-12 w-12 text-service-purple mx-auto" />
              <h4 className="text-2xl font-bold">{messages.aboutUs.missionVisionValues.valuesTitle}</h4>
              <ul className="list-none p-0 space-y-1 text-gray-700">
                {messages.aboutUs.missionVisionValues.valuesList.map((value, index) => (
                  <li key={index} className="flex items-center justify-center gap-2">
                    <span className="text-primary">✔</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Título de la sección de Equipo */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{messages.aboutUs.teamSection.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>
        </div>

        {/* Sección de Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.aboutUs.teamSection.members.map((member, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
              <p className="text-primary text-sm font-semibold mb-1">{member.title}</p>
              <p className="text-gray-500 text-xs mb-3">{member.specialty}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
