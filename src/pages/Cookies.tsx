import { Link } from 'react-router-dom'

export default function Cookies() {
  return (
    <>
      <section className="pt-40 pb-28 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Cookie Policy</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-5">
            Cookie Policy
          </h1>
          <p className="font-body text-bone text-sm">
            Last updated: 26 May 2025 &nbsp;·&nbsp; Effective date: 1 June 2025
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container">
          <div className="max-w-3xl prose-custom">

            <h2>1. What are cookies</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They
              allow the site to remember your actions and preferences (such as language or display
              settings) over time, so you do not have to re-enter them whenever you visit the site
              or browse from one page to another.
            </p>

            <h2>2. How we use cookies</h2>
            <p>
              The b2b.sixthledger.com website uses a minimal set of cookies. We do not use
              advertising cookies, tracking pixels, or third party analytics that build profiles
              of individual users across websites.
            </p>

            <h2>3. Cookies we use</h2>

            <h3>Strictly necessary cookies</h3>
            <p>
              These cookies are required for the website to function and cannot be switched off.
              They are typically set in response to actions you take, such as submitting a form
              or setting privacy preferences.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Cookie name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>_sl_session</code></td>
                    <td>Session management for form submissions</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td><code>cookie_consent</code></td>
                    <td>Stores your cookie consent preferences</td>
                    <td>12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Analytics cookies</h3>
            <p>
              We use privacy-respecting analytics to understand how visitors use our website.
              These cookies collect anonymised, aggregated data and cannot be used to identify
              individual visitors.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Cookie name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>_analytics</code></td>
                    <td>Anonymised page view and session data</td>
                    <td>13 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Third party cookies</h3>
            <p>
              If you use the calendar booking widget (powered by Cal.com) to schedule a discovery
              call, Cal.com may set its own cookies to manage the booking flow. These are subject
              to Cal.com's own privacy policy.
            </p>

            <h2>4. Managing cookies</h2>
            <p>
              You can control and delete cookies through your browser settings. Most browsers allow
              you to:
            </p>
            <ul>
              <li>View cookies stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from all or specific websites</li>
              <li>Set preferences for cookies before they are placed</li>
            </ul>
            <p>
              Note that disabling cookies may affect the functionality of some website features,
              including the contact form and booking widget.
            </p>
            <p>
              For instructions specific to your browser, visit:
            </p>
            <ul>
              <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
              <li>Firefox: Settings → Privacy and Security → Cookies and Site Data</li>
              <li>Safari: Preferences → Privacy → Manage Website Data</li>
              <li>Edge: Settings → Cookies and site permissions</li>
            </ul>

            <h2>5. Changes to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time. The date at the top of this
              page shows when it was last updated. Continued use of the site following any changes
              constitutes acceptance of the updated policy.
            </p>

            <h2>6. Contact</h2>
            <p>
              If you have questions about our use of cookies, contact us at info@sixthledger.com
              or visit our <Link to="/privacy" className="text-lime hover:underline">Privacy Policy</Link>.
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
