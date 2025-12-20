import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-sm font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-4 gap-2 [&>svg]:pointer-events-none transition-colors duration-300",
  {
    variants: {
      variant: {
        // Standard badges
        default: "border-transparent bg-[#0070B3] text-white",
        secondary: "border-transparent bg-[#F5F5F5] text-[#0A1628]",
        outline: "border-[#DADADA] bg-transparent text-[#0A1628]",
        destructive: "border-transparent bg-[#DC2626] text-white",
        // Trust badge - matches hero exactly
        trust: "border border-[#EDEDED]/30 bg-white/5 backdrop-blur-sm text-[#EDEDED] px-6 py-3 text-base font-semibold",
        // Pill variants - matches testimonial logo container
        pill: "bg-white text-[#0A1628] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.16)] px-6 py-4",
        "pill-muted": "bg-[#F5F5F5] text-[#666666]",
        // Tech tag - for service technology tags
        tech: "rounded-md border-transparent bg-[#0070B3]/8 text-[#0070B3] text-xs px-2.5 py-1",
        // Sector tag - for industry sectors
        sector: "rounded-lg border border-[#DADADA] bg-white text-[#666666] text-sm px-4 py-2",
        // Status badges
        success: "border-transparent bg-emerald-500/10 text-emerald-600",
        warning: "border-transparent bg-amber-500/10 text-amber-600",
        info: "border-transparent bg-[#0070B3]/10 text-[#0070B3]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
