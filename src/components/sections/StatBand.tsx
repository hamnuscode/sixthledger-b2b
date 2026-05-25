import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Stagger, item } from '../ui/Reveal'
import { motion } from 'framer-motion'

const stats = [
  { value: '3+2', label: 'ACCA Qualified\n& Finalists', numeric: false },
  { value: '9', label: 'Service\nLines', numeric: true },
  { value: '4', label: 'Cloud\nPlatforms', numeric: true },
  { value: 'UK', label: 'Working\nHours', numeric: false },
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

export default function StatBand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <section ref={ref} className="bg-coal border-y border-smoke py-16" aria-label="Key figures">
      <div className="container">
        <Stagger className="grid grid-cols-2 md:grid-cols-4" stagger={0.1}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={item}
              className={`flex flex-col items-center justify-center py-8 px-8 text-center ${
                i < stats.length - 1 ? 'md:border-r border-smoke' : ''
              } ${i === 1 ? 'border-r border-smoke md:border-r' : ''}`}
            >
              <span className="font-display text-5xl md:text-7xl text-pure" style={{ letterSpacing: '-0.03em' }}>
                {stat.numeric ? <CountUp target={parseInt(stat.value)} active={inView} /> : stat.value}
              </span>
              <span
                className="font-mono text-xs text-ash uppercase tracking-label mt-4 text-center leading-relaxed"
                style={{ whiteSpace: 'pre-line' }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
