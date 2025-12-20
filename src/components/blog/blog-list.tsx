import { ArrowRight, Calendar } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Post, User, Media } from "@/payload-types"

interface BlogListProps {
  ctaText: string
  posts: Post[]
}

export function BlogList({
  ctaText,
  posts,
}: BlogListProps) {
  const formatPost = (post: Post) => {
    const author = post.author as User | undefined
    const featuredImage = post.featuredImage as Media | null | undefined
    const authorAvatar = author?.avatar as Media | null | undefined

    const getAuthorInitials = (name?: string): string => {
      if (!name) return "?"
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }

    return {
      id: post.id.toString(),
      title: post.title,
      summary: post.excerpt || post.subTitle || "",
      author: {
        name: author?.name || "Anonymous",
        avatar: authorAvatar?.url,
        initials: getAuthorInitials(author?.name),
      },
      published: post.publishedAt
        ? format(new Date(post.publishedAt), "dd MMM yyyy")
        : format(new Date(post.createdAt), "dd MMM yyyy"),
      url: `/blog/${post.slug}`,
      image: featuredImage?.url || "https://placehold.co/800x450/0A1628/0070B3?text=Enrich",
      tags: post.tags || [],
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="grid gap-8 md:gap-10">
          {posts.map((post) => {
            const formattedPost = formatPost(post)
            return (
              <article
                key={formattedPost.id}
                className="group bg-white rounded-2xl border border-[#DADADA] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#0070B3]/30"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative overflow-hidden">
                    <Link href={formattedPost.url} className="block aspect-video md:aspect-auto md:absolute md:inset-0">
                      <img
                        src={formattedPost.image}
                        alt={formattedPost.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col">
                    {/* Tags */}
                    {formattedPost.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {formattedPost.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-[#0070B3]/10 text-[#0070B3] hover:bg-[#0070B3]/20 border-0 font-medium text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-[#0A1628] leading-tight mb-3 group-hover:text-[#0070B3] transition-colors duration-300">
                      <Link href={formattedPost.url}>
                        {formattedPost.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    {formattedPost.summary && (
                      <p className="text-[#666666] text-base leading-relaxed line-clamp-2 mb-6">
                        {formattedPost.summary}
                      </p>
                    )}

                    {/* Footer */}
                    <div className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Author & Date */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border-2 border-[#DADADA]">
                            {formattedPost.author.avatar && (
                              <AvatarImage
                                src={formattedPost.author.avatar}
                                alt={formattedPost.author.name}
                              />
                            )}
                            <AvatarFallback className="bg-[#0A1628] text-[#EDEDED] text-sm font-medium">
                              {formattedPost.author.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-semibold text-[#0A1628]">
                            {formattedPost.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-[#666666]">
                          <Calendar className="h-4 w-4" />
                          <time>{formattedPost.published}</time>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={formattedPost.url}
                        className="inline-flex items-center gap-2 text-[#0070B3] font-semibold text-sm group/link"
                      >
                        <span>{ctaText}</span>
                        <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
