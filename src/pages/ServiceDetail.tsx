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
      {/* Hero */}
      <section className="pt-40 pb-24 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/services" className="hover:text-lime transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">{service.title}</li>
            </ol>
          </nav>
          <div className="flex items-end justify-between border-b border-smoke pb-8 mb-8">
            <div>
              <p className="eyebrow mb-4">{service.number}, Service</p>
              <h1
                className="font-display text-4xl md:text-5xl text-pure"
                style={{ letterSpacing: '-0.03em' }}
              >
                {service.title}
              </h1>
            </div>
            <Button to="/contact" size="sm" className="hidden md:flex">
              Get a quote →
            </Button>
          </div>
          <p className="font-body text-bone text-lg leading-loose max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Content, full width document layout */}
      <section className="section bg-obsidian">
        <div className="container">
          <div className="max-w-4xl">

            {/* What we handle */}
            <Reveal>
              <div className="pb-12 border-b border-smoke mb-12">
                <p className="eyebrow mb-6">What we handle</p>
                <div className="space-y-0">
                  {service.tasks.map((task, i) => (
                    <div
                      key={task}
                      className="flex items-baseline gap-6 py-4 border-b border-smoke/40 last:border-b-0 border-l-2 border-l-transparent hover:border-l-lime hover:bg-coal pl-4 hover:pl-6 transition-all duration-150 cursor-default"
                    >
                      <span className="font-mono text-xs text-ash w-8 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-base text-bone leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Platforms */}
            <Reveal delay={0.05}>
              <div className="pb-12 border-b border-smoke mb-12">
                <p className="eyebrow mb-6">Software we work in</p>
                <div className="flex flex-wrap gap-3">
                  {service.platforms.map(p => (
                    <span
                      key={p}
                      className="font-mono text-sm text-bone border-b border-smoke pb-0.5 hover:border-lime hover:text-lime transition-colors cursor-default"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Turnaround */}
            <Reveal delay={0.08}>
              <div className="pb-12 border-b border-smoke mb-12">
                <p className="eyebrow mb-6">Turnaround</p>
                <div className="border-l-2 border-l-lime pl-6">
                  <p className="font-body text-base text-bone leading-loose">{service.turnaround}</p>
                </div>
              </div>
            </Reveal>

            {/* Pricing */}
            <Reveal delay={0.1}>
              <div className="pb-12 border-b border-smoke mb-12">
                <p className="eyebrow mb-6">Pricing model</p>
                <p className="font-body text-base text-bone leading-loose mb-6">
                  We offer three engagement structures for this service: per-job (you pay for
                  each task individually), monthly retainer (fixed fee for an agreed monthly
                  scope), or full allocation (a dedicated resource block for high-volume needs).
                  Specific pricing is confirmed at the discovery call based on your client mix
                  and expected volume.
                </p>
                <Button to="/contact" variant="outline" size="sm">
                  Get a quote →
                </Button>
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal delay={0.12}>
              <div>
                <p className="eyebrow mb-6">Frequently asked</p>
                <div role="list">
                  {service.faqs.map((faq, i) => (
                    <div key={i} role="listitem">
                      <FAQItem question={faq.q} answer={faq.a} defaultOpen={i === 0} index={i} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Floating CTA bar */}
          <Reveal delay={0.15}>
            <div className="mt-16 pt-10 border-t border-smoke grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-2xl text-pure mb-2">Start with one job</h3>
                <p className="font-body text-sm text-bone leading-relaxed">
                  Trial this service on a single client. Review the output. Decide from there.
                  No commitment. DPA signed first.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Button to="/contact" size="lg">Book a discovery call</Button>
              </div>
            </div>
          </Reveal>

          {/* Prev / Next */}
          <div className="mt-16 pt-8 border-t border-smoke flex items-center justify-between gap-4">
            {prev ? (
              <Link
                to={`/services/${prev.id}`}
                className="group flex items-center gap-3 text-ash hover:text-lime transition-colors"
              >
                <span className="font-mono text-xs" aria-hidden="true">←</span>
                <div>
                  <p className="font-mono text-xs text-ash uppercase tracking-label mb-0.5">{prev.number}</p>
                  <p className="font-body text-sm text-bone group-hover:text-lime transition-colors">{prev.title}</p>
                </div>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                to={`/services/${next.id}`}
                className="group flex items-center gap-3 text-ash hover:text-lime transition-colors text-right"
              >
                <div>
                  <p className="font-mono text-xs text-ash uppercase tracking-label mb-0.5">{next.number}</p>
                  <p className="font-body text-sm text-bone group-hover:text-lime transition-colors">{next.title}</p>
                </div>
                <span className="font-mono text-xs" aria-hidden="true">→</span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </>
  )
}
