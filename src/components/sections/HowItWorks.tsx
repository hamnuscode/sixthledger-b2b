import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const docIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="1" width="9" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5 1v3h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M4 7h6M4 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)
const gearIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)
const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5.5 8l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const steps = [
  {
    numeral: '01',
    title: 'Send us one job',
    body: 'Pick any live client job from your practice. Self assessment, bookkeeping, VAT return, or year end accounts.',
  },
  {
    numeral: '02',
    title: 'We complete it in your system',
    body: 'We work inside your accounting software using your existing processes. Output is ready for your review.',
  },
  {
    numeral: '03',
    title: 'You review and deliver',
    body: 'Check the work against your quality standards. Deliver it to your client under your brand. We are invisible.',
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
                Three steps. First delivery in five working days.
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Flow diagram */}
        <div className="flex items-center gap-0 mt-8 mb-10 max-w-lg">
          {[
            { icon: docIcon, label: 'Document sharing' },
            { icon: gearIcon, label: 'Work completed' },
            { icon: checkIcon, label: 'Filing & delivery' },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-10 h-10 border border-smoke flex items-center justify-center text-lime bg-coal">
                  {step.icon}
                </div>
                <span className="font-mono text-[9px] text-ash uppercase tracking-widest text-center whitespace-nowrap">{step.label}</span>
              </div>
              {i < 2 && <div className="flex-1 h-px bg-smoke mx-2 mb-5" />}
            </div>
          ))}
        </div>

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
