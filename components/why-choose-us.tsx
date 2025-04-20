"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck, Clock, DollarSign, Truck, HeadphonesIcon, BarChart3 } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#a5d8e2]" />,
      title: "Seguridad Garantizada",
      description: "Todos tus paquetes están asegurados desde que los recibimos hasta que llegan a tus manos.",
    },
    {
      icon: <Clock className="h-10 w-10 text-[#a5d8e2]" />,
      title: "Tiempos de Entrega Rápidos",
      description: "Optimizamos cada etapa del proceso para que recibas tus compras en el menor tiempo posible.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#a5d8e2]" />,
      title: "Precios Competitivos",
      description: "Ofrecemos las mejores tarifas del mercado sin comprometer la calidad del servicio.",
    },
    {
      icon: <Truck className="h-10 w-10 text-[#a5d8e2]" />,
      title: "Cobertura Nacional",
      description: "Entregamos en todas las provincias de Ecuador, incluso en las zonas más remotas.",
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-[#a5d8e2]" />,
      title: "Soporte 24/7",
      description: "Nuestro equipo de atención al cliente está disponible para ayudarte en cualquier momento.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-[#a5d8e2]" />,
      title: "Tecnología Avanzada",
      description: "Plataforma digital intuitiva para gestionar y rastrear tus envíos fácilmente.",
    },
  ]

  return (
    <section id="por-que-elegirnos" className="py-20 md:py-28 bg-[#1e3a5f]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[#a5d8e2]/30 bg-[#a5d8e2]/10 px-3 py-1 text-sm text-[#a5d8e2]">
            <span className="font-medium">Nuestra Diferencia</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading">
              ¿Por Qué Elegir VacaBox?
            </h2>
            <p className="mx-auto max-w-[700px] text-[#a5d8e2]/90 md:text-xl">
              Descubre lo que nos hace la mejor opción para tus envíos internacionales
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[#a5d8e2]/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white/5 backdrop-blur-sm p-8 rounded-lg"
        >
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Somos un Courier Autorizado</h3>
              <p className="text-[#a5d8e2]/90 mb-6">
                VacaBox cuenta con todas las certificaciones y permisos necesarios para operar como courier
                internacional en Ecuador. Trabajamos en cumplimiento con las regulaciones aduaneras y de comercio
                exterior.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Aduana del Ecuador</div>
                <div className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">SENAE</div>
                <div className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Courier Certificado</div>
                <div className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">Operador Logístico</div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8qm8gjQI3Tf0ayhIqItbWXgHJA7Ces.png"
                alt="Courier Autorizado en Ecuador"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
