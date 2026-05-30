import { Link } from 'react-router-dom'
import { Reveal, Stagger, item } from '../components/ui/Reveal'
import { motion } from 'framer-motion'
import ClosingCTA from '../components/sections/ClosingCTA'

const facts = [
  { label: 'Headquarters', value: 'Islamabad, Pakistan' },
  { label: 'Legal entity', value: 'SIXTHLEDGER (PVT) LTD' },
  { label: 'ICO Registration', value: 'ZA, pending' },
  { label: 'Team qualifications', value: 'ACCA qualified & ACCA finalists' },
  { label: 'Operating hours', value: 'UK working hours (GMT)' },
  { label: 'Languages', value: 'English' },
  { label: 'Clients served', value: 'UK accounting practices' },
  { label: 'Engagement model', value: 'Per-job / Retainer / Allocation' },
]

const platforms = ['Xero', 'QuickBooks', 'Sage', 'FreeAgent', 'TaxCalc', 'Iris', 'CCH', 'BrightPay', 'HMRC MTD']

export default function About() {
  return (
    <>
      <section className="pt-40 pb-24 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">About</li>
            </ol>
          </nav>
          <div className="flex items-end justify-between border-b border-smoke pb-8 mb-8">
            <div>
              <p className="eyebrow mb-4">About Sixth Ledger</p>
              <h1
                className="font-display text-4xl md:text-5xl text-pure max-w-3xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                An outsourcing partner built for{' '}
                <span className="italic">UK accounting practices.</span>
              </h1>
            </div>
          </div>
          <p className="font-body text-bone text-lg leading-loose max-w-2xl">
            ACCA led. ICO registered. UK working hours. Built specifically to extend the
            capacity of UK accounting practices without adding to their headcount.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-obsidian" aria-labelledby="story-heading">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-7" delay={0.05}>
              <p className="eyebrow mb-6">Why we exist</p>
              <h2 id="story-heading" className="font-display text-4xl md:text-5xl text-pure mb-10" style={{ letterSpacing: '-0.025em' }}>
                A structural answer to a structural problem.
              </h2>
              <div className="space-y-6">
                {[
                  "Sixth Ledger exists because UK accounting practices face a structural problem: demand peaks in predictable cycles, January self assessment season, year end, payroll year end, but hiring is slow, expensive, and binds you to fixed costs you don't need outside those windows.",
                  "We built Sixth Ledger as the answer: a team of ACCA qualified and ACCA finalist accountants, operating on UK working hours, delivering work white label under your practice credentials. Your clients don't know we exist. Your partners don't deal with recruitment. Your overhead stays flat.",
                  "Every engagement starts with a signed Data Processing Agreement and ICO registered data handling. Compliance is not an add-on. It is the foundation that makes the whole arrangement possible.",
                  "We are headquartered in Islamabad, Pakistan. We are fully transparent about this. We have the IDTA ready transfer mechanisms, the signed DPAs, and the professional qualifications that make cross-border accounting work possible, auditable, and safe.",
                ].map((para) => (
                  <p key={para.slice(0, 30)} className="font-body text-bone text-base leading-loose">{para}</p>
                ))}
              </div>
            </Reveal>

            {/* Facts table */}
            <Reveal className="lg:col-span-5" delay={0.1}>
              <p className="eyebrow mb-6">Key facts</p>
              <div className="space-y-0">
                {facts.map(fact => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-2 gap-4 py-4 border-b border-smoke/40 hover:bg-coal hover:pl-4 transition-all duration-150 cursor-default"
                  >
                    <dt className="font-mono text-xs text-ash uppercase tracking-label">{fact.label}</dt>
                    <dd className="font-body text-sm text-bone">{fact.value}</dd>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section border-y border-smoke" style={{ background: 'var(--coal)' }} aria-labelledby="team-heading">
        <div className="container">
          <Reveal delay={0.05}>
            <div className="flex items-end justify-between pb-10 border-b border-smoke">
              <div>
                <p className="eyebrow mb-4">The team</p>
                <h2 id="team-heading" className="font-display text-4xl md:text-5xl text-pure" style={{ letterSpacing: '-0.025em' }}>
                  Led by{' '}
                  <span className="italic">qualified accountants.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <Stagger stagger={0.08}>
            {[
              {
                initial: 'S',
                name: 'Shayan Ahmed Shujaat',
                role: 'Chief Executive Officer',
                bio: "Leads Sixth Ledger's client relationships and quality standards. ACCA affiliated. Oversees all client engagements and practice partnerships.",
              },
              {
                initial: 'T',
                name: 'Accounting Team',
                role: 'ACCA Qualified & Finalists',
                bio: '3 ACCA qualified and 2 ACCA finalist accountants covering bookkeeping, payroll, VAT, year end accounts, and tax compliance. All operating under ACCA ethics code.',
              },
              {
                initial: '⏱',
                name: 'UK Working Hours',
                role: '9am to 5:30pm GMT',
                bio: 'The entire team operates on UK working hours as standard. During January and year end peak periods, hours extend to match UK demand.',
              },
            ].map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="group grid md:grid-cols-12 gap-6 py-10 border-b border-smoke last:border-b-0 hover:bg-obsidian transition-colors duration-200 cursor-default border-l-2 border-l-transparent hover:border-l-lime pl-4 hover:pl-8"
              >
                <div className="md:col-span-1">
                  <div className="w-10 h-10 flex items-center justify-center border border-smoke group-hover:border-lime transition-colors duration-200">
                    <span className="font-display text-base text-ash italic">{member.initial}</span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-xl text-pure mb-1">{member.name}</h3>
                  <p className="font-mono text-xs text-lime uppercase tracking-label">{member.role}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="font-body text-base text-bone leading-loose">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Platforms */}
      <section className="section bg-obsidian border-b border-smoke" aria-labelledby="platforms-heading">
        <div className="container">
          <Reveal delay={0.05}>
            <div className="flex items-end justify-between pb-10 border-b border-smoke mb-10">
              <div>
                <p className="eyebrow mb-4">Software</p>
                <h2 id="platforms-heading" className="font-display text-3xl md:text-4xl text-pure" style={{ letterSpacing: '-0.025em' }}>
                  Platforms we work in
                </h2>
              </div>
            </div>
          </Reveal>
          <Stagger className="flex flex-wrap gap-0" stagger={0.04}>
            {platforms.map(p => (
              <motion.span
                key={p}
                variants={item}
                className="font-mono text-sm text-bone border-b border-smoke pb-1 mr-8 mb-6 hover:text-lime hover:border-lime transition-colors cursor-default"
              >
                {p}
              </motion.span>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10 border-b border-smoke" style={{ background: 'var(--coal)' }}>
        <div className="container">
          <div className="flex flex-wrap gap-8 items-center">
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
