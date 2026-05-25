import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const steps = [
  {
    numeral: 'i.',
    title: 'Discovery call',
    body: '20 minutes. We ask about your practice, your software, your volume, and your pain points. We tell you exactly what we can do and at what cost. No sales deck.',
  },
  {
    numeral: 'ii.',
    title: 'Paperwork and DPA',
    body: 'Engagement letter, signed DPA, NDA if required. All documentation provided and returned within one business day. We don\'t start work without it.',
  },
  {
    numeral: 'iii.',
    title: 'Trial job',
    body: 'We take one live client job. You review the output against your own quality standards before it goes anywhere. If it\'s not right, we fix it. No charge for corrections on the trial.',
  },
  {
    numeral: 'iv.',
    title: 'Scale the allocation',
    body: 'Once you\'re satisfied, agree a scope — per-job, monthly retainer, or a dedicated resource block. Add services as your needs grow. One conversation away.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="section"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="process-heading"
      id="how-we-work"
    >
      <div className="container">
        <Reveal className="max-w-3xl mb-20" delay={0.05}>
          <p className="eyebrow mb-5">How we onboard</p>
          <h2
            id="process-heading"
            className="font-display text-4xl md:text-5xl text-pure"
          >
            From first contact to{' '}
            <span className="italic">first delivery</span>
            <br />
            in less than a week.
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10" stagger={0.12}>
          {steps.map((step, i) => (
            <motion.div
              key={step.numeral}
              variants={item}
              className="relative flex flex-col gap-6 group"
            >
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full z-0 h-px"
                  style={{ background: 'var(--smoke)', width: 'calc(100% - 1rem)', transform: 'translateX(0.5rem)' }}
                  aria-hidden="true"
                />
              )}
              <div className="relative w-12 h-0.5 bg-smoke overflow-hidden">
                <div
                  className="absolute left-0 top-0 w-3 h-0.5 bg-lime transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display text-lg text-ash italic group-hover:text-lime transition-colors duration-200" aria-hidden="true">
                  {step.numeral}
                </span>
                <h3 className="font-body text-sm font-semibold text-pure uppercase tracking-wide">
                  {step.title}
                </h3>
              </div>
              <p className="font-body text-base text-bone leading-loose">{step.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
