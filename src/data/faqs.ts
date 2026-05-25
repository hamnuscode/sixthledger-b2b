export interface FAQ {
  q: string
  a: string
}

export const homeFaqs: FAQ[] = [
  {
    q: 'Will my clients know that you exist?',
    a: 'No. We are white-label by default. We work under your practice credentials in your accounting software, deliver outputs to you (not to your clients), and never communicate with end clients unless you explicitly authorise it. Your client relationship remains entirely yours.',
  },
  {
    q: 'How do you handle client data and confidentiality?',
    a: 'Every engagement starts with a signed Data Processing Agreement (DPA) under UK GDPR. We are ICO-registered as a data controller. Client data is processed in IDTA-compliant conditions. We provide our full GDPR pack (DPA template, sub-processor list, data retention schedule) before work begins.',
  },
  {
    q: 'What qualifications does your team hold?',
    a: 'Our team is led by ACCA-qualified accountants and ACCA finalists. All work is delivered and reviewed under ACCA professional ethics requirements — including confidentiality, integrity, and professional competence. We are not a data entry service. Every output is reviewed by a qualified professional before delivery.',
  },
  {
    q: 'What accounting software do you work in?',
    a: 'We work in Xero, QuickBooks, Sage, FreeAgent, and most major cloud accounting platforms. For compliance work, we operate in TaxCalc, Iris, CCH, and Digita. If you use a platform not listed, ask us — we can usually accommodate it.',
  },
  {
    q: 'How does the trial job work?',
    a: 'You give us one live client job — a VAT return, a set of management accounts, a self-assessment return. We process it and deliver the output to you for review. You check it against your own standards. If you\'re satisfied, we discuss an ongoing arrangement. If not, there is no obligation.',
  },
  {
    q: 'What are your typical turnaround times?',
    a: 'Bookkeeping: 5 working days from bank statements. VAT returns: delivered 5 working days before submission deadline. Payroll: 3 working days before payment date. Year-end accounts: 10 working days from complete trial balance. All turnarounds are agreed in the engagement letter.',
  },
  {
    q: 'Do you work to UK working hours?',
    a: 'Yes. Our team operates on UK working hours (9am–5:30pm GMT) during standard months, and extends to UK peak hours during January self-assessment season and year-end periods. You reach a real person during your working day.',
  },
  {
    q: 'How does pricing work?',
    a: 'We offer three engagement models: per-job pricing (pay for each task individually), monthly retainer (fixed fee for a defined scope of ongoing work), and full team allocation (a dedicated resource block for practices with high or variable volume). Specific pricing is confirmed at the discovery call based on your client mix and expected volume.',
  },
]
