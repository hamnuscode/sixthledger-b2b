import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const reasons = [
  {
    numeral: 'i.',
    title: 'Your clients stay yours',
    body: 'We work under your credentials, in your software, delivering outputs to you — not to your clients. Your client relationship is untouched. They never know we exist unless you tell them.',
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
    <section className="section bg-obsidian" aria-labelledby="why-heading">
      <div className="container">
        <Reveal className="max-w-3xl mb-20" delay={0.05}>
          <p className="eyebrow mb-5">Why Sixth Ledger</p>
          <h2
            id="why-heading"
            className="font-display text-4xl md:text-5xl text-pure"
          >
            What makes us{' '}
            <span className="italic">different</span>
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-smoke" stagger={0.1}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.numeral}
              variants={item}
              className={`p-10 flex flex-col gap-6 group transition-colors duration-200 hover:bg-coal ${
                i < reasons.length - 1 ? 'border-r border-smoke' : ''
              } border-b sm:border-b-0`}
            >
              <div className="h-px bg-smoke relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 w-8 h-px bg-lime transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>
              <span className="font-display text-2xl text-ash italic group-hover:text-lime transition-colors duration-200" aria-hidden="true">
                {reason.numeral}
              </span>
              <h3 className="font-display text-xl text-pure leading-snug">{reason.title}</h3>
              <p className="font-body text-base text-bone leading-loose">{reason.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
