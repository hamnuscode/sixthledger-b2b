import FAQItem from '../ui/FAQItem'
import { homeFaqs } from '../../data/faqs'
import { Reveal } from '../ui/Reveal'

export default function FAQSection() {
  return (
    <section
      className="section border-t border-smoke"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="faq-heading"
    >
      <div className="container">
        {/* Header */}
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between pb-10 border-b border-smoke">
            <div>
              <p className="eyebrow mb-4">FAQ</p>
              <h2
                id="faq-heading"
                className="font-display text-4xl md:text-5xl text-pure"
                style={{ letterSpacing: '-0.03em' }}
              >
                Common{' '}
                <span className="italic">questions</span>
              </h2>
            </div>
            <p className="font-body text-sm text-ash leading-relaxed hidden md:block max-w-xs text-right pb-1">
              Can't find the answer?{' '}
              <a href="/contact" className="text-lime hover:underline underline-offset-2">
                Talk to us directly
              </a>
              .
            </p>
          </div>
        </Reveal>

        {/* Accordion — full width, numbered */}
        <Reveal delay={0.1}>
          <div role="list" className="mt-0">
            {homeFaqs.map((faq, i) => (
              <div key={i} role="listitem">
                <FAQItem
                  question={faq.q}
                  answer={faq.a}
                  defaultOpen={i === 0}
                  index={i}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} type="fade">
          <p className="mt-6 md:hidden font-body text-sm text-ash">
            Can't find the answer?{' '}
            <a href="/contact" className="text-lime hover:underline underline-offset-2">
              Talk to us directly
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
