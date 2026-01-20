import type { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  heading: "Let's Talk",
  subheading: "Ready to grow your business? We'd love to hear about your goals and explore how we can help.",
  email: 'hello@ryebrim.com',
  emailDescription: 'We respond within 24 hours on business days.',
  officeAddress: 'Mangaluru, Karnataka\nIndia',
  officeDescription: 'We work with clients globally.',
  phoneNumbers: [
    { number: '+91 (XXX) XXX-XXXX' },
  ],
  phoneDescription: 'Available Mon-Fri, 10am-6pm IST.',
  socialHeading: 'Connect with us',
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/ryebrim', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/ryebrim', icon: 'twitter' },
    { platform: 'Instagram', url: 'https://instagram.com/ryebrim', icon: 'instagram' },
  ],
}
