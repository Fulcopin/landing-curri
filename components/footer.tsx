"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="container px-4 md:px-6 pt-16 pb-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%207.46.49%20PM-IUGjdPNW1Tg8AT88lq30l2jJzFo0df.jpeg"
                alt="VacaBox Logo"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[#a5d8e2]/90 max-w-md">
              Servicio premium de courier internacional. Traemos tus compras de Estados Unidos a todo Ecuador de manera
              rápida, segura y confiable.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="#tiendas" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Tiendas Recomendadas
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#preguntas-frecuentes" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://vacabox.firebaseapp.com/#/login"
                  className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a
                  href="https://vacabox.firebaseapp.com/#/register"
                  className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registrarse
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Casillero Virtual
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Entrega a Domicilio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Envío Express
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Compra Asistida
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Trámites Aduaneros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Política de Reembolsos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#a5d8e2]/80 hover:text-[#a5d8e2] transition-colors">
                  Información Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a4a73]">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Suscríbete a nuestro boletín</h3>
              <p className="text-[#a5d8e2]/80 mb-4">
                Recibe noticias, ofertas especiales y consejos para tus compras en USA.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Tu email"
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/60"
                />
                <Button className="bg-[#e67e22] text-white hover:bg-[#d35400]">Suscribirse</Button>
              </div>
            </div>

            <div className="flex flex-col md:items-end">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm">Todos los sistemas operativos</span>
              </div>
              <p className="text-[#a5d8e2]/80 text-sm md:text-right">
                © {new Date().getFullYear()} VacaBox. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
