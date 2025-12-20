'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface BlogArticleHeroProps {
  title: string
  subtitle?: string | null
  tags?: string[]
  author?: {
    name: string
    avatar?: string | null
    initials: string
  }
  publishedDate: string
  featuredImage?: {
    url: string
    alt?: string
  } | null
}

export function BlogArticleHero({
  title,
  subtitle,
  tags,
  author,
  publishedDate,
  featuredImage,
}: BlogArticleHeroProps) {
  return (
    <section className="relative bg-[#0A1628] overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0070B3 1px, transparent 1px),
              linear-gradient(to bottom, #0070B3 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial gradient overlays */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,112,179,0.08), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle at center, rgba(0,160,255,0.06), transparent)' }}
        />
      </div>

      <div className="relative z-10 pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 px-6 lg:px-20">
        <div className="max-w-[900px] mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#EDEDED]/70 hover:text-[#EDEDED] text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="size-4" />
            Back to Insights
          </Link>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#0070B3]/20 text-[#00A0FF] hover:bg-[#0070B3]/30 border-0 font-medium text-xs uppercase tracking-wider"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-[#EDEDED] text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold leading-[1.15] tracking-[-0.02em] mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-[#EDEDED]/80 text-lg md:text-xl leading-relaxed mb-8 max-w-[800px]">
              {subtitle}
            </p>
          )}

          {/* Author & Date */}
          <div className="flex items-center gap-4">
            {author && (
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-[#0070B3]/50">
                  {author.avatar && (
                    <AvatarImage src={author.avatar} alt={author.name} />
                  )}
                  <AvatarFallback className="bg-[#0070B3] text-[#EDEDED] font-semibold">
                    {author.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-[#EDEDED] font-semibold">
                    {author.name}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-[#EDEDED]/60">
                    <Calendar className="size-3.5" />
                    <time>{publishedDate}</time>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image - extends below the hero */}
      {featuredImage?.url && (
        <div className="relative z-10 px-6 lg:px-20 -mb-24 md:-mb-32">
          <div className="max-w-[1100px] mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden border-4 border-[#0A1628] shadow-2xl">
              <img
                src={featuredImage.url}
                alt={featuredImage.alt || title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
