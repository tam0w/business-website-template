import type { AboutContent } from '@/types'

export const aboutContent: AboutContent = {
  heading: 'Built for Expertise-Driven Businesses',
  subheading: "We're a small team that understands the unique challenges of marketing complex offerings to discerning audiences.",

  story: {
    heading: 'Our Story',
    paragraphs: [
      "Most agencies don't get expertise-heavy businesses. They push generic marketing playbooks that feel hollow to knowledgeable audiences. We started Ryebrim because we saw too many brilliant products and services fail to find their audience—not because of quality, but because of how they were communicated.",
      "We believe the best marketing for complex offerings doesn't feel like marketing at all. It feels like genuine expertise being shared—whether that's technical documentation, regulatory guidance, or industry insights. That's the approach we bring to every engagement.",
    ],
  },

  approach: {
    heading: 'Our Approach',
    items: [
      {
        title: 'Depth Over Volume',
        description: "We'd rather publish one piece that becomes a reference in your industry than ten posts that disappear into the noise. Quality compounds.",
      },
      {
        title: 'Founders First',
        description: "Your personal brand is often more valuable than your company brand. We help founders become the trusted voice in their space.",
      },
      {
        title: 'Systems Over Hustle',
        description: "We build repeatable content systems and automation workflows. Less firefighting, more strategic growth.",
      },
    ],
  },

  team: {
    heading: 'Who We Are',
    description: "Started by three engineering graduates who went different directions—one into content strategy and editorial, one into systems and automation, one into growth and client work. What we share: a background in both technical problem-solving and the messy, human work of communication. That combination is rarer than it sounds, and it's why we can work across industries without losing depth.",
  },

  cta: {
    heading: "Let's Talk",
    description: "If you're building something complex and need help telling that story, we should connect.",
    buttonText: 'Get in Touch',
    buttonLink: '/contact',
  },
}
