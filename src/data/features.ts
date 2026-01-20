import type { FeaturesContent } from '@/types'

export const featuresContent: FeaturesContent = {
  heading: 'Built for Modern Development',
  subheading: 'Everything you need to launch your next project',
  features: [
    {
      title: 'CMS-First Architecture',
      description: 'PayloadCMS integration with pre-configured globals and collections. Edit all content through the admin panel without touching code.',
      illustration: 'lightning',
      icon: 'Zap',
    },
    {
      title: 'Component Library Included',
      description: 'Shadcn/ui components with custom variants. Responsive design system built on Tailwind CSS variables.',
      illustration: 'shield',
      icon: 'Shield',
    },
    {
      title: 'TypeScript & Modern Stack',
      description: 'Full TypeScript support with strict mode enabled. ESLint and Prettier configured for consistent code quality.',
      illustration: 'layers',
      icon: 'Code',
    },
    {
      title: 'Cloud-Ready Deployment',
      description: 'Optimized for Vercel deployment with automatic builds and previews. Environment variables configured and ready for production. One-click deploy with zero configuration.',
      illustration: 'rocket',
      icon: 'Cloud',
    },
  ],
}
