# Seerah

A business website template that doesn't suck. Built with Payload CMS, Next.js, and everything content-driven so you're not hardcoding copy like it's 2015.

I made this because I kept rebuilding the same blog + careers setup for every project. Now you can too.

**Note:** This project is currently in draft and actively being worked on. Things might break or change without notice.

## What's included

- Full-featured blog with rich text editing
- Careers portal for job postings
- All content lives in Payload CMS (no hardcoded text anywhere)
- Built on shadcn/ui components with Tailwind
- SQLite database - no setup required, just works
- Responsive design that actually looks good on mobile

Before you start, make sure you have Node.js 18.20.2+ or 20.9.0+ installed.

## Quick Start

```bash
git clone <your-repo-url>
cd seerah
cp .env.example .env
bun i
bun dev
```

That's it. Open `http://localhost:3000` and you're good to go.

(The `.env` file sets up your SQLite database path - no external database needed.)

First time running? Head to `http://localhost:3000/admin` and create your admin account.

Want some starter content? Run `bun seed:globals` to populate the CMS with examples.

### Building for Production

```bash
bun run build
bun start
```

## How it works

Everything is managed through Payload CMS. You get:

**Collections** (your dynamic content):
- Users - admin accounts
- Posts - blog articles with rich text
- Careers - job postings
- Media - file uploads with auto optimization

**Globals** (site-wide content):
- Homepage - hero sections and landing page
- BlogPage - blog listing configuration
- CareersPage - careers page content
- SiteLabels - reusable copy across the site

No hardcoded content anywhere. Edit everything through the CMS at `/admin`.

The frontend lives in `src/app/(frontend)` with blog and careers pages. Components are in `src/components`, using shadcn/ui for the design system.

## Tech Stack

- Next.js 15 + React 19
- TypeScript
- Payload CMS 3.60
- SQLite
- Tailwind CSS 4
- shadcn/ui components
- Bun (but works with pnpm/npm too)

## Customization

**Design**: Edit `src/app/(frontend)/globals.css` to change colors, typography, spacing, etc. Everything uses Tailwind CSS variables and shadcn/ui components.

**Content**: Want to add new content types? Create a collection in `src/collections/`, add it to `payload.config.ts`, and run `bun generate:types`. For site-wide content, create a global in `src/globals/` and fetch it with `payload.findGlobal()`.

## Useful Commands

- `bun dev` - development server
- `bun run build` - production build
- `bun lint` - run linter
- `bun generate:types` - regenerate TypeScript types from CMS
- `bun seed:globals` - add example content to CMS
- `bun test` - run tests

## Deployment

Works on any platform that supports Next.js: Vercel, Cloudflare Pages, Payload Cloud, or your own server. SQLite makes it dead simple - just deploy the whole thing including the `.db` file.

For Cloudflare Workers, use Cloudflare D1 or persist the SQLite database with R2.

## Docs

- [Payload CMS](https://payloadcms.com/docs)
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

## License

MIT - do whatever you want with it.
