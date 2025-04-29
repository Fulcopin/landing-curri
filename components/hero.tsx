"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const [trackingNumber, setTrackingNumber] = useState("")

  return (
    <section className="relative bg-[#1e3a5f] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#a5d8e2] rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-[#a5d8e2] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-[#a5d8e2] rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 py-16 md:py-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
              Tus compras de <span className="text-[#a5d8e2]">USA a Ecuador</span> con VacaBox
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
              Servicio premium de courier internacional. Traemos tus envíos de Estados Unidos a todo Ecuador de manera
              rápida, segura y confiable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                size="lg"
                className="bg-[#a5d8e2] text-[#1e3a5f] hover:bg-[#8bc9d8] font-medium"
                onClick={() => (window.location.href = "https://vacabox.firebaseapp.com/#/register")}
              >
                Registrarse <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => (window.location.href = "https://vacabox.firebaseapp.com/#/login")}
              >
                Iniciar Sesión
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-medium mb-3">Rastrear Paquete</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Ingresa tu número de rastreo"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-[#a5d8e2] text-[#1e3a5f] hover:bg-[#8bc9d8]">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden md:block"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2020%20abr%202025%2C%2005_00_58%20p.m.-rwJHDQNRTamZZjwBtLknWbSYERfurC.png"
              alt="Servicio de courier internacional"
              width={600}
              height={500}
              className="rounded-lg object-cover"
              priority
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-[#a5d8e2] text-sm">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-[#a5d8e2] text-sm">Clientes satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24h</div>
            <div className="text-[#a5d8e2] text-sm">Soporte al cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-[#a5d8e2] text-sm">Garantía de entrega</div>
          </div>
        </div>
      </div>
    </section>
  )
}
