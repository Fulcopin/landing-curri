"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#e67e22]"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-10%20at%207.46.49%20PM-IUGjdPNW1Tg8AT88lq30l2jJzFo0df.jpeg"
            alt="VacaBox Logo"
            width={140}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#servicios"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-[#1e3a5f] hover:text-[#e67e22]" : "text-white hover:text-[#1e3a5f]"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="#como-funciona"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-[#1e3a5f] hover:text-[#e67e22]" : "text-white hover:text-[#1e3a5f]"
            }`}
          >
            Cómo Funciona
          </Link>
          <Link
            href="#tiendas"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-[#1e3a5f] hover:text-[#e67e22]" : "text-white hover:text-[#1e3a5f]"
            }`}
          >
            Tiendas
          </Link>
          <Link
            href="#testimonios"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-[#1e3a5f] hover:text-[#e67e22]" : "text-white hover:text-[#1e3a5f]"
            }`}
          >
            Testimonios
          </Link>
          <Link
            href="#preguntas-frecuentes"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-[#1e3a5f] hover:text-[#e67e22]" : "text-white hover:text-[#1e3a5f]"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="#contacto"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-[#1e3a5f] hover:text-[#e67e22]" : "text-white hover:text-[#1e3a5f]"
            }`}
          >
            Contacto
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant={isScrolled ? "outline" : "secondary"}
            className={
              isScrolled
                ? "border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                : "bg-[#1e3a5f] text-white hover:bg-[#2a4a73]"
            }
            onClick={() => (window.location.href = "https://vacaboxprueba.firebaseapp.com/#/login")}
          >
            Iniciar Sesión
          </Button>
          <Button
            className={
              isScrolled ? "bg-[#e67e22] hover:bg-[#d35400] text-white" : "bg-white text-[#1e3a5f] hover:bg-gray-100"
            }
            onClick={() => (window.location.href = "https://vacaboxprueba.firebaseapp.com/#/register")}
          >
            Registrarse
          </Button>
        </div>
        <button
          className={`md:hidden ${isScrolled ? "text-[#1e3a5f]" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 grid gap-4">
            <Link
              href="#servicios"
              className="text-sm font-medium text-[#1e3a5f] hover:text-[#e67e22]"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-[#1e3a5f] hover:text-[#e67e22]"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo Funciona
            </Link>
            <Link
              href="#tiendas"
              className="text-sm font-medium text-[#1e3a5f] hover:text-[#e67e22]"
              onClick={() => setIsMenuOpen(false)}
            >
              Tiendas
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-[#1e3a5f] hover:text-[#e67e22]"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#preguntas-frecuentes"
              className="text-sm font-medium text-[#1e3a5f] hover:text-[#e67e22]"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-[#1e3a5f] hover:text-[#e67e22]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button
                variant="outline"
                className="w-full border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                onClick={() => (window.location.href = "https://vacaboxprueba.firebaseapp.com/#/login")}
              >
                Iniciar Sesión
              </Button>
              <Button
                className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white"
                onClick={() => (window.location.href = "https://vacaboxprueba.firebaseapp.com/#/register")}
              >
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
