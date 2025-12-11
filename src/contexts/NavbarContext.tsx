'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface NavbarContextType {
  isPastHero: boolean
  setIsPastHero: (value: boolean) => void
}

const NavbarContext = createContext<NavbarContextType | null>(null)

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [isPastHero, setIsPastHero] = useState(false)

  return (
    <NavbarContext.Provider value={{ isPastHero, setIsPastHero }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbar() {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error('useNavbar must be used within NavbarProvider')
  }
  return context
}
