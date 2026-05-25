import { Link } from 'react-router-dom'
import { Reveal, Stagger, item } from '../components/ui/Reveal'
import { motion } from 'framer-motion'
import ClosingCTA from '../components/sections/ClosingCTA'

const facts = [
  { label: 'Headquarters', value: 'Islamabad, Pakistan' },
  { label: 'Legal entity', value: 'SIXTHLEDGER (PVT) LTD' },
  { label: 'ICO Registration', value: 'ZA — pending' },
  { label: 'Team qualifications', value: 'ACCA-qualified & ACCA finalists' },
  { label: 'Operating hours', value: 'UK working hours (GMT)' },
  { label: 'Languages', value: 'English' },
  { label: 'Clients served', value: 'UK accounting practices' },
  { label: 'Engagement model', value: 'Per-job / Retainer / Allocation' },
]

const platforms = ['Xero', 'QuickBooks', 'Sage', 'FreeAgent', 'TaxCalc', 'Iris', 'CCH', 'BrightPay', 'HMRC MTD']

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">About</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">About Sixth Ledger</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4 max-w-2xl" style={{ letterSpacing: '-0.02em' }}>
            An outsourcing partner built for{' '}
            <span className="italic">UK accounting practices.</span>
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            ACCA-led. ICO-registered. UK working hours. Built specifically to extend the
            capacity of UK accounting practices without adding to their headcount.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="section bg-obsidian" aria-labelledby="story-heading">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-2 space-y-5" delay={0.05}>
              <h2 id="story-heading" className="font-display text-3xl text-pure mb-6">
                Why we exist
              </h2>
              <p className="font-body text-bone text-sm leading-relaxed">
                Sixth Ledger exists because UK accounting practices face a structural problem:
                demand peaks in predictable cycles — January self-assessment season, year-end,
                payroll year-end — but hiring is slow, expensive, and binds you to fixed costs
                you don't need outside those windows.
              </p>
              <p className="font-body text-bone text-sm leading-relaxed">
                We built Sixth Ledger as the answer: a team of ACCA-qualified and
                ACCA-finalist accountants, operating on UK working hours, delivering work
                white-label under your practice credentials. Your clients don't know we exist.
                Your partners don't deal with recruitment. Your overhead stays flat.
              </p>
              <p className="font-body text-bone text-sm leading-relaxed">
                Every engagement starts with a signed Data Processing Agreement and ICO-registered
                data handling. Compliance is not an add-on. It is the foundation that makes the
                whole arrangement possible — because UK firms have to be able to show their clients
                that their data is handled correctly, regardless of where the work is done.
              </p>
              <p className="font-body text-bone text-sm leading-relaxed">
                We are headquartered in Islamabad, Pakistan. We are fully transparent about this.
                We have the IDTA-ready transfer mechanisms, the signed DPAs, and the professional
                qualifications that make cross-border accounting work possible, auditable, and safe.
              </p>
            </Reveal>

            <Reveal className="lg:col-span-1" delay={0.1}>
              <div className="bg-coal border border-smoke rounded-sm p-6">
                <p className="font-mono text-xs text-ash uppercase tracking-label mb-5">Key facts</p>
                <dl className="space-y-3">
                  {facts.map(fact => (
                    <div key={fact.label} className="border-b border-smoke pb-3 last:border-b-0">
                      <dt className="font-mono text-xs text-ash uppercase tracking-label">{fact.label}</dt>
                      <dd className="font-body text-sm text-bone mt-0.5">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--coal)' }} aria-labelledby="team-heading">
        <div className="container">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">The team</p>
            <h2 id="team-heading" className="font-display text-3xl text-pure">
              Led by{' '}
              <span className="italic">qualified accountants.</span>
            </h2>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            <motion.div variants={item} className="bg-obsidian border border-smoke rounded-sm p-6">
              <div className="w-12 h-12 rounded-full bg-smoke flex items-center justify-center mb-4">
                <span className="font-display text-lg text-ash italic">S</span>
              </div>
              <h3 className="font-display text-lg text-pure mb-1">Shayan Ahmed Shujaat</h3>
              <p className="font-mono text-xs text-lime uppercase tracking-label mb-3">Chief Executive Officer</p>
              <p className="font-body text-xs text-bone leading-relaxed">
                Leads Sixth Ledger's client relationships and quality standards. ACCA-affiliated.
                Oversees all client engagements and practice partnerships.
              </p>
            </motion.div>

            <motion.div variants={item} className="bg-obsidian border border-smoke rounded-sm p-6">
              <div className="w-12 h-12 rounded-full bg-smoke flex items-center justify-center mb-4">
                <span className="font-display text-lg text-ash italic">T</span>
              </div>
              <h3 className="font-display text-lg text-pure mb-1">Accounting Team</h3>
              <p className="font-mono text-xs text-lime uppercase tracking-label mb-3">ACCA Qualified & Finalists</p>
              <p className="font-body text-xs text-bone leading-relaxed">
                3 ACCA-qualified and 2 ACCA-finalist accountants covering bookkeeping, payroll,
                VAT, year-end accounts, and tax compliance. All operating under ACCA ethics code.
              </p>
            </motion.div>

            <motion.div variants={item} className="bg-obsidian border border-smoke rounded-sm p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-full bg-smoke flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ash" aria-hidden="true">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-pure mb-1">UK Working Hours</h3>
              <p className="font-mono text-xs text-lime uppercase tracking-label mb-3">9am–5:30pm GMT</p>
              <p className="font-body text-xs text-bone leading-relaxed">
                The entire team operates on UK working hours as standard. During January and
                year-end peak periods, hours extend to match UK demand.
              </p>
            </motion.div>
          </Stagger>
        </div>
      </section>

      {/* Platforms */}
      <section className="section bg-obsidian border-t border-smoke" aria-labelledby="platforms-heading">
        <div className="container">
          <Reveal className="max-w-2xl mb-8">
            <p className="eyebrow mb-4">Software</p>
            <h2 id="platforms-heading" className="font-display text-2xl text-pure">
              Platforms we work in
            </h2>
          </Reveal>
          <Stagger className="flex flex-wrap gap-3" stagger={0.04}>
            {platforms.map(p => (
              <motion.span
                key={p}
                variants={item}
                className="font-mono text-sm text-bone border border-smoke px-4 py-2 rounded-sm hover:border-lime/40 transition-colors cursor-default"
              >
                {p}
              </motion.span>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-10 bg-coal border-t border-smoke">
        <div className="container">
          <div className="flex flex-wrap gap-5 items-center">
            <p className="font-mono text-xs text-ash uppercase tracking-label">Related:</p>
            <Link to="/compliance" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">Compliance credentials →</Link>
            <Link to="/how-we-work" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">How we work →</Link>
            <Link to="/contact" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">Book a call →</Link>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  )
}
