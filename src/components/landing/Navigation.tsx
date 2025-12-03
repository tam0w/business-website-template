'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Why Enrich?', href: '#why-enrich' },
  { name: 'Blogs', href: '/blog' },
  { name: 'About Us', href: '#leadership' },
]

interface NavigationProps {
  variant?: 'transparent' | 'solid'
  className?: string
}

export function Navigation({ variant = 'transparent', className }: NavigationProps) {
  return (
    <nav
      className={cn(
        'absolute top-0 left-0 right-0 z-50 px-8 py-6',
        variant === 'solid' && 'bg-[#0A1628]',
        className
      )}
    >
      <div className="max-w-[1376px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logos/enrich-logo.svg"
            alt="Enrich"
            width={128}
            height={50}
            className="h-[50px] w-auto"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[#EDEDED] text-lg font-semibold hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:flex items-center gap-3 bg-[#EDEDED] text-[#0A1628] px-6 py-3 rounded-xl font-semibold text-base hover:bg-white transition-colors"
        >
          Free Security Audit
          <ArrowUpRight className="w-5 h-5 rotate-45" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#EDEDED]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
