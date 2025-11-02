import type { CollectionConfig } from 'payload';

const formatSlug = (val: string): string => {
  return val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase();
};

export const Careers: CollectionConfig = {
  slug: 'careers',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'location', 'type', 'status', 'publishedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      // Public can only see published jobs or scheduled jobs whose date has passed
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
      label: 'Job Title',
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
      name: 'department',
      label: 'Department',
      type: 'select',
      required: true,
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Cybersecurity',
          value: 'cybersecurity',
        },
        {
          label: 'Data Services',
          value: 'data-services',
        },
        {
          label: 'Engineering',
          value: 'engineering',
        },
        {
          label: 'Operations',
          value: 'operations',
        },
        {
          label: 'Sales & Marketing',
          value: 'sales-marketing',
        },
      ],
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'e.g., Remote, New York, NY, or Hybrid - San Francisco',
      },
    },
    {
      name: 'type',
      label: 'Employment Type',
      type: 'select',
      required: true,
      defaultValue: 'full-time',
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Full-time',
          value: 'full-time',
        },
        {
          label: 'Part-time',
          value: 'part-time',
        },
        {
          label: 'Contract',
          value: 'contract',
        },
        {
          label: 'Internship',
          value: 'internship',
        },
      ],
    },
    {
      name: 'experienceLevel',
      label: 'Experience Level',
      type: 'select',
      required: true,
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Entry Level',
          value: 'entry',
        },
        {
          label: 'Mid Level',
          value: 'mid',
        },
        {
          label: 'Senior Level',
          value: 'senior',
        },
        {
          label: 'Lead/Principal',
          value: 'lead',
        },
      ],
    },
    {
      name: 'remoteOption',
      label: 'Remote Work Option',
      type: 'select',
      required: true,
      defaultValue: 'hybrid',
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Remote',
          value: 'remote',
        },
        {
          label: 'On-site',
          value: 'onsite',
        },
        {
          label: 'Hybrid',
          value: 'hybrid',
        },
      ],
    },
    {
      name: 'description',
      label: 'Job Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'responsibilities',
      label: 'Key Responsibilities',
      type: 'richText',
      required: true,
    },
    {
      name: 'requirements',
      label: 'Requirements',
      type: 'richText',
      required: true,
    },
    {
      name: 'niceToHave',
      label: 'Nice to Have',
      type: 'richText',
      required: false,
      admin: {
        description: 'Optional qualifications or skills',
      },
    },
    {
      name: 'featured',
      label: 'Featured Position',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Mark this position to appear in the featured jobs section',
      },
    },
    {
      name: 'clearanceRequired',
      label: 'Security Clearance Required',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'clearanceDetails',
      label: 'Clearance Details',
      type: 'text',
      admin: {
        position: 'sidebar',
        condition: (data) => data.clearanceRequired === true,
        description: 'e.g., Secret, Top Secret, etc.',
      },
    },
    {
      name: 'salary',
      label: 'Salary',
      type: 'group',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'type',
          label: 'Salary Type',
          type: 'select',
          required: true,
          defaultValue: 'competitive',
          options: [
            {
              label: 'Range',
              value: 'range',
            },
            {
              label: 'Fixed',
              value: 'fixed',
            },
            {
              label: 'Competitive',
              value: 'competitive',
            },
          ],
        },
        {
          name: 'currency',
          label: 'Currency',
          type: 'select',
          defaultValue: 'USD',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === 'range' || siblingData?.type === 'fixed';
            },
          },
          options: [
            {
              label: 'USD ($)',
              value: 'USD',
            },
            {
              label: 'EUR (€)',
              value: 'EUR',
            },
            {
              label: 'GBP (£)',
              value: 'GBP',
            },
            {
              label: 'INR (₹)',
              value: 'INR',
            },
          ],
        },
        {
          name: 'min',
          label: 'Minimum',
          type: 'number',
          required: true,
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === 'range';
            },
            description: 'Minimum salary amount',
          },
        },
        {
          name: 'max',
          label: 'Maximum',
          type: 'number',
          required: true,
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === 'range';
            },
            description: 'Maximum salary amount',
          },
        },
        {
          name: 'amount',
          label: 'Amount',
          type: 'number',
          required: true,
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === 'fixed';
            },
            description: 'Fixed salary amount',
          },
        },
      ],
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
        {
          label: 'Closed',
          value: 'closed',
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
            // Require date for scheduled jobs
            if (siblingData.status === 'scheduled' && !value) {
              throw new Error('Published date is required for scheduled job openings');
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
            description: 'Override the page title for search engines. Defaults to job title.',
          },
        },
        {
          name: 'description',
          label: 'Meta Description',
          type: 'textarea',
          admin: {
            description: 'Override the meta description.',
          },
        },
      ],
    },
  ],
  timestamps: true,
}
