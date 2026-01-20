import type { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  heading: 'Get in Touch',
  subheading: "Tell us about your company and what you're trying to achieve. If we think we can help, we'll schedule a call to explore working together.",
  email: 'hello@ryebrim.com',
  emailDescription: 'We respond within 24 hours.',
  officeAddress: 'Mangaluru, Karnataka\nIndia',
  officeDescription: 'We work with clients across India and globally.',
  phoneNumbers: [
    { number: '+91 (XXX) XXX-XXXX' },
  ],
  phoneDescription: 'Mon-Fri, 10am-6pm IST',
  socialHeading: 'Follow Us',
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/ryebrim', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/ryebrim', icon: 'twitter' },
  ],
}
