import type { GlobalConfig } from 'payload'

export const CareersPage: GlobalConfig = {
  slug: 'careers-page',
  label: 'Careers Page Content',
  admin: {
    description: 'Manage careers page headings, descriptions, and empty states',
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
              defaultValue: 'Open Positions',
              admin: {
                description: 'Main heading displayed at the top of the careers page',
              },
            },
            {
              name: 'description',
              label: 'Page Description',
              type: 'textarea',
              required: true,
              defaultValue: 'Join our team and help shape the future of cybersecurity and data services',
              admin: {
                description: 'Subheading text below the main heading',
              },
            },
          ],
        },
        {
          label: 'Empty State',
          fields: [
            {
              name: 'emptyStateTitle',
              label: 'Empty State Title',
              type: 'text',
              required: true,
              defaultValue: 'No open positions',
              admin: {
                description: 'Title shown when there are no open positions',
              },
            },
            {
              name: 'emptyStateDescription',
              label: 'Empty State Description',
              type: 'textarea',
              required: true,
              defaultValue: 'Check back later for new opportunities.',
              admin: {
                description: 'Description shown when there are no open positions',
              },
            },
          ],
        },
        {
          label: 'Call to Action',
          fields: [
            {
              name: 'ctaText',
              label: 'CTA Button Text',
              type: 'text',
              required: true,
              defaultValue: 'View details',
              admin: {
                description: 'Text for the "view details" link on each career card',
              },
            },
          ],
        },
      ],
    },
  ],
}
