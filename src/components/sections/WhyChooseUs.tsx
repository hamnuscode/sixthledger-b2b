import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const reasons = [
  {
    numeral: 'i.',
    title: 'Your clients stay yours',
    body: 'We work under your credentials, in your software, delivering outputs to you, not to your clients. Your client relationship is untouched. They never know we exist unless you tell them.',
  },
  {
    numeral: 'ii.',
    title: 'ACCA-led, always',
    body: 'Every piece of work is prepared and reviewed by ACCA-qualified or ACCA-finalist accountants. Not outsourced data entry. Not a template service. Real professional judgement on every file.',
  },
  {
    numeral: 'iii.',
    title: 'Compliance infrastructure included',
    body: 'ICO-registered, UK GDPR-compliant, IDTA-ready. Signed DPA before work starts. Sub-processor list available. The compliance paperwork your clients will ask for is ready before you need it.',
  },
  {
    numeral: 'iv.',
    title: 'Start with one job',
    body: 'No minimum commitment. Trial us on a single VAT return, a set of self-assessments, or a month of bookkeeping. Review the output. Decide from there. No long-term contract required.',
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
