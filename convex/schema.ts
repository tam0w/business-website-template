import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

// Lexical JSON content structure
const lexicalContent = v.object({
  root: v.object({
    type: v.string(),
    children: v.array(v.any()),
    direction: v.union(v.literal('ltr'), v.literal('rtl'), v.null()),
    format: v.union(
      v.literal('left'),
      v.literal('start'),
      v.literal('center'),
      v.literal('right'),
      v.literal('end'),
      v.literal('justify'),
      v.literal('')
    ),
    indent: v.number(),
    version: v.number(),
  }),
})

// Embedded author for denormalized reads
const embeddedAuthor = v.object({
  name: v.string(),
  avatar: v.optional(v.string()),
  designation: v.optional(v.string()),
  bio: v.optional(v.string()),
  social: v.optional(
    v.object({
      twitter: v.optional(v.string()),
      linkedin: v.optional(v.string()),
      github: v.optional(v.string()),
      website: v.optional(v.string()),
    })
  ),
})

// SEO metadata
const seoMetadata = v.object({
  title: v.optional(v.string()),
  description: v.optional(v.string()),
})

// Salary structure for careers
const salary = v.object({
  type: v.union(v.literal('range'), v.literal('fixed'), v.literal('competitive')),
  currency: v.optional(v.union(v.literal('USD'), v.literal('EUR'), v.literal('GBP'), v.literal('INR'))),
  min: v.optional(v.number()),
  max: v.optional(v.number()),
  amount: v.optional(v.number()),
})

// Lead source tracking
const leadSource = v.union(
  v.literal('contact_form'),
  v.literal('waitlist'),
  v.literal('newsletter'),
  v.literal('other')
)

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.optional(v.string()),
    source: leadSource,
    status: v.union(v.literal('new'), v.literal('contacted'), v.literal('qualified'), v.literal('converted'), v.literal('closed')),
    notes: v.optional(v.string()),
  })
    .index('by_email', ['email'])
    .index('by_status', ['status'])
    .index('by_source', ['source']),


  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    subTitle: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    featuredImage: v.optional(v.string()),
    author: embeddedAuthor,
    content: lexicalContent,
    tags: v.optional(v.array(v.string())),
    status: v.union(v.literal('draft'), v.literal('scheduled'), v.literal('published')),
    publishedAt: v.optional(v.number()),
    seo: v.optional(seoMetadata),
  })
    .index('by_slug', ['slug'])
    .index('by_status', ['status'])
    .index('by_published', ['status', 'publishedAt']),

  careers: defineTable({
    title: v.string(),
    slug: v.string(),
    department: v.union(
      v.literal('cybersecurity'),
      v.literal('data-services'),
      v.literal('engineering'),
      v.literal('operations'),
      v.literal('sales-marketing')
    ),
    location: v.string(),
    type: v.union(v.literal('full-time'), v.literal('part-time'), v.literal('contract'), v.literal('internship')),
    experienceLevel: v.union(v.literal('entry'), v.literal('mid'), v.literal('senior'), v.literal('lead')),
    remoteOption: v.union(v.literal('remote'), v.literal('onsite'), v.literal('hybrid')),
    description: lexicalContent,
    responsibilities: lexicalContent,
    requirements: lexicalContent,
    niceToHave: v.optional(lexicalContent),
    featured: v.optional(v.boolean()),
    clearanceRequired: v.optional(v.boolean()),
    clearanceDetails: v.optional(v.string()),
    salary: salary,
    status: v.union(v.literal('draft'), v.literal('scheduled'), v.literal('published'), v.literal('closed')),
    publishedAt: v.optional(v.number()),
    seo: v.optional(seoMetadata),
  })
    .index('by_slug', ['slug'])
    .index('by_status', ['status'])
    .index('by_featured', ['featured', 'status'])
    .index('by_department', ['department', 'status']),
})
