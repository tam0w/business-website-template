import { getPayload } from 'payload'
import config from './payload.config'

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
        heroHeading: 'Welcome to your new project.',
        heroSubheading: null,
        heroImage: null,
        loggedInGreeting: 'Welcome back',
        ctaHeading: null,
        ctaDescription: null,
        ctaButtonText: 'Get Started',
        ctaButtonLink: null,
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

    console.log('\n✅ All globals seeded successfully!')
    console.log('\nYou can now edit these in the admin panel at /admin -> Globals')
  } catch (error) {
    console.error('Error seeding globals:', error)
    process.exit(1)
  }

  process.exit(0)
}

seedGlobals()
