import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ============================================
   SECTION COMPONENT
   Wrapper for page sections with consistent spacing
   ============================================ */

const sectionVariants = cva(
  "w-full",
  {
    variants: {
      background: {
        white: "bg-white",
        muted: "bg-[--color-surface-muted]",
        dark: "bg-[--color-surface-dark]",
        transparent: "bg-transparent",
      },
      paddingY: {
        none: "",
        sm: "py-8 lg:py-12",
        default: "py-16 lg:py-20",
        lg: "py-20 lg:py-28",
        xl: "py-24 lg:py-32",
      },
      paddingX: {
        none: "",
        default: "px-6 lg:px-20",
        tight: "px-4 lg:px-12",
        wide: "px-8 lg:px-24",
      },
    },
    defaultVariants: {
      background: "white",
      paddingY: "default",
      paddingX: "default",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "article"
}

function Section({
  className,
  background,
  paddingY,
  paddingX,
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      data-slot="section"
      className={cn(sectionVariants({ background, paddingY, paddingX, className }))}
      {...props}
    />
  )
}

/* ============================================
   CONTAINER COMPONENT
   Max-width wrapper for content
   ============================================ */

const containerVariants = cva(
  "mx-auto w-full",
  {
    variants: {
      size: {
        sm: "max-w-3xl",
        default: "max-w-[--section-max-width]",
        lg: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-none",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size, className }))}
      {...props}
    />
  )
}

/* ============================================
   SECTION HEADER COMPONENT
   Heading area with label, title, and description
   ============================================ */

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "center"
  maxWidth?: string
}

function SectionHeader({
  className,
  align = "left",
  maxWidth,
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      className={cn(
        "space-y-2",
        align === "center" && "text-center mx-auto",
        className
      )}
      style={{ maxWidth }}
      {...props}
    >
      {children}
    </div>
  )
}

/* ============================================
   SPLIT LAYOUT COMPONENT
   Two-column responsive layout
   ============================================ */

const splitLayoutVariants = cva(
  "flex flex-col",
  {
    variants: {
      gap: {
        sm: "gap-8",
        default: "gap-12 lg:gap-20",
        lg: "gap-16 lg:gap-24",
      },
      align: {
        start: "lg:items-start",
        center: "lg:items-center",
        end: "lg:items-end",
        stretch: "lg:items-stretch",
      },
      direction: {
        row: "lg:flex-row",
        "row-reverse": "lg:flex-row-reverse",
      },
    },
    defaultVariants: {
      gap: "default",
      align: "start",
      direction: "row",
    },
  }
)

export interface SplitLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof splitLayoutVariants> {}

function SplitLayout({
  className,
  gap,
  align,
  direction,
  ...props
}: SplitLayoutProps) {
  return (
    <div
      data-slot="split-layout"
      className={cn(splitLayoutVariants({ gap, align, direction, className }))}
      {...props}
    />
  )
}

/* ============================================
   GRID COMPONENT
   Responsive grid layout
   ============================================ */

const gridVariants = cva(
  "grid",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        auto: "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
      },
      gap: {
        sm: "gap-3",
        default: "gap-6",
        lg: "gap-8",
        xl: "gap-12",
      },
    },
    defaultVariants: {
      cols: 3,
      gap: "default",
    },
  }
)

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

function Grid({ className, cols, gap, ...props }: GridProps) {
  return (
    <div
      data-slot="grid"
      className={cn(gridVariants({ cols, gap, className }))}
      {...props}
    />
  )
}

/* ============================================
   FLEX STACK COMPONENT
   Vertical or horizontal stack
   ============================================ */

const stackVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        col: "flex-col",
        "row-reverse": "flex-row-reverse",
        "col-reverse": "flex-col-reverse",
      },
      gap: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
      },
      wrap: {
        wrap: "flex-wrap",
        nowrap: "flex-nowrap",
      },
    },
    defaultVariants: {
      direction: "col",
      gap: "md",
      align: "stretch",
      justify: "start",
      wrap: "nowrap",
    },
  }
)

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

function Stack({
  className,
  direction,
  gap,
  align,
  justify,
  wrap,
  ...props
}: StackProps) {
  return (
    <div
      data-slot="stack"
      className={cn(stackVariants({ direction, gap, align, justify, wrap, className }))}
      {...props}
    />
  )
}

export {
  Section,
  sectionVariants,
  Container,
  containerVariants,
  SectionHeader,
  SplitLayout,
  splitLayoutVariants,
  Grid,
  gridVariants,
  Stack,
  stackVariants,
}
