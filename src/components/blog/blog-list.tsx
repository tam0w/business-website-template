import { ArrowRight, Calendar } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { Post, User, Media } from "@/payload-types"

interface BlogListProps {
  heading: string
  description: string
  ctaText: string
  posts: Post[]
}

export function BlogList({
  heading,
  description,
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
      image: featuredImage?.url || "https://placehold.co/800x450/333/666?text=No+Image",
      tags: post.tags || [],
    }
  }

  return (
    <section className="min-h-screen w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        {/* Header Section */}
        <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
          <h1 className="text-4xl font-bold md:text-5xl text-foreground">
            {heading}
          </h1>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            {description}
          </p>
        </div>

        <div className="border-separator" />

        <div className="flex flex-col">
          {posts.map((post) => {
            const formattedPost = formatPost(post)
            return (
              <article
                key={formattedPost.id}
                className="group border-b border-border hover:bg-muted/30 transition-all duration-300"
              >
                <Link href={formattedPost.url}>
                  <div className="grid md:grid-cols-7">
                    {/* Image Section - smaller */}
                    <div className="md:col-span-2 md:border-r border-border">
                      <div className="aspect-video md:aspect-[4/3] h-full overflow-clip bg-muted">
                        <img
                          src={formattedPost.image}
                          alt={formattedPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-5 flex flex-col justify-between p-4 md:p-6 space-y-3">
                      <div className="flex flex-col space-y-3">
                        {/* Tags & Date - combined in one line */}
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex flex-wrap gap-1.5">
                            {formattedPost.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <time>{formattedPost.published}</time>
                          </div>
                        </div>

                        {/* Title - smaller */}
                        <h3 className="text-lg font-bold md:text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {formattedPost.title}
                        </h3>

                        {/* Summary - smaller */}
                        {formattedPost.summary && (
                          <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 leading-relaxed">
                            {formattedPost.summary}
                          </p>
                        )}
                      </div>

                      {/* Footer with Author & Read More */}
                      <div className="flex items-center justify-between gap-4 pt-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6 border">
                            {formattedPost.author.avatar && (
                              <AvatarImage
                                src={formattedPost.author.avatar}
                                alt={formattedPost.author.name}
                              />
                            )}
                            <AvatarFallback className="text-[10px]">
                              {formattedPost.author.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-medium">
                            {formattedPost.author.name}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 font-semibold text-xs group-hover:gap-2 transition-all">
                          <span>{ctaText}</span>
                          <ArrowRight className="size-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
