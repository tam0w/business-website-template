'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useNavbar } from '@/contexts/NavbarContext'

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'Why Enrich?', href: '/why-enrich' },
  { name: 'Blogs', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

// Pages that have dark hero sections and should start with transparent navbar
const darkHeroRoutes = ['/', '/services', '/contact', '/why-enrich', '/blog', '/careers']

export function Navigation() {
  const pathname = usePathname()
  const { isPastHero } = useNavbar()

  // Check if current page or blog article pages have dark hero
  const hasDarkHero = darkHeroRoutes.includes(pathname) || pathname.startsWith('/blog/')

  // Show solid when past hero OR when page doesn't have a dark hero
  const showSolid = !hasDarkHero || isPastHero

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300',
        showSolid && 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
      )}
    >
      <div className="max-w-[1376px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={showSolid ? '/images/logos/enrich-logo-blue.svg' : '/images/logos/enrich-logo.svg'}
            alt="Enrich"
            width={144}
            height={56}
            className={cn(
              'w-auto transition-all duration-300',
              showSolid ? 'h-[56px]' : 'h-[50px]'
            )}
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-lg font-semibold transition-colors',
                showSolid
                  ? 'text-[#0A1628] hover:text-[#0070B3]'
                  : 'text-[#EDEDED] hover:text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/#contact"
          className={cn(
            'hidden md:flex items-center gap-3 px-6 py-3 rounded-md font-semibold text-base transition-colors',
            showSolid
              ? 'bg-[#0A1628] text-white hover:bg-[#162a45]'
              : 'bg-white text-[#0A1628] hover:bg-gray-100'
          )}
        >
          Free Security Audit
          <ArrowUpRight className="w-5 h-5" />
        </Link>

        {/* Mobile Menu Button */}
        <button className={cn('md:hidden', showSolid ? 'text-[#0A1628]' : 'text-[#EDEDED]')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
