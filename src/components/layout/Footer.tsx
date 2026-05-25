import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-smoke" role="contentinfo">
      <div className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" aria-label="Sixth Ledger — Home">
              <img
                src="/logo-black.png"
                alt="Sixth Ledger"
                className="h-7 w-auto mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="font-body text-xs text-ash leading-relaxed mb-4">
              ACCA-led accounting outsourcing for UK practices. White-label.
              Compliant. UK working hours.
            </p>
            <p className="font-mono text-xs text-ash uppercase tracking-label">
              ICO Reg:{' '}
              <a
                href="https://ico.org.uk/ESDWebPages/Entry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-lime transition-colors"
              >
                ZA — pending
              </a>
            </p>
            <p className="font-mono text-xs text-ash uppercase tracking-label mt-1">
              ACCA-led delivery
            </p>
          </div>

          {/* Services col 1 */}
          <div>
            <p className="font-mono text-xs text-ash uppercase tracking-label mb-4">Services</p>
            <ul className="space-y-2">
              {services.slice(0, 5).map(s => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="font-body text-xs text-bone hover:text-lime transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div>
            <p className="font-mono text-xs text-ash uppercase tracking-label mb-4">&nbsp;</p>
            <ul className="space-y-2">
              {services.slice(5).map(s => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="font-body text-xs text-bone hover:text-lime transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-xs text-ash uppercase tracking-label mb-4">Company</p>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About' },
                { to: '/how-we-work', label: 'How We Work' },
                { to: '/compliance', label: 'Compliance' },
                { to: '/contact', label: 'Contact' },
              ].map(item => (
                <li key={item.to}>
                  <Link to={item.to} className="font-body text-xs text-bone hover:text-lime transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-ash uppercase tracking-label mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@sixthledger.com" className="font-body text-xs text-bone hover:text-lime transition-colors">
                  info@sixthledger.com
                </a>
              </li>
              <li>
                <a href="tel:+923000692222" className="font-body text-xs text-bone hover:text-lime transition-colors">
                  +92 300 0692222
                </a>
              </li>
              <li>
                <address className="font-body text-xs text-ash not-italic leading-relaxed">
                  Emaar Canyon Views<br />Islamabad, Pakistan
                </address>
              </li>
              <li className="pt-1">
                <span className="font-mono text-xs text-ash uppercase tracking-label">
                  Mon–Fri · UK hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-smoke pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-ash uppercase tracking-label">
            © {new Date().getFullYear()} SIXTHLEDGER (PVT) LTD · Designed for UK practices
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { to: '/privacy', label: 'Privacy Policy' },
              { to: '/terms', label: 'Terms' },
              { to: '/cookies', label: 'Cookies' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="font-mono text-xs text-ash hover:text-lime transition-colors uppercase tracking-label"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
