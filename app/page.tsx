import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Comparison from '@/components/Comparison'
import Features from '@/components/Features'
import WhoItsFor from '@/components/WhoItsFor'
import Roadmap from '@/components/Roadmap'
import Waitlist from '@/components/Waitlist'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Comparison />
      <Features />
      <WhoItsFor />
      <Roadmap />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  )
}
