import type { GlobalConfig } from 'payload'

export const TestimonialsContent: GlobalConfig = {
  slug: 'testimonials-content',
  label: 'Testimonials Content',
  admin: {
    description: 'Manage testimonials displayed on your website',
  },
  fields: [
    {
      name: 'heading',
      label: 'Section Heading',
      type: 'text',
      required: true,
      defaultValue: 'What Our Clients Say',
      admin: {
        description: 'Main heading for the testimonials section',
      },
    },
    {
      name: 'subheading',
      label: 'Section Subheading',
      type: 'text',
      required: false,
      defaultValue: 'Trusted by teams worldwide',
      admin: {
        description: 'Subheading text below the main heading',
      },
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description: 'List of customer testimonials',
      },
      fields: [
        {
          name: 'name',
          label: 'Customer Name',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          label: 'Role/Title',
          type: 'text',
          required: true,
        },
        {
          name: 'company',
          label: 'Company Name',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          label: 'Testimonial Content',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
