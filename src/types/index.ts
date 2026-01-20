// Lexical JSON content structure (for blog posts and career descriptions)
export interface LexicalContent {
  root: {
    type: string
    children: unknown[]
    direction: 'ltr' | 'rtl' | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
}

// Author (embedded in posts)
export interface Author {
  name: string
  avatar?: string
  designation?: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
}

// SEO metadata
export interface SEOMetadata {
  title?: string
  description?: string
}

// Blog post
export interface Post {
  _id: string
  title: string
  slug: string
  subTitle?: string
  excerpt?: string
  featuredImage?: string
  author: Author
  content: LexicalContent
  tags?: string[]
  status: 'draft' | 'scheduled' | 'published'
  publishedAt?: number
  seo?: SEOMetadata
  _creationTime: number
}

// Salary structure
export interface Salary {
  type: 'range' | 'fixed' | 'competitive'
  currency?: 'USD' | 'EUR' | 'GBP' | 'INR'
  min?: number
  max?: number
  amount?: number
}

// Career/Job posting
export interface Career {
  _id: string
  title: string
  slug: string
  department: 'cybersecurity' | 'data-services' | 'engineering' | 'operations' | 'sales-marketing'
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  experienceLevel: 'entry' | 'mid' | 'senior' | 'lead'
  remoteOption: 'remote' | 'onsite' | 'hybrid'
  description: LexicalContent
  responsibilities: LexicalContent
  requirements: LexicalContent
  niceToHave?: LexicalContent
  featured?: boolean
  clearanceRequired?: boolean
  clearanceDetails?: string
  salary: Salary
  status: 'draft' | 'scheduled' | 'published' | 'closed'
  publishedAt?: number
  seo?: SEOMetadata
  _creationTime: number
}

// Feature item for landing page
export interface Feature {
  title: string
  description: string
  illustration: 'lightning' | 'shield' | 'layers' | 'branches' | 'sparkles' | 'rocket' | 'code' | 'pen' | 'network' | 'automation'
  icon: 'Zap' | 'Shield' | 'Layers' | 'GitBranch' | 'Sparkles' | 'Rocket' | 'Lock' | 'Database' | 'Cloud' | 'Code' | 'Globe' | 'Settings' | 'FileText' | 'PenTool' | 'Linkedin' | 'Bot'
}

// Testimonial
export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
}

// FAQ item
export interface FAQ {
  question: string
  answer: string
}

// Social link
export interface SocialLink {
  platform: string
  url: string
  icon: 'github' | 'twitter' | 'linkedin' | 'instagram' | 'facebook' | 'youtube' | 'discord' | 'slack'
}

// Contact information
export interface ContactInfo {
  heading: string
  subheading: string
  email: string
  emailDescription?: string
  officeAddress: string
  officeDescription?: string
  phoneNumbers: { number: string }[]
  phoneDescription?: string
  socialHeading: string
  socialLinks?: SocialLink[]
}

// Site branding
export interface SiteBranding {
  logoIcon: string
  logoText: string
  companyName: string
}

// Site labels (UI text)
export interface SiteLabels {
  readMore: string
  learnMore: string
  loading: string
  viewDetails: string
  authorFallback: string
  noExcerptFallback: string
  noImageFallback: string
}

// Homepage content
export interface HomepageContent {
  heroHeading: string
  heroSubheading: string
  heroPrimaryButtonText: string
  heroPrimaryButtonLink?: string
  heroSecondaryButtonText: string
  heroSecondaryButtonLink?: string
  loggedInGreeting: string
  ctaType: 'waitlist' | 'pricing'
  ctaHeading: string
  ctaDescription: string
  waitlistEmailPlaceholder?: string
  waitlistButtonText?: string
  pricingPlanName?: string
  pricingPrice?: string
  pricingPriceSubtext?: string
  pricingFeatures?: { feature: string }[]
  pricingButtonText?: string
  pricingButtonLink?: string
}

// Features content
export interface FeaturesContent {
  heading: string
  subheading: string
  features: Feature[]
}

// Testimonials content
export interface TestimonialsContent {
  heading: string
  subheading?: string
  testimonials: Testimonial[]
}

// FAQ content
export interface FAQContent {
  heading: string
  subheading?: string
  faqs: FAQ[]
}

// Blog page content
export interface BlogPageContent {
  heading: string
  description: string
  emptyStateTitle: string
  emptyStateDescription: string
  ctaText: string
}

// Careers page content
export interface CareersPageContent {
  heading: string
  description: string
  emptyStateTitle: string
  emptyStateDescription: string
  ctaText: string
}
