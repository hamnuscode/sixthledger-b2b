import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../../data/services'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-xs uppercase tracking-label transition-colors duration-150 pb-0.5 border-b-2 ${
      isActive
        ? 'text-lime border-b-lime'
        : 'text-ash hover:text-bone border-b-transparent hover:border-b-smoke'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled || menuOpen ? 'bg-obsidian border-b border-smoke' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label="Sixth Ledger — Home"
          >
            <img
              src="/logo-black.png"
              alt="Sixth Ledger"
              className="h-6 md:h-7 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`font-mono text-xs uppercase tracking-label transition-colors duration-150 flex items-center gap-1.5 pb-0.5 border-b-2 ${
                  servicesOpen
                    ? 'text-lime border-b-lime'
                    : 'text-ash hover:text-bone border-b-transparent hover:border-b-smoke'
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <motion.svg
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.18 }}
                  width="10" height="10" viewBox="0 0 10 10" fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-4 w-64 bg-obsidian border border-smoke py-0 z-50"
                    role="menu"
                  >
                    {services.map(service => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="flex items-center gap-3 px-4 py-3 border-b border-smoke/40 last:border-b-0 hover:bg-coal transition-colors group"
                        role="menuitem"
                      >
                        <span className="font-mono text-xs text-ash group-hover:text-lime transition-colors w-8">{service.number}</span>
                        <span className="font-body text-sm text-bone group-hover:text-pure transition-colors">{service.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/how-we-work" className={navClass}>How We Work</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/compliance" className={navClass}>Compliance</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
            <Button to="/contact" size="sm">Book a 20-min call</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block h-px bg-bone transition-all duration-200 ${menuOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'}`} />
            <span className={`block h-px bg-bone transition-all duration-200 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
            <span className={`block h-px bg-bone transition-all duration-200 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-6'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-16 bg-obsidian border-t border-smoke overflow-y-auto z-40"
          >
            <div className="container py-8 flex flex-col gap-0">
              <MobileNavLink to="/" label="Home" />
              <div className="border-b border-smoke/40 pb-2 mb-2">
                <p className="font-mono text-xs text-ash uppercase tracking-label px-0 pt-4 pb-3">Services</p>
                {services.map(service => (
                  <MobileNavLink
                    key={service.id}
                    to={`/services/${service.id}`}
                    label={service.title}
                    sub={service.number}
                  />
                ))}
              </div>
              <MobileNavLink to="/how-we-work" label="How We Work" />
              <MobileNavLink to="/about" label="About" />
              <MobileNavLink to="/compliance" label="Compliance" />
              <MobileNavLink to="/contact" label="Contact" />
              <div className="mt-8 pt-6 border-t border-smoke">
                <Button to="/contact" size="md" className="w-full justify-center">Book a 20-minute call</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileNavLink({ to, label, sub }: { to: string; label: string; sub?: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-4 py-3.5 border-b border-smoke/30 transition-colors ${
          isActive ? 'text-lime' : 'text-bone hover:text-pure'
        }`
      }
    >
      {sub && <span className="font-mono text-xs text-ash w-8">{sub}</span>}
      <span className="font-mono text-xs uppercase tracking-label">{label}</span>
    </NavLink>
  )
}
