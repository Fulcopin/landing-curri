"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, ShoppingCart, ShoppingBag, Package, Gift, CreditCard, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecommendedStores() {
  const stores = [
    {
      name: "Amazon",
      logo: "/placeholder.svg?height=80&width=160",
      description: "La tienda online más grande del mundo con millones de productos.",
      url: "https://www.amazon.com",
      icon: <ShoppingCart className="h-6 w-6 text-[#e67e22]" />,
    },
    {
      name: "eBay",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Marketplace global con productos nuevos y usados a excelentes precios.",
      url: "https://www.ebay.com",
      icon: <ShoppingBag className="h-6 w-6 text-[#e67e22]" />,
    },
    {
      name: "Walmart",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Precios bajos garantizados en electrónica, ropa, juguetes y más.",
      url: "https://www.walmart.com",
      icon: <Package className="h-6 w-6 text-[#e67e22]" />,
    },
    {
      name: "Best Buy",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Especialistas en electrónica, computadoras y electrodomésticos.",
      url: "https://www.bestbuy.com",
      icon: <Smartphone className="h-6 w-6 text-[#e67e22]" />,
    },
    {
      name: "Target",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Moda, hogar, belleza y más con envíos rápidos a nuestra dirección.",
      url: "https://www.target.com",
      icon: <Gift className="h-6 w-6 text-[#e67e22]" />,
    },
    {
      name: "Macy's",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Tienda por departamentos con las mejores marcas de moda y hogar.",
      url: "https://www.macys.com",
      icon: <CreditCard className="h-6 w-6 text-[#e67e22]" />,
    },
  ]

  return (
    <section id="tiendas" className="py-16 bg-white">
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
                    {store.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">{store.name}</h3>
                </div>
                <div className="h-20 flex items-center justify-center mb-4 bg-gray-50 rounded">
                  <Image
                    src={store.logo || "/placeholder.svg"}
                    alt={`${store.name} logo`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
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
            className="bg-[#e67e22] hover:bg-[#d35400] text-white"
            onClick={() => (window.location.href = "https://vacaboxprueba.firebaseapp.com/#/register")}
          >
            Obtén tu Dirección en USA
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
