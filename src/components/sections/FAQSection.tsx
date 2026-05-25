import FAQItem from '../ui/FAQItem'
import { homeFaqs } from '../../data/faqs'
import { Reveal } from '../ui/Reveal'

export default function FAQSection() {
  return (
    <section className="section" style={{ background: 'var(--coal)' }} aria-labelledby="faq-heading">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          <Reveal delay={0.05}>
            <p className="eyebrow mb-5">FAQ</p>
            <h2
              id="faq-heading"
              className="font-display text-4xl md:text-5xl text-pure mb-6"
            >
              Common{' '}
              <span className="italic">questions</span>
            </h2>
            <p className="font-body text-bone text-base leading-loose">
              What UK practices ask us before they start. Can't find the answer?{' '}
              <a href="/contact" className="text-lime hover:underline">
                Talk to us directly
              </a>
              .
            </p>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.12}>
            <div role="list">
              {homeFaqs.map((faq, i) => (
                <div key={i} role="listitem">
                  <FAQItem question={faq.q} answer={faq.a} defaultOpen={i === 0} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
