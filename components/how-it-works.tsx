"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Regístrate",
      description: "Crea tu cuenta en VacaBox en minutos y obtén tu dirección personal en Estados Unidos.",
    },
    {
      number: "02",
      title: "Compra",
      description:
        "Realiza tus compras en cualquier tienda de Estados Unidos y usa tu dirección VacaBox como destino de envío.",
    },
    {
      number: "03",
      title: "Notificación",
      description: "Te notificamos cuando tus paquetes lleguen a nuestro centro de distribución en Miami.",
    },
    {
      number: "04",
      title: "Recibe",
      description:
        "Nosotros nos encargamos de todo el proceso de envío y trámites aduaneros. Tus paquetes serán entregados directamente en tu domicilio.",
    },
  ]

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-[#1e3a5f]/30 bg-[#1e3a5f]/5 px-3 py-1 text-sm text-[#1e3a5f] mb-4">
              <span className="font-medium">Proceso Simple</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e3a5f] font-heading mb-6">
              Cómo Funciona VacaBox
            </h2>
            <p className="text-muted-foreground mb-8">
              Traer tus compras de Estados Unidos nunca fue tan fácil. Sigue estos simples pasos y recibe tus paquetes
              sin complicaciones.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e67e22] text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://vacaboxprueba.firebaseapp.com/#/register"
                className="inline-flex items-center text-[#1e3a5f] font-medium hover:underline"
              >
                Comenzar ahora <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative hidden md:block"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2020%20abr%202025%2C%2005_07_59%20p.m.-t5wmRgxhlxqztL6XGJmQF2a3Z9cFMe.png"
              alt="Proceso de envío VacaBox"
              width={600}
              height={500}
              className="rounded-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-[#1e3a5f]">Proceso 100% garantizado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
