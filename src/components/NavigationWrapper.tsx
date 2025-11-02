"use client"

import { NavBar } from '@/components/ui/tubelight-navbar'
import { Home, Briefcase, FileText, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Careers', url: '/careers', icon: Briefcase },
  { name: 'Blog', url: '/blog', icon: FileText },
  { name: 'Contact', url: '#contact', icon: Mail },
]

export function NavigationWrapper() {
  return <NavBar items={navItems} />
}
