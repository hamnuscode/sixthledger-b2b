import { Reveal } from '../ui/Reveal'
import Button from '../ui/Button'

export default function ClosingCTA() {
  return (
    <section
      className="section bg-obsidian border-t border-smoke"
      aria-labelledby="closing-cta-heading"
    >
      <div className="container">
        {/* Header line */}
        <Reveal delay={0.05} type="fade">
          <div className="flex items-center justify-between pb-8 border-b border-smoke mb-16">
            <p className="eyebrow">Get started</p>
            <div className="flex items-center gap-6">
              <a href="mailto:info@sixthledger.com" className="font-mono text-xs text-ash hover:text-lime transition-colors uppercase tracking-label">
                info@sixthledger.com
              </a>
              <span className="text-smoke/60 hidden sm:block" aria-hidden="true">/</span>
              <a href="tel:+923000692222" className="font-mono text-xs text-ash hover:text-lime transition-colors uppercase tracking-label hidden sm:block">
                +92 300 0692222
              </a>
            </div>
          </div>
        </Reveal>

        {/* Giant headline */}
        <Reveal delay={0.1}>
          <h2
            id="closing-cta-heading"
            className="font-display text-pure mb-0"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-0.04em',
              lineHeight: '0.92',
            }}
          >
            One trial job.
            <br />
            <span className="italic" style={{ color: 'var(--ash)' }}>
              That's the whole ask.
            </span>
          </h2>
        </Reveal>

        {/* Bottom bar */}
        <Reveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-smoke mt-12">
            <p className="font-body text-bone text-lg leading-loose">
              Give us one job from one client. Review the output against your own standards.
              Decide from there. No contract, no commitment until you are satisfied.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Button to="/contact" size="lg">Book a 20-minute call</Button>
              <Button to="/how-we-work" variant="ghost" size="lg">See how we work →</Button>
            </div>
          </div>
        </Reveal>

        {/* Footer strip */}
        <Reveal delay={0.3} type="fade">
          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-12 pt-8 border-t border-smoke/40">
            <span className="font-mono text-xs text-ash uppercase tracking-label">Mon–Fri · UK working hours</span>
            <span className="font-mono text-xs text-ash uppercase tracking-label">Response within 1 business day</span>
            <span className="font-mono text-xs text-ash uppercase tracking-label">DPA signed before work starts</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
