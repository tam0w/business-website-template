import type { GlobalConfig } from 'payload'

export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  label: 'Blog Page Content',
  admin: {
    description: 'Manage blog page headings, descriptions, and empty states',
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
              defaultValue: 'Blog Posts',
              admin: {
                description: 'Main heading displayed at the top of the blog page',
              },
            },
            {
              name: 'description',
              label: 'Page Description',
              type: 'textarea',
              required: true,
              defaultValue: 'Discover the latest insights and updates from our team',
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
              defaultValue: 'No posts yet',
              admin: {
                description: 'Title shown when there are no published posts',
              },
            },
            {
              name: 'emptyStateDescription',
              label: 'Empty State Description',
              type: 'textarea',
              required: true,
              defaultValue: 'Check back later for new content.',
              admin: {
                description: 'Description shown when there are no published posts',
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
              defaultValue: 'Read article',
              admin: {
                description: 'Text for the "read more" link on each blog post card',
              },
            },
          ],
        },
      ],
    },
  ],
}
