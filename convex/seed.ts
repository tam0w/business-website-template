import { mutation } from './_generated/server'

// Helper to create Lexical paragraph content
const createLexicalContent = (paragraphs: string[]) => ({
  root: {
    type: 'root',
    children: paragraphs.map((text) => ({
      type: 'paragraph',
      children: [{ type: 'text', text, mode: 'normal', detail: 0, format: 0, style: '' }],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    })),
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})

// Helper to create Lexical bullet list content
const createLexicalList = (items: string[], listType: 'bullet' | 'number' = 'bullet') => ({
  root: {
    type: 'root',
    children: [
      {
        type: 'list',
        listType,
        start: 1,
        tag: listType === 'number' ? 'ol' : 'ul',
        children: items.map((text) => ({
          type: 'listitem',
          children: [{ type: 'text', text, mode: 'normal', detail: 0, format: 0, style: '' }],
          direction: 'ltr',
          format: '',
          indent: 0,
          value: 1,
          version: 1,
        })),
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    ],
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})

export const seedPosts = mutation({
  args: {},
  handler: async (ctx) => {
    const posts = [
      {
        title: 'Why Technical Content is Your Best Marketing Investment',
        slug: 'technical-content-marketing-investment',
        subTitle: 'How developer-focused content drives sustainable growth',
        excerpt:
          'In a world where developers increasingly influence purchasing decisions, technical content has become the most effective way to build trust and generate qualified leads.',
        author: {
          name: 'Ryebrim Team',
          designation: 'Content Strategy',
        },
        content: createLexicalContent([
          'The traditional marketing playbook is broken for technical products. Developers can smell marketing a mile away, and they have a deep-seated distrust of anything that feels like a sales pitch.',
          "That's why technical content—documentation, tutorials, deep-dive articles, and honest comparisons—has become the most valuable marketing asset for companies selling to technical audiences.",
          'When a developer encounters a problem at 2 AM, they search for solutions. If your content helps them solve that problem, you have earned something no ad can buy: trust. And trust converts.',
          "The best technical content doesn't just explain what your product does. It demonstrates that you understand your audience's problems deeply enough to help them, even when the solution isn't your product.",
          "Companies that invest in genuine technical content see compounding returns. Each piece of helpful content builds authority, improves SEO, and creates a library of resources that continues generating leads for years.",
        ]),
        tags: ['content-strategy', 'technical-marketing', 'developer-relations'],
        status: 'published' as const,
        publishedAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
        seo: {
          title: 'Why Technical Content is Your Best Marketing Investment | Ryebrim',
          description:
            'Learn why developer-focused content has become the most effective way to build trust and generate qualified leads for technical products.',
        },
      },
      {
        title: 'The LinkedIn Playbook for B2B Founders',
        slug: 'linkedin-playbook-b2b-founders',
        subTitle: 'Building a personal brand that drives business results',
        excerpt:
          "Your LinkedIn presence isn't just about vanity metrics. For B2B founders, it's a direct pipeline to decision-makers, talent, and partnership opportunities.",
        author: {
          name: 'Ryebrim Team',
          designation: 'LinkedIn Strategy',
        },
        content: createLexicalContent([
          "LinkedIn has quietly become the most important marketing channel for B2B companies. But most founders approach it wrong—they either ignore it entirely or treat it like a corporate press release channel.",
          'The founders seeing real results understand something crucial: LinkedIn is a relationship platform first, and a content platform second.',
          "Your goal isn't to go viral. It's to become a trusted voice in your industry. That means sharing genuine insights, engaging thoughtfully with others, and showing up consistently.",
          'The best LinkedIn content comes from actual experience. What problems are you solving? What lessons have you learned? What do you wish someone had told you earlier?',
          "Consistency matters more than perfection. A founder who posts thoughtful insights three times a week will outperform one who crafts the 'perfect' post once a month.",
        ]),
        tags: ['linkedin', 'personal-branding', 'b2b-marketing'],
        status: 'published' as const,
        publishedAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
        seo: {
          title: 'The LinkedIn Playbook for B2B Founders | Ryebrim',
          description:
            'How B2B founders can build a LinkedIn presence that drives real business results—leads, talent, and partnerships.',
        },
      },
      {
        title: 'AI Automation: Start Small, Scale Fast',
        slug: 'ai-automation-start-small-scale-fast',
        subTitle: 'A practical guide to implementing AI workflows',
        excerpt:
          "The biggest mistake companies make with AI automation is trying to transform everything at once. Here's how to start small and build momentum.",
        author: {
          name: 'Ryebrim Team',
          designation: 'Automation Strategy',
        },
        content: createLexicalContent([
          "AI automation isn't about replacing your team—it's about giving them superpowers. The most successful implementations start with a simple question: what repetitive task is stealing the most time from your best people?",
          "Start there. One workflow. One automation. Prove the value before expanding. This isn't just about managing risk—it's about building organizational muscle for AI adoption.",
          'The tools have never been more accessible. Platforms like Make, Zapier, and direct API integrations mean you can often build powerful automations without writing code.',
          "But the real work isn't technical. It's understanding your processes deeply enough to automate them well. That requires talking to the people doing the work, not just the people managing them.",
          'The best automations are invisible. They work in the background, handling the tedious work while your team focuses on what humans do best: creative problem-solving and relationship building.',
        ]),
        tags: ['ai-automation', 'productivity', 'operations'],
        status: 'published' as const,
        publishedAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
        seo: {
          title: 'AI Automation: Start Small, Scale Fast | Ryebrim',
          description:
            'A practical guide to implementing AI automation in your business—starting with high-impact workflows and scaling systematically.',
        },
      },
    ]

    for (const post of posts) {
      await ctx.db.insert('posts', post)
    }

    return { inserted: posts.length }
  },
})

export const seedCareers = mutation({
  args: {},
  handler: async (ctx) => {
    const careers = [
      {
        title: 'Senior Content Writer',
        slug: 'senior-content-writer',
        department: 'sales-marketing' as const,
        location: 'Remote (India)',
        type: 'full-time' as const,
        experienceLevel: 'senior' as const,
        remoteOption: 'remote' as const,
        description: createLexicalContent([
          "We're looking for a senior content writer who can create compelling technical and business content for B2B audiences.",
          "You'll work directly with clients to understand their products, interview subject matter experts, and produce content that drives real business results.",
          "This isn't about churning out blog posts. It's about crafting content that positions our clients as trusted authorities in their industries.",
        ]),
        responsibilities: createLexicalList([
          'Research and write long-form technical content, case studies, and thought leadership pieces',
          'Interview subject matter experts and translate complex topics into accessible content',
          'Collaborate with clients to develop content strategies aligned with business goals',
          'Edit and refine content to ensure clarity, accuracy, and engagement',
          'Stay current with industry trends and content marketing best practices',
        ]),
        requirements: createLexicalList([
          '5+ years of professional writing experience, preferably in B2B or technical contexts',
          'Demonstrated ability to explain complex topics clearly',
          'Strong research skills and attention to detail',
          'Experience working with SaaS, technology, or professional services companies',
          'Excellent communication skills and ability to work independently',
        ]),
        niceToHave: createLexicalList([
          'Technical background or familiarity with software development',
          'Experience with SEO and content optimization',
          'Portfolio of published B2B content',
        ]),
        featured: true,
        salary: {
          type: 'range' as const,
          currency: 'INR' as const,
          min: 1200000,
          max: 1800000,
        },
        status: 'published' as const,
        publishedAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
        seo: {
          title: 'Senior Content Writer | Ryebrim Careers',
          description:
            'Join Ryebrim as a Senior Content Writer. Create compelling B2B content for technology companies.',
        },
      },
      {
        title: 'LinkedIn Growth Specialist',
        slug: 'linkedin-growth-specialist',
        department: 'sales-marketing' as const,
        location: 'Remote (India)',
        type: 'full-time' as const,
        experienceLevel: 'mid' as const,
        remoteOption: 'remote' as const,
        description: createLexicalContent([
          "We're hiring a LinkedIn Growth Specialist to help our clients build powerful personal brands and company pages.",
          "You'll be responsible for developing content strategies, creating posts, managing engagement, and driving measurable growth for founders and executives.",
        ]),
        responsibilities: createLexicalList([
          'Develop and execute LinkedIn content strategies for multiple clients',
          "Write engaging posts that capture our clients' voices and expertise",
          'Manage daily engagement—comments, messages, and connection requests',
          'Analyze performance metrics and optimize strategies based on data',
          'Stay current with LinkedIn algorithm changes and best practices',
        ]),
        requirements: createLexicalList([
          '2-3 years of experience in social media management or content marketing',
          'Strong understanding of LinkedIn as a B2B platform',
          'Excellent writing skills with ability to adapt to different voices',
          'Data-driven approach to content strategy',
          'Self-motivated with strong organizational skills',
        ]),
        featured: true,
        salary: {
          type: 'range' as const,
          currency: 'INR' as const,
          min: 600000,
          max: 1000000,
        },
        status: 'published' as const,
        publishedAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
        seo: {
          title: 'LinkedIn Growth Specialist | Ryebrim Careers',
          description:
            'Join Ryebrim as a LinkedIn Growth Specialist. Help B2B founders and companies build powerful LinkedIn presences.',
        },
      },
    ]

    for (const career of careers) {
      await ctx.db.insert('careers', career)
    }

    return { inserted: careers.length }
  },
})

export const clearAndSeed = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing data
    const existingPosts = await ctx.db.query('posts').collect()
    for (const post of existingPosts) {
      await ctx.db.delete(post._id)
    }

    const existingCareers = await ctx.db.query('careers').collect()
    for (const career of existingCareers) {
      await ctx.db.delete(career._id)
    }

    // Now seed
    // (call the seeding logic inline since we can't call other mutations)
    return { cleared: true, message: 'Run seedPosts and seedCareers separately' }
  },
})
