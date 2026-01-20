import { Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'
import { FaDiscord, FaSlack } from 'react-icons/fa'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { contactInfo } from '@/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  discord: FaDiscord,
  slack: FaSlack,
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display mb-4">{contactInfo.heading}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactInfo.subheading}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary hover:underline font-medium"
              >
                {contactInfo.email}
              </a>
              {contactInfo.emailDescription && (
                <p className="text-sm text-muted-foreground mt-2">
                  {contactInfo.emailDescription}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Office Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Office</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <address className="not-italic whitespace-pre-line">
                {contactInfo.officeAddress}
              </address>
              {contactInfo.officeDescription && (
                <p className="text-sm text-muted-foreground mt-2">
                  {contactInfo.officeDescription}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {contactInfo.phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.number.replace(/\D/g, '')}`}
                    className="block text-primary hover:underline font-medium"
                  >
                    {phone.number}
                  </a>
                ))}
              </div>
              {contactInfo.phoneDescription && (
                <p className="text-sm text-muted-foreground mt-2">
                  {contactInfo.phoneDescription}
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        {contactInfo.socialLinks && contactInfo.socialLinks.length > 0 && (
          <div className="text-center">
            <h2 className="text-2xl font-display mb-6">{contactInfo.socialHeading}</h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {contactInfo.socialLinks.map((social, index) => {
                const Icon = iconMap[social.icon] || Github
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-card border border-border  hover:border-primary/50 hover:bg-accent/50 transition-all"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{social.platform}</span>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
