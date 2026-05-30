import { motion } from 'framer-motion'

const items = [
  {
    label: 'ACCA Qualified',
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 3h3l-2.5 2 1 3L7 7.5 4 9l1-3L2.5 4h3L7 1z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'QuickBooks',
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1"/><path d="M5 7a2 2 0 104 0V5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Xero',
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1"/><path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Sage',
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1"/><path d="M9 5.5a2.5 2.5 0 10-2 4.5c1 0 1.8-.5 2.3-1.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>,
  },
  {
    label: 'HMRC',
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 8h8M4 8V5.5c0-.5.5-1 1-1h4c.5 0 1 .5 1 1V8M5 4.5V4a2 2 0 014 0v.5M2 10h10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'ICO Registered',
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.1"/><path d="M7 5v4M7 4.5v-.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    label: 'UK GDPR',
    icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L2 3v4c0 3 2 5 5 6 3-1 5-3 5-6V3L7 1z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/><path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
]

export default function TrustStrip() {
  return (
    <motion.div
      className="border-b border-smoke overflow-x-auto"
      style={{ background: 'var(--coal)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="container">
        <div className="flex items-center gap-6 py-3 min-w-max">
          <span className="font-mono text-[10px] text-ash/60 uppercase tracking-widest flex-shrink-0">Works with</span>
          <span className="text-smoke" aria-hidden="true">|</span>
          {items.map((item, i) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-smoke/50 font-mono text-xs mr-4" aria-hidden="true">·</span>}
              <span className="text-ash/60">{item.icon}</span>
              <span className="font-mono text-[11px] text-ash/70 uppercase tracking-wide whitespace-nowrap">{item.label}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
