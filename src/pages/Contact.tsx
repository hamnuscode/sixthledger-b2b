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
      <section className="pt-40 pb-24 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Contact</li>
            </ol>
          </nav>
          <div className="flex items-end justify-between border-b border-smoke pb-8 mb-8">
            <div>
              <p className="eyebrow mb-4">Get in touch</p>
              <h1
                className="font-display text-4xl md:text-5xl text-pure"
                style={{ letterSpacing: '-0.03em' }}
              >
                Book a{' '}
                <span className="italic">20-minute call</span>
              </h1>
            </div>
          </div>
          <p className="font-body text-bone text-lg leading-loose max-w-2xl">
            We review your practice's needs, confirm what we can deliver, and give you a
            fee indication before you commit to anything. 20 minutes. No obligation.
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
            <div className="lg:col-span-2 space-y-16">

              {/* Cal.com placeholder */}
              <div>
                <p className="eyebrow mb-5">Book a slot directly</p>
                <p className="font-body text-base text-ash mb-8">Select a time that works for you. The call is 20 minutes.</p>
                <div
                  className="border border-smoke bg-coal flex flex-col items-center justify-center py-16 gap-4"
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
                    className="font-mono text-xs text-lime hover:underline underline-offset-2 uppercase tracking-label"
                  >
                    Email us to book →
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="border-t border-smoke pt-16">
                <p className="eyebrow mb-5">Or send an enquiry</p>
                <p className="font-body text-base text-ash mb-10">We respond to all enquiries within one business day.</p>

                {submitted ? (
                  <div className="border-l-4 border-l-lime bg-coal p-10">
                    <p className="font-mono text-xs text-lime uppercase tracking-label mb-3">Enquiry received</p>
                    <h3 className="font-display text-2xl text-pure mb-2">We'll be in touch within one business day.</h3>
                    <p className="font-body text-sm text-bone">Thank you for reaching out.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <input type="text" name="_honeypot" tabIndex={-1} aria-hidden="true" className="absolute opacity-0 pointer-events-none" />

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <FormField id="name" label="Your name" type="text" required placeholder="James Hartley" autoComplete="name" />
                      <FormField id="firm" label="Firm name" type="text" required placeholder="Hartley Moore Accountants" />
                      <FormField id="email" label="Email address" type="email" required placeholder="james@hartleymoore.co.uk" autoComplete="email" />
                      <FormField id="phone" label="Phone (optional)" type="tel" placeholder="+44 7700 000000" autoComplete="tel" />

                      <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="font-mono text-xs text-ash uppercase tracking-label">
                          Services interested in
                          <span className="text-lime ml-0.5" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="service" name="service" required
                          className="bg-transparent border-b border-smoke text-bone text-sm px-0 py-3 focus:outline-none focus:border-lime transition-colors appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-coal">Select a service…</option>
                          {services.map(s => <option key={s} value={s} className="bg-coal">{s}</option>)}
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="volume" className="font-mono text-xs text-ash uppercase tracking-label">
                          Approximate client volume
                          <span className="text-lime ml-0.5" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="volume" name="volume" required
                          className="bg-transparent border-b border-smoke text-bone text-sm px-0 py-3 focus:outline-none focus:border-lime transition-colors appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-coal">Select a range…</option>
                          {volumes.map(v => <option key={v} value={v} className="bg-coal">{v}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6 flex flex-col gap-2">
                      <label htmlFor="message" className="font-mono text-xs text-ash uppercase tracking-label">
                        Tell us about your practice
                        <span className="text-lime ml-0.5" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        placeholder="Brief description of your practice, the services you want to outsource, and what's driving the need…"
                        className="bg-transparent border-b border-smoke text-bone text-sm px-0 py-3 focus:outline-none focus:border-lime transition-colors resize-none placeholder:text-ash"
                      />
                    </div>

                    <div className="mb-8 flex items-start gap-3">
                      <input type="checkbox" id="privacy" name="privacy" required className="mt-1.5 flex-shrink-0 w-3 h-3 accent-lime" />
                      <label htmlFor="privacy" className="font-body text-xs text-ash leading-relaxed">
                        I agree to the{' '}
                        <Link to="/privacy" className="text-lime hover:underline underline-offset-2">Sixth Ledger Privacy Policy</Link>{' '}
                        and consent to being contacted about my enquiry.
                      </label>
                    </div>

                    <Button type="submit" size="lg" disabled={loading}>
                      {loading ? 'Sending…' : 'Send enquiry →'}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-0 border-l-2 border-l-smoke">
                <div className="pl-8 pb-8 border-b border-smoke">
                  <p className="eyebrow mb-5">What to expect</p>
                  <ol className="space-y-6">
                    {[
                      "We'll ask about your practice — size, software, volume, what's under pressure.",
                      "We'll tell you exactly what we can handle and how we'd approach your situation.",
                      "We'll give you a fee indication on the call or within 24 hours.",
                      "No commitment required. If we're not the right fit, we'll say so.",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="font-mono text-xs text-lime tracking-label flex-shrink-0 mt-0.5">0{i + 1}</span>
                        <span className="font-body text-sm text-bone leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pl-8 pt-8">
                  <p className="eyebrow mb-5">Direct contact</p>
                  <div className="space-y-4">
                    <a href="mailto:info@sixthledger.com" className="flex items-center gap-3 text-bone hover:text-lime transition-colors group">
                      <span className="font-mono text-xs text-ash group-hover:text-lime transition-colors uppercase tracking-label w-4">@</span>
                      <span className="font-body text-sm">info@sixthledger.com</span>
                    </a>
                    <a href="tel:+923000692222" className="flex items-center gap-3 text-bone hover:text-lime transition-colors group">
                      <span className="font-mono text-xs text-ash group-hover:text-lime transition-colors uppercase tracking-label w-4">#</span>
                      <span className="font-body text-sm">+92 300 0692222</span>
                    </a>
                    <div className="flex items-start gap-3 text-ash">
                      <span className="font-mono text-xs uppercase tracking-label w-4">+</span>
                      <address className="font-body text-xs not-italic leading-relaxed">
                        Emaar Canyon Views<br />Islamabad, Pakistan
                      </address>
                    </div>
                    <p className="font-mono text-xs text-ash uppercase tracking-label pt-4 border-t border-smoke">
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
      <label htmlFor={id} className="font-mono text-xs text-ash uppercase tracking-label">
        {label}
        {required && <span className="text-lime ml-0.5" aria-hidden="true">*</span>}
      </label>
      <input
        id={id} name={id} type={type} required={required}
        placeholder={placeholder} autoComplete={autoComplete}
        className="bg-transparent border-b border-smoke text-bone text-sm px-0 py-3 focus:outline-none focus:border-lime transition-colors placeholder:text-ash"
      />
    </div>
  )
}
