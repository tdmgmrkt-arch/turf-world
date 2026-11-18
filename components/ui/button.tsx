import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-forest-600 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-forest-600 text-white rounded-xl hover:bg-forest-700 active:bg-forest-800 shadow-sm hover:shadow-md",
        destructive:
          "bg-red-600 text-white rounded-xl hover:bg-red-700 active:bg-red-800",
        outline:
          "border-2 border-slate-300 bg-transparent text-slate-800 rounded-xl hover:bg-slate-100 hover:border-slate-400",
        secondary:
          "bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-200",
        ghost:
          "rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900",
        link:
          "text-forest-700 underline-offset-4 hover:underline hover:text-forest-800",
        dark:
          "bg-slate-900 text-white rounded-xl hover:bg-slate-800 active:bg-slate-950",
        white:
          "bg-white text-slate-900 rounded-xl hover:bg-slate-50 shadow-sm",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "size-10",
        "icon-sm": "size-9",
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
