import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ContactPage as ContactPageComponent } from '@/components/ui/contact-page'

export default async function ContactPage() {
  const payload = await getPayload({ config })

  const contactData = await payload.findGlobal({
    slug: 'contact-page',
  })

  // Extract data with fallbacks
  const heading = contactData?.heading || 'Contact Us'
  const subheading = contactData?.subheading || 'Get in touch with our team.'
  const email = contactData?.email || 'hello@example.com'
  const emailDescription = contactData?.emailDescription || 'We respond to all emails within 24 hours.'
  const officeAddress = contactData?.officeAddress || '123 Business Street, Suite 100, City, Country'
  const officeDescription = contactData?.officeDescription || 'Drop by our office for a chat.'
  const phoneNumbers = contactData?.phoneNumbers || [{ number: '+1 (555) 123-4567' }]
  const phoneDescription = contactData?.phoneDescription || 'We\'re available Mon-Fri, 9am-5pm.'
  const socialHeading = contactData?.socialHeading || 'Find us online'
  const socialLinks = contactData?.socialLinks || []

  return (
    <ContactPageComponent
      heading={heading}
      subheading={subheading}
      email={email}
      emailDescription={emailDescription}
      officeAddress={officeAddress}
      officeDescription={officeDescription}
      phoneNumbers={phoneNumbers}
      phoneDescription={phoneDescription}
      socialHeading={socialHeading}
      socialLinks={socialLinks}
    />
  )
}
