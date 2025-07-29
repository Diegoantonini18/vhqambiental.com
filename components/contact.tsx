import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ContactProps {
  messages: {
    contact: {
      title: string
      description: string
      infoTitle: string
      email: {
        label: string
        address1: string
        address2: string
      }
      phone: {
        label: string
        number1: string
        number2: string
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
  }
}

export default function Contact({ messages }: ContactProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-5xl tracking-normal">{messages.contact.title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {messages.contact.description}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-6 shadow-md">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-2xl font-bold">{messages.contact.infoTitle}</CardTitle>
            </CardHeader>
            <CardContent className="px-0 py-0 space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{messages.contact.email.label}</h4>
                  <p className="text-gray-600">{messages.contact.email.address1}</p>
                  <p className="text-gray-600">{messages.contact.email.address2}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-service-teal text-white p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{messages.contact.phone.label}</h4>
                  <p className="text-gray-600">{messages.contact.phone.number1}</p>
                  <p className="text-gray-600">{messages.contact.phone.number2}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-service-purple text-white p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{messages.contact.address.label}</h4>
                  <p className="text-gray-600">{messages.contact.address.street}</p>
                  <p className="text-gray-600">{messages.contact.address.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-service-maroon text-white p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{messages.contact.hours.label}</h4>
                  <p className="text-gray-600">{messages.contact.hours.weekday}</p>
                  <p className="text-gray-600">{messages.contact.hours.saturday}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-md">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-2xl font-bold">{messages.contact.formTitle}</CardTitle>
            </CardHeader>
            <CardContent className="px-0 py-0">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">{messages.contact.fullNameLabel}</Label>
                  <Input id="fullName" placeholder={messages.contact.fullNamePlaceholder} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{messages.contact.emailLabel}</Label>
                  <Input id="email" type="email" placeholder={messages.contact.emailPlaceholder} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{messages.contact.companyLabel}</Label>
                  <Input id="company" placeholder={messages.contact.companyPlaceholder} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{messages.contact.subjectLabel}</Label>
                  <Input id="subject" placeholder={messages.contact.subjectPlaceholder} required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">{messages.contact.messageLabel}</Label>
                  <Textarea
                    id="message"
                    placeholder={messages.contact.messagePlaceholder}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full md:col-span-2 bg-primary hover:bg-primary/90 text-white">
                  {messages.contact.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
