"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Partners() {
  const partners = [
    { name: "Amazon", logo: "/placeholder-logo.svg" },
    { name: "eBay", logo: "/placeholder-logo.svg" },
    { name: "Walmart", logo: "/placeholder-logo.svg" },
    { name: "Best Buy", logo: "/placeholder-logo.svg" },
    { name: "Target", logo: "/placeholder-logo.svg" },
    { name: "Macy's", logo: "/placeholder-logo.svg" },
    { name: "Newegg", logo: "/placeholder-logo.svg" },
    { name: "Apple", logo: "/placeholder-logo.svg" },
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[#1e3a5f]/30 bg-[#1e3a5f]/5 px-3 py-1 text-sm text-[#1e3a5f]">
            <span className="font-medium">Alianzas Estratégicas</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#1e3a5f] font-heading">
              Nuestros Socios Comerciales
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Trabajamos con las mejores tiendas y servicios de envío para ofrecerte una experiencia sin igual
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <div className="h-12 w-32 bg-gray-100 rounded-md flex items-center justify-center">
                  <span className="text-[#1e3a5f] font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-[#1e3a5f]/5 rounded-lg p-6 md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Alianza con Tiendas en USA</h3>
              <p className="text-muted-foreground mb-6">
                Gracias a nuestras alianzas estratégicas con las principales tiendas en Estados Unidos, podemos
                ofrecerte beneficios exclusivos, como descuentos especiales, envíos gratuitos a nuestro centro de
                distribución y atención prioritaria.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1e3a5f]/10 rounded-full text-[#1e3a5f] text-sm">
                  Descuentos exclusivos
                </span>
                <span className="px-3 py-1 bg-[#1e3a5f]/10 rounded-full text-[#1e3a5f] text-sm">Envíos gratuitos</span>
                <span className="px-3 py-1 bg-[#1e3a5f]/10 rounded-full text-[#1e3a5f] text-sm">
                  Atención prioritaria
                </span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CSQf3HlrtGDvI37gu7v92GVbBYwSkm.png"
                alt="Paquetes de tiendas en USA"
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
