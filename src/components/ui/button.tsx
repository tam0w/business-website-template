import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl text-base font-medium transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[#0070B3]/50 focus-visible:ring-2",
  {
    variants: {
      variant: {
        // Primary - matches landing page CTA exactly
        default: "bg-[#0070B3] text-[#EDEDED] hover:bg-[#0070B3]/90 font-bold border-[3px] border-black/10",
        // Secondary variants
        secondary: "bg-[#F5F5F5] text-[#0A1628] hover:bg-[#EDEDED] border border-[#DADADA]",
        outline: "border border-[#DADADA] bg-white hover:bg-[#F5F5F5] text-[#0A1628]",
        ghost: "hover:bg-[#F5F5F5] text-[#0A1628]",
        link: "text-[#0070B3] underline-offset-4 hover:underline",
        destructive: "bg-[#DC2626] text-white hover:bg-[#DC2626]/90 font-bold border-[3px] border-black/10",
        // Dark background variants (for hero sections)
        "dark-ghost": "text-[#EDEDED] hover:text-white bg-transparent",
        "dark-outline": "border border-[#EDEDED]/30 text-[#EDEDED] bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-full",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-5",
        lg: "h-12 px-6 text-lg",
        xl: "h-14 px-6 py-3.5 text-lg",
        icon: "size-10 rounded-xl",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {leftIcon && <span className="flex items-center justify-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center justify-center">{rightIcon}</span>}
    </Comp>
  )
}

export { Button, buttonVariants }
