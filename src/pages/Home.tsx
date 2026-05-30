import Hero from '../components/sections/Hero'
import StatBand from '../components/sections/StatBand'
import TrustStrip from '../components/sections/TrustStrip'
import CapacitySection from '../components/sections/CapacitySection'
import ServicesGrid from '../components/sections/ServicesGrid'
import ComplianceRibbon from '../components/sections/ComplianceRibbon'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import EngagementModels from '../components/sections/EngagementModels'
import FAQSection from '../components/sections/FAQSection'
import FoundersSection from '../components/sections/FoundersSection'
import ClosingCTA from '../components/sections/ClosingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <TrustStrip />
      <CapacitySection />
      <ServicesGrid />
      <ComplianceRibbon />
      <WhyChooseUs />
      <HowItWorks />
      <FoundersSection />
      <Testimonials />
      <EngagementModels />
      <FAQSection />
      <ClosingCTA />
    </>
  )
}
