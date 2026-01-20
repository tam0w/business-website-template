"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, FileText, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/Logo"

const iconMap = {
  home: Home,
  briefcase: Briefcase,
  fileText: FileText,
  mail: Mail,
} as const

interface NavItem {
  name: string
  url: string
  icon: keyof typeof iconMap
}

interface LogoData {
  iconName: string
  companyName: string
}

interface NavBarProps {
  items: NavItem[]
  logo?: LogoData
  className?: string
}

export function NavBar({ items, logo, className }: NavBarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  // Find active tab based on current pathname
  // Support nested routes by checking if pathname starts with item.url
  const activeItem = items.find((item) => {
    if (item.url === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(item.url)
  }) || items[0]

  const activeIndex = items.findIndex(item => item.name === activeItem.name)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update indicator position when active index changes
  useEffect(() => {
    const activeElement = itemRefs.current[activeIndex]
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
    }
  }, [activeIndex])

  return (
    <div
      className={cn(
        "fixed top-6 md:top-8 lg:top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none",
        className,
      )}
    >
      <nav className="flex items-center gap-1 border border-border bg-card/50 backdrop-blur-sm py-1 px-1 shadow-lg hover:border-primary/40 transition-all duration-300 pointer-events-auto relative">
        {logo && (
          <div className="mr-1 px-2 py-2 border-r border-border">
            <Logo iconName={logo.iconName} companyName={logo.companyName} />
          </div>
        )}
        {items.map((item, index) => {
          const Icon = iconMap[item.icon]
          const isActive = index === activeIndex

          return (
            <Link
              key={item.name}
              href={item.url}
              ref={(el) => { itemRefs.current[index] = el }}
              className={cn(
                "relative cursor-pointer text-base font-semibold px-3 py-2 transition-all duration-300 z-10",
                "text-foreground/80 hover:text-primary hover:bg-primary/5",
                isActive && "text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </Link>
          )
        })}

        <motion.div
          className="absolute bg-primary/10 border border-primary/20 -z-10"
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            height: '36px',
            top: '4px',
          }}
        />
      </nav>
    </div>
  )
}
