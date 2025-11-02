import type { GlobalConfig } from 'payload'

export const SiteLabels: GlobalConfig = {
  slug: 'site-labels',
  label: 'Site Labels & Fallbacks',
  admin: {
    description: 'Manage reusable labels, button text, and fallback messages used throughout the site',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Common Labels',
          fields: [
            {
              name: 'readMore',
              label: 'Read More',
              type: 'text',
              required: true,
              defaultValue: 'Read more',
              admin: {
                description: 'Generic "read more" link text',
              },
            },
            {
              name: 'learnMore',
              label: 'Learn More',
              type: 'text',
              required: true,
              defaultValue: 'Learn more',
              admin: {
                description: 'Generic "learn more" link text',
              },
            },
            {
              name: 'loading',
              label: 'Loading',
              type: 'text',
              required: true,
              defaultValue: 'Loading...',
              admin: {
                description: 'Loading state text',
              },
            },
            {
              name: 'viewDetails',
              label: 'View Details',
              type: 'text',
              required: true,
              defaultValue: 'View details',
              admin: {
                description: 'Generic "view details" link text',
              },
            },
          ],
        },
        {
          label: 'Fallback Messages',
          fields: [
            {
              name: 'authorFallback',
              label: 'Author Fallback',
              type: 'text',
              required: true,
              defaultValue: 'Anonymous',
              admin: {
                description: 'Default author name when author is missing',
              },
            },
            {
              name: 'noExcerptFallback',
              label: 'No Excerpt Fallback',
              type: 'text',
              required: true,
              defaultValue: 'No excerpt available',
              admin: {
                description: 'Message shown when blog post has no excerpt',
              },
            },
            {
              name: 'noImageFallback',
              label: 'No Image Fallback Alt Text',
              type: 'text',
              required: true,
              defaultValue: 'No image available',
              admin: {
                description: 'Alt text for placeholder images',
              },
            },
          ],
        },
      ],
    },
  ],
}
