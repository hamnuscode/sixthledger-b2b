import { Reveal } from '../ui/Reveal'

export default function FoundersSection() {
  return (
    <section className="section border-y border-smoke" style={{ background: 'var(--coal)' }} aria-labelledby="founders-heading">
      <div className="container">
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between pb-10 border-b border-smoke mb-12">
            <div>
              <p className="eyebrow mb-4">Leadership</p>
              <h2 id="founders-heading" className="font-display text-4xl md:text-5xl text-pure" style={{ letterSpacing: '-0.025em' }}>
                The team behind the work.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="max-w-sm mx-auto">
          <Reveal delay={0.1}>
            <div className="group cursor-default flex flex-col items-center text-center">
              {/* Photo placeholder */}
              <div
                className="w-full aspect-square bg-obsidian border border-smoke group-hover:border-lime transition-colors duration-200 mb-6 flex items-center justify-center mx-auto"
                style={{ maxWidth: '260px' }}
                aria-label="Photo of Shayan Ahmed Shujaat"
              >
                <span className="font-display text-4xl text-ash/20 italic select-none">
                  SA
                </span>
              </div>
              <h3 className="font-display text-xl text-pure mb-1">Shayan Ahmed Shujaat</h3>
              <p className="font-mono text-xs text-lime uppercase tracking-label mb-4">Chief Executive Officer</p>
              <p className="font-body text-sm text-bone leading-loose">
                ACCA qualified accountant. Leads all client engagements and quality review. Focused on building a reliable outsource layer for UK accounting practices.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
