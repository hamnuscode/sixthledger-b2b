import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const painPoints = [
  {
    number: '01',
    title: 'January arrives.',
    body: 'You are already out of hours. Self assessment volume peaks, your team is at capacity, and the work keeps coming.',
  },
  {
    number: '02',
    title: 'Year end stacks on top.',
    body: 'Partners are reviewing work they should not be doing. Senior time goes on production, not advisory.',
  },
  {
    number: '03',
    title: 'Hiring takes months.',
    body: 'The workload peaks next week. New staff arrive after the pressure is gone. You carry the cost either way.',
  },
]

export default function CapacitySection() {
  return (
    <section
      className="section bg-obsidian border-t border-smoke"
      aria-labelledby="capacity-heading"
    >
      <div className="container">
        {/* Section header with rule */}
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between pb-8 mb-0 border-b border-smoke">
            <div>
              <p className="eyebrow mb-4">The problem we solve</p>
              <h2
                id="capacity-heading"
                className="font-display text-4xl md:text-5xl text-pure max-w-2xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Every UK practice hits the same capacity problem
              </h2>
            </div>
            <p className="font-mono text-xs text-ash uppercase tracking-label hidden lg:block self-end pb-1">
              3 pain points
            </p>
          </div>
        </Reveal>

        {/* Pain point rows */}
        <Stagger stagger={0.08}>
          {painPoints.map(point => (
            <motion.div
              key={point.number}
              variants={item}
              className="group grid md:grid-cols-12 gap-6 lg:gap-10 py-10 border-b border-smoke border-l-2 border-l-transparent hover:border-l-lime hover:bg-coal pl-4 hover:pl-8 transition-all duration-300 cursor-default"
            >
              <div className="md:col-span-1 flex-shrink-0">
                <span className="font-mono text-xs text-lime uppercase tracking-label">{point.number}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-xl text-pure leading-snug">{point.title}</h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-body text-base text-bone leading-loose">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>

        {/* Resolution */}
        <Reveal delay={0.25} type="fade">
          <div className="mt-0 grid md:grid-cols-2 gap-10 items-center py-10 border-b border-smoke">
            <p className="font-display text-xl text-pure italic leading-snug">
              "Your overflow. Fully prepared. Back in your inbox. Ready to file."
            </p>
            <p className="font-mono text-xs text-lime uppercase tracking-label md:text-right">
              White label. Invisible. Ready now.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
