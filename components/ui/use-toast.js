import { toast as sonnerToast } from "sonner";
import { cn } from "@/lib/utils"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 3000

export function useToast() {
  return {
    toast: ({ title, description, variant, ...props }) => {
      sonnerToast[variant === "destructive" ? "error" : "success"]({
        title,
        description,
        duration: 5000, // Increased duration for better readability
        className: cn(
          "group grid grid-cols-[auto_max-content] items-center gap-x-4 rounded-xl border bg-[#27272c] p-6 shadow-lg [&>div]:pl-0",
          {
            "border-red-500/20": variant === "destructive",
            "border-green-500/20": variant === "success",
            "border-accent/20": variant === "default",
          }
        ),
        ...props,
      })
    },
    dismiss: (toastId) => sonnerToast.dismiss(toastId),
    toasts: [], // Keep track of toasts if needed
  }
}