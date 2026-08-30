import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 sm:h-10.5 w-full min-w-0 rounded-lg border border-input bg-white px-3.5 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground transition-colors outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:border-primary focus-visible:border-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50 aria-invalid:border-rose-500 aria-invalid:ring-0",
        className
      )}
      {...props}
    />
  );
}

export { Input };
