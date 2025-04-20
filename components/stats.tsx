"use client"

import { motion } from "framer-motion"
import { Package, Users, TrendingUp, Clock } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: <Package className="h-8 w-8 text-[#1e3a5f]" />,
      value: "15,000+",
      label: "Paquetes entregados",
      description: "Envíos exitosos a todo Ecuador",
    },
    {
      icon: <Users className="h-8 w-8 text-[#1e3a5f]" />,
      value: "3,000+",
      label: "Clientes satisfechos",
      description: "Confían en nuestro servicio",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#1e3a5f]" />,
      value: "98%",
      label: "Tasa de satisfacción",
      description: "Calificaciones positivas",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#1e3a5f]" />,
      value: "2",
      label: "Años de experiencia",
      description: "Mejorando constantemente",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#a5d8e2]/20 rounded-lg">{stat.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-[#1e3a5f]">{stat.value}</div>
                  <div className="text-sm font-medium text-[#1e3a5f]">{stat.label}</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
