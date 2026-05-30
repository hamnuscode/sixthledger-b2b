import { motion } from 'framer-motion'
import VSLPlayer from './VSLPlayer'

const EASE = [0.16, 1, 0.3, 1]

const flowSteps = [
  {
    label: 'Receive',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="2" width="10" height="13" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6 2v3.5h4.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M5.5 8.5h6M5.5 11.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M14 9l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Process',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Deliver',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6.5 10l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--obsidian)', paddingTop: '7rem', paddingBottom: '5rem' }}
      aria-labelledby="hero-headline"
    >
      <div className="container">
        {/* Top meta strip */}
        <motion.div
          className="flex items-center justify-between pb-5 mb-10 border-b border-smoke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >
          <p className="eyebrow">For UK accounting practices</p>
          <p className="font-mono text-xs text-ash uppercase tracking-label hidden md:block">
            ACCA Led · ICO Registered · UK GDPR
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-pure mb-6"
          style={{ letterSpacing: '-0.03em', lineHeight: '1.0' }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
        >
          We do the work. You deliver it.
          <br />
          <span className="italic" style={{ color: 'var(--ash)' }}>Your clients never know we exist.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-body text-bone text-lg leading-relaxed mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.22 }}
        >
          White label ACCA qualified accounting support for UK practices. Embedded in your workflow. Built for peak capacity periods. Fully compliant.
        </motion.p>

        {/* Two-column: left copy/CTA, right VSL */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 pt-8 border-t border-smoke items-start"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
        >
          {/* Left: compliance badges + calendly CTA */}
          <div className="flex flex-col gap-8">
            {/* Compliance badges */}
            <div className="flex flex-wrap gap-y-2 gap-x-0" aria-label="Compliance credentials">
              {['ICO Registered', 'ACCA Led', 'UK GDPR Compliant', 'IDTA Ready', 'MTD Ready'].map((badge, i) => (
                <span key={badge} className="flex items-center">
                  {i > 0 && <span className="text-smoke/60 mx-2.5 font-mono text-xs" aria-hidden="true">·</span>}
                  <span className="font-mono text-xs text-ash uppercase tracking-label">{badge}</span>
                </span>
              ))}
            </div>

            {/* Workflow diagram */}
            <div className="border-t border-smoke pt-6">
              <p className="font-mono text-[10px] text-ash/60 uppercase tracking-widest mb-4">How it works</p>
              <div className="flex items-start">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center flex-1 min-w-0">
                    <div className="flex flex-col items-center gap-2.5 flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 border border-smoke flex items-center justify-center text-lime"
                        style={{ background: 'var(--coal)' }}
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.55 + i * 0.18 }}
                      >
                        {step.icon}
                      </motion.div>
                      <motion.span
                        className="font-mono text-[10px] text-ash uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.75 + i * 0.18 }}
                      >
                        {step.label}
                      </motion.span>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="flex items-center flex-1 mx-2 mb-7">
                        <div className="relative flex-1 h-px bg-smoke overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-lime"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            style={{ transformOrigin: 'left' }}
                            transition={{ duration: 0.45, ease: EASE, delay: 0.72 + i * 0.18 }}
                          />
                        </div>
                        <motion.svg
                          width="5" height="8" viewBox="0 0 5 8"
                          className="text-lime flex-shrink-0"
                          style={{ marginLeft: '-1px' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.9 + i * 0.18 }}
                        >
                          <path d="M0 0L5 4L0 8" fill="currentColor"/>
                        </motion.svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Calendly CTA */}
            <div>
              <p className="eyebrow mb-3">Discovery call</p>
              <p className="font-display text-2xl text-pure mb-5 leading-snug">
                Book a 20-minute call. No sales deck. No pressure.
              </p>
              <a
                href="https://calendly.com/sixthledger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-lime text-obsidian font-body font-semibold text-sm px-7 py-3.5 hover:bg-lime-soft active:scale-[0.98] transition-all duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                Book on Calendly
              </a>
            </div>
          </div>

          {/* Right: VSL */}
          <div>
            <VSLPlayer />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
