import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const reasons = [
  {
    numeral: 'i.',
    title: 'Your clients stay yours.',
    body: 'We work inside your software under your brand. No client visibility. No confusion.',
  },
  {
    numeral: 'ii.',
    title: 'ACCA qualified on every file.',
    body: 'Not data entry. Not templates. Real accounting judgement applied to every engagement.',
  },
  {
    numeral: 'iii.',
    title: 'Compliance ready from day one.',
    body: 'ICO registered handling. UK GDPR compliance. IDTA readiness. Data processing agreements signed before work starts.',
  },
  {
    numeral: 'iv.',
    title: 'Start with one job.',
    body: 'No contract. No minimum volume. No long term lock in.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section bg-obsidian border-t border-smoke" aria-labelledby="why-heading">
      <div className="container">
        {/* Header */}
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between pb-10 border-b border-smoke mb-0">
            <div>
              <p className="eyebrow mb-4">Why Sixth Ledger</p>
              <h2
                id="why-heading"
                className="font-display text-4xl md:text-5xl text-pure"
                style={{ letterSpacing: '-0.03em' }}
              >
                What makes us{' '}
                <span className="italic">different</span>
              </h2>
            </div>
            <span className="font-mono text-xs text-ash uppercase tracking-label hidden lg:block pb-1">
              4 differentiators
            </span>
          </div>
        </Reveal>

        {/* 2×2 typographic grid */}
        <Stagger className="grid md:grid-cols-2 divide-x divide-smoke" stagger={0.1}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.numeral}
              variants={item}
              className={`group p-10 ${i < 2 ? 'border-b border-smoke' : ''} hover:bg-coal transition-colors duration-200 cursor-default`}
            >
              <span
                className="font-display text-6xl text-smoke/20 italic leading-none block mb-6 group-hover:text-smoke/40 transition-colors duration-300"
                aria-hidden="true"
              >
                {reason.numeral}
              </span>
              <h3 className="font-display text-2xl text-pure mb-4 leading-snug">
                {reason.title}
              </h3>
              <p className="font-body text-base text-bone leading-loose">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
