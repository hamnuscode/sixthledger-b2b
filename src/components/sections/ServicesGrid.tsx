import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/services'
import Button from '../ui/Button'
import { Reveal, Stagger, item } from '../ui/Reveal'

export default function ServicesGrid() {
  return (
    <section className="section bg-obsidian border-t border-smoke" aria-labelledby="services-heading">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left: intro */}
          <div className="lg:col-span-1">
            <Reveal delay={0.05}>
              <p className="eyebrow mb-5">What we handle</p>
              <h2
                id="services-heading"
                className="font-display text-4xl md:text-5xl text-pure mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Nine service lines.{' '}
                <span className="italic">One team.</span>
              </h2>
              <p className="font-body text-bone text-base leading-loose mb-8">
                From monthly bookkeeping to self-assessment season, payroll to year-end, every
                routine service your practice delivers, returned to you white-label and ready to review.
              </p>
              <Button to="/services" variant="outline" size="sm">
                View all services →
              </Button>
            </Reveal>
          </div>

          {/* Right: numbered list */}
          <div className="lg:col-span-2">
            <Stagger stagger={0.04}>
              {services.map(service => (
                <motion.div key={service.id} variants={item}>
                  <Link
                    to={`/services/${service.id}`}
                    className="group flex items-baseline gap-6 py-5 border-b border-smoke border-l-2 border-l-transparent hover:border-l-lime hover:bg-coal pl-4 hover:pl-6 transition-all duration-200 focus-visible:outline-none focus-visible:border-l-lime"
                  >
                    <span className="font-mono text-xs text-ash flex-shrink-0 w-8 group-hover:text-lime transition-colors">
                      {service.number}
                    </span>
                    <span className="font-display text-xl text-pure group-hover:text-lime transition-colors flex-1 leading-snug">
                      {service.title}
                    </span>
                    <span className="font-body text-sm text-ash leading-snug hidden xl:block max-w-xs flex-shrink-0">
                      {service.shortDescription}
                    </span>
                    <span
                      className="font-mono text-xs text-lime flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
