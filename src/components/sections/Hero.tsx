import { motion } from 'framer-motion'
import Button from '../ui/Button'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--obsidian)', paddingTop: '8rem', paddingBottom: '4rem' }}
      aria-labelledby="hero-headline"
    >
      <div className="container">
        {/* Top meta strip */}
        <motion.div
          className="flex items-center justify-between pb-5 mb-12 border-b border-smoke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >
          <p className="eyebrow">For UK accounting practices</p>
          <p className="font-mono text-xs text-ash uppercase tracking-label hidden md:block">
            ACCA-Led · ICO Registered · UK GDPR
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-pure mb-12"
          style={{ letterSpacing: '-0.03em', lineHeight: '1.0' }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
        >
          Hand us the work.
          <br />
          <span className="italic" style={{ color: 'var(--ash)' }}>Keep your clients.</span>
        </motion.h1>

        {/* Subtext + CTAs */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 pt-10 border-t border-smoke"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
        >
          <div>
            <p className="font-body text-bone text-xl leading-loose max-w-lg">
              An ACCA-led team that operates as an invisible extension of your practice.
              White-label by default. Compliant by design. UK working hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-5">
            <Button to="/contact" size="lg">Book a 20-minute call</Button>
            <Button to="/how-we-work" variant="ghost" size="lg">How we work →</Button>
          </div>
        </motion.div>

        {/* Compliance strip */}
        <motion.div
          className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-8 border-t border-smoke/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.54 }}
          aria-label="Compliance credentials"
        >
          {['ICO Registered', 'ACCA-Led', 'UK GDPR Compliant', 'IDTA-Ready', 'MTD Ready'].map((badge, i) => (
            <span key={badge} className="flex items-center gap-3">
              {i > 0 && <span className="text-smoke/60 font-mono" aria-hidden="true">/</span>}
              <span className="font-mono text-xs text-ash uppercase tracking-label">{badge}</span>
            </span>
          ))}
        </motion.div>

        {/* Calendly booking strip — inside hero */}
        <motion.div
          className="border-t border-smoke mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="grid md:grid-cols-12 items-center gap-6 py-8">
            <div className="md:col-span-8">
              <p className="eyebrow mb-1">Discovery call</p>
              <p className="font-display text-xl text-pure">
                Book a 20-minute call. No sales deck. No pressure.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="https://calendly.com/sixthledger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-lime text-obsidian font-body font-semibold text-sm px-7 py-3.5 hover:bg-lime-soft active:scale-[0.98] transition-all duration-150"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                Book on Calendly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
