import { ReactNode } from 'react'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { NavigationWrapper } from '@/components/NavigationWrapper'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html className={`dark ${spaceGrotesk.variable}`}>
      <body className="min-h-dvh antialiased">
        <NavigationWrapper />
        {children}
      </body>
    </html>
  )
}

export default Layout
