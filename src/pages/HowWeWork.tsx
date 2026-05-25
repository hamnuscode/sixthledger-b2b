import { Link } from 'react-router-dom'
import { Reveal, Stagger, item } from '../components/ui/Reveal'
import { motion } from 'framer-motion'
import EngagementModels from '../components/sections/EngagementModels'
import FAQSection from '../components/sections/FAQSection'
import ClosingCTA from '../components/sections/ClosingCTA'

const onboardingSteps = [
  {
    phase: 'Phase 01',
    title: 'Discovery call',
    duration: '20 minutes',
    body: 'We ask about your practice — size, software, client mix, peak periods, what\'s breaking. You ask us about qualifications, compliance, process. We confirm whether we\'re the right fit. No sales deck, no pressure.',
    outcome: 'You understand exactly what we can do and at what cost.',
  },
  {
    phase: 'Phase 02',
    title: 'Paperwork',
    duration: '1 business day',
    body: 'Engagement letter defining scope, turnarounds, and fees. Signed DPA under UK GDPR. NDA available on request. We prepare all documents; you review and return. One business day from call to signed.',
    outcome: 'Compliant from day one. Nothing starts without documentation.',
  },
  {
    phase: 'Phase 03',
    title: 'Trial job',
    duration: '5–10 working days',
    body: 'You send us one live client job. We process it in your accounting software and deliver the output to you for review. You check it against your quality standards. We incorporate any feedback. No charge for corrections on the trial.',
    outcome: 'You judge our quality before committing to anything ongoing.',
  },
  {
    phase: 'Phase 04',
    title: 'Ongoing engagement',
    duration: 'As agreed',
    body: 'Once satisfied, agree a scope — per-job, monthly retainer, or dedicated allocation. Work flows through a simple instruction system. Outputs delivered to your agreed schedule. Scale up or down with 30 days\' notice.',
    outcome: 'Capacity that scales with your practice, not against it.',
  },
]

const principles = [
  {
    title: 'White-label by default',
    body: 'We work under your credentials and deliver to you. Your clients see your practice name, not ours. This is not optional — it is how we operate on every engagement.',
  },
  {
    title: 'Nothing without documentation',
    body: 'DPA signed before work starts. No exceptions. UK GDPR compliance is not a box we tick — it is a condition of every engagement.',
  },
  {
    title: 'You review, we fix',
    body: 'Every output is delivered to your review. If it does not meet your standards, we correct it at no additional charge. Quality is not a feature — it is the baseline.',
  },
  {
    title: 'One contact, clear lines',
    body: 'You have a named contact at Sixth Ledger for your engagement. Instructions go to one person. Questions come back from one person. No ticketing systems, no anonymous mailboxes.',
  },
]

export default function HowWeWork() {
  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">How We Work</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Process</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4 max-w-2xl" style={{ letterSpacing: '-0.02em' }}>
            From first call to{' '}
            <span className="italic">first delivery</span>
            {' '}in a week.
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            Here is exactly how we engage, what the paperwork looks like, how the trial job
            works, and how ongoing capacity is managed. No ambiguity.
          </p>
        </div>
      </section>

      {/* Onboarding phases */}
      <section className="section bg-obsidian" aria-label="Onboarding process">
        <div className="container">
          <Stagger className="space-y-0 border border-smoke rounded-sm overflow-hidden" stagger={0.1}>
            {onboardingSteps.map((step, i) => (
              <motion.div
                key={step.phase}
                variants={item}
                className={`grid md:grid-cols-4 gap-6 p-8 group hover:bg-coal transition-colors duration-200 ${
                  i < onboardingSteps.length - 1 ? 'border-b border-smoke' : ''
                }`}
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-lime uppercase tracking-label">{step.phase}</span>
                  <h2 className="font-display text-lg text-pure mt-2 mb-1">{step.title}</h2>
                  <p className="font-mono text-xs text-ash uppercase tracking-label">{step.duration}</p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <p className="font-body text-sm text-bone leading-relaxed">{step.body}</p>
                  <div className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-lime" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-body text-xs text-lime">{step.outcome}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Operating principles */}
      <section className="section" style={{ background: 'var(--coal)' }} aria-labelledby="principles-heading">
        <div className="container">
          <Reveal className="max-w-2xl mb-12" delay={0.05}>
            <p className="eyebrow mb-4">How we operate</p>
            <h2 id="principles-heading" className="font-display text-3xl md:text-4xl text-pure">
              Four principles that{' '}
              <span className="italic">don't move.</span>
            </h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-6" stagger={0.1}>
            {principles.map(p => (
              <motion.div key={p.title} variants={item} className="bg-obsidian border border-smoke rounded-sm p-6 hover:border-lime/30 transition-colors duration-200">
                <h3 className="font-display text-lg text-pure mb-3">{p.title}</h3>
                <p className="font-body text-sm text-bone leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <EngagementModels />
      <FAQSection />
      <ClosingCTA />
    </>
  )
}
