"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[#1e3a5f]/30 bg-[#1e3a5f]/5 px-3 py-1 text-sm text-[#1e3a5f]">
            <span className="font-medium">Opiniones de Clientes</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e3a5f] font-heading">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Testimonios de clientes satisfechos con nuestro servicio
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-2 border-[#a5d8e2]/20 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold">
                    MP
                  </div>
                  <div>
                    <CardTitle className="text-lg">María Pérez</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-2">
                  <Quote className="h-6 w-6 text-[#a5d8e2]" />
                </div>
                <p className="text-muted-foreground">
                  "Excelente servicio, mis paquetes siempre llegan en perfecto estado y en el tiempo estimado. La
                  atención al cliente es de primera. Llevo más de 2 años usando VacaBox y nunca he tenido problemas."
                </p>
                <div className="mt-4 text-sm text-[#1e3a5f]">Cliente desde 2023 · Quito</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-2 border-[#a5d8e2]/20 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold">
                    JL
                  </div>
                  <div>
                    <CardTitle className="text-lg">Juan López</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-2">
                  <Quote className="h-6 w-6 text-[#a5d8e2]" />
                </div>
                <p className="text-muted-foreground">
                  "He probado varios couriers y VacaBox es definitivamente el mejor. Precios justos y un seguimiento
                  detallado de mis envíos. Su plataforma digital es muy fácil de usar y siempre sé dónde están mis
                  paquetes."
                </p>
                <div className="mt-4 text-sm text-[#1e3a5f]">Cliente desde 2022 · Guayaquil</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-2 border-[#a5d8e2]/20 h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold">
                    CM
                  </div>
                  <div>
                    <CardTitle className="text-lg">Carolina Mendoza</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-2">
                  <Quote className="h-6 w-6 text-[#a5d8e2]" />
                </div>
                <p className="text-muted-foreground">
                  "La plataforma es muy fácil de usar y el servicio al cliente siempre está dispuesto a ayudar.
                  Recomiendo VacaBox a todos mis amigos. Sus tiempos de entrega son los mejores del mercado."
                </p>
                <div className="mt-4 text-sm text-[#1e3a5f]">Cliente desde 2024 · Cuenca</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-[#1e3a5f]/5 p-8 rounded-lg"
        >
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Clientes Satisfechos en Todo Ecuador</h3>
              <p className="text-muted-foreground mb-6">
                Más de 3,000 clientes confían en VacaBox para traer sus compras desde Estados Unidos. Nuestra prioridad
                es brindar un servicio excepcional y superar las expectativas de nuestros clientes.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-medium text-[#1e3a5f]">4.9/5</span>
                <span className="text-sm text-muted-foreground">(basado en 1,245 reseñas)</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C6C33NcAFXQTNz4QFFRO2QEjyyllsk.png"
                alt="Paquetes de Amazon entregados por VacaBox"
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
