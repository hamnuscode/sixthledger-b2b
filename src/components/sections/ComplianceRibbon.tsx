import { motion } from 'framer-motion'
import { Stagger, item } from '../ui/Reveal'

const badges = [
  { code: 'ICO', title: 'ICO Registered', subtitle: "UK Information Commissioner's Office" },
  { code: 'GDPR', title: 'UK GDPR', subtitle: 'DPA signed before every engagement' },
  { code: 'IDTA', title: 'IDTA-Ready', subtitle: 'International data transfer compliant' },
  { code: 'ACCA', title: 'ACCA-Led', subtitle: 'Every output reviewed by a qualified accountant' },
]

export default function ComplianceRibbon() {
  return (
    <section
      className="border-y border-smoke"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="compliance-ribbon-heading"
    >
      <div className="container">
        <div className="flex items-center gap-6 pb-8 mb-0 border-b border-smoke">
          <svg width="40" height="46" viewBox="0 0 40 46" fill="none" aria-hidden="true" className="text-lime flex-shrink-0" style={{ opacity: 0.7 }}>
            <path d="M20 2L3 9v13c0 12 7 22 17 26 10-4 17-14 17-26V9L20 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M12 23l6 6 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div>
            <p className="font-display text-base text-pure">Data protection by design</p>
            <p className="font-body text-xs text-ash mt-0.5 leading-snug">ICO registered. UK GDPR compliant. DPA signed before every engagement. IDTA-ready for international transfers.</p>
          </div>
        </div>
        <Stagger
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-smoke"
          stagger={0.07}
          delay={0.05}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.code}
              variants={item}
              className={`group py-8 px-6 hover:bg-obsidian transition-colors duration-200 cursor-default ${
                i === 0 ? 'pl-0' : ''
              }`}
            >
              <p className="font-mono text-xs text-lime uppercase tracking-label mb-3">
                {badge.code}
              </p>
              <p className="font-display text-base text-pure mb-1">{badge.title}</p>
              <p className="font-body text-xs text-ash leading-snug">{badge.subtitle}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
