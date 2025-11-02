import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[--spacing-sm] whitespace-nowrap rounded-[--radius-md] text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_oklch(0.55_0.25_265_/_30%)] border border-primary/20",
        glow: "bg-primary text-primary-foreground hover:bg-primary/90 glow-primary border border-primary/40",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 border border-destructive/40",
        outline:
          "border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/40 hover:shadow-[0_0_15px_oklch(0.55_0.25_265_/_20%)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
        ghost:
          "hover:bg-accent/50 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 glow-accent border border-accent/40",
      },
      size: {
        default: "h-10 px-[--spacing-lg] py-[--spacing-sm]",
        sm: "h-8 rounded-[--radius-sm] gap-[--spacing-xs] px-[--spacing-md]",
        lg: "h-12 rounded-[--radius-lg] px-[--spacing-xl] text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
