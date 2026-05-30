export interface Testimonial {
  quote: string
  name: string
  business: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'We handled our January self assessment overflow through Sixth Ledger. Turnaround was faster than our internal team and the quality held up across every return.',
    name: 'Practice Manager, 12 partner firm, South East England',
    business: '',
    service: 'Self Assessment',
  },
  {
    quote: 'Year end used to mean partners working weekends. We handed the preparation work to Sixth Ledger and our team moved to review only. The capacity difference was immediate.',
    name: 'Director, Regional Accountancy Practice, Midlands',
    business: '',
    service: 'Year-End Accounts',
  },
  {
    quote: 'The compliance documentation was in order before we even asked. DPA signed, ICO registration confirmed, IDTA ready. It made the due diligence conversation very short.',
    name: 'Managing Partner, Boutique Practice, London',
    business: '',
    service: 'Compliance',
  },
]
