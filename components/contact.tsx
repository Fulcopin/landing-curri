"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e3a5f] font-heading mb-4">
            Contáctanos
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Estamos aquí para ayudarte con cualquier consulta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f]">Dirección</h4>
                    <p className="text-muted-foreground">Villa España 2 , Guayaquil, Ecuador</p>
                   
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f]">Teléfono</h4>
                    <p className="text-muted-foreground">+593 96 965 2013</p>
                    <p className="text-muted-foreground mt-1">+593 96 257 9977</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f]">Email</h4>
                    <p className="text-muted-foreground">info@vacabox.com</p>
                    <p className="text-muted-foreground mt-1"> vacabox@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#1e3a5f]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f]">Horario de Atención</h4>
                    <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground mt-1">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Envíanos un Mensaje</h3>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1e3a5f]">Nombre</label>
                    <Input placeholder="Tu nombre" className="border-gray-200 focus:border-[#1e3a5f]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1e3a5f]">Email</label>
                    <Input type="email" placeholder="tu@email.com" className="border-gray-200 focus:border-[#1e3a5f]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1e3a5f]">Teléfono</label>
                  <Input placeholder="+593 99 123 4567" className="border-gray-200 focus:border-[#1e3a5f]" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1e3a5f]">Asunto</label>
                  <select className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Selecciona un asunto</option>
                    <option value="info">Información general</option>
                    <option value="quote">Solicitar cotización</option>
                    <option value="support">Soporte técnico</option>
                    <option value="complaint">Reclamo</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1e3a5f]">Mensaje</label>
                  <Textarea
                    placeholder="Escribe tu mensaje aquí"
                    rows={5}
                    className="border-gray-200 focus:border-[#1e3a5f]"
                  />
                </div>

                <Button className="w-full bg-[#1e3a5f] hover:bg-[#2a4a73]">
                  <Send className="h-4 w-4 mr-2" /> Enviar Mensaje
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
