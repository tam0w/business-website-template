import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage Content',
  admin: {
    description: 'Manage homepage hero section and welcome messages',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroHeading',
              label: 'Hero Heading',
              type: 'text',
              required: true,
              defaultValue: 'Welcome to your new project.',
              admin: {
                description: 'Main heading shown on the homepage',
              },
            },
            {
              name: 'heroSubheading',
              label: 'Hero Subheading',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Optional subheading text below the main hero heading',
              },
            },
            {
              name: 'heroImage',
              label: 'Hero Image',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Optional hero background or featured image',
              },
            },
          ],
        },
        {
          label: 'Authenticated User',
          fields: [
            {
              name: 'loggedInGreeting',
              label: 'Logged In Greeting',
              type: 'text',
              required: true,
              defaultValue: 'Welcome back',
              admin: {
                description: 'Greeting text shown to logged-in users (email will be appended automatically)',
              },
            },
          ],
        },
        {
          label: 'CTA Section',
          fields: [
            {
              name: 'ctaHeading',
              label: 'CTA Heading',
              type: 'text',
              required: false,
              admin: {
                description: 'Call-to-action heading',
              },
            },
            {
              name: 'ctaDescription',
              label: 'CTA Description',
              type: 'textarea',
              required: false,
              admin: {
                description: 'Call-to-action description text',
              },
            },
            {
              name: 'ctaButtonText',
              label: 'CTA Button Text',
              type: 'text',
              required: false,
              defaultValue: 'Get Started',
              admin: {
                description: 'Text for the CTA button',
              },
            },
            {
              name: 'ctaButtonLink',
              label: 'CTA Button Link',
              type: 'text',
              required: false,
              admin: {
                description: 'URL for the CTA button',
              },
            },
          ],
        },
      ],
    },
  ],
}
