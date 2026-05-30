import Hero from '../components/sections/Hero'
import StatBand from '../components/sections/StatBand'
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

function BookingHighlight() {
  return (
    <section className="border-b border-smoke bg-obsidian" aria-label="Book a discovery call">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-6 py-12 border-l-4 border-l-lime pl-8">
          <div className="md:col-span-8">
            <p className="eyebrow mb-3">Discovery call</p>
            <h2 className="font-display text-3xl text-pure mb-3" style={{ letterSpacing: '-0.02em' }}>
              Book a 20-minute call. No sales deck.
            </h2>
            <p className="font-body text-bone text-base leading-relaxed">
              We ask about your practice. You ask about our qualifications and process. We confirm whether we are the right fit. That is the whole meeting.
            </p>
          </div>
          <div className="md:col-span-4 flex items-center md:justify-end">
            <a
              href="https://calendly.com/sixthledger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-lime text-obsidian font-body font-semibold text-sm px-7 py-3.5 hover:bg-lime-soft active:scale-[0.98] transition-all duration-150"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Book on Calendly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <BookingHighlight />
      <StatBand />
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
