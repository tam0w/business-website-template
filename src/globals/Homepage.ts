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
              name: 'ctaType',
              label: 'CTA Type',
              type: 'radio',
              required: true,
              defaultValue: 'waitlist',
              options: [
                {
                  label: 'Waitlist Email Capture',
                  value: 'waitlist',
                },
                {
                  label: 'Pricing with Single Plan',
                  value: 'pricing',
                },
              ],
              admin: {
                description: 'Choose between waitlist email capture or pricing display',
                layout: 'horizontal',
              },
            },
            {
              name: 'ctaHeading',
              label: 'CTA Heading',
              type: 'text',
              required: true,
              defaultValue: 'Ready to get started?',
              admin: {
                description: 'Main heading for the CTA section',
              },
            },
            {
              name: 'ctaDescription',
              label: 'CTA Description',
              type: 'textarea',
              required: true,
              defaultValue: 'Join thousands of teams already building with us',
              admin: {
                description: 'Description text for the CTA section',
              },
            },
            {
              name: 'waitlistEmailPlaceholder',
              label: 'Email Input Placeholder',
              type: 'text',
              defaultValue: 'Enter your email',
              admin: {
                description: 'Placeholder text for the email input (Waitlist CTA only)',
                condition: (data, siblingData) => siblingData?.ctaType === 'waitlist',
              },
            },
            {
              name: 'waitlistButtonText',
              label: 'Waitlist Button Text',
              type: 'text',
              defaultValue: 'Join Waitlist',
              admin: {
                description: 'Button text for waitlist submission (Waitlist CTA only)',
                condition: (data, siblingData) => siblingData?.ctaType === 'waitlist',
              },
            },
            {
              name: 'pricingPlanName',
              label: 'Plan Name',
              type: 'text',
              defaultValue: 'Pro',
              admin: {
                description: 'Name of the pricing plan (Pricing CTA only)',
                condition: (data, siblingData) => siblingData?.ctaType === 'pricing',
              },
            },
            {
              name: 'pricingPrice',
              label: 'Price',
              type: 'text',
              defaultValue: '$29',
              admin: {
                description: 'Price display (e.g., "$29/mo" or "$299/yr")',
                condition: (data, siblingData) => siblingData?.ctaType === 'pricing',
              },
            },
            {
              name: 'pricingPriceSubtext',
              label: 'Price Subtext',
              type: 'text',
              defaultValue: 'per month',
              admin: {
                description: 'Subtext below the price',
                condition: (data, siblingData) => siblingData?.ctaType === 'pricing',
              },
            },
            {
              name: 'pricingFeatures',
              label: 'Features',
              type: 'array',
              defaultValue: [
                { feature: 'Unlimited projects' },
                { feature: 'Advanced analytics' },
                { feature: 'Priority support' },
                { feature: 'Custom integrations' },
              ],
              fields: [
                {
                  name: 'feature',
                  type: 'text',
                  required: true,
                },
              ],
              admin: {
                description: 'List of features included in the plan',
                condition: (data, siblingData) => siblingData?.ctaType === 'pricing',
              },
            },
            {
              name: 'pricingButtonText',
              label: 'Pricing Button Text',
              type: 'text',
              defaultValue: 'Get Started',
              admin: {
                description: 'Button text for pricing CTA (Pricing CTA only)',
                condition: (data, siblingData) => siblingData?.ctaType === 'pricing',
              },
            },
            {
              name: 'pricingButtonLink',
              label: 'Pricing Button Link',
              type: 'text',
              defaultValue: '#',
              admin: {
                description: 'URL for the pricing CTA button',
                condition: (data, siblingData) => siblingData?.ctaType === 'pricing',
              },
            },
          ],
        },
      ],
    },
  ],
}
