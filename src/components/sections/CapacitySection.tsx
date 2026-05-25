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
    body: "Year-end accounts, CT returns, payroll year-end — all arriving in the same quarter. Your team is stretched. Quality reviews get rushed. Partners spend time preparing work they should be reviewing.",
  },
  {
    number: '03',
    title: 'Hiring doesn\'t scale cleanly',
    body: "A new hire takes three months to recruit and another three to become productive. By the time they\'re useful, peak season is over. And next year you do it again. The capacity problem is structural, not temporary.",
  },
]

export default function CapacitySection() {
  return (
    <section
      className="section bg-obsidian border-t border-smoke"
      aria-labelledby="capacity-heading"
    >
      <div className="container">
        <Reveal className="max-w-2xl mb-12" delay={0.05}>
          <p className="eyebrow mb-4">The problem we solve</p>
          <h2
            id="capacity-heading"
            className="font-display text-3xl md:text-4xl text-pure mb-5"
          >
            Every UK practice hits the same{' '}
            <span className="italic">capacity wall.</span>
          </h2>
          <p className="font-body text-bone text-sm leading-relaxed">
            The answer isn't another job board post. It's an extension of your team that's already
            trained, already compliant, and already working UK hours.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-px bg-smoke" stagger={0.1}>
          {painPoints.map(point => (
            <motion.div
              key={point.number}
              variants={item}
              className="bg-obsidian p-8 flex flex-col gap-5 group hover:bg-coal transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-lime tracking-label">{point.number}</span>
                <div className="h-px flex-1 bg-smoke relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-px w-0 bg-lime group-hover:w-full transition-all duration-500" aria-hidden="true" />
                </div>
              </div>
              <h3 className="font-display text-lg text-pure">{point.title}</h3>
              <p className="font-body text-sm text-bone leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.3} type="fade">
          <div className="mt-10 p-6 border border-lime/30 rounded-sm bg-coal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="font-body text-sm text-pure font-medium mb-1">
                There is a better model.
              </p>
              <p className="font-body text-xs text-bone leading-relaxed max-w-lg">
                An ACCA-led team on your books — not freelancers, not a directory, not software.
                A real accounting team that plugs in, does the work, and delivers it back to you
                ready to review.
              </p>
            </div>
            <span className="font-mono text-xs text-lime uppercase tracking-label flex-shrink-0">
              White-label. Invisible. Ready now.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
