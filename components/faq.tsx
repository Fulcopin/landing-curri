"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  const faqs = [
    {
      question: "¿Cómo funciona el servicio de casillero virtual?",
      answer:
        "Al registrarte en VacaBox, recibirás una dirección física en Miami, Florida. Puedes usar esta dirección para comprar en cualquier tienda de Estados Unidos. Nosotros recibimos tus paquetes, los procesamos y los enviamos a Ecuador. Te notificamos en cada etapa del proceso.",
    },
    {
      question: "¿Cuánto tiempo tarda en llegar un paquete desde USA a Ecuador?",
      answer:
        "El tiempo de entrega estándar es de 5 a 7 días hábiles desde que recibimos tu paquete en nuestro centro de distribución en Miami. Con nuestro servicio Express, puedes recibir tus paquetes en 3-5 días hábiles. Los tiempos pueden variar según los procesos aduaneros.",
    },
    {
      question: "¿Qué productos no puedo importar a Ecuador?",
      answer:
        "Existen restricciones para ciertos productos como medicamentos sin receta, alimentos perecederos, armas, productos inflamables, entre otros. Te recomendamos consultar nuestra lista completa de artículos prohibidos o contactar a nuestro servicio al cliente antes de realizar tu compra.",
    },
    {
      question: "¿Cómo se calculan los costos de envío?",
      answer:
        "Los costos se calculan principalmente en base al peso del paquete. También consideramos el valor declarado para el cálculo de impuestos y seguros. Puedes usar nuestra calculadora en línea para obtener un estimado antes de realizar tu compra.",
    },
    {
      question: "¿Ofrecen seguro para los paquetes?",
      answer:
        "Sí, todos nuestros envíos incluyen un seguro básico que cubre hasta $100 del valor declarado. Ofrecemos seguros adicionales con cobertura de hasta el 100% del valor de tu mercancía por un costo adicional.",
    },
    {
      question: "¿Puedo consolidar varios paquetes en un solo envío?",
      answer:
        "Sí, ofrecemos el servicio de consolidación de paquetes. Puedes acumular varias compras en nuestro centro de distribución y solicitar que se envíen juntas para ahorrar en costos de envío.",
    },
  ]

  return (
    <section id="preguntas-frecuentes" className="py-20 md:py-28 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[#1e3a5f]/30 bg-[#1e3a5f]/5 px-3 py-1 text-sm text-[#1e3a5f]">
            <span className="font-medium">Preguntas Frecuentes</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1e3a5f] font-heading">
              Resolvemos tus Dudas
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#1e3a5f]/10">
                <AccordionTrigger className="text-[#1e3a5f] font-medium text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">¿No encuentras la respuesta que buscas?</p>
          <div className="mt-2">
            <a href="#contacto" className="text-[#1e3a5f] font-medium hover:underline">
              Contáctanos para más información
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
