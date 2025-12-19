import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "flex flex-col rounded-xl transition-all duration-300",
  {
    variants: {
      variant: {
        // Default - clean white card
        default: "bg-white text-[#0A1628] border border-[#DADADA]",
        // Elevated - with shadow (matches form card from landing)
        elevated: "bg-white text-[#0A1628] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]",
        // Outline - border only
        outline: "bg-transparent border border-[#DADADA] hover:border-[#0070B3]/40",
        // Ghost - no background
        ghost: "bg-transparent",
        // Muted - light gray background (matches testimonial cards)
        muted: "bg-[#EDEDED] text-[#0A1628]",
        // Dark - for dark sections
        dark: "bg-[#0A1628] text-[#EDEDED]",
        // Glass - for overlays on dark backgrounds
        glass: "bg-white/5 backdrop-blur-sm border border-[#EDEDED]/20 text-[#EDEDED]",
        // Interactive - hover state (matches service cards)
        interactive: "bg-white text-[#0A1628] cursor-pointer hover:bg-neutral-100 hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.24)]",
      },
      padding: {
        none: "",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
      gap: {
        none: "",
        sm: "gap-2",
        default: "gap-3",
        lg: "gap-6",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      gap: "default",
    },
  }
)

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, padding, gap, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, padding, gap, className }))}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-1.5",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-sora text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#0A1628]",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-[#666666] text-lg font-medium leading-[1.5] tracking-[-0.016em]",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center mt-auto", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
}
