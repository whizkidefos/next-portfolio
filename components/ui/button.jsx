"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibld ring-offset-white transition-colors",
    {
      variants: {
        variant: {
          default: "bg-accent text-primary hover:bg-accent-dark focus:ring-2 focus:ring-accent-dark",
          primary: "bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary-dark",
          outline: "bg-transparent text-accent border border-accent hover:bg-accent hover:text-primary focus:ring-2 focus:ring-accent",
        },
        size: {
          default: "h-[44px] px-6",
          sm: "h-[48px] px-6",
          lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
      (<Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }