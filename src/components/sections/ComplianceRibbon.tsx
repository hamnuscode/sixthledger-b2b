import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const badges = [
  {
    title: 'ICO Registered',
    subtitle: "UK Information Commissioner's Office",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'UK GDPR',
    subtitle: 'DPA signed before every engagement',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 7v8c0 5 4.5 9.5 10 10 5.5-.5 10-5 10-10V7L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 14l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'IDTA-Ready',
    subtitle: 'International Data Transfer Agreement',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 3c-4 2-6 6-6 11s2 9 6 11M14 3c4 2 6 6 6 11s-2 9-6 11M3 14h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'ACCA-Led',
    subtitle: 'Every output reviewed by a qualified accountant',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3l2.6 5.3L22 9.3l-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.4-.7L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function ComplianceRibbon() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="compliance-heading"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-24">
          <Reveal className="md:w-40 flex-shrink-0" delay={0.05}>
            <p id="compliance-heading" className="eyebrow">
              Compliance
              <br />
              stack
            </p>
          </Reveal>

          <Stagger className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-smoke" stagger={0.1} delay={0.1}>
            {badges.map(badge => (
              <motion.div
                key={badge.title}
                variants={item}
                className="flex flex-col gap-4 px-8 first:pl-0 last:pr-0 py-2 group"
              >
                <span className="text-pure opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {badge.icon}
                </span>
                <div>
                  <p className="font-display text-base text-pure font-medium">{badge.title}</p>
                  <p className="font-body text-sm text-ash mt-1.5 leading-relaxed">{badge.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
