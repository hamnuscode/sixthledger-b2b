import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import VSLPlayer from './VSLPlayer'

const EASE = [0.16, 1, 0.3, 1]

const stats = [
  { value: '3+2', label: 'ACCA Qualified\n& Finalists', numeric: false },
  { value: '9',   label: 'Service\nLines',              numeric: true  },
  { value: '4',   label: 'Cloud\nPlatforms',            numeric: true  },
  { value: 'UK',  label: 'Working\nHours',              numeric: false },
]

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 900
    const start = performance.now()
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [active, target])
  return <>{display}</>
}

export default function Hero() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-20px 0px' })

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--obsidian)', paddingTop: '6rem', paddingBottom: '0' }}
      aria-labelledby="hero-headline"
    >
      <div className="container">
        {/* Top meta strip */}
        <motion.div
          className="flex items-center justify-between pb-4 mb-8 border-b border-smoke"
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
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-pure mb-8"
          style={{ letterSpacing: '-0.03em', lineHeight: '1.0' }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
        >
          Hand us the work.
          <br />
          <span className="italic" style={{ color: 'var(--ash)' }}>Keep your clients.</span>
        </motion.h1>

        {/* Two-column: left copy/CTA, right VSL */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 pt-7 border-t border-smoke items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.28 }}
        >
          {/* Left: compliance badges + calendly CTA stacked */}
          <div className="flex flex-col gap-6">
            {/* Compliance badges — single row, dots as separators */}
            <div className="flex flex-wrap gap-y-1.5 gap-x-0" aria-label="Compliance credentials">
              {['ICO Registered', 'ACCA-Led', 'UK GDPR Compliant', 'IDTA-Ready', 'MTD Ready'].map((badge, i) => (
                <span key={badge} className="flex items-center">
                  {i > 0 && <span className="text-smoke/60 mx-2 font-mono text-xs" aria-hidden="true">·</span>}
                  <span className="font-mono text-xs text-ash uppercase tracking-label">{badge}</span>
                </span>
              ))}
            </div>

            {/* Calendly CTA */}
            <div className="border-t border-smoke pt-5">
              <p className="eyebrow mb-2">Discovery call</p>
              <p className="font-display text-xl text-pure mb-4">
                Book a 20-minute call. No sales deck. No pressure.
              </p>
              <a
                href="https://calendly.com/sixthledger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-lime text-obsidian font-body font-semibold text-sm px-6 py-3 hover:bg-lime-soft active:scale-[0.98] transition-all duration-150"
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

      {/* Stats band — bottom of hero, full bleed coal */}
      <div ref={statsRef} style={{ background: 'var(--coal)' }} className="border-t border-smoke mt-0">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-smoke">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`py-6 px-8 flex flex-col ${i === 0 ? 'pl-0' : ''}`}>
                <span
                  className="font-display text-pure block"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: '1' }}
                >
                  {stat.numeric
                    ? <CountUp target={parseInt(stat.value)} active={statsInView} />
                    : stat.value}
                </span>
                <span
                  className="font-mono text-xs text-ash uppercase tracking-label mt-3 block leading-relaxed"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
