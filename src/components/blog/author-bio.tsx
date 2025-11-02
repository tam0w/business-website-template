import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter, Globe } from 'lucide-react'
import type { User, Media } from '@/payload-types'

interface AuthorBioProps {
  author: User
}

export function AuthorBio({ author }: AuthorBioProps) {
  const avatar = author.avatar as Media | null | undefined

  const getAuthorInitials = (name: string): string => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const socialLinks = [
    {
      name: 'Twitter',
      url: author.social?.twitter,
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      url: author.social?.linkedin,
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: author.social?.github,
      icon: Github,
    },
    {
      name: 'Website',
      url: author.social?.website,
      icon: Globe,
    },
  ].filter((link) => link.url)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            {avatar?.url && <AvatarImage src={avatar.url} alt={author.name} />}
            <AvatarFallback>{getAuthorInitials(author.name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{author.name}</h3>
            {author.designation && (
              <p className="text-sm text-muted-foreground">{author.designation}</p>
            )}
          </div>
        </div>
      </CardHeader>
      {(author.bio || socialLinks.length > 0) && (
        <CardContent>
          {author.bio && <p className="text-sm text-muted-foreground mb-4">{author.bio}</p>}
          {socialLinks.length > 0 && (
            <div className="flex gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Button key={link.name} variant="outline" size="icon" asChild>
                    <a
                      href={link.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                )
              })}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}
