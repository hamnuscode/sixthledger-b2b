import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
  index?: number
}

export default function FAQItem({ question, answer, defaultOpen = false, index }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={`border-l-2 transition-colors duration-200 pl-6 pb-6 pt-6 border-b border-smoke/40 ${
        open ? 'border-l-lime' : 'border-l-smoke/50 hover:border-l-ash'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 text-left focus-visible:outline-none"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          {index !== undefined && (
            <span className="font-mono text-xs text-ash uppercase tracking-label mt-1 flex-shrink-0 w-6">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
          <span
            className={`font-display text-lg leading-snug transition-colors duration-200 ${
              open ? 'text-pure' : 'text-bone hover:text-pure'
            }`}
          >
            {question}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex-shrink-0 mt-1.5 text-lime font-mono text-base leading-none"
          aria-hidden="true"
        >
          →
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-body text-bone text-base leading-loose pt-4 pr-8 max-w-2xl pl-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
