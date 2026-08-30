import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-20 w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-xs sm:text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:border-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50 aria-invalid:border-rose-500 aria-invalid:ring-0",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
