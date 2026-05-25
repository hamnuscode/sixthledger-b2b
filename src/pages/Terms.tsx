import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Terms of Service</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Terms of Service
          </h1>
          <p className="font-body text-bone text-sm">
            Last updated: 26 May 2025 &nbsp;·&nbsp; Effective date: 1 June 2025
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container">
          <div className="max-w-3xl prose-custom">

            <h2>1. Parties</h2>
            <p>
              These Terms of Service govern the relationship between SIXTHLEDGER (PVT) LTD
              ("Sixth Ledger", "we", "us") and the UK accounting practice ("Client", "you") that
              engages our white-label accounting outsourcing services. By engaging our services or
              completing a discovery call, you agree to these terms.
            </p>

            <h2>2. Services</h2>
            <p>
              Sixth Ledger provides white-label accounting and compliance outsourcing services
              to UK accounting practices. Services are delivered under the Client's own brand.
              The specific scope of services for each engagement is confirmed in a separate
              Service Agreement or Statement of Work agreed between both parties.
            </p>
            <p>
              Service lines available include bookkeeping, payroll and RTI, VAT returns,
              year-end accounts, management accounts, self-assessment, CIS returns, company
              secretarial services, and annual accounts. The scope of any engagement is
              defined at the discovery call and confirmed in writing before work commences.
            </p>

            <h2>3. Engagement and onboarding</h2>
            <p>
              All engagements begin with:
            </p>
            <ul>
              <li>A signed Data Processing Agreement (DPA) between Sixth Ledger and the Client</li>
              <li>Confirmation of service scope, pricing, and expected volumes</li>
              <li>Secure transfer of access credentials or client files via agreed protocols</li>
            </ul>
            <p>
              No billable work commences until the DPA is signed. We do not begin processing
              client data on an informal or verbal basis.
            </p>

            <h2>4. White-label obligation</h2>
            <p>
              Sixth Ledger delivers all work under the Client's own brand. We do not contact
              the Client's end-clients directly unless explicitly authorised to do so in writing.
              The existence of our engagement is treated as confidential by both parties.
            </p>

            <h2>5. Pricing and payment</h2>
            <p>
              Pricing is confirmed at or following the discovery call based on the Client's
              service requirements, client mix, and expected volume. We offer three engagement
              structures:
            </p>
            <ul>
              <li><strong className="text-pure">Per-job:</strong> Invoiced per completed task or file. Suitable for ad-hoc or low-volume requirements.</li>
              <li><strong className="text-pure">Monthly retainer:</strong> Fixed monthly fee for an agreed scope of recurring services. Reviewed quarterly.</li>
              <li><strong className="text-pure">Full allocation:</strong> A dedicated resource block for high-volume practices. Priced on a bespoke basis.</li>
            </ul>
            <p>
              Payment terms are net 14 days from invoice date unless otherwise agreed. Overdue
              invoices accrue interest at 8% per annum above the Bank of England base rate.
            </p>

            <h2>6. Turnaround and quality</h2>
            <p>
              We operate on UK working hours (Monday to Friday, 9am to 5:30pm GMT). Turnaround
              times are agreed per service at the point of engagement. Standard turnaround
              commitments are published on individual service pages.
            </p>
            <p>
              All work is reviewed by a qualified accountant before delivery. If you identify
              an error, notify us within 5 working days of delivery. We will correct and redeliver
              at no additional charge.
            </p>

            <h2>7. Client responsibilities</h2>
            <p>
              The Client is responsible for:
            </p>
            <ul>
              <li>Providing accurate, complete source data in a timely manner</li>
              <li>Reviewing and approving all work before it is filed or delivered to end-clients</li>
              <li>Retaining filing authority for all HMRC submissions</li>
              <li>Ensuring their own compliance with professional body obligations</li>
              <li>Maintaining their own professional indemnity insurance</li>
            </ul>
            <p>
              Sixth Ledger is not responsible for errors arising from incomplete, inaccurate,
              or late provision of source data by the Client.
            </p>

            <h2>8. Data processing</h2>
            <p>
              The handling of personal data is governed by the Data Processing Agreement (DPA)
              which forms part of every engagement. In the event of conflict between these Terms
              and the DPA on data-related matters, the DPA prevails.
            </p>
            <p>
              See our <Link to="/privacy" className="text-lime hover:underline">Privacy Policy</Link> for
              full details of how personal data is handled.
            </p>

            <h2>9. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all information received from the other
              party in connection with the engagement, including client data, pricing, processes,
              and business information. This obligation survives termination of the engagement
              for a period of 5 years.
            </p>

            <h2>10. Intellectual property</h2>
            <p>
              All work product delivered to the Client becomes the property of the Client upon
              payment of relevant fees. Sixth Ledger retains ownership of its internal processes,
              templates, and methodologies.
            </p>

            <h2>11. Limitation of liability</h2>
            <p>
              Sixth Ledger's total liability to the Client in connection with any engagement
              shall not exceed the fees paid by the Client in the 3 months preceding the claim.
              We are not liable for indirect, consequential, or pure economic losses.
            </p>
            <p>
              Nothing in these terms limits liability for fraud, wilful misconduct, or personal
              injury caused by negligence.
            </p>

            <h2>12. Termination</h2>
            <p>
              Either party may terminate the engagement by giving 30 days' written notice.
              Per-job arrangements may be terminated on completion of the current job.
              Upon termination, all data is handled in accordance with the DPA terms.
            </p>

            <h2>13. Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Both parties submit
              to the exclusive jurisdiction of the courts of England and Wales for the resolution
              of disputes arising under these terms.
            </p>

            <h2>14. Contact</h2>
            <p>
              For any enquiries regarding these terms, contact us at info@sixthledger.com.
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
