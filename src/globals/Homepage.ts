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
              defaultValue: 'Build Something Amazing',
              admin: {
                description: 'Main heading shown on the homepage',
              },
            },
            {
              name: 'heroSubheading',
              label: 'Hero Subheading',
              type: 'textarea',
              required: true,
              defaultValue: 'The modern platform for businesses that want to scale fast and build better products',
              admin: {
                description: 'Subheading text below the main hero heading',
              },
            },
            {
              name: 'heroPrimaryButtonText',
              label: 'Primary Button Text',
              type: 'text',
              required: true,
              defaultValue: 'Get Started',
              admin: {
                description: 'Text for the primary CTA button',
              },
            },
            {
              name: 'heroPrimaryButtonLink',
              label: 'Primary Button Link',
              type: 'text',
              required: false,
              defaultValue: '#',
              admin: {
                description: 'Link for the primary CTA button',
              },
            },
            {
              name: 'heroSecondaryButtonText',
              label: 'Secondary Button Text',
              type: 'text',
              required: true,
              defaultValue: 'Learn More',
              admin: {
                description: 'Text for the secondary CTA button',
              },
            },
            {
              name: 'heroSecondaryButtonLink',
              label: 'Secondary Button Link',
              type: 'text',
              required: false,
              defaultValue: '#',
              admin: {
                description: 'Link for the secondary CTA button',
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
              required: true,
              defaultValue: 'Ready to get started?',
              admin: {
                description: 'Call-to-action heading',
              },
            },
            {
              name: 'ctaDescription',
              label: 'CTA Description',
              type: 'textarea',
              required: true,
              defaultValue: 'Join thousands of teams already building with us',
              admin: {
                description: 'Call-to-action description text',
              },
            },
            {
              name: 'ctaButtonText',
              label: 'CTA Button Text',
              type: 'text',
              required: true,
              defaultValue: 'Start Free Trial',
              admin: {
                description: 'Text for the CTA button',
              },
            },
            {
              name: 'ctaButtonLink',
              label: 'CTA Button Link',
              type: 'text',
              required: false,
              defaultValue: '#',
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
