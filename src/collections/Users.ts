import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
    },
    {
      name: 'bio',
      label: 'Biography',
      type: 'textarea',
    },
    {
      name: 'designation',
      label: 'Designation',
      type: 'text',
    }
  ],
}
