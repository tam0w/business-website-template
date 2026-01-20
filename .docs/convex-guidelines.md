# Convex Development Guidelines

## Schema Design

### Denormalization Strategy
- Embed author data directly in posts rather than using relations
- This optimizes for read performance since posts are read far more than written
- Author updates require updating all their posts (acceptable trade-off for this use case)

### Index Usage
- Always use indexes for queries - never scan entire tables
- Index naming convention: `by_<field>` or `by_<field1>_<field2>`
- Composite indexes should match query patterns exactly

## Query Patterns

### Pagination
For paginated lists, use Convex's built-in pagination:
```typescript
export const listPosts = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('posts')
      .withIndex('by_status', (q) => q.eq('status', 'published'))
      .order('desc')
      .paginate(args.paginationOpts)
  },
})
```

### Filtering
- Use indexes for equality filters
- For complex filters, filter in memory after indexed query
- Never use `.filter()` without first narrowing via index

## Mutations

### Validation
- Use Convex validators (`v.string()`, etc.) for all arguments
- Add business logic validation in handler before database operations

### Optimistic Updates
For better UX, implement optimistic updates on the client:
```typescript
const createPost = useMutation(api.posts.create).withOptimisticUpdate(
  (localStore, args) => {
    // Update local cache immediately
  }
)
```

## File Structure

```
convex/
├── _generated/     # Auto-generated (don't edit)
├── schema.ts       # Database schema
├── posts.ts        # Post queries and mutations
├── careers.ts      # Career queries and mutations
└── http.ts         # HTTP routes (if needed)
```

## Environment Variables

- `CONVEX_DEPLOYMENT` - Set automatically by `npx convex dev`
- `VITE_CONVEX_URL` - Client-side URL for ConvexProvider

## Best Practices

1. **Keep queries simple** - One query, one purpose
2. **Use TypeScript** - Let Convex infer types from validators
3. **Avoid N+1** - Use embedded data or batch queries
4. **Handle errors** - Return null for not-found, throw for errors
5. **Test locally** - Use `npx convex dev` for local development

## Lexical Content

Blog posts and career descriptions use Lexical JSON format. The schema stores the raw Lexical state, and rendering is handled client-side using a Lexical renderer component.
