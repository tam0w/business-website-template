"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import * as brands from '@fortawesome/free-brands-svg-icons'

interface BrandIconProps {
  iconName: string
  className?: string
  size?: string // Size in pixels or rem
}

export function BrandIcon({ iconName, className, size }: BrandIconProps) {
  // Convert icon name to the format Font Awesome uses (e.g., "react" -> "faReact")
  const faIconName = `fa${iconName.charAt(0).toUpperCase()}${iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}` as keyof typeof brands

  const icon = brands[faIconName] as IconDefinition

  if (!icon) {
    console.warn(`Icon "${iconName}" not found in Font Awesome brands`)
    return null
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      style={size ? { width: size, height: size } : undefined}
    />
  )
}
