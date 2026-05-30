import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const painPoints = [
  {
    number: '01',
    title: 'January kills capacity',
    body: 'Every practice faces the same wall: self-assessment season arrives and there are more returns than hours. You take on locums, your permanent team burns out, or you turn work away. None of those are good options.',
  },
  {
    number: '02',
    title: 'Year-end compounds it',
    body: "Year-end accounts, CT returns, payroll year-end, all arriving in the same quarter. Your team is stretched. Quality reviews get rushed. Partners spend time preparing work they should be reviewing.",
  },
  {
    number: '03',
    title: "Hiring doesn't scale cleanly",
    body: "A new hire takes three months to recruit and another three to become productive. By the time they're useful, peak season is over. And next year you do it again. The capacity problem is structural, not temporary.",
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
                Every UK practice hits the same{' '}
                <span className="italic">capacity wall.</span>
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
              "There is a better model, a real accounting team that plugs in, does the work,
              and delivers it back to you ready to review."
            </p>
            <p className="font-mono text-xs text-lime uppercase tracking-label md:text-right">
              White-label. Invisible. Ready now.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
