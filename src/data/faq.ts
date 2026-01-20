import type { FAQContent } from '@/types'

export const faqContent: FAQContent = {
  heading: 'Frequently Asked Questions',
  subheading: 'Everything you need to know about Seerah',
  faqs: [
    {
      question: 'What tech stack does Seerah use?',
      answer: 'Seerah is built with Next.js 14, PayloadCMS 3.0, TypeScript, Tailwind CSS, and Shadcn/ui components. It uses SQLite by default but supports PostgreSQL and MongoDB.',
    },
    {
      question: 'Is this template really free?',
      answer: 'Yes, Seerah is completely free and open source. Use it for personal projects, client work, or commercial applications without any restrictions.',
    },
    {
      question: 'How do I customize the content?',
      answer: 'All content is managed through PayloadCMS globals. Run the seed script, then edit everything through the admin panel at /admin. No code changes needed for content updates.',
    },
    {
      question: 'Can I use this for client projects?',
      answer: 'Absolutely. Seerah is designed to be a solid foundation for client work. The architecture is clean, the code is documented, and all components are customizable.',
    },
  ],
}
