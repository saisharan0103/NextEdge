import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>((
  { className, type, ...props },
  ref,
) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-card border border-border bg-surface px-4 text-base text-text placeholder:text-muted transition-colors duration-hover ease-fluid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
