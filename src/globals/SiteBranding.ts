import type { GlobalConfig } from 'payload'

export const SiteBranding: GlobalConfig = {
  slug: 'site-branding',
  label: 'Site Branding',
  admin: {
    description: 'Manage your site logo and branding assets',
  },
  fields: [
    {
      name: 'logoIcon',
      label: 'Logo Icon',
      type: 'text',
      required: true,
      defaultValue: 'react',
      admin: {
        description: 'Font Awesome brand icon name (e.g., "react", "apple", "google", "stripe"). Find icons at fontawesome.com/icons',
      },
    },
    {
      name: 'logoText',
      label: 'Logo Text',
      type: 'text',
      required: true,
      defaultValue: 'Your Company',
      admin: {
        description: 'Text to display next to the logo icon',
      },
    },
    {
      name: 'companyName',
      label: 'Company Name',
      type: 'text',
      required: true,
      defaultValue: 'Your Company',
      admin: {
        description: 'Full company name for metadata and copyright',
      },
    },
  ],
}
