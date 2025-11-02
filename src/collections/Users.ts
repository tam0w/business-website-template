import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'designation'],
  },
  auth: true,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'avatar',
      label: 'Avatar',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'designation',
      label: 'Designation',
      type: 'text',
      required: false,
    },
    {
      name: 'bio',
      label: 'Biography',
      type: 'textarea',
      required: false,
    },
    {
      name: 'social',
      label: 'Social Links',
      type: 'group',
      fields: [
        {
          name: 'twitter',
          label: 'Twitter/X',
          type: 'text',
        },
        {
          name: 'linkedin',
          label: 'LinkedIn',
          type: 'text',
        },
        {
          name: 'github',
          label: 'GitHub',
          type: 'text',
        },
        {
          name: 'website',
          label: 'Website',
          type: 'text',
        },
      ],
    },
  ],
  timestamps: true,
}
