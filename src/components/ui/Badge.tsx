import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "amber" | "cyan" | "indigo" | "emerald" | "neutral";
  size?: "sm" | "md";
  hasDot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "amber",
  size = "md",
  hasDot = false,
  ...props
}: BadgeProps) {
  const variantClasses = {
    amber: "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/25",
    cyan: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/25",
    indigo: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/25",
    emerald: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/25",
    neutral: "bg-white/[0.05] text-[#94A3B8] border-white/10",
  };

  const dotClasses = {
    amber: "bg-[#FF6B00]",
    cyan: "bg-[#06B6D4]",
    indigo: "bg-[#3B82F6]",
    emerald: "bg-[#10B981]",
    neutral: "bg-[#94A3B8]",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5 gap-1.5",
    md: "text-xs px-2.5 py-1 gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border tracking-wide uppercase font-mono",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {hasDot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full animate-pulse",
            dotClasses[variant]
          )}
        />
      )}
      {children}
    </span>
  );
}
