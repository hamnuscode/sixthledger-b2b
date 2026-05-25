import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import Button from '../components/ui/Button'
import { Reveal, Stagger, item } from '../components/ui/Reveal'
import ClosingCTA from '../components/sections/ClosingCTA'

export default function Services() {
  return (
    <>
      <section className="pt-40 pb-24 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Services</li>
            </ol>
          </nav>
          <div className="flex items-end justify-between border-b border-smoke pb-8">
            <div>
              <p className="eyebrow mb-4">What we handle</p>
              <h1
                className="font-display text-4xl md:text-5xl text-pure"
                style={{ letterSpacing: '-0.03em' }}
              >
                Nine service lines.{' '}
                <span className="italic">One team. One DPA.</span>
              </h1>
            </div>
            <p className="font-mono text-xs text-ash uppercase tracking-label hidden md:block pb-1">
              09 services
            </p>
          </div>
          <p className="font-body text-bone text-lg leading-loose max-w-2xl mt-8">
            Every service delivered white-label, reviewed by ACCA-qualified professionals,
            and returned to you ready for client delivery.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section bg-obsidian" aria-label="All services">
        <div className="container">
          <Stagger stagger={0.04}>
            {services.map(service => (
              <motion.div key={service.id} variants={item}>
                <Link
                  to={`/services/${service.id}`}
                  className="group grid md:grid-cols-12 gap-6 py-6 border-b border-smoke border-l-2 border-l-transparent hover:border-l-lime hover:bg-coal pl-4 hover:pl-8 transition-all duration-200 focus-visible:outline-none focus-visible:border-l-lime"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-ash group-hover:text-lime transition-colors uppercase tracking-label">
                      {service.number}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h2 className="font-display text-2xl text-pure group-hover:text-lime transition-colors leading-snug">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-5">
                    <p className="font-body text-base text-bone leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex flex-wrap gap-1.5 items-start">
                    {service.platforms.slice(0, 2).map(p => (
                      <span key={p} className="font-mono text-xs text-ash border-b border-smoke pb-0.5 group-hover:border-ash transition-colors">
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="md:col-span-1 flex justify-end items-start">
                    <span className="font-mono text-sm text-lime opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 border-t border-smoke" style={{ background: 'var(--coal)' }}>
        <div className="container">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow mb-4">Start here</p>
                <h2
                  className="font-display text-3xl md:text-4xl text-pure mb-4"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  Not sure which services you need first?
                </h2>
                <p className="font-body text-bone text-base leading-loose">
                  Book a 20-minute call. We'll ask about your practice and recommend
                  the right starting point.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Button to="/contact" size="lg">Book a discovery call</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}
