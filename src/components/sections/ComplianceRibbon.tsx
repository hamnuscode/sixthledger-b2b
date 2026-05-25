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
