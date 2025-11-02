"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Find active tab based on current pathname
  // Support nested routes by checking if pathname starts with item.url
  const activeItem = items.find((item) => {
    if (item.url === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(item.url)
  }) || items[0]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-6 md:top-8 lg:top-10 left-1/2 -translate-x-1/2 z-50 mb-[--spacing-lg] pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center gap-2 glass py-2 px-2 rounded-xl shadow-lg border-glow-hover pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeItem.name === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-base font-semibold px-4 py-2 rounded-xl transition-all duration-300",
                "text-foreground/80 hover:text-primary hover:bg-primary/5",
                isActive && "bg-primary/10 text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-xl -z-10 border border-primary/20"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    boxShadow: "0 0 20px oklch(0.55 0.25 265 / 20%), inset 0 0 20px oklch(0.55 0.25 265 / 10%)",
                    position: "absolute"
                  }}
                  layout="position"
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-primary rounded-full">
                    <div className="absolute w-full h-3 bg-primary/30 rounded-full blur-sm -top-1" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
