import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const steps = [
  {
    numeral: '01',
    title: 'Discovery call',
    body: '20 minutes. We ask about your practice, your software, your volume, and your pain points. We tell you exactly what we can do and at what cost. No sales deck.',
  },
  {
    numeral: '02',
    title: 'Paperwork and DPA',
    body: "Engagement letter, signed DPA, NDA if required. All documentation provided and returned within one business day. We don't start work without it.",
  },
  {
    numeral: '03',
    title: 'Trial job',
    body: "We take one live client job. You review the output against your own quality standards before it goes anywhere. If it's not right, we fix it. No charge for corrections on the trial.",
  },
  {
    numeral: '04',
    title: 'Scale the allocation',
    body: "Once you're satisfied, agree a scope, per-job, monthly retainer, or a dedicated resource block. Add services as your needs grow. One conversation away.",
  },
]

export default function HowItWorks() {
  return (
    <section
      className="section border-t border-smoke"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="process-heading"
      id="how-we-work"
    >
      <div className="container">
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between pb-10 border-b border-smoke mb-0">
            <div>
              <p className="eyebrow mb-4">How we onboard</p>
              <h2
                id="process-heading"
                className="font-display text-4xl md:text-5xl text-pure"
                style={{ letterSpacing: '-0.03em' }}
              >
                First call to{' '}
                <span className="italic">first delivery</span>
                {' '}in a week.
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Vertical timeline */}
        <div className="relative mt-0">
          {/* Left rail line */}
          <div
            className="absolute left-[1.5rem] top-0 bottom-0 w-px bg-smoke hidden md:block"
            aria-hidden="true"
          />

          <Stagger stagger={0.12}>
            {steps.map((step) => (
              <motion.div
                key={step.numeral}
                variants={item}
                className="group relative md:pl-16 py-10 border-b border-smoke last:border-b-0 hover:bg-obsidian transition-colors duration-200 cursor-default"
              >
                {/* Timeline node */}
                <div
                  className="hidden md:flex absolute left-0 top-10 w-12 h-12 items-center justify-center bg-coal border border-smoke group-hover:border-lime group-hover:bg-obsidian transition-all duration-200"
                  aria-hidden="true"
                >
                  <span className="font-mono text-xs text-lime uppercase tracking-label">{step.numeral}</span>
                </div>

                {/* Mobile numeral */}
                <span className="md:hidden font-mono text-xs text-lime uppercase tracking-label block mb-3">
                  {step.numeral}
                </span>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
                  <div className="md:col-span-1">
                    <h3 className="font-display text-2xl text-pure leading-snug group-hover:text-lime transition-colors duration-200">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-body text-base text-bone leading-loose">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
