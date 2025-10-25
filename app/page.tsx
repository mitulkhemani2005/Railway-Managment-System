import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsCards from "@/components/stats-cards"
import PopularRoutes from "@/components/popular-routes"
import WhyChooseSection from "@/components/why-choose-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsCards />
      <PopularRoutes />
      <WhyChooseSection />
      <Footer />
    </main>
  )
}
