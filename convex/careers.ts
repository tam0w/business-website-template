import { query } from './_generated/server'
import { v } from 'convex/values'

export const listCareers = query({
  args: {
    status: v.optional(
      v.union(v.literal('draft'), v.literal('scheduled'), v.literal('published'), v.literal('closed'))
    ),
    department: v.optional(
      v.union(
        v.literal('cybersecurity'),
        v.literal('data-services'),
        v.literal('engineering'),
        v.literal('operations'),
        v.literal('sales-marketing')
      )
    ),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { status = 'published', department, limit = 50 } = args

    if (department) {
      return await ctx.db
        .query('careers')
        .withIndex('by_department', (q) => q.eq('department', department).eq('status', status))
        .order('desc')
        .take(limit)
    }

    return await ctx.db
      .query('careers')
      .withIndex('by_status', (q) => q.eq('status', status))
      .order('desc')
      .take(limit)
  },
})

export const getCareerBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const career = await ctx.db
      .query('careers')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first()

    return career
  },
})

export const getFeaturedCareers = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const { limit = 6 } = args

    const careers = await ctx.db
      .query('careers')
      .withIndex('by_featured', (q) => q.eq('featured', true).eq('status', 'published'))
      .order('desc')
      .take(limit)

    return careers
  },
})
