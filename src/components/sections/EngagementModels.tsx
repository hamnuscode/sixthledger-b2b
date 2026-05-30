import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { Reveal, Stagger, item } from '../ui/Reveal'

const models = [
  {
    eyebrow: '01, Flexible',
    name: 'Per-Job',
    tagline: 'Pay for what you need, when you need it.',
    description: 'Suitable for practices that need occasional overflow capacity, a batch of self-assessments in January, a year-end crunch, or a one-off VAT return.',
    features: [
      'Priced per completed job or task',
      'No monthly commitment',
      'Turnaround agreed per instruction',
      'Invoiced on delivery',
      'Ideal for seasonal and variable demand',
    ],
    cta: 'Book a discovery call',
    recommended: false,
  },
  {
    eyebrow: '02, Most common',
    name: 'Monthly Retainer',
    tagline: 'Predictable cost. Predictable capacity.',
    description: 'A defined scope of work at a fixed monthly fee. Ideal for practices with a stable client base looking to extend capacity without adding headcount.',
    features: [
      'Fixed monthly fee, agreed in advance',
      'Defined scope per engagement letter',
      'Priority turnaround included',
      'Monthly reporting on work delivered',
      "Scales up with 30 days' notice",
    ],
    cta: 'Book a discovery call',
    recommended: true,
  },
  {
    eyebrow: '03, High volume',
    name: 'Full Allocation',
    tagline: 'A dedicated resource block, on demand.',
    description: 'For practices with high or unpredictable volume, a named allocation of capacity across multiple service lines, managed as an extension of your operations.',
    features: [
      'Dedicated accountant or team allocation',
      'Multiple service lines in scope',
      'Direct communication channel with your team',
      'Custom SLAs and reporting',
      'Pricing by arrangement',
    ],
    cta: 'Talk to us',
    recommended: false,
  },
]

export default function EngagementModels() {
  return (
    <section className="section bg-obsidian border-t border-smoke" aria-labelledby="engagement-heading" id="engagement">
      <div className="container">
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between pb-10 border-b border-smoke mb-0">
            <div>
              <p className="eyebrow mb-4">How we engage</p>
              <h2
                id="engagement-heading"
                className="font-display text-4xl md:text-5xl text-pure mb-3"
                style={{ letterSpacing: '-0.03em' }}
              >
                Three ways to{' '}
                <span className="italic">work with us.</span>
              </h2>
              <p className="font-body text-bone text-base leading-loose max-w-xl">
                We don't publish rate cards, every practice is different.
                Specific pricing confirmed at the discovery call.
              </p>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 divide-x divide-smoke" stagger={0.08}>
          {models.map(model => (
            <motion.div
              key={model.name}
              variants={item}
              className={`group flex flex-col border-t-4 transition-colors duration-200 hover:bg-coal ${
                model.recommended ? 'border-t-lime' : 'border-t-smoke hover:border-t-lime/40'
              }`}
            >
              <div className="p-8 flex-1 flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs text-ash uppercase tracking-label mb-3">{model.eyebrow}</p>
                  <h3 className="font-display text-2xl text-pure mb-2">{model.name}</h3>
                  <p className="font-body text-sm text-lime leading-snug">{model.tagline}</p>
                </div>

                <p className="font-body text-sm text-bone leading-relaxed">{model.description}</p>

                <ul className="space-y-3 flex-1">
                  {model.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="font-mono text-lime text-xs mt-0.5 flex-shrink-0"></span>
                      <span className="font-body text-sm text-bone leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-smoke">
                  <Button
                    to="/contact"
                    variant={model.recommended ? 'primary' : 'ghost'}
                    size="md"
                    className="w-full justify-center"
                  >
                    {model.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.2} type="fade">
          <p className="font-mono text-xs text-ash mt-8 uppercase tracking-label">
           , Specific pricing confirmed at discovery call based on your client mix and volume
          </p>
        </Reveal>
      </div>
    </section>
  )
}
