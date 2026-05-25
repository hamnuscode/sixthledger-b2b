import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { Reveal, Stagger, item } from '../ui/Reveal'

export default function Testimonials() {
  return (
    <section className="section bg-obsidian border-t border-smoke" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header */}
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between pb-10 border-b border-smoke">
            <div>
              <p className="eyebrow mb-4">What practices say</p>
              <h2
                id="testimonials-heading"
                className="font-display text-4xl md:text-5xl text-pure"
                style={{ letterSpacing: '-0.03em' }}
              >
                Trusted by UK{' '}
                <span className="italic">accounting practices</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Stacked large blockquotes */}
        <Stagger stagger={0.1}>
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={item}
              className="grid md:grid-cols-12 gap-6 lg:gap-10 py-12 border-b border-smoke group cursor-default hover:bg-coal transition-colors duration-200"
            >
              {/* Quote mark */}
              <div className="md:col-span-1 hidden md:flex items-start justify-end pt-1">
                <span
                  className="font-display text-5xl text-lime/20 leading-none group-hover:text-lime/40 transition-colors duration-300 select-none"
                  aria-hidden="true"
                >
                  "
                </span>
              </div>

              {/* Quote text */}
              <div className="md:col-span-8">
                <p className="font-display text-xl md:text-2xl text-pure italic leading-snug mb-6">
                  {t.quote}
                </p>
                <footer>
                  <p className="font-body text-sm text-bone font-medium">{t.name}</p>
                  <p className="font-body text-xs text-ash mt-0.5">{t.business}</p>
                </footer>
              </div>

              {/* Service tag — right aligned */}
              <div className="md:col-span-3 md:flex md:items-start md:justify-end">
                <span className="font-mono text-xs text-lime uppercase tracking-label">
                  {t.service}
                </span>
              </div>
            </motion.blockquote>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
