import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const services = [
  'Bookkeeping',
  'Payroll & RTI',
  'VAT Returns',
  'Year-End Accounts',
  'Management Accounts',
  'Self-Assessment',
  'CIS Returns',
  'Company Secretarial',
  'Annual Accounts',
  'Multiple services',
  'Not sure — want advice',
]

const volumes = [
  '1–5 clients',
  '6–20 clients',
  '21–50 clients',
  '50+ clients',
  "Not sure yet",
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Contact</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Get in touch</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Book a{' '}
            <span className="italic">20-minute call</span>
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            We review your practice's needs, confirm what we can deliver, and give you a
            fee indication before you commit to anything. 20 minutes. No obligation.
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              {/* Cal.com placeholder */}
              <div>
                <h2 className="font-display text-2xl text-pure mb-2">Book a slot directly</h2>
                <p className="font-body text-sm text-ash mb-6">Select a time that works for you. The call is 20 minutes.</p>
                <div
                  className="rounded-sm border border-smoke bg-coal flex flex-col items-center justify-center py-16 gap-4"
                  role="region"
                  aria-label="Calendar booking widget"
                >
                  <p className="font-mono text-xs text-lime uppercase tracking-label">Calendar Booking</p>
                  <p className="font-body text-sm text-bone text-center max-w-sm">
                    Cal.com embed will appear here once the calendar is configured.
                    <br />
                    In the meantime, please use the contact form below.
                  </p>
                  <a
                    href="mailto:info@sixthledger.com?subject=Book a discovery call"
                    className="font-mono text-xs text-lime hover:underline uppercase tracking-label"
                  >
                    Email us to book →
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="border-t border-smoke pt-12">
                <h2 className="font-display text-2xl text-pure mb-2">Or send an enquiry</h2>
                <p className="font-body text-sm text-ash mb-8">We respond to all enquiries within one business day.</p>

                {submitted ? (
                  <div className="bg-coal border border-lime rounded-sm p-8 text-center shadow-lime">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto mb-4 text-lime" aria-hidden="true">
                      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 20l5.5 5.5L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="font-display text-xl text-pure mb-2">Enquiry received</h3>
                    <p className="font-body text-sm text-bone">We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <input type="text" name="_honeypot" tabIndex={-1} aria-hidden="true" className="absolute opacity-0 pointer-events-none" />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField id="name" label="Your name" type="text" required placeholder="James Hartley" autoComplete="name" />
                      <FormField id="firm" label="Firm name" type="text" required placeholder="Hartley Moore Accountants" />
                      <FormField id="email" label="Email address" type="email" required placeholder="james@hartleymoore.co.uk" autoComplete="email" />
                      <FormField id="phone" label="Phone (optional)" type="tel" placeholder="+44 7700 000000" autoComplete="tel" />

                      <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="font-body text-xs text-bone font-medium">
                          Services interested in
                          <span className="text-lime ml-0.5" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="service" name="service" required
                          className="bg-coal border border-smoke text-bone text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors appearance-none"
                          defaultValue=""
                        >
                          <option value="" disabled>Select a service…</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="volume" className="font-body text-xs text-bone font-medium">
                          Approximate client volume
                          <span className="text-lime ml-0.5" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="volume" name="volume" required
                          className="bg-coal border border-smoke text-bone text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors appearance-none"
                          defaultValue=""
                        >
                          <option value="" disabled>Select a range…</option>
                          {volumes.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                      <label htmlFor="message" className="font-body text-xs text-bone font-medium">
                        Tell us about your practice
                        <span className="text-lime ml-0.5" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={4}
                        placeholder="Brief description of your practice, the services you want to outsource, and what's driving the need…"
                        className="bg-coal border border-smoke text-bone text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors resize-none placeholder:text-ash"
                      />
                    </div>

                    <div className="mt-5 flex items-start gap-3">
                      <input type="checkbox" id="privacy" name="privacy" required className="mt-1 flex-shrink-0 w-4 h-4 accent-lime" />
                      <label htmlFor="privacy" className="font-body text-xs text-ash leading-relaxed">
                        I agree to the{' '}
                        <Link to="/privacy" className="text-lime hover:underline">Sixth Ledger Privacy Policy</Link>{' '}
                        and consent to being contacted about my enquiry.
                        <span className="text-lime ml-0.5" aria-hidden="true">*</span>
                      </label>
                    </div>

                    <div className="mt-6">
                      <Button type="submit" size="lg" disabled={loading}>
                        {loading ? 'Sending…' : 'Send enquiry'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-coal border border-smoke rounded-sm p-6">
                  <h3 className="font-display text-lg text-pure mb-5">What to expect on the call</h3>
                  <ol className="space-y-4">
                    {[
                      "We'll ask about your practice — size, software, volume, what's under pressure.",
                      "We'll tell you exactly what we can handle and how we'd approach your situation.",
                      "We'll give you a fee indication on the call or within 24 hours.",
                      "No commitment required. If we're not the right fit, we'll say so.",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-lime tracking-label flex-shrink-0 mt-0.5">0{i + 1}</span>
                        <span className="font-body text-xs text-bone leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-coal border border-smoke rounded-sm p-6">
                  <h3 className="font-display text-base text-pure mb-4">Direct contact</h3>
                  <div className="space-y-3">
                    <a href="mailto:info@sixthledger.com" className="flex items-center gap-2.5 text-bone hover:text-lime transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                        <rect x="1" y="2.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M1 4l6 4.5L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      <span className="font-body text-sm">info@sixthledger.com</span>
                    </a>
                    <a href="tel:+923000692222" className="flex items-center gap-2.5 text-bone hover:text-lime transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
                        <path d="M2 2h3l1.5 3.5L5 7a9 9 0 003 3l1.5-1.5L13 10v3a1 1 0 01-1 1A11 11 0 012 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-sm">+92 300 0692222</span>
                    </a>
                    <div className="flex items-start gap-2.5 text-ash">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <path d="M7 1a5 5 0 100 10A5 5 0 007 1zM7 6V4M7 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      <address className="font-body text-xs not-italic leading-relaxed">
                        Emaar Canyon Views<br />Islamabad, Pakistan
                      </address>
                    </div>
                    <p className="font-mono text-xs text-ash uppercase tracking-label pt-2 border-t border-smoke">
                      Mon–Fri · UK working hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FormField({ id, label, type, required, placeholder, autoComplete }: {
  id: string; label: string; type: string; required?: boolean; placeholder?: string; autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-body text-xs text-bone font-medium">
        {label}
        {required && <span className="text-lime ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        id={id} name={id} type={type} required={required}
        placeholder={placeholder} autoComplete={autoComplete}
        className="bg-coal border border-smoke text-bone text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-lime transition-colors placeholder:text-ash"
      />
    </div>
  )
}
