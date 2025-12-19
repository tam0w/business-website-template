import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ============================================
   HEADING COMPONENT
   ============================================ */

const headingVariants = cva(
  "font-sora font-semibold tracking-[-0.02em] leading-[1.2]",
  {
    variants: {
      level: {
        h1: "text-4xl md:text-5xl lg:text-[56px]",
        h2: "text-3xl lg:text-[42px]",
        h3: "text-2xl lg:text-3xl",
        h4: "text-xl lg:text-2xl",
        h5: "text-lg lg:text-xl",
        h6: "text-base lg:text-lg",
      },
      color: {
        default: "text-[#0A1628]",
        light: "text-[#EDEDED]",
        muted: "text-[#666666]",
        primary: "text-[#0070B3]",
        gradient: "text-gradient-blue",
      },
    },
    defaultVariants: {
      level: "h2",
      color: "default",
    },
  }
)

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel
}

function Heading({
  className,
  level = "h2",
  color,
  as,
  ...props
}: HeadingProps) {
  const Component = as || level || "h2"

  return (
    <Component
      data-slot="heading"
      className={cn(headingVariants({ level, color, className }))}
      {...props}
    />
  )
}

/* ============================================
   TEXT COMPONENT
   ============================================ */

const textVariants = cva(
  "font-medium tracking-[-0.016em] leading-[1.5]",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
      },
      color: {
        default: "text-[#0A1628]",
        muted: "text-[#666666]",
        light: "text-[#EDEDED]",
        primary: "text-[#0070B3]",
        inherit: "text-inherit",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "lg",
      color: "muted",
      weight: "medium",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
}

function Text({
  className,
  size,
  color,
  weight,
  as: Component = "p",
  ...props
}: TextProps) {
  return (
    <Component
      data-slot="text"
      className={cn(textVariants({ size, color, weight, className }))}
      {...props}
    />
  )
}

/* ============================================
   LABEL COMPONENT (Section Labels)
   ============================================ */

const labelVariants = cva(
  "text-base font-bold uppercase tracking-[0.05em]",
  {
    variants: {
      color: {
        primary: "text-[#0070B3]",
        light: "text-[#EDEDED]",
        muted: "text-[#666666]",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
)

export interface LabelTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

function LabelText({ className, color, ...props }: LabelTextProps) {
  return (
    <span
      data-slot="label-text"
      className={cn(labelVariants({ color, className }))}
      {...props}
    />
  )
}

/* ============================================
   STAT VALUE COMPONENT
   ============================================ */

const statVariants = cva(
  "font-sora font-semibold tracking-[-0.02em] leading-[1.1]",
  {
    variants: {
      size: {
        sm: "text-2xl",
        default: "text-[32px]",
        lg: "text-4xl lg:text-5xl",
      },
      color: {
        default: "text-[#0A1628]",
        gradient: "text-gradient-blue",
        light: "text-[#EDEDED]",
        primary: "text-[#0070B3]",
      },
    },
    defaultVariants: {
      size: "default",
      color: "gradient",
    },
  }
)

export interface StatValueProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statVariants> {}

function StatValue({ className, size, color, ...props }: StatValueProps) {
  return (
    <span
      data-slot="stat-value"
      className={cn(statVariants({ size, color, className }))}
      {...props}
    />
  )
}

/* ============================================
   LINK TEXT COMPONENT
   ============================================ */

const linkTextVariants = cva(
  "font-medium transition-colors duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-[#0070B3] hover:text-[#0070B3]/80",
        dark: "text-[#0A1628] hover:text-[#0070B3]",
        light: "text-[#EDEDED] hover:text-white",
        muted: "text-[#666666] hover:text-[#0A1628]",
        underline: "text-[#0070B3] hover:underline underline-offset-4",
      },
      size: {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
)

export interface LinkTextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkTextVariants> {}

function LinkText({ className, variant, size, ...props }: LinkTextProps) {
  return (
    <a
      data-slot="link-text"
      className={cn(linkTextVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export {
  Heading,
  headingVariants,
  Text,
  textVariants,
  LabelText,
  labelVariants,
  StatValue,
  statVariants,
  LinkText,
  linkTextVariants,
}
