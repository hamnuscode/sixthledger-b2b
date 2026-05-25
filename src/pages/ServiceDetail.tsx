import { useParams, Navigate, Link } from 'react-router-dom'
import { getService, services } from '../data/services'
import FAQItem from '../components/ui/FAQItem'
import Button from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = getService(slug ?? '')

  if (!service) return <Navigate to="/services" replace />

  const currentIndex = services.findIndex(s => s.id === service.id)
  const prev = currentIndex > 0 ? services[currentIndex - 1] : null
  const next = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <>
      <section className="pt-40 pb-28 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/services" className="hover:text-lime transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">{service.title}</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">{service.number} — Service</p>
          <h1 className="font-display text-5xl md:text-6xl text-pure mb-6" style={{ letterSpacing: '-0.03em' }}>
            {service.title}
          </h1>
          <p className="font-body text-bone text-lg max-w-2xl leading-loose">{service.description}</p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            <div className="lg:col-span-2 space-y-12">
              {/* What we handle */}
              <Reveal>
                <h2 className="font-display text-3xl text-pure mb-8">What we handle</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.tasks.map(task => (
                    <li key={task} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-lime" aria-hidden="true">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-sm text-bone leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Platforms */}
              <Reveal delay={0.05}>
                <h2 className="font-display text-3xl text-pure mb-6">Software we work in</h2>
                <div className="flex flex-wrap gap-3">
                  {service.platforms.map(p => (
                    <span key={p} className="font-mono text-xs text-bone border border-smoke px-4 py-2 rounded-sm hover:border-lime/40 transition-colors">
                      {p}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Turnaround */}
              <Reveal delay={0.1}>
                <h2 className="font-display text-3xl text-pure mb-4">Turnaround</h2>
                <div className="bg-coal border border-lime/20 rounded-sm p-5">
                  <p className="font-body text-sm text-bone leading-relaxed">{service.turnaround}</p>
                </div>
              </Reveal>

              {/* Pricing model */}
              <Reveal delay={0.15}>
                <h2 className="font-display text-3xl text-pure mb-4">Pricing model</h2>
                <p className="font-body text-sm text-bone leading-relaxed mb-4">
                  We offer three engagement structures for this service: per-job (you pay for
                  each task individually), monthly retainer (fixed fee for an agreed monthly
                  scope), or full allocation (a dedicated resource block for high-volume needs).
                  Specific pricing is confirmed at the discovery call based on your client mix
                  and expected volume.
                </p>
                <Button to="/contact" variant="outline" size="sm">
                  Get a quote →
                </Button>
              </Reveal>

              {/* FAQ */}
              <Reveal delay={0.2}>
                <h2 className="font-display text-3xl text-pure mb-6">Frequently asked</h2>
                <div role="list">
                  {service.faqs.map((faq, i) => (
                    <div key={i} role="listitem">
                      <FAQItem question={faq.q} answer={faq.a} defaultOpen={i === 0} />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-coal border border-lime rounded-sm p-6 shadow-lime">
                  <h3 className="font-display text-lg text-pure mb-2">Start with one job</h3>
                  <p className="font-body text-xs text-bone leading-relaxed mb-5">
                    Trial this service on a single client. Review the output. Decide from there.
                  </p>
                  <Button to="/contact" size="sm" className="w-full mb-3">
                    Book a discovery call
                  </Button>
                  <p className="font-mono text-xs text-ash text-center uppercase tracking-label">
                    No commitment · DPA signed first
                  </p>
                </div>

                <div className="bg-coal border border-smoke rounded-sm p-5">
                  <p className="font-mono text-xs text-ash uppercase tracking-label mb-3">Other services</p>
                  <ul className="space-y-1">
                    {services.filter(s => s.id !== service.id).map(s => (
                      <li key={s.id}>
                        <Link
                          to={`/services/${s.id}`}
                          className="flex items-center gap-2 py-1.5 text-bone hover:text-lime transition-colors group"
                        >
                          <span className="font-mono text-xs text-ash group-hover:text-lime transition-colors w-5">{s.number}</span>
                          <span className="font-body text-sm">{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="mt-16 pt-8 border-t border-smoke flex items-center justify-between gap-4">
            {prev ? (
              <Link to={`/services/${prev.id}`} className="group flex items-center gap-2 text-ash hover:text-lime transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-body text-sm">{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/services/${next.id}`} className="group flex items-center gap-2 text-ash hover:text-lime transition-colors">
                <span className="font-body text-sm">{next.title}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </>
  )
}
