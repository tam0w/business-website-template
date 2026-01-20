import type { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  heading: 'Contact Us',
  subheading: "Get in touch with our team. We're here to help and answer any questions you might have.",
  email: 'hello@seerah.dev',
  emailDescription: 'We respond to all emails within 24 hours.',
  officeAddress: '123 Business Street, Suite 100\nYour City, ST 12345\nUnited States',
  officeDescription: 'Drop by our office for a chat.',
  phoneNumbers: [
    { number: '+1 (555) 123-4567' },
    { number: '+1 (555) 987-6543' },
  ],
  phoneDescription: "We're available Mon-Fri, 9am-5pm EST.",
  socialHeading: 'Find us online',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/yourusername/seerah', icon: 'github' },
    { platform: 'Twitter', url: 'https://twitter.com/seerahdev', icon: 'twitter' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/seerah', icon: 'linkedin' },
  ],
}
