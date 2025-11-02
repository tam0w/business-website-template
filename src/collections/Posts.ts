import type { CollectionConfig } from 'payload';

const formatSlug = (val: string): string => {
  return val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase();
};

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'status', 'publishedAt', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      // Public can only see published posts or scheduled posts whose date has passed
      return {
        or: [
          {
            status: {
              equals: 'published',
            },
          },
          {
            and: [
              {
                status: {
                  equals: 'scheduled',
                },
              },
              {
                publishedAt: {
                  less_than_or_equal: new Date().toISOString(),
                },
              },
            ],
          },
        ],
      };
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value) return formatSlug(value);
            if (data?.title) return formatSlug(data.title);
            return value;
          },
        ],
      },
    },
    {
      name: 'subTitle',
      type: 'textarea',
      label: 'Subtitle',
      required: false,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
      required: false,
      admin: {
        description: 'Short summary for blog listings. Auto-generated from content if empty.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      label: 'Featured Image',
      relationTo: 'media',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      label: 'Author',
      relationTo: 'users',
      hasMany: false,
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      label: 'Post Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'text',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      defaultValue: 'draft',
      required: true,
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Scheduled',
          value: 'scheduled',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
    {
      name: 'publishedAt',
      label: 'Published Date',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
        condition: (data) => data.status === 'scheduled' || data.status === 'published',
        description: 'Scheduled: set future date. Published: auto-set to now if empty.',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            // Auto-set to now when publishing without a date
            if (siblingData.status === 'published' && !value) {
              return new Date();
            }
            // Require date for scheduled posts
            if (siblingData.status === 'scheduled' && !value) {
              throw new Error('Published date is required for scheduled posts');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Meta Title',
          type: 'text',
          admin: {
            description: 'Override the page title for search engines. Defaults to post title.',
          },
        },
        {
          name: 'description',
          label: 'Meta Description',
          type: 'textarea',
          admin: {
            description: 'Override the meta description. Defaults to excerpt.',
          },
        },
      ],
    },
  ],
  timestamps: true,
}
