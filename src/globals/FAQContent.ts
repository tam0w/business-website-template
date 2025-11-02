import type { GlobalConfig } from 'payload'

export const FAQContent: GlobalConfig = {
  slug: 'faq-content',
  label: 'FAQ Content',
  admin: {
    description: 'Manage frequently asked questions on your website',
  },
  fields: [
    {
      name: 'heading',
      label: 'Section Heading',
      type: 'text',
      required: true,
      defaultValue: 'Frequently Asked Questions',
      admin: {
        description: 'Main heading for the FAQ section',
      },
    },
    {
      name: 'subheading',
      label: 'Section Subheading',
      type: 'text',
      required: false,
      defaultValue: 'Everything you need to know about our product',
      admin: {
        description: 'Subheading text below the main heading',
      },
    },
    {
      name: 'faqs',
      label: 'FAQ Items',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        description: 'List of frequently asked questions and answers',
      },
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
