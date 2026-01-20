import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert('leads', {
      name: args.name,
      email: args.email,
      company: args.company,
      message: args.message,
      source: 'contact_form',
      status: 'new',
    })
    return leadId
  },
})

export const submitWaitlist = mutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert('leads', {
      name: args.name ?? '',
      email: args.email,
      source: 'waitlist',
      status: 'new',
    })
    return leadId
  },
})

export const listLeads = query({
  args: {
    status: v.optional(v.union(v.literal('new'), v.literal('contacted'), v.literal('qualified'), v.literal('converted'), v.literal('closed'))),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query('leads')
        .withIndex('by_status', (q) => q.eq('status', args.status!))
        .order('desc')
        .collect()
    }
    return await ctx.db.query('leads').order('desc').collect()
  },
})
