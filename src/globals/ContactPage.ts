import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact Page',
  admin: {
    description: 'Manage contact page content and information',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Header',
          fields: [
            {
              name: 'heading',
              label: 'Page Heading',
              type: 'text',
              required: true,
              defaultValue: 'Contact Us',
              admin: {
                description: 'Main heading shown at the top of the contact page',
              },
            },
            {
              name: 'subheading',
              label: 'Page Subheading',
              type: 'textarea',
              required: true,
              defaultValue: 'Get in touch with our team. We\'re here to help.',
              admin: {
                description: 'Subheading text below the main heading',
              },
            },
          ],
        },
        {
          label: 'Contact Information',
          fields: [
            {
              name: 'email',
              label: 'Email Address',
              type: 'text',
              required: true,
              defaultValue: 'hello@example.com',
              admin: {
                description: 'Primary contact email address',
              },
            },
            {
              name: 'emailDescription',
              label: 'Email Description',
              type: 'text',
              defaultValue: 'We respond to all emails within 24 hours.',
              admin: {
                description: 'Description text for the email section',
              },
            },
            {
              name: 'officeAddress',
              label: 'Office Address',
              type: 'textarea',
              required: true,
              defaultValue: '123 Business Street, Suite 100, City, Country',
              admin: {
                description: 'Physical office address',
              },
            },
            {
              name: 'officeDescription',
              label: 'Office Description',
              type: 'text',
              defaultValue: 'Drop by our office for a chat.',
              admin: {
                description: 'Description text for the office section',
              },
            },
            {
              name: 'phoneNumbers',
              label: 'Phone Numbers',
              type: 'array',
              required: true,
              minRows: 1,
              defaultValue: [
                { number: '+1 (555) 123-4567' },
              ],
              fields: [
                {
                  name: 'number',
                  label: 'Phone Number',
                  type: 'text',
                  required: true,
                },
              ],
              admin: {
                description: 'List of contact phone numbers',
              },
            },
            {
              name: 'phoneDescription',
              label: 'Phone Description',
              type: 'text',
              defaultValue: 'We\'re available Mon-Fri, 9am-5pm.',
              admin: {
                description: 'Description text for the phone section',
              },
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'socialHeading',
              label: 'Social Section Heading',
              type: 'text',
              required: true,
              defaultValue: 'Find us online',
              admin: {
                description: 'Heading for the social media section',
              },
            },
            {
              name: 'socialLinks',
              label: 'Social Media Links',
              type: 'array',
              defaultValue: [
                { platform: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
                { platform: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
                { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
                { platform: 'Instagram', url: 'https://instagram.com/yourusername', icon: 'instagram' },
              ],
              fields: [
                {
                  name: 'platform',
                  label: 'Platform Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  label: 'Profile URL',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'icon',
                  label: 'Icon',
                  type: 'select',
                  required: true,
                  defaultValue: 'github',
                  options: [
                    { label: 'GitHub', value: 'github' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'Discord', value: 'discord' },
                    { label: 'Slack', value: 'slack' },
                  ],
                },
              ],
              admin: {
                description: 'List of social media profiles',
              },
            },
          ],
        },
      ],
    },
  ],
}
