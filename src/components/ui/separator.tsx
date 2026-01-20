"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const separatorVariants = cva("shrink-0", {
  variants: {
    variant: {
      default: "bg-border",
      primary: "bg-primary",
      muted: "bg-muted",
    },
    thickness: {
      default: "",
      thick: "",
    },
    orientation: {
      horizontal: "w-full",
      vertical: "h-full",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      thickness: "default",
      className: "h-px",
    },
    {
      orientation: "horizontal",
      thickness: "thick",
      className: "h-0.5",
    },
    {
      orientation: "vertical",
      thickness: "default",
      className: "w-px",
    },
    {
      orientation: "vertical",
      thickness: "thick",
      className: "w-0.5",
    },
  ],
  defaultVariants: {
    variant: "default",
    thickness: "default",
    orientation: "horizontal",
  },
})

function Separator({
  className,
  variant,
  thickness,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorVariants({ variant, thickness, orientation }),
        className
      )}
      {...props}
    />
  )
}

export { Separator, separatorVariants }
