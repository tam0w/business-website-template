import { NavBar } from '@/components/ui/tubelight-navbar'
import { siteBranding } from '@/data'

const navItems = [
  { name: 'Home', url: '/', icon: 'home' as const },
  { name: 'Careers', url: '/careers', icon: 'briefcase' as const },
  { name: 'Blog', url: '/blog', icon: 'fileText' as const },
  { name: 'Contact', url: '/contact', icon: 'mail' as const },
]

export function NavigationWrapper() {
  const logo = {
    iconName: siteBranding.logoIcon,
    companyName: siteBranding.companyName,
  }

  return <NavBar items={navItems} logo={logo} />
}
