import { Link } from 'react-router-dom'
import { Stagger, item, Reveal } from '../components/ui/Reveal'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const complianceItems = [
  {
    badge: 'ICO',
    title: 'ICO Registered',
    subtitle: "UK Information Commissioner's Office",
    body: "Sixth Ledger is registered with the UK Information Commissioner's Office as a data controller. UK accounting practices performing vendor due diligence can verify our registration on the ICO public register. Our registration number is displayed in the footer of every page.",
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
    body: 'As a Pakistan-based processor of UK client data, we operate under IDTA-compatible transfer mechanisms. Our standard DPA includes the necessary IDTA provisions. UK practices whose own clients ask about international data transfers can receive our full IDTA documentation on request.',
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
      <section className="pt-40 pb-28 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Compliance</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Compliance</p>
          <h1 className="font-display text-5xl md:text-6xl text-pure mb-6 max-w-3xl" style={{ letterSpacing: '-0.03em' }}>
            Everything your due diligence{' '}
            <span className="italic">requires.</span>
          </h1>
          <p className="font-body text-bone text-lg max-w-2xl leading-loose">
            UK accounting practices have an obligation to verify the compliance posture of any
            partner who handles client data. Here is ours, in full. Every document listed below
            is available on request within one business day.
          </p>
        </div>
      </section>

      <section className="section bg-obsidian" aria-label="Compliance credentials">
        <div className="container">
          <div className="space-y-0 border border-smoke rounded-sm overflow-hidden">
            <Stagger stagger={0.08}>
              {complianceItems.map((item_, i) => (
                <motion.div
                  key={item_.badge}
                  variants={item}
                  className={`grid md:grid-cols-4 gap-6 p-8 hover:bg-coal transition-colors duration-200 ${
                    i < complianceItems.length - 1 ? 'border-b border-smoke' : ''
                  }`}
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-lime uppercase tracking-label">{item_.badge}</span>
                    <h2 className="font-display text-lg text-pure mt-2 mb-1">{item_.title}</h2>
                    <p className="font-body text-xs text-ash leading-relaxed">{item_.subtitle}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="font-body text-sm text-bone leading-relaxed mb-4">{item_.body}</p>
                    <a
                      href={item_.link}
                      className="font-mono text-xs text-lime hover:underline uppercase tracking-label"
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
        </div>
      </section>

      {/* GDPR Pack */}
      <section className="section bg-coal border-t border-smoke">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.05}>
              <p className="eyebrow mb-4">Due diligence</p>
              <h2 className="font-display text-3xl text-pure mb-4">
                Request our GDPR pack
              </h2>
              <p className="font-body text-bone text-sm leading-relaxed mb-4">
                For practices that require formal documentation before engaging — or need
                to satisfy their own professional indemnity insurer — we provide a full
                GDPR pack on request. Delivered within one business day.
              </p>
              <p className="font-body text-bone text-sm leading-relaxed">
                The pack includes everything you need for vendor due diligence,
                client-facing assurance, and regulatory compliance review.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-obsidian border border-smoke rounded-sm p-6">
                <h3 className="font-display text-xl text-pure mb-5">GDPR pack contents</h3>
                <ul className="space-y-3">
                  {[
                    'Privacy Policy',
                    'Data Processing Agreement (DPA) template',
                    'Sub-processor list',
                    'IDTA-compatible transfer clauses',
                    'ICO registration confirmation',
                    'Data retention schedule',
                    'Data breach notification procedure',
                    'Subject access request procedure',
                  ].map(i => (
                    <li key={i} className="flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-lime" aria-hidden="true">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-xs text-bone">{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button to="/contact" size="sm" variant="outline" className="w-full">
                    Request GDPR pack
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10 bg-obsidian border-t border-smoke">
        <div className="container">
          <div className="flex flex-wrap gap-6">
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
