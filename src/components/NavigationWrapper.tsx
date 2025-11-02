import { NavBar } from '@/components/ui/tubelight-navbar'
import { getPayload } from 'payload'
import config from '@/payload.config'

const navItems = [
  { name: 'Home', url: '/', icon: 'home' as const },
  { name: 'Careers', url: '/careers', icon: 'briefcase' as const },
  { name: 'Blog', url: '/blog', icon: 'fileText' as const },
  { name: 'Contact', url: '#contact', icon: 'mail' as const },
]

export async function NavigationWrapper() {
  const payload = await getPayload({ config })
  const branding = await payload.findGlobal({
    slug: 'site-branding',
  })

  const logo = branding?.logoIcon
    ? {
        iconName: branding.logoIcon,
        companyName: branding.companyName || 'Company Logo',
      }
    : undefined

  return <NavBar items={navItems} logo={logo} />
}
