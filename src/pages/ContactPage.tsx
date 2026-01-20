import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Mail, MapPin, ArrowUpRight, Send, Check } from 'lucide-react'
import { Github, Twitter, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'
import { FaDiscord, FaSlack } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitLead = useMutation(api.leads.submitContactForm)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      await submitLead({
        name: formState.name,
        email: formState.email,
        company: formState.company || undefined,
        message: formState.message,
      })
      setIsSubmitted(true)
      setFormState({ name: '', email: '', company: '', message: '' })
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <article className="w-full">
      <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
        {/* Header */}
        <header className="px-4 md:px-6 pt-32 pb-12">
          <h1 className="text-4xl font-display font-bold md:text-5xl text-foreground">
            {contactInfo.heading}
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl">
            {contactInfo.subheading}
          </p>
        </header>

        <div className="border-separator" />

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2">
          {/* Left Column - Contact Form */}
          <div className="p-4 md:p-8 lg:border-r border-border">
            <h2 className="text-sm tracking-caps text-muted-foreground mb-8">
              Send a Message
            </h2>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Message Sent</h3>
                <p className="text-muted-foreground mb-6">
                  We'll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {error && (
                  <p className="text-destructive text-sm">{error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Right Column - Contact Details */}
          <div className="border-t lg:border-t-0 border-border">
            {/* Email */}
            <div className="p-4 md:p-8 border-b border-border">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="h-5 w-5 text-primary" />
                <h3 className="text-sm tracking-caps text-muted-foreground">Email</h3>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {contactInfo.email}
              </a>
              {contactInfo.emailDescription && (
                <p className="text-sm text-muted-foreground mt-1">
                  {contactInfo.emailDescription}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="p-4 md:p-8 border-b border-border">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-sm tracking-caps text-muted-foreground">Location</h3>
              </div>
              <address className="not-italic text-xl font-medium text-foreground whitespace-pre-line">
                {contactInfo.officeAddress}
              </address>
              {contactInfo.officeDescription && (
                <p className="text-sm text-muted-foreground mt-1">
                  {contactInfo.officeDescription}
                </p>
              )}
            </div>

            {/* Social Links */}
            {contactInfo.socialLinks && contactInfo.socialLinks.length > 0 && (
              <div className="p-4 md:p-8">
                <h3 className="text-sm tracking-caps text-muted-foreground mb-4">
                  {contactInfo.socialHeading}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {contactInfo.socialLinks.map((social, index) => {
                    const Icon = iconMap[social.icon] || Github
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-4 py-2 border border-border hover:border-primary hover:bg-primary/5 transition-all"
                      >
                        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {social.platform}
                        </span>
                        <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </article>
  )
}
