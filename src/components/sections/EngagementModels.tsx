import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { Reveal, Stagger, itemScale } from '../ui/Reveal'

const models = [
  {
    eyebrow: '01 — Flexible',
    name: 'Per-Job',
    tagline: 'Pay for what you need, when you need it.',
    description: 'Suitable for practices that need occasional overflow capacity — a batch of self-assessments in January, a year-end crunch, or a one-off VAT return.',
    features: [
      'Priced per completed job or task',
      'No monthly commitment',
      'Turnaround agreed per instruction',
      'Invoiced on delivery',
      'Ideal for seasonal and variable demand',
    ],
    cta: 'Book a discovery call',
  },
  {
    eyebrow: '02 — Most common',
    name: 'Monthly Retainer',
    tagline: 'Predictable cost. Predictable capacity.',
    description: 'A defined scope of work at a fixed monthly fee. Ideal for practices with a stable client base looking to extend capacity without adding headcount.',
    features: [
      'Fixed monthly fee, agreed in advance',
      'Defined scope per engagement letter',
      'Priority turnaround included',
      'Monthly reporting on work delivered',
      'Scales up with 30 days\' notice',
    ],
    cta: 'Book a discovery call',
    recommended: true,
  },
  {
    eyebrow: '03 — High volume',
    name: 'Full Allocation',
    tagline: 'A dedicated resource block, on demand.',
    description: 'For practices with high or unpredictable volume — a named allocation of capacity across multiple service lines, managed as an extension of your operations.',
    features: [
      'Dedicated accountant or team allocation',
      'Multiple service lines in scope',
      'Direct communication channel with your team',
      'Custom SLAs and reporting',
      'Pricing by arrangement',
    ],
    cta: 'Talk to us',
  },
]

export default function EngagementModels() {
  return (
    <section className="section bg-obsidian" aria-labelledby="engagement-heading" id="engagement">
      <div className="container">
        <Reveal className="max-w-2xl mb-12" delay={0.05}>
          <p className="eyebrow mb-4">How we engage</p>
          <h2
            id="engagement-heading"
            className="font-display text-3xl md:text-4xl text-pure mb-4"
          >
            Three ways to{' '}
            <span className="italic">work with us.</span>
          </h2>
          <p className="font-body text-bone text-sm leading-relaxed">
            We don't publish rate cards — every practice is different. What we do publish is how
            the engagement models work, so you know what to expect before the call.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {models.map(model => (
            <motion.div
              key={model.name}
              variants={itemScale}
              className={`relative flex flex-col rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
                model.recommended
                  ? 'border-lime shadow-lime hover:shadow-[0_0_60px_rgba(200,232,74,0.22)]'
                  : 'border-smoke hover:border-smoke/60 hover:shadow-lg'
              }`}
              style={{ background: 'var(--coal)' }}
            >
              {model.recommended && (
                <div className="absolute -top-px left-0 right-0 h-px bg-lime" aria-hidden="true" />
              )}
              {model.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-xs bg-lime text-obsidian px-3 py-0.5 uppercase tracking-label rounded-full">
                    Most common
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col gap-5">
                <div>
                  <p className="eyebrow text-ash mb-2">{model.eyebrow}</p>
                  <h3 className="font-display text-xl text-pure">{model.name}</h3>
                  <p className="font-body text-xs text-lime font-medium mt-1">{model.tagline}</p>
                  <p className="font-body text-xs text-bone leading-relaxed mt-2">{model.description}</p>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {model.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-lime" aria-hidden="true">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-xs text-bone leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-smoke">
                  <Button
                    to="/contact"
                    variant={model.recommended ? 'primary' : 'ghost'}
                    size="md"
                    className="w-full"
                  >
                    {model.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.2} type="fade">
          <p className="font-mono text-xs text-ash text-center mt-8 uppercase tracking-label">
            Specific pricing confirmed at discovery call based on your client mix and volume
          </p>
        </Reveal>
      </div>
    </section>
  )
}
