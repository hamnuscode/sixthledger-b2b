import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import Button from '../components/ui/Button'
import { Reveal, Stagger, item } from '../components/ui/Reveal'
import ClosingCTA from '../components/sections/ClosingCTA'

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Services</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">What we handle</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4 max-w-2xl" style={{ letterSpacing: '-0.02em' }}>
            Nine service lines.{' '}
            <span className="italic">One team. One DPA.</span>
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            Every service delivered white-label, reviewed by ACCA-qualified professionals,
            and returned to you ready for client delivery. You stay client-facing. We do the work.
          </p>
        </div>
      </section>

      <section className="section bg-obsidian" aria-label="All services">
        <div className="container">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.07}>
            {services.map(service => (
              <motion.div key={service.id} variants={item}>
                <Link
                  to={`/services/${service.id}`}
                  className="group block bg-coal border border-smoke rounded-sm p-6 hover:border-lime hover:-translate-y-1 hover:shadow-lime transition-all duration-200 focus-visible:outline-none focus-visible:border-lime h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-lime tracking-label">{service.number}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-smoke group-hover:text-lime transition-colors" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="font-display text-xl text-pure mb-2 group-hover:text-lime transition-colors">{service.title}</h2>
                  <p className="font-body text-sm text-bone leading-relaxed mb-4">{service.shortDescription}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.platforms.slice(0, 3).map(p => (
                      <span key={p} className="font-mono text-xs text-ash border border-smoke px-2 py-0.5 rounded-sm">{p}</span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-coal border-t border-smoke" aria-label="Services CTA">
        <div className="container">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Start here</p>
              <h2 className="font-display text-3xl text-pure mb-4">
                Not sure which services you need first?
              </h2>
              <p className="font-body text-bone text-sm leading-relaxed mb-6">
                Book a 20-minute call. We'll ask about your practice, your current capacity
                constraints, and recommend the right starting point. No commitment required.
              </p>
              <Button to="/contact" size="lg">Book a discovery call</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}
