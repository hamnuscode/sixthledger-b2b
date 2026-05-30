import { motion } from 'framer-motion'
import { Stagger, item } from '../ui/Reveal'

const badges = [
  { code: 'ICO', title: 'ICO Registered', subtitle: "UK Information Commissioner's Office" },
  { code: 'GDPR', title: 'UK GDPR', subtitle: 'DPA signed before every engagement' },
  { code: 'IDTA', title: 'IDTA Ready', subtitle: 'International data transfer compliant' },
  { code: 'ACCA', title: 'ACCA Led', subtitle: 'Every output reviewed by a qualified accountant' },
]

export default function ComplianceRibbon() {
  return (
    <section
      className="border-y border-smoke"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="compliance-ribbon-heading"
    >
      <div className="container">
        {/* Shield banner */}
        <div className="flex items-center gap-10 py-12 border-b border-smoke">
          {/* Combined compliance shield: ICO · GDPR · IDTA · ACCA */}
          <svg width="96" height="112" viewBox="0 0 96 112" fill="none" aria-hidden="true" className="text-lime flex-shrink-0" style={{ opacity: 0.75 }}>
            <path d="M48 4L6 18v28c0 28 17 52 42 62 25-10 42-34 42-62V18L48 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
            <path d="M48 16L18 26v20c0 20 12 38 30 46 18-8 30-26 30-46V26L48 16z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.35"/>
            <line x1="48" y1="22" x2="48" y2="88" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3"/>
            <line x1="20" y1="52" x2="76" y2="52" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3"/>
            <text x="28" y="44" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">ICO</text>
            <text x="66" y="44" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">GDPR</text>
            <text x="28" y="68" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">IDTA</text>
            <text x="66" y="68" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">ACCA</text>
            <rect x="40" y="47" width="16" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
            <path d="M43 47v-3a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
            <circle cx="48" cy="53.5" r="1.5" fill="currentColor"/>
            <path d="M48 55v3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
          <div>
            <p className="font-display text-xl text-pure mb-1">Data protection by design</p>
            <p className="font-body text-sm text-ash leading-relaxed">
              ICO registered. UK GDPR compliant. DPA signed before every engagement. IDTA ready for international transfers.
            </p>
          </div>
        </div>

        {/* Badge grid */}
        <Stagger
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-smoke"
          stagger={0.07}
          delay={0.05}
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.code}
              variants={item}
              className={`group py-10 px-8 hover:bg-obsidian transition-colors duration-200 cursor-default ${
                i === 0 ? 'pl-0' : ''
              }`}
            >
              <p className="font-mono text-xs text-lime uppercase tracking-label mb-4">
                {badge.code}
              </p>
              <p className="font-display text-lg text-pure mb-2">{badge.title}</p>
              <p className="font-body text-sm text-ash leading-relaxed">{badge.subtitle}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
