import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Privacy Policy</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-bone text-sm">
            Last updated: 26 May 2025 &nbsp;·&nbsp; Effective date: 1 June 2025
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container">
          <div className="max-w-3xl prose-custom">

            <h2>1. Who we are</h2>
            <p>
              Sixth Ledger (SIXTHLEDGER (PVT) LTD), headquartered at Emaar Canyon Views, Islamabad,
              Pakistan, operates the b2b.sixthledger.com website and provides white-label accounting
              outsourcing services to UK accounting practices. References to "we", "us", and "our"
              mean Sixth Ledger. References to "you" and "your" mean the accounting practice engaging
              our services or visiting this site.
            </p>
            <p>
              We are registered with the UK Information Commissioner's Office (ICO) as a data processor.
              Our ICO registration number is displayed in the footer of every page.
            </p>

            <h2>2. What personal data we process</h2>
            <p>
              As a processor acting on behalf of UK accounting practices, we handle personal data
              relating to the end-clients of those practices. The categories of data we process include:
            </p>
            <ul>
              <li>Individual taxpayer information (name, address, National Insurance number, UTR)</li>
              <li>Financial records (income, expenditure, bank statements)</li>
              <li>Payroll data (employee names, NI numbers, salary, tax codes)</li>
              <li>VAT registration details</li>
              <li>Company formation and secretarial records</li>
            </ul>
            <p>
              We also process limited personal data about the accounting practice's own staff and
              partners for the purposes of managing our engagement.
            </p>

            <h2>3. Legal basis for processing</h2>
            <p>
              We process personal data under instruction from UK accounting practices who are the
              data controllers. Our legal basis for processing is performance of a contract with the
              data controller (Article 6(1)(b) UK GDPR) and compliance with legal obligations
              (Article 6(1)(c) UK GDPR) where applicable.
            </p>
            <p>
              Every engagement commences with a signed Data Processing Agreement (DPA) between
              Sixth Ledger and the UK accounting practice. We do not process any personal data
              outside the scope of that agreement.
            </p>

            <h2>4. International data transfers</h2>
            <p>
              Our operations are based in Pakistan. The transfer of personal data from the UK to
              Pakistan is an international transfer under UK GDPR. We operate under
              International Data Transfer Agreement (IDTA)-compatible transfer mechanisms. Our
              standard DPA includes the necessary IDTA clauses.
            </p>
            <p>
              UK practices whose own clients ask about international data transfers can request our
              full IDTA documentation. We provide this within one business day.
            </p>

            <h2>5. Sub-processors</h2>
            <p>
              We use a limited set of sub-processors to deliver our services. These include:
            </p>
            <ul>
              <li>Xero Limited (accounting software, UK/NZ)</li>
              <li>Intuit Inc. (QuickBooks, USA)</li>
              <li>Sage Group plc (accounting software, UK)</li>
              <li>FreeAgent (accounting software, UK)</li>
              <li>BrightPay (payroll software, UK/Ireland)</li>
              <li>Microsoft Corporation (Office 365, secure file exchange)</li>
            </ul>
            <p>
              Our full sub-processor list is provided as part of our GDPR pack, available on request.
              We notify client practices of any material changes to our sub-processor list at least
              30 days in advance.
            </p>

            <h2>6. Data retention</h2>
            <p>
              We retain personal data only for as long as required to fulfil the contracted services
              and comply with legal obligations. Our standard retention schedule is:
            </p>
            <ul>
              <li>Bookkeeping and VAT records: 6 years from the end of the relevant tax year</li>
              <li>Payroll records: 3 years from the end of the tax year</li>
              <li>Company secretarial records: Duration of engagement plus 6 years</li>
              <li>Correspondence and work files: 6 years from end of engagement</li>
            </ul>
            <p>
              Upon termination of an engagement, we delete or return all personal data to the
              controlling practice in accordance with the DPA terms, typically within 30 days.
            </p>

            <h2>7. Security measures</h2>
            <p>
              We implement appropriate technical and organisational measures to protect personal
              data against unauthorised access, loss, or destruction. These include:
            </p>
            <ul>
              <li>Encryption in transit (TLS 1.2+) and at rest</li>
              <li>Role-based access controls limiting data access to relevant team members</li>
              <li>Secure file transfer protocols (no unencrypted email for sensitive data)</li>
              <li>Formal onboarding and data-handling training for all staff</li>
              <li>Regular access reviews</li>
            </ul>

            <h2>8. Data breach notification</h2>
            <p>
              In the event of a personal data breach, we will notify the relevant UK accounting
              practice without undue delay and, where feasible, within 72 hours of becoming aware.
              Our breach notification procedure is provided in our GDPR pack.
            </p>

            <h2>9. Data subject rights</h2>
            <p>
              As a data processor, requests from data subjects (end-clients of UK practices) should
              be directed to the data controller (the UK accounting practice). We will assist the
              controller in responding to such requests in accordance with our DPA obligations.
            </p>

            <h2>10. Website data</h2>
            <p>
              When you visit b2b.sixthledger.com, we collect limited technical information including
              your IP address, browser type, and pages visited via our analytics provider. We use
              this data solely for improving the website. No personal data is sold or shared with
              third parties for marketing purposes.
            </p>
            <p>
              See our <Link to="/cookies" className="text-lime hover:underline">Cookie Policy</Link> for
              details on cookies used on this site.
            </p>

            <h2>11. Contact</h2>
            <p>
              For any privacy-related enquiries, to request our GDPR pack, or to raise a concern,
              contact us at:
            </p>
            <p>
              <strong className="text-pure">Email:</strong> info@sixthledger.com<br />
              <strong className="text-pure">Address:</strong> Emaar Canyon Views, Islamabad, Pakistan
            </p>
            <p>
              UK practices may also raise concerns with the Information Commissioner's Office at
              ico.org.uk if they believe their data protection rights have been infringed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-coal border-t border-smoke">
        <div className="container">
          <div className="flex flex-wrap gap-6">
            <p className="font-mono text-xs text-ash uppercase tracking-label">Legal pages:</p>
            {[
              { to: '/privacy', label: 'Privacy Policy' },
              { to: '/terms', label: 'Terms of Service' },
              { to: '/cookies', label: 'Cookie Policy' },
              { to: '/compliance', label: 'Compliance' },
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
