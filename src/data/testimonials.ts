export interface Testimonial {
  quote: string
  name: string
  role: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'The answer to your capacity crunch, without the hiring risk.',
    name: 'Practice Manager',
    role: '12 partner firm',
    location: 'South East England',
  },
  {
    quote: 'January peak handled without a single missed deadline. We gave them 40 returns in the first week.',
    name: 'Senior Partner',
    role: 'Independent Practice',
    location: 'Manchester',
  },
  {
    quote: 'ICO registered, DPA signed before day one, and they work inside our software. No client ever knew.',
    name: 'Director',
    role: 'Boutique Tax Practice',
    location: 'London',
  },
]
