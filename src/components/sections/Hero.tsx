import { motion } from 'framer-motion'
import Button from '../ui/Button'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--obsidian)', paddingTop: '8rem', paddingBottom: '6rem' }}
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

        {/* Massive headline */}
        <motion.h1
          id="hero-headline"
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-pure mb-12"
          style={{
            letterSpacing: '-0.03em',
            lineHeight: '1.0',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
        >
          Hand us the work.
          <br />
          <span className="italic" style={{ color: 'var(--ash)' }}>Keep your clients.</span>
        </motion.h1>

        {/* Bottom grid: subtext + CTAs */}
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
          {['ICO Registered', 'ACCA-Led', 'UK GDPR Compliant', 'IDTA-Ready', 'MTD Ready'].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="text-smoke/60 font-mono" aria-hidden="true">/</span>}
              <span className="font-mono text-xs text-ash uppercase tracking-label">{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
