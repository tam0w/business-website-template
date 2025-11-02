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
        heading: 'Blog Posts',
        description: 'Discover the latest insights and updates from our team',
        emptyStateTitle: 'No posts yet',
        emptyStateDescription: 'Check back later for new content.',
        ctaText: 'Read article',
      },
    })
    console.log('✓ Blog page global seeded')

    // Seed Careers Page Global
    console.log('Seeding careers-page global...')
    await payload.updateGlobal({
      slug: 'careers-page',
      data: {
        heading: 'Open Positions',
        description: 'Join our team and help shape the future of cybersecurity and data services',
        emptyStateTitle: 'No open positions',
        emptyStateDescription: 'Check back later for new opportunities.',
        ctaText: 'View details',
      },
    })
    console.log('✓ Careers page global seeded')

    // Seed Homepage Global
    console.log('Seeding homepage global...')
    await payload.updateGlobal({
      slug: 'homepage',
      data: {
        heroHeading: 'Build Something Amazing',
        heroSubheading: 'The modern platform for businesses that want to scale fast and build better products',
        heroPrimaryButtonText: 'Get Started',
        heroPrimaryButtonLink: '#',
        heroSecondaryButtonText: 'Learn More',
        heroSecondaryButtonLink: '#',
        loggedInGreeting: 'Welcome back',
        ctaHeading: 'Ready to get started?',
        ctaDescription: 'Join thousands of teams already building with us',
        ctaButtonText: 'Start Free Trial',
        ctaButtonLink: '#',
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
        logoText: 'Your Company',
        companyName: 'Your Company',
      },
    })
    console.log('✓ Site branding global seeded')

    // Seed Features Content Global
    console.log('Seeding features-content global...')
    await payload.updateGlobal({
      slug: 'features-content',
      data: {
        heading: 'Powerful Features',
        subheading: 'Everything you need to succeed',
        features: [
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
        ],
      },
    })
    console.log('✓ Features content global seeded')

    // Seed Testimonials Content Global
    console.log('Seeding testimonials-content global...')
    await payload.updateGlobal({
      slug: 'testimonials-content',
      data: {
        heading: 'What Our Clients Say',
        subheading: 'Trusted by teams worldwide',
        testimonials: [
          {
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'TechStart Inc',
            content: 'This product has completely transformed how we work. The results speak for themselves.',
          },
          {
            name: 'Michael Chen',
            role: 'CTO',
            company: 'Innovation Labs',
            content: 'Outstanding service and support. Our team productivity has increased by 40%.',
          },
          {
            name: 'Emily Rodriguez',
            role: 'Product Manager',
            company: 'Digital Solutions',
            content: 'Best investment we made this year. Highly recommend to any growing business.',
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
        subheading: 'Everything you need to know about our product',
        faqs: [
          {
            question: 'How does the pricing work?',
            answer: 'We offer flexible pricing plans to suit businesses of all sizes. Contact our sales team for a custom quote tailored to your specific needs.',
          },
          {
            question: 'What kind of support do you provide?',
            answer: 'We provide 24/7 customer support via email, chat, and phone. Our dedicated support team is always ready to help you succeed.',
          },
          {
            question: 'Can I cancel my subscription at any time?',
            answer: 'Yes, you can cancel your subscription at any time with no penalties. We believe in earning your business every month.',
          },
          {
            question: 'Is my data secure?',
            answer: 'Absolutely. We use enterprise-grade encryption and security measures to protect your data. Our platform is SOC 2 compliant and regularly audited.',
          },
          {
            question: 'Do you offer integrations with other tools?',
            answer: 'Yes, we integrate with over 100+ popular tools and platforms. Our API also allows for custom integrations to fit your workflow.',
          },
          {
            question: 'How long does implementation take?',
            answer: 'Most customers are up and running within 24 hours. Our onboarding team will guide you through every step of the process.',
          },
        ],
      },
    })
    console.log('✓ FAQ content global seeded')

    console.log('\n✅ All globals seeded successfully!')
    console.log('\nYou can now edit these in the admin panel at /admin -> Globals')
  } catch (error) {
    console.error('Error seeding globals:', error)
    process.exit(1)
  }

  process.exit(0)
}

seedGlobals()
