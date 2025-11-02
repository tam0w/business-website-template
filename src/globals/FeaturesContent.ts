import type { GlobalConfig } from 'payload'

export const FeaturesContent: GlobalConfig = {
  slug: 'features-content',
  label: 'Features Content',
  admin: {
    description: 'Manage the features section content on your landing page',
  },
  fields: [
    {
      name: 'heading',
      label: 'Section Heading',
      type: 'text',
      required: true,
      defaultValue: 'Powerful Features',
      admin: {
        description: 'Main heading for the features section',
      },
    },
    {
      name: 'subheading',
      label: 'Section Subheading',
      type: 'text',
      required: true,
      defaultValue: 'Everything you need to succeed',
      admin: {
        description: 'Subheading text below the main heading',
      },
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 6,
      admin: {
        description: 'List of features to display (3-6 features recommended)',
      },
      fields: [
        {
          name: 'title',
          label: 'Feature Title',
          type: 'text',
          required: true,
          admin: {
            description: 'Title of the feature',
          },
        },
        {
          name: 'description',
          label: 'Feature Description',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Brief description of the feature',
          },
        },
        {
          name: 'illustration',
          label: 'Illustration Type',
          type: 'select',
          required: true,
          defaultValue: 'lightning',
          options: [
            {
              label: 'Lightning (Performance)',
              value: 'lightning',
            },
            {
              label: 'Shield (Security)',
              value: 'shield',
            },
            {
              label: 'Layers (Integration)',
              value: 'layers',
            },
            {
              label: 'Branches (Version Control)',
              value: 'branches',
            },
            {
              label: 'Sparkles (AI)',
              value: 'sparkles',
            },
            {
              label: 'Rocket (Deployment)',
              value: 'rocket',
            },
          ],
          admin: {
            description: 'Choose the SVG illustration style for this feature',
          },
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'select',
          required: true,
          defaultValue: 'Zap',
          options: [
            { label: 'Zap (Lightning)', value: 'Zap' },
            { label: 'Shield', value: 'Shield' },
            { label: 'Layers', value: 'Layers' },
            { label: 'GitBranch', value: 'GitBranch' },
            { label: 'Sparkles', value: 'Sparkles' },
            { label: 'Rocket', value: 'Rocket' },
            { label: 'Lock', value: 'Lock' },
            { label: 'Database', value: 'Database' },
            { label: 'Cloud', value: 'Cloud' },
            { label: 'Code', value: 'Code' },
            { label: 'Globe', value: 'Globe' },
            { label: 'Settings', value: 'Settings' },
          ],
          admin: {
            description: 'Icon to display in the badge (Lucide icon name)',
          },
        },
      ],
      defaultValue: [
        {
          title: 'Lightning Fast Performance',
          description: 'Experience blazing speed with our optimized infrastructure. Built for scale from day one.',
          illustration: 'lightning',
          icon: 'Zap',
        },
        {
          title: 'Enterprise Security',
          description: 'Bank-grade encryption and security protocols protect your data 24/7.',
          illustration: 'shield',
          icon: 'Shield',
        },
        {
          title: 'Seamless Integration',
          description: 'Connect with your favorite tools and services in minutes, not hours.',
          illustration: 'layers',
          icon: 'Layers',
        },
        {
          title: 'Version Control',
          description: 'Track every change with powerful version control and rollback capabilities.',
          illustration: 'branches',
          icon: 'GitBranch',
        },
        {
          title: 'AI-Powered Insights',
          description: 'Get intelligent recommendations and predictions powered by machine learning.',
          illustration: 'sparkles',
          icon: 'Sparkles',
        },
        {
          title: 'Rapid Deployment',
          description: 'Ship faster with automated CI/CD pipelines and instant deployments.',
          illustration: 'rocket',
          icon: 'Rocket',
        },
      ],
    },
  ],
}
