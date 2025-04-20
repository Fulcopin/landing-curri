import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { RecommendedStores } from "@/components/recommended-stores"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <RecommendedStores />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
