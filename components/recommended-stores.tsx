"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecommendedStores() {
  const stores = [
    {
      name: "Amazon",
      logo: "https://ams3.digitaloceanspaces.com/graffica/2023/03/amazon_logo._CB633267048_.png",
      description: "La tienda online más grande del mundo con millones de productos.",
      url: "https://www.amazon.com",
    },
    {
      name: "eBay",
      logo: "https://cdn.worldvectorlogo.com/logos/ebay.svg",
      description: "Marketplace global con productos nuevos y usados a excelentes precios.",
      url: "https://www.ebay.com",
    },
    {
      name: "Walmart",
      logo: "https://cdn.worldvectorlogo.com/logos/ebay.svg",
      description: "Precios bajos garantizados en electrónica, ropa, juguetes y más.",
      url: "https://www.walmart.com",
    },
    {
      name: "Best Buy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Best_Buy_Logo.svg/1200px-Best_Buy_Logo.svg.png",
      description: "Especialistas en electrónica, computadoras y electrodomésticos.",
      url: "https://www.bestbuy.com",
    },
    
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full border border-[#1e3a5f]/30 bg-[#1e3a5f]/5 px-3 py-1 text-sm text-[#1e3a5f]">
            <span className="font-medium">Compras Internacionales</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#1e3a5f] font-heading">
              Tiendas Recomendadas
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Estas son algunas de las mejores tiendas de Estados Unidos donde puedes comprar y usar nuestro servicio de
              courier
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="h-20 flex items-center justify-center mb-4 bg-gray-50 rounded">
                  <Image
                    src={store.logo || "/placeholder.svg"}
                    alt={`${store.name} logo`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{store.name}</h3>
                <p className="text-muted-foreground mb-4">{store.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                  onClick={() => window.open(store.url, "_blank")}
                >
                  Visitar Tienda <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
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
          <p className="text-muted-foreground mb-4">
            Recuerda usar nuestra dirección en Miami como destino de envío al realizar tus compras
          </p>
          <Button
            className="bg-[#1e3a5f] hover:bg-[#2a4a73]"
            onClick={() => (window.location.href = "https://front-j0f5.onrender.com/#/register")}
          >
            Obtén tu Dirección en USA
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
