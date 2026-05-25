import { Link } from 'react-router-dom'
import { Stagger, item, Reveal } from '../components/ui/Reveal'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const complianceItems = [
  {
    badge: 'ICO',
    title: 'ICO Registered',
    subtitle: "UK Information Commissioner's Office",
    body: "Sixth Ledger is registered with the UK Information Commissioner's Office as a data controller. UK accounting practices performing vendor due diligence can verify our registration on the ICO public register.",
    link: 'https://ico.org.uk/ESDWebPages/Entry/',
    linkText: 'Verify on ICO public register →',
  },
  {
    badge: 'GDPR',
    title: 'UK GDPR Compliant',
    subtitle: 'UK General Data Protection Regulation',
    body: "We process personal data strictly in accordance with the UK General Data Protection Regulation. Every client engagement begins with a signed Data Processing Agreement (DPA). We provide our standard DPA and sub-processor list before work commences — not on request, but as a matter of course.",
    link: '/privacy',
    linkText: 'Read our Privacy Policy →',
  },
  {
    badge: 'IDTA',
    title: 'IDTA-Ready',
    subtitle: 'International Data Transfer Agreement',
    body: 'As a Pakistan-based processor of UK client data, we operate under IDTA-compatible transfer mechanisms. Our standard DPA includes the necessary IDTA provisions. UK practices can receive our full IDTA documentation on request.',
    link: '/compliance',
    linkText: 'Request our GDPR pack →',
  },
  {
    badge: 'MTD',
    title: 'Making Tax Digital Ready',
    subtitle: "HMRC MTD-compliant submissions",
    body: "All VAT return preparation is conducted within MTD-compatible platforms. We work in Xero, QuickBooks, Sage, and FreeAgent — all HMRC-approved for MTD. Your practice retains filing authority; we prepare the return and deliver it for your submission.",
    link: '/services/vat',
    linkText: 'Learn about our VAT service →',
  },
  {
    badge: 'ACCA',
    title: 'ACCA-Led Delivery',
    subtitle: 'Association of Chartered Certified Accountants',
    body: "Our accounting team is led by ACCA-qualified accountants and ACCA finalists. All work is delivered and reviewed under ACCA's professional ethics code — requiring confidentiality, integrity, objectivity, and professional competence. We are not a data entry service.",
    link: 'https://www.accaglobal.com/',
    linkText: 'Learn about ACCA →',
  },
]

export default function Compliance() {
  return (
    <>
      <section className="pt-40 pb-24 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Compliance</li>
            </ol>
          </nav>
          <div className="flex items-end justify-between border-b border-smoke pb-8 mb-8">
            <div>
              <p className="eyebrow mb-4">Compliance</p>
              <h1
                className="font-display text-4xl md:text-5xl text-pure max-w-3xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Everything your due diligence{' '}
                <span className="italic">requires.</span>
              </h1>
            </div>
            <p className="font-mono text-xs text-ash uppercase tracking-label hidden md:block pb-1">05 credentials</p>
          </div>
          <p className="font-body text-bone text-lg leading-loose max-w-2xl">
            UK accounting practices have an obligation to verify the compliance posture of any
            partner who handles client data. Here is ours, in full. Every document listed below
            is available on request within one business day.
          </p>
        </div>
      </section>

      {/* Credentials — row list */}
      <section className="section bg-obsidian" aria-label="Compliance credentials">
        <div className="container">
          <Stagger stagger={0.07}>
            {complianceItems.map((item_) => (
              <motion.div
                key={item_.badge}
                variants={item}
                className="group grid md:grid-cols-12 gap-6 lg:gap-10 py-10 border-b border-smoke border-l-2 border-l-transparent hover:border-l-lime hover:bg-coal pl-4 hover:pl-8 transition-all duration-200 cursor-default"
              >
                {/* Badge + title */}
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-lime uppercase tracking-label mb-2">{item_.badge}</p>
                  <h2 className="font-display text-xl text-pure mb-1">{item_.title}</h2>
                  <p className="font-mono text-xs text-ash uppercase tracking-label leading-snug">{item_.subtitle}</p>
                </div>

                {/* Body */}
                <div className="md:col-span-7">
                  <p className="font-body text-base text-bone leading-loose">{item_.body}</p>
                </div>

                {/* Link */}
                <div className="md:col-span-2 flex items-start justify-end">
                  <a
                    href={item_.link}
                    className="font-mono text-xs text-lime hover:underline uppercase tracking-label text-right"
                    target={item_.link.startsWith('http') ? '_blank' : undefined}
                    rel={item_.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item_.linkText}
                  </a>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* GDPR Pack */}
      <section className="section border-t border-smoke" style={{ background: 'var(--coal)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal delay={0.05}>
              <p className="eyebrow mb-5">Due diligence</p>
              <h2
                className="font-display text-4xl md:text-5xl text-pure mb-6"
                style={{ letterSpacing: '-0.025em' }}
              >
                Request our GDPR pack
              </h2>
              <p className="font-body text-bone text-base leading-loose mb-4">
                For practices that require formal documentation before engaging — or need
                to satisfy their own professional indemnity insurer — we provide a full
                GDPR pack on request. Delivered within one business day.
              </p>
              <p className="font-body text-bone text-base leading-loose mb-8">
                The pack includes everything you need for vendor due diligence,
                client-facing assurance, and regulatory compliance review.
              </p>
              <Button to="/contact" size="md">Request GDPR pack →</Button>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-6">Pack contents</p>
              <div className="space-y-0">
                {[
                  'Privacy Policy',
                  'Data Processing Agreement (DPA) template',
                  'Sub-processor list',
                  'IDTA-compatible transfer clauses',
                  'ICO registration confirmation',
                  'Data retention schedule',
                  'Data breach notification procedure',
                  'Subject access request procedure',
                ].map((doc, i) => (
                  <div key={doc} className="flex items-baseline gap-5 py-3.5 border-b border-smoke/40 last:border-b-0">
                    <span className="font-mono text-xs text-lime w-6 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-body text-sm text-bone">{doc}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Legal links */}
      <section className="py-10 border-t border-smoke bg-obsidian">
        <div className="container">
          <div className="flex flex-wrap gap-8">
            <p className="font-mono text-xs text-ash uppercase tracking-label">Legal pages:</p>
            {[
              { to: '/privacy', label: 'Privacy Policy' },
              { to: '/terms', label: 'Terms of Service' },
              { to: '/cookies', label: 'Cookie Policy' },
            ].map(i => (
              <Link key={i.to} to={i.to} className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">
                {i.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
