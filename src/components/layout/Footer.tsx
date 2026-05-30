import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-smoke" role="contentinfo">
      <div className="container">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-0 divide-y md:divide-y-0 md:divide-x divide-smoke border-b border-smoke">
          {/* Brand column */}
          <div className="md:col-span-4 py-12 md:pr-12">
            <Link to="/" aria-label="Sixth Ledger, Home" className="block mb-6">
              <img
                src="/logo-black.png"
                alt="Sixth Ledger"
                className="h-6 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="font-body text-sm text-ash leading-relaxed mb-6 max-w-xs">
              White label accounting support for UK practices. ACCA qualified. ICO registered. UK GDPR compliant. IDTA ready.
            </p>
            <div className="space-y-1.5">
              <p className="font-mono text-xs text-ash uppercase tracking-label">
                ICO Reg:{' '}
                <a
                  href="https://ico.org.uk/ESDWebPages/Entry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone hover:text-lime transition-colors"
                >
                  ZA (pending)
                </a>
              </p>
              <p className="font-mono text-xs text-ash uppercase tracking-label">ACCA led delivery</p>
              
            </div>
          </div>

          {/* Services */}
          <div className="col-span-2 md:col-span-4 py-12 md:px-12">
            <p className="font-mono text-xs text-ash uppercase tracking-label mb-6">Services</p>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-2">
                {services.slice(0, 5).map(s => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.id}`}
                      className="font-body text-sm text-bone hover:text-lime transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-ash/60 group-hover:text-lime/60 transition-colors">{s.number}</span>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {services.slice(5).map(s => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.id}`}
                      className="font-body text-sm text-bone hover:text-lime transition-colors flex items-center gap-2 group"
                    >
                      <span className="font-mono text-xs text-ash/60 group-hover:text-lime/60 transition-colors">{s.number}</span>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company + Contact */}
          <div className="col-span-2 md:col-span-4 py-12 md:pl-12 grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-xs text-ash uppercase tracking-label mb-6">Company</p>
              <ul className="space-y-2">
                {[
                  { to: '/about', label: 'About' },
                  { to: '/how-we-work', label: 'How We Work' },
                  { to: '/compliance', label: 'Compliance' },
                  { to: '/contact', label: 'Contact' },
                ].map(item => (
                  <li key={item.to}>
                    <Link to={item.to} className="font-body text-sm text-bone hover:text-lime transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-ash uppercase tracking-label mb-6">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@sixthledger.com" className="font-body text-sm text-bone hover:text-lime transition-colors">
                    info@sixthledger.com
                  </a>
                </li>

                <li>
                  <address className="font-body text-xs text-ash not-italic leading-relaxed">
                    Islamabad, Pakistan
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          <p className="font-mono text-xs text-ash uppercase tracking-label">
            © {new Date().getFullYear()} SIXTHLEDGER (PVT) LTD
          </p>
          <div className="flex flex-wrap gap-6">
              <a href="https://drive.google.com/drive/folders/1FQoRnfnJvz4Ctc_RhHTjiYUhzJZW5bRX?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-ash hover:text-lime transition-colors uppercase tracking-label">Privacy Policy</a>
              <Link to="/terms" className="font-mono text-xs text-ash hover:text-lime transition-colors uppercase tracking-label">Terms</Link>
              <Link to="/cookies" className="font-mono text-xs text-ash hover:text-lime transition-colors uppercase tracking-label">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
