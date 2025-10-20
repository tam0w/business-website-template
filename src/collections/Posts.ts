import { openAsBlob } from 'fs';
import type { CollectionConfig } from 'payload';


export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subTitle',
      type: 'textarea',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      label: 'Author',
      relationTo: 'users',
      hasMany: false,
      required: true,
    },
    {
      name: 'content',
      label: 'Post Body',
      type: 'richText',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
  ]
}
