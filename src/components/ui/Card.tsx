import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "raised" | "bordered" | "interactive";
}

export function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  const variantClasses = {
    default: "bg-[#11131B] border border-white/10 text-[#F8FAFC]",
    raised: "bg-[#171B26] border border-white/15 text-[#F8FAFC] shadow-lg",
    bordered: "bg-transparent border border-white/10 text-[#F8FAFC]",
    interactive:
      "bg-[#11131B] border border-white/10 hover:border-white/20 hover:bg-[#171B26] transition-all duration-200 text-[#F8FAFC]",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
