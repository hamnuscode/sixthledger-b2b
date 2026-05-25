import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

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
    <section ref={ref} className="border-b border-smoke" style={{ background: 'var(--coal)' }} aria-label="Key figures">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-smoke">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 px-8 ${i === 0 ? 'pl-0' : ''} flex flex-col`}
            >
              <span
                className="font-display text-pure block"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1' }}
              >
                {stat.numeric
                  ? <CountUp target={parseInt(stat.value)} active={inView} />
                  : stat.value}
              </span>
              <span
                className="font-mono text-xs text-ash uppercase tracking-label mt-4 block leading-relaxed"
                style={{ whiteSpace: 'pre-line' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
