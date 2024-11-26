"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (
        (<textarea
            className={cn(
                "flex min-h-[80px] w-full rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none transition-colors duration-500 focus:ring-accent focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            {...props} />)
    );
})
Textarea.displayName = "Textarea"

export { Textarea }
