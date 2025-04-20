"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Package,
  TrendingUp,
  Truck,
  Clock,
  Search,
  BarChart4,
  PieChart,
  DollarSign,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Loader2,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"

export function Dashboard() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState<null | {
    status: string
    location: string
    date: string
    estimated: string
  }>(null)

  const handleSearch = () => {
    if (!trackingNumber) return

    setIsSearching(true)
    setSearchResult(null)

    // Simulate API call
    setTimeout(() => {
      setIsSearching(false)
      if (trackingNumber.startsWith("VB")) {
        setSearchResult({
          status: "En tránsito",
          location: "Aduana de Guayaquil",
          date: "24/03/2025",
          estimated: "27/03/2025",
        })
      } else {
        setSearchResult(null)
      }
    }, 1500)
  }

  return (
    <section id="dashboard" className="py-20 md:py-28 bg-gradient-to-b from-[#1e3a5f] to-[#2a4a73]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[#a5d8e2]/30 bg-[#a5d8e2]/10 px-3 py-1 text-sm text-[#a5d8e2]">
            <span className="font-medium">Plataforma Digital</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-heading">
              Dashboard VacaBox
            </h2>
            <p className="mx-auto max-w-[700px] text-[#a5d8e2]/90 md:text-xl">
              Gestiona y rastrea tus envíos en nuestra plataforma profesional
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="bg-[#1e3a5f] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%207.46.49%20PM-IUGjdPNW1Tg8AT88lq30l2jJzFo0df.jpeg"
                alt="VacaBox Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-white font-medium">Dashboard VacaBox</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <Tabs defaultValue="envios" className="w-full">
            <div className="p-4 bg-gray-100 border-b">
              <TabsList className="grid w-full grid-cols-5 bg-white">
                <TabsTrigger value="envios" className="data-[state=active]:bg-[#1e3a5f] data-[state=active]:text-white">
                  <Package className="h-4 w-4 mr-2" /> Mis Envíos
                </TabsTrigger>
                <TabsTrigger
                  value="rastreo"
                  className="data-[state=active]:bg-[#1e3a5f] data-[state=active]:text-white"
                >
                  <Search className="h-4 w-4 mr-2" /> Rastreo
                </TabsTrigger>
                <TabsTrigger
                  value="cotizacion"
                  className="data-[state=active]:bg-[#1e3a5f] data-[state=active]:text-white"
                >
                  <DollarSign className="h-4 w-4 mr-2" /> Cotización
                </TabsTrigger>
                <TabsTrigger
                  value="estadisticas"
                  className="data-[state=active]:bg-[#1e3a5f] data-[state=active]:text-white"
                >
                  <BarChart4 className="h-4 w-4 mr-2" /> Estadísticas
                </TabsTrigger>
                <TabsTrigger
                  value="calendario"
                  className="data-[state=active]:bg-[#1e3a5f] data-[state=active]:text-white"
                >
                  <Calendar className="h-4 w-4 mr-2" /> Calendario
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="envios" className="p-6">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-lg font-medium text-[#1e3a5f]">Mis Paquetes Activos</h3>
                <Button className="bg-[#1e3a5f] hover:bg-[#2a4a73]">
                  <Package className="h-4 w-4 mr-2" /> Nuevo Paquete
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-[#1e3a5f]">Paquete #VB-12345</CardTitle>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">En tránsito</span>
                    </div>
                    <CardDescription>Amazon - Electrónicos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Origen:</span>
                        <span className="text-sm font-medium">Miami, FL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Peso:</span>
                        <span className="text-sm font-medium">2.5 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Llegada estimada:</span>
                        <span className="text-sm font-medium">25/03/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Última actualización:</span>
                        <span className="text-sm font-medium">Hace 2 horas</span>
                      </div>
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-amber-500">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-[#1e3a5f]">Paquete #VB-12346</CardTitle>
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">En aduana</span>
                    </div>
                    <CardDescription>eBay - Ropa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Origen:</span>
                        <span className="text-sm font-medium">Miami, FL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Peso:</span>
                        <span className="text-sm font-medium">1.2 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Llegada estimada:</span>
                        <span className="text-sm font-medium">28/03/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Última actualización:</span>
                        <span className="text-sm font-medium">Hace 6 horas</span>
                      </div>
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-[#1e3a5f]">Paquete #VB-12347</CardTitle>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Recibido en Miami
                      </span>
                    </div>
                    <CardDescription>Walmart - Hogar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Origen:</span>
                        <span className="text-sm font-medium">Miami, FL</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Peso:</span>
                        <span className="text-sm font-medium">3.7 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Llegada estimada:</span>
                        <span className="text-sm font-medium">02/04/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Última actualización:</span>
                        <span className="text-sm font-medium">Hace 1 día</span>
                      </div>
                      <div className="pt-2">
                        <Button variant="outline" size="sm" className="w-full">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex justify-center">
                <Button variant="outline">Ver todos los paquetes</Button>
              </div>
            </TabsContent>

            <TabsContent value="rastreo" className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Rastrear Paquete</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ingresa el número de rastreo de tu paquete para ver su estado actual y ubicación.
                  </p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ej: VB-12345"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1"
                    />
                    <Button className="bg-[#1e3a5f] hover:bg-[#2a4a73]" onClick={handleSearch} disabled={isSearching}>
                      {isSearching ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Buscando...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" />
                          Rastrear
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {searchResult ? (
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-[#1e3a5f] text-white p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Paquete #{trackingNumber}</h4>
                        <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                          {searchResult.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-[#1e3a5f] mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Ubicación actual</p>
                            <p className="text-sm text-muted-foreground">{searchResult.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-[#1e3a5f] mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Fecha de actualización</p>
                            <p className="text-sm text-muted-foreground">{searchResult.date}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-[#1e3a5f] mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Entrega estimada</p>
                            <p className="text-sm text-muted-foreground">{searchResult.estimated}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h5 className="text-sm font-medium mb-3">Progreso del envío</h5>
                        <div className="relative">
                          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
                          <div className="relative flex justify-between">
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs z-10">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="text-xs mt-1">Recibido</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs z-10">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="text-xs mt-1">Procesado</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs z-10">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="text-xs mt-1">En tránsito</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs z-10">
                                <AlertCircle className="h-4 w-4" />
                              </div>
                              <span className="text-xs mt-1">En aduana</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs z-10">
                                <Truck className="h-4 w-4" />
                              </div>
                              <span className="text-xs mt-1">Entregado</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : trackingNumber && !isSearching ? (
                  <div className="p-6 border rounded-lg text-center">
                    <AlertCircle className="h-12 w-12 text-amber-500 mx-auto mb-2" />
                    <p className="text-lg font-medium text-[#1e3a5f]">Paquete no encontrado</p>
                    <p className="text-muted-foreground">
                      No pudimos encontrar información para el número de rastreo ingresado. Por favor verifica e intenta
                      nuevamente.
                    </p>
                  </div>
                ) : null}
              </div>
            </TabsContent>

            <TabsContent value="cotizacion" className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Calculadora de Envíos</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Calcula el costo aproximado de tu envío basado en el peso y valor de tu paquete.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Peso (kg)</label>
                      <Input type="number" placeholder="Ej: 2.5" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Valor ($)</label>
                      <Input type="number" placeholder="Ej: 100" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Categoría</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Selecciona una categoría</option>
                        <option value="electronics">Electrónicos</option>
                        <option value="clothing">Ropa y Accesorios</option>
                        <option value="home">Hogar</option>
                        <option value="other">Otros</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ciudad de destino</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Selecciona una ciudad</option>
                        <option value="quito">Quito</option>
                        <option value="guayaquil">Guayaquil</option>
                        <option value="cuenca">Cuenca</option>
                        <option value="other">Otra ciudad</option>
                      </select>
                    </div>
                    <Button className="w-full bg-[#1e3a5f] hover:bg-[#2a4a73]">Calcular Cotización</Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-[#1e3a5f] mb-4">Resumen de Costos</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Tarifa base:</span>
                        <span className="text-sm font-medium">$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Impuestos estimados:</span>
                        <span className="text-sm font-medium">$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Manejo y procesamiento:</span>
                        <span className="text-sm font-medium">$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Entrega a domicilio:</span>
                        <span className="text-sm font-medium">$0.00</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between font-medium">
                          <span>Total estimado:</span>
                          <span className="text-[#1e3a5f]">$0.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-[#a5d8e2]/10 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Esta es una cotización estimada. El costo final puede variar según el peso volumétrico y otros
                        factores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="estadisticas" className="p-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-[#1e3a5f]" />
                      <CardTitle className="text-xl text-[#1e3a5f]">12</CardTitle>
                    </div>
                    <CardDescription>Paquetes Totales</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-[#1e3a5f]" />
                      <CardTitle className="text-xl text-[#1e3a5f]">$1,245</CardTitle>
                    </div>
                    <CardDescription>Valor Total</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-[#1e3a5f]" />
                      <CardTitle className="text-xl text-[#1e3a5f]">3</CardTitle>
                    </div>
                    <CardDescription>En Tránsito</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#1e3a5f]" />
                      <CardTitle className="text-xl text-[#1e3a5f]">5.2 días</CardTitle>
                    </div>
                    <CardDescription>Tiempo Promedio</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1e3a5f]">Envíos por Mes</CardTitle>
                    <CardDescription>Número de paquetes enviados en los últimos 6 meses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center">
                      <BarChart4 className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#1e3a5f]">Categorías de Productos</CardTitle>
                    <CardDescription>Distribución por tipo de producto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center">
                      <PieChart className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="calendario" className="p-6">
              <div className="text-center p-8">
                <Calendar className="h-16 w-16 text-[#1e3a5f] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-[#1e3a5f] mb-2">Calendario de Envíos</h3>
                <p className="text-muted-foreground">
                  Aquí podrás ver un calendario con las fechas estimadas de llegada de tus paquetes.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Gestiona tus Envíos desde Cualquier Lugar</h3>
            <p className="text-[#a5d8e2]/90 mb-6">
              Nuestra plataforma digital te permite tener el control total de tus envíos. Accede desde tu computadora o
              dispositivo móvil para rastrear tus paquetes, calcular costos y gestionar tus envíos en cualquier momento.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#a5d8e2] flex-shrink-0 mt-0.5" />
                <span>Interfaz intuitiva y fácil de usar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#a5d8e2] flex-shrink-0 mt-0.5" />
                <span>Notificaciones en tiempo real sobre el estado de tus envíos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#a5d8e2] flex-shrink-0 mt-0.5" />
                <span>Historial completo de todos tus paquetes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#a5d8e2] flex-shrink-0 mt-0.5" />
                <span>Calculadora de costos con estimaciones precisas</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zDui50V3FgrHEPrsesy4ZHJEhYtbqw.png"
              alt="Centro de distribución VacaBox"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/50 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
