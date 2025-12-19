import * as React from "react"

import { cn } from "@/lib/utils"

// Matches landing page contact form exactly: h-12 px-4 rounded-lg border-[#DADADA]
function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full h-12 px-4 rounded-lg border border-[#DADADA] bg-white text-base",
        "placeholder:text-[#666666] text-[#0A1628]",
        "focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-[120px] px-4 py-3 rounded-lg border border-[#DADADA] bg-white text-base resize-y",
        "placeholder:text-[#666666] text-[#0A1628]",
        "focus:border-[#0070B3] focus:ring-2 focus:ring-[#0070B3]/20 outline-none transition-all",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input, Textarea }
