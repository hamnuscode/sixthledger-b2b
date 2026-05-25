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
    body: "We ask about your practice — size, software, client mix, peak periods, what's breaking. You ask us about qualifications, compliance, process. We confirm whether we're the right fit. No sales deck, no pressure.",
    outcome: 'You understand exactly what we can do and at what cost.',
  },
  {
    phase: 'Phase 02',
    title: 'Paperwork',
    duration: '1 business day',
    body: "Engagement letter defining scope, turnarounds, and fees. Signed DPA under UK GDPR. NDA available on request. We prepare all documents; you review and return. One business day from call to signed.",
    outcome: 'Compliant from day one. Nothing starts without documentation.',
  },
  {
    phase: 'Phase 03',
    title: 'Trial job',
    duration: '5–10 working days',
    body: "You send us one live client job. We process it in your accounting software and deliver the output to you for review. You check it against your quality standards. We incorporate any feedback. No charge for corrections on the trial.",
    outcome: 'You judge our quality before committing to anything ongoing.',
  },
  {
    phase: 'Phase 04',
    title: 'Ongoing engagement',
    duration: 'As agreed',
    body: "Once satisfied, agree a scope — per-job, monthly retainer, or dedicated allocation. Work flows through a simple instruction system. Outputs delivered to your agreed schedule. Scale up or down with 30 days' notice.",
    outcome: "Capacity that scales with your practice, not against it.",
  },
]

const principles = [
  {
    number: '01',
    title: 'White-label by default',
    body: 'We work under your credentials and deliver to you. Your clients see your practice name, not ours. This is not optional — it is how we operate on every engagement.',
  },
  {
    number: '02',
    title: 'Nothing without documentation',
    body: 'DPA signed before work starts. No exceptions. UK GDPR compliance is not a box we tick — it is a condition of every engagement.',
  },
  {
    number: '03',
    title: 'You review, we fix',
    body: 'Every output is delivered to your review. If it does not meet your standards, we correct it at no additional charge. Quality is not a feature — it is the baseline.',
  },
  {
    number: '04',
    title: 'One contact, clear lines',
    body: 'You have a named contact at Sixth Ledger for your engagement. Instructions go to one person. Questions come back from one person. No ticketing systems, no anonymous mailboxes.',
  },
]

export default function HowWeWork() {
  return (
    <>
      <section className="pt-40 pb-24 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">How We Work</li>
            </ol>
          </nav>
          <div className="flex items-end justify-between border-b border-smoke pb-8 mb-8">
            <div>
              <p className="eyebrow mb-4">Process</p>
              <h1
                className="font-display text-5xl md:text-6xl text-pure max-w-3xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                From first call to{' '}
                <span className="italic">first delivery</span>
                {' '}in a week.
              </h1>
            </div>
          </div>
          <p className="font-body text-bone text-lg leading-loose max-w-2xl">
            Here is exactly how we engage, what the paperwork looks like, how the trial job
            works, and how ongoing capacity is managed. No ambiguity.
          </p>
        </div>
      </section>

      {/* Onboarding phases — vertical timeline */}
      <section className="section bg-obsidian" aria-label="Onboarding process">
        <div className="container">
          <Reveal delay={0.05}>
            <div className="flex items-end justify-between pb-10 border-b border-smoke mb-0">
              <div>
                <p className="eyebrow mb-4">The four phases</p>
                <h2
                  className="font-display text-4xl md:text-5xl text-pure"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  How we onboard
                </h2>
              </div>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-smoke hidden md:block" aria-hidden="true" />
            <Stagger stagger={0.1}>
              {onboardingSteps.map((step, i) => (
                <motion.div
                  key={step.phase}
                  variants={item}
                  className="group relative md:pl-20 py-10 border-b border-smoke last:border-b-0 hover:bg-coal transition-colors duration-200"
                >
                  {/* Node */}
                  <div
                    className="hidden md:flex absolute left-0 top-10 w-12 h-12 items-center justify-center bg-obsidian border border-smoke group-hover:border-lime group-hover:bg-coal transition-all duration-200"
                    aria-hidden="true"
                  >
                    <span className="font-mono text-xs text-lime uppercase tracking-label">
                      {i + 1}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
                    <div className="md:col-span-1">
                      <p className="font-mono text-xs text-lime uppercase tracking-label mb-2">{step.phase}</p>
                      <h3 className="font-display text-2xl text-pure mb-1">{step.title}</h3>
                      <p className="font-mono text-xs text-ash uppercase tracking-label">{step.duration}</p>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <p className="font-body text-base text-bone leading-loose">{step.body}</p>
                      <div className="flex items-start gap-3 border-l-2 border-l-lime pl-4">
                        <span className="font-body text-sm text-lime leading-relaxed">{step.outcome}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="section border-t border-smoke" style={{ background: 'var(--coal)' }} aria-labelledby="principles-heading">
        <div className="container">
          <Reveal delay={0.05}>
            <div className="flex items-end justify-between pb-10 border-b border-smoke mb-0">
              <div>
                <p className="eyebrow mb-4">How we operate</p>
                <h2
                  id="principles-heading"
                  className="font-display text-4xl md:text-5xl text-pure"
                  style={{ letterSpacing: '-0.025em' }}
                >
                  Four principles that{' '}
                  <span className="italic">don't move.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <Stagger stagger={0.08}>
            {principles.map(p => (
              <motion.div
                key={p.number}
                variants={item}
                className="group grid md:grid-cols-12 gap-6 py-10 border-b border-smoke last:border-b-0 border-l-2 border-l-transparent hover:border-l-lime hover:bg-obsidian pl-4 hover:pl-8 transition-all duration-200 cursor-default"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-lime uppercase tracking-label">{p.number}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-xl text-pure">{p.title}</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="font-body text-base text-bone leading-loose">{p.body}</p>
                </div>
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
