'use client'

import { Shield, Check, AlertCircle, Info, ChevronDown, Mail, Download, Edit, Settings, MoreVertical, LogOut, CreditCard, User, Trash2, ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input, Textarea } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SectionLabel } from '@/components/landing/SectionLabel'

const ShowcaseSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-16">
    <h2 className="text-[#0070B3] text-base font-bold mb-6 uppercase tracking-wide">{title}</h2>
    {children}
  </section>
)

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0A1628] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Badge variant="trust" className="mb-6">
            <Shield className="w-5 h-5" />
            Design System v1.0
          </Badge>
          <h1 className="font-sora text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#EDEDED] mb-4">
            Enrich Design System
          </h1>
          <p className="text-[#EDEDED]/90 text-lg md:text-xl font-medium leading-[1.5] max-w-2xl mx-auto">
            Consistent components extracted from the landing page. All elements use the same rounding, colors, and spacing.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Colors */}
        <ShowcaseSection title="Colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#0A1628]" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">Navy</p>
                    <p className="text-sm text-[#666666]">#0A1628</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#0070B3]" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">Blue</p>
                    <p className="text-sm text-[#666666]">#0070B3</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#00A0FF]" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">Cyan</p>
                    <p className="text-sm text-[#666666]">#00A0FF</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Neutral Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#EDEDED] border border-[#DADADA]" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">Light</p>
                    <p className="text-sm text-[#666666]">#EDEDED</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#666666]" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">Gray</p>
                    <p className="text-sm text-[#666666]">#666666</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#F5F5F5] border border-[#DADADA]" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">Muted</p>
                    <p className="text-sm text-[#666666]">#F5F5F5</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>

        {/* Typography */}
        <ShowcaseSection title="Typography">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="lg">
              <CardHeader>
                <CardTitle>Headings (Sora)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h1 className="font-sora text-4xl md:text-5xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A1628]">Heading 1</h1>
                  <p className="text-sm text-[#666666]">56px / semibold</p>
                </div>
                <div>
                  <h2 className="font-sora text-3xl lg:text-[42px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A1628]">Heading 2</h2>
                  <p className="text-sm text-[#666666]">42px / semibold</p>
                </div>
                <div>
                  <h3 className="font-sora text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A1628]">Heading 3</h3>
                  <p className="text-sm text-[#666666]">24px / semibold</p>
                </div>
              </CardContent>
            </Card>

            <Card padding="lg">
              <CardHeader>
                <CardTitle>Body Text (DM Sans)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-xl font-medium text-[#666666] leading-[1.5]">Large body text</p>
                  <p className="text-sm text-[#666666]">20px / medium</p>
                </div>
                <div>
                  <p className="text-lg font-medium text-[#666666] leading-[1.5]">Default body text</p>
                  <p className="text-sm text-[#666666]">18px / medium</p>
                </div>
                <div>
                  <p className="text-base font-medium text-[#666666] leading-[1.5]">Base text</p>
                  <p className="text-sm text-[#666666]">16px / medium</p>
                </div>
                <div>
                  <p className="text-gradient-blue text-[32px] font-semibold">99.9%</p>
                  <p className="text-sm text-[#666666]">Stat value / gradient</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>

        {/* Buttons */}
        <ShowcaseSection title="Buttons">
          <div className="space-y-6">
            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>All buttons use rounded-xl (12px)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                  <Button size="icon"><Shield className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Buttons with Icons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button leftIcon={<Mail className="w-4 h-4" />}>Email</Button>
                  <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>Download</Button>
                  <Button rightIcon={<ArrowUpRight className="w-4 h-4" />}>Learn More</Button>
                  <Button leftIcon={
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0070B3] to-[#00A0FF] flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  }>
                    Hero CTA Style
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="p-8 rounded-xl bg-[#0A1628]">
              <p className="text-[#EDEDED] text-base font-semibold mb-4">Dark Background Variants</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="dark-ghost">Ghost Text</Button>
                <Button variant="dark-outline">Outline Badge</Button>
              </div>
            </div>
          </div>
        </ShowcaseSection>

        {/* Cards */}
        <ShowcaseSection title="Cards">
          <p className="text-[#666666] text-lg mb-6">All cards use rounded-xl (12px)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default</CardTitle>
                <CardDescription>White with border</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">Standard card styling.</p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated</CardTitle>
                <CardDescription>With shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">Matches form card from landing.</p>
              </CardContent>
            </Card>

            <Card variant="outline">
              <CardHeader>
                <CardTitle>Outline</CardTitle>
                <CardDescription>Border only</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">Minimal border style.</p>
              </CardContent>
            </Card>

            <Card variant="muted">
              <CardHeader>
                <CardTitle>Muted</CardTitle>
                <CardDescription>Gray background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">Matches testimonial cards.</p>
              </CardContent>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive</CardTitle>
                <CardDescription>Hover to see effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#666666]">Matches service cards.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-8 rounded-xl bg-[#0A1628]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="dark">
                <CardHeader>
                  <CardTitle className="text-[#EDEDED]">Dark Card</CardTitle>
                  <CardDescription className="text-[#EDEDED]/70">For dark sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#EDEDED]/80">Navy background.</p>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-[#EDEDED]">Glass Card</CardTitle>
                  <CardDescription className="text-[#EDEDED]/70">Glassmorphism</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#EDEDED]/80">Backdrop blur effect.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </ShowcaseSection>

        {/* Badges */}
        <ShowcaseSection title="Badges">
          <p className="text-[#666666] text-lg mb-6">All badges use rounded-full (pill shape)</p>
          <div className="space-y-6">
            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Badge Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Status Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="success"><Check className="w-4 h-4" /> Success</Badge>
                  <Badge variant="warning"><AlertCircle className="w-4 h-4" /> Warning</Badge>
                  <Badge variant="info"><Info className="w-4 h-4" /> Info</Badge>
                </div>
              </CardContent>
            </Card>

            <Card variant="outline" padding="lg">
              <CardHeader>
                <CardTitle>Pill Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="pill">White Pill</Badge>
                  <Badge variant="pill-muted">Muted Pill</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="p-8 rounded-xl bg-[#0A1628]">
              <p className="text-[#EDEDED] text-base font-semibold mb-4">Trust Badge (matches hero)</p>
              <Badge variant="trust">
                <Shield className="w-5 h-5" />
                Trusted by 200+ Enterprises
              </Badge>
            </div>
          </div>
        </ShowcaseSection>

        {/* Form Inputs */}
        <ShowcaseSection title="Form Inputs">
          <p className="text-[#666666] text-lg mb-6">All inputs use rounded-lg (8px) - one step smaller than cards/buttons</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="lg">
              <CardHeader>
                <CardTitle>Text Input</CardTitle>
                <CardDescription>Matches contact form exactly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-[#666666] text-base font-medium">Full Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#666666] text-base font-medium">Email</label>
                  <Input type="email" placeholder="you@company.com" />
                </div>
              </CardContent>
            </Card>

            <Card padding="lg">
              <CardHeader>
                <CardTitle>Select & Textarea</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-[#666666] text-base font-medium">Organization Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[#666666] text-base font-medium">Message</label>
                  <Textarea placeholder="Your message..." />
                </div>
              </CardContent>
            </Card>
          </div>
        </ShowcaseSection>

        {/* Section Labels */}
        <ShowcaseSection title="Section Labels">
          <Card variant="outline" padding="lg">
            <CardContent className="space-y-8">
              <div>
                <p className="text-sm text-[#666666] mb-2">Left aligned (default)</p>
                <SectionLabel variant="left">What We Offer</SectionLabel>
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-2">Both sides</p>
                <SectionLabel variant="both">Featured</SectionLabel>
              </div>
              <div className="text-center">
                <p className="text-sm text-[#666666] mb-2">Centered</p>
                <div className="flex justify-center">
                  <SectionLabel variant="both">Testimonials</SectionLabel>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        {/* Dropdown Menu */}
        <ShowcaseSection title="Dropdown Menu">
          <Card variant="outline" padding="lg">
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Actions <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><User className="w-4 h-4" />Profile</DropdownMenuItem>
                    <DropdownMenuItem><CreditCard className="w-4 h-4" />Billing</DropdownMenuItem>
                    <DropdownMenuItem><Settings className="w-4 h-4" />Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><LogOut className="w-4 h-4" />Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem><Edit className="w-4 h-4" />Edit</DropdownMenuItem>
                    <DropdownMenuItem><Download className="w-4 h-4" />Download</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-[#DC2626]"><Trash2 className="w-4 h-4" />Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        {/* Rounding Reference */}
        <ShowcaseSection title="Rounding Reference">
          <Card variant="outline" padding="lg">
            <CardHeader>
              <CardTitle>Border Radius Scale</CardTitle>
              <CardDescription>Consistent rounding across components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-12 bg-[#0070B3] rounded-xl" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">rounded-xl (12px)</p>
                    <p className="text-sm text-[#666666]">Buttons, Cards</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-12 bg-[#0070B3] rounded-lg" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">rounded-lg (8px)</p>
                    <p className="text-sm text-[#666666]">Inputs, Selects, Dropdown items</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-12 bg-[#0070B3] rounded-full" />
                  <div>
                    <p className="font-semibold text-[#0A1628]">rounded-full</p>
                    <p className="text-sm text-[#666666]">Badges, Pills, Icon containers</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>

        {/* Shadow Reference */}
        <ShowcaseSection title="Shadows">
          <Card variant="outline" padding="lg">
            <CardHeader>
              <CardTitle>Shadow Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]">
                  <p className="font-semibold text-[#0A1628]">Card Shadow</p>
                  <p className="text-sm text-[#666666]">0px 2px 4px rgba(0,0,0,0.24)</p>
                </div>
                <div className="p-6 rounded-full bg-white shadow-[1px_1px_2px_0px_rgba(0,0,0,0.16)]">
                  <p className="font-semibold text-[#0A1628] text-center">Pill Shadow</p>
                  <p className="text-sm text-[#666666] text-center">1px 1px 2px rgba(0,0,0,0.16)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ShowcaseSection>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#DADADA] py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-sm text-[#666666]">
            Enrich Design System · Based on landing page patterns
          </p>
          <a href="/" className="text-sm text-[#0070B3] hover:underline">
            Back to Home
          </a>
        </div>
      </footer>
    </div>
  )
}
