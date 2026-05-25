export interface Testimonial {
  quote: string
  name: string
  business: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'We handed over three January self-assessments as a trial. They came back ready to file — correct, fully documented, no queries. We now use Sixth Ledger for our entire SA run. January is manageable again.',
    name: 'James Hartley',
    business: 'Hartley Moore Accountants, Manchester',
    service: 'Self-Assessment',
  },
  {
    quote: 'The compliance documentation was the first thing I asked for. ICO number, signed DPA, sub-processor list — everything ready before we started. That level of preparation is rare in an outsourcing partner.',
    name: 'Sarah Chen',
    business: 'Chen & Associates, London',
    service: 'Bookkeeping & Payroll',
  },
  {
    quote: "We doubled our capacity during year-end without a single new hire. The accounts come back formatted to our template, ready for partner review. It's exactly what we needed and exactly what we were promised.",
    name: 'Michael Davidson',
    business: 'Davidson Accountancy Group, Leeds',
    service: 'Year-End Accounts',
  },
]
