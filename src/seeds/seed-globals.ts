import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

async function seedGlobals() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('Starting global seeding...')

  try {
    // Seed Blog Page Global
    console.log('Seeding blog-page global...')
    await payload.updateGlobal({
      slug: 'blog-page',
      data: {
        heading: 'Template Documentation & Updates',
        description: 'Learn how to use Seerah and stay updated with new features',
        emptyStateTitle: 'No posts yet',
        emptyStateDescription: 'Documentation and updates coming soon.',
        ctaText: 'Read article',
      },
    })
    console.log('✓ Blog page global seeded')

    // Seed Careers Page Global
    console.log('Seeding careers-page global...')
    await payload.updateGlobal({
      slug: 'careers-page',
      data: {
        heading: 'Example Careers Page',
        description: 'This is a demo page showing how you can use collections for job listings',
        emptyStateTitle: 'No positions configured',
        emptyStateDescription: 'Add job listings through the PayloadCMS admin panel.',
        ctaText: 'View details',
      },
    })
    console.log('✓ Careers page global seeded')

    // Seed Homepage Global
    console.log('Seeding homepage global...')
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        heroHeading: 'Modern Business Template',
        heroSubheading: 'Production-ready Next.js template with PayloadCMS, TypeScript, and Tailwind.',
        heroPrimaryButtonText: 'View on GitHub',
        heroPrimaryButtonLink: 'https://github.com/yourusername/seerah',
        heroSecondaryButtonText: 'Documentation',
        heroSecondaryButtonLink: '#',
        loggedInGreeting: 'Welcome back',
        ctaType: 'waitlist',
        ctaHeading: 'Start building with Seerah',
        ctaDescription: 'Get notified when we release new features and improvements',
        waitlistEmailPlaceholder: 'Enter your email',
        waitlistButtonText: 'Get Updates',
        pricingPlanName: 'Open Source',
        pricingPrice: 'Free',
        pricingPriceSubtext: 'forever',
        pricingFeatures: [
          { feature: 'Full PayloadCMS integration' },
          { feature: 'Pre-built responsive components' },
          { feature: 'TypeScript & ESLint configured' },
          { feature: 'Production-ready architecture' },
        ],
        pricingButtonText: 'Clone Template',
        pricingButtonLink: 'https://github.com/yourusername/seerah',
      },
    })
    console.log('✓ Homepage global seeded')

    // Seed Site Labels Global
    console.log('Seeding site-labels global...')
    await payload.updateGlobal({
      slug: 'site-labels',
      data: {
        readMore: 'Read more',
        learnMore: 'Learn more',
        loading: 'Loading...',
        viewDetails: 'View details',
        authorFallback: 'Anonymous',
        noExcerptFallback: 'No excerpt available',
        noImageFallback: 'No image available',
      },
    })
    console.log('✓ Site labels global seeded')

    // Seed Site Branding Global
    console.log('Seeding site-branding global...')
    await payload.updateGlobal({
      slug: 'site-branding',
      data: {
        logoIcon: 'react',
        logoText: 'Seerah',
        companyName: 'Seerah',
      },
    })
    console.log('✓ Site branding global seeded')

    // Seed Features Content Global
    console.log('Seeding features-content global...')
    await payload.updateGlobal({
      slug: 'features-content',
      data: {
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
      },
    })
    console.log('✓ Features content global seeded')

    // Seed Testimonials Content Global
    console.log('Seeding testimonials-content global...')
    await payload.updateGlobal({
      slug: 'testimonials-content',
      data: {
        heading: 'Built by Developers, For Developers',
        subheading: 'What makes Seerah different',
        testimonials: [
          {
            name: 'Demo User',
            role: 'Full Stack Developer',
            company: 'Tech Startup',
            content: 'This template saved me weeks of boilerplate setup. The PayloadCMS integration is seamless and the component library is production-ready out of the box.',
          },
          {
            name: 'Demo User',
            role: 'Engineering Lead',
            company: 'SaaS Company',
            content: 'Clean architecture with clear separation of concerns. The code is maintainable and well-documented. Perfect starting point for our client projects.',
          },
          {
            name: 'Demo User',
            role: 'Indie Hacker',
            company: 'Personal Projects',
            content: 'The best Next.js template I\'ve found. Authentication, CMS, components, and deployment configs all ready to go. Just add your business logic.',
          },
        ],
      },
    })
    console.log('✓ Testimonials content global seeded')

    // Seed FAQ Content Global
    console.log('Seeding faq-content global...')
    await payload.updateGlobal({
      slug: 'faq-content',
      data: {
        heading: 'Frequently Asked Questions',
        subheading: 'Everything you need to know about Seerah',
        faqs: [
          {
            question: 'What tech stack does Seerah use?',
            answer: 'Seerah is built with Next.js 14, PayloadCMS 3.0, TypeScript, Tailwind CSS, and Shadcn/ui components. It uses SQLite by default but supports PostgreSQL and MongoDB.',
          },
          {
            question: 'Is this template really free?',
            answer: 'Yes, Seerah is completely free and open source. Use it for personal projects, client work, or commercial applications without any restrictions.',
          },
          {
            question: 'How do I customize the content?',
            answer: 'All content is managed through PayloadCMS globals. Run the seed script, then edit everything through the admin panel at /admin. No code changes needed for content updates.',
          },
          {
            question: 'Can I use this for client projects?',
            answer: 'Absolutely. Seerah is designed to be a solid foundation for client work. The architecture is clean, the code is documented, and all components are customizable.',
          },
        ],
      },
    })
    console.log('✓ FAQ content global seeded')

    // Seed Contact Page Global
    console.log('Seeding contact-page global...')
    await payload.updateGlobal({
      slug: 'contact-page',
      data: {
        heading: 'Contact Us',
        subheading: 'Get in touch with our team. We\'re here to help and answer any questions you might have.',
        email: 'hello@seerah.dev',
        emailDescription: 'We respond to all emails within 24 hours.',
        officeAddress: '123 Business Street, Suite 100\nYour City, ST 12345\nUnited States',
        officeDescription: 'Drop by our office for a chat.',
        phoneNumbers: [
          { number: '+1 (555) 123-4567' },
          { number: '+1 (555) 987-6543' },
        ],
        phoneDescription: 'We\'re available Mon-Fri, 9am-5pm EST.',
        socialHeading: 'Find us online',
        socialLinks: [
          { platform: 'GitHub', url: 'https://github.com/yourusername/seerah', icon: 'github' },
          { platform: 'Twitter', url: 'https://twitter.com/seerahdev', icon: 'twitter' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/company/seerah', icon: 'linkedin' },
        ],
      },
    })
    console.log('✓ Contact page global seeded')

    console.log('\n✅ All globals seeded successfully!')
    console.log('\nYou can now edit these in the admin panel at /admin -> Globals')
  } catch (error) {
    console.error('Error seeding globals:', error)
    process.exit(1)
  }

  process.exit(0)
}

seedGlobals()
