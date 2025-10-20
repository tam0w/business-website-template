import { ReactNode } from 'react'
import './globals.css'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body className='h-dvh bg-black'>
        {children}
      </body>
    </html>
  )
}

export default Layout
