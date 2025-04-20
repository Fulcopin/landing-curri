"use client"

import { Package, Truck, Clock, CreditCard, Globe, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: <Package className="h-10 w-10 text-[#1e3a5f]" />,
      title: "Casillero Virtual",
      description:
        "Recibe una dirección personal en USA para tus compras online. Nosotros recibimos tus paquetes y los enviamos a Ecuador.",
    },
    {
      icon: <Truck className="h-10 w-10 text-[#1e3a5f]" />,
      title: "Entrega a Domicilio",
      description:
        "Llevamos tus paquetes directamente a la puerta de tu casa u oficina en cualquier ciudad de Ecuador.",
    },
    {
      icon: <Clock className="h-10 w-10 text-[#1e3a5f]" />,
      title: "Envío Express",
      description:
        "Servicio acelerado para recibir tus paquetes en el menor tiempo posible, ideal para envíos urgentes.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#1e3a5f]" />,
      title: "Compra Asistida",
      description:
        "Te ayudamos a comprar en tiendas de USA que no aceptan tarjetas internacionales o no envían a casilleros.",
    },
    {
      icon: <Globe className="h-10 w-10 text-[#1e3a5f]" />,
      title: "Trámites Aduaneros",
      description:
        "Nos encargamos de todos los trámites de aduana y pagos de impuestos para que recibas tus paquetes sin complicaciones.",
    },
  ]

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e3a5f] font-heading mb-4">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Ofrecemos soluciones completas para todas tus necesidades de importación
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-[#e67e22]/20 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">¿Necesitas más información sobre nuestros servicios?</p>
          <a href="#contacto" className="inline-flex items-center text-[#1e3a5f] font-medium hover:underline">
            Contáctanos <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
