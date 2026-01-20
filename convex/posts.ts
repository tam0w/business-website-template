import { query } from './_generated/server'
import { v } from 'convex/values'

export const listPosts = query({
  args: {
    status: v.optional(v.union(v.literal('draft'), v.literal('scheduled'), v.literal('published'))),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { status = 'published', limit = 50 } = args

    const posts = await ctx.db
      .query('posts')
      .withIndex('by_status', (q) => q.eq('status', status))
      .order('desc')
      .take(limit)

    return posts
  },
})

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query('posts')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first()

    return post
  },
})

export const getRecentPosts = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const { limit = 5 } = args

    const posts = await ctx.db
      .query('posts')
      .withIndex('by_status', (q) => q.eq('status', 'published'))
      .order('desc')
      .take(limit)

    return posts
  },
})
