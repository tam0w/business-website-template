# Seerah

A modern, production-ready blog and marketing website template built with Payload CMS. Perfect for businesses, startups, and organizations looking to launch a content-driven website with an integrated blog and careers section.

## Features

- **Headless CMS**: Powered by Payload CMS for flexible content management
- **Blog System**: Full-featured blog with posts, author profiles, and rich text editing
- **Careers Portal**: Built-in job postings and careers management system
- **Content-First Architecture**: All content stored in CMS globals - no hardcoded copy
- **Design System**: Built on shadcn/ui with consistent, customizable components
- **Modern Stack**: Next.js 15, React 19, TypeScript, and Tailwind CSS 4
- **Responsive Design**: Desktop-first design that works beautifully on all devices
- **Zero Configuration Database**: Uses SQLite for instant setup with no external dependencies

## Quick Start

### Prerequisites

- Node.js 18.20.2+ or 20.9.0+
- pnpm 9 or 10

### Development

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd seerah
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Configure your environment variables in `.env`:
   ```
   DATABASE_URI=file:./seerah.db
   PAYLOAD_SECRET=your-secret-here
   ```

4. Install dependencies:
   ```bash
   pnpm install
   ```

5. Seed the database with initial content (optional):
   ```bash
   pnpm seed:globals
   ```

6. Start the development server:
   ```bash
   pnpm dev
   ```

7. Open `http://localhost:3000` in your browser

8. Access the admin panel at `http://localhost:3000/admin` and create your first admin user

Changes made in `./src` will be reflected in your app automatically thanks to Next.js hot reload.

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

### Collections

Payload collections for managing structured content:

- **Users** - Admin authentication and user management
- **Posts** - Blog posts with rich text content, author info, and metadata
- **Careers** - Job postings with descriptions, requirements, and application info
- **Media** - File uploads with automatic image optimization

### Globals

Site-wide content managed through Payload globals:

- **Homepage** - Landing page content and hero sections
- **BlogPage** - Blog listing page configuration
- **CareersPage** - Careers page content and settings
- **SiteLabels** - Reusable labels, headings, and copy across the site

All content is fetched dynamically using `payload.findGlobal()` - see `CMS_AGENT_INSTRUCTIONS.md` for implementation details.

### Frontend Structure

```
src/
├── app/(frontend)/        # Next.js app routes
│   ├── blog/             # Blog pages
│   ├── careers/          # Careers pages
│   └── design-system/    # Component showcase
├── collections/          # Payload CMS collections
├── globals/              # Payload CMS globals
├── components/           # React components
│   ├── blog/            # Blog-specific components
│   ├── careers/         # Careers-specific components
│   └── ui/              # shadcn/ui components
└── lib/                 # Utilities and helpers
```

## Technology Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript 5.7
- **CMS**: Payload CMS 3.60
- **Database**: SQLite (via @payloadcms/db-sqlite)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Rich Text**: Lexical editor
- **Package Manager**: pnpm
- **Testing**: Vitest + Playwright

## Customization

### Design System

All UI components are based on shadcn/ui and use Tailwind CSS variables for theming. Modify `src/app/(frontend)/globals.css` to customize:

- Color palette
- Typography
- Spacing
- Border radius
- Animations

### Content Management

Content is managed through Payload CMS. To add new content types:

1. Create a new collection in `src/collections/`
2. Add it to `payload.config.ts`
3. Run `pnpm generate:types` to update TypeScript types

For global content sections:

1. Create a new global in `src/globals/`
2. Add it to `payload.config.ts`
3. Fetch using `payload.findGlobal('your-global-name')`

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm generate:types` - Generate TypeScript types from Payload config
- `pnpm seed:globals` - Seed database with initial global content
- `pnpm test` - Run all tests
- `pnpm test:e2e` - Run end-to-end tests
- `pnpm test:int` - Run integration tests

## Deployment

This template can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Zero-config deployment with automatic HTTPS
- **Cloudflare Workers**: Deploy on Cloudflare's edge network with Pages
- **Payload Cloud**: Optimized hosting for Payload CMS projects
- **Docker**: Build and deploy using containers
- **VPS/Cloud**: Deploy to any server with Node.js support

The SQLite database makes deployment simple - just deploy the entire project including the `.db` file, or use Payload Cloud for managed hosting. For Cloudflare Workers, you can use Cloudflare D1 or persist the SQLite database with Cloudflare R2.

## Resources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## License

MIT
