'use client'

import { useEffect, useRef } from 'react'
import { useNavbar } from '@/contexts/NavbarContext'

export function NavbarSentinel() {
  const ref = useRef<HTMLDivElement>(null)
  const { setIsPastHero } = useNavbar()

  useEffect(() => {
    const sentinel = ref.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is NOT intersecting (scrolled past), we're past hero
        setIsPastHero(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [setIsPastHero])

  return <div ref={ref} className="h-0 w-full" aria-hidden="true" />
}
