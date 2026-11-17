import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#090A0F] disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer";

  const variantClasses = {
    primary:
      "bg-[#FF6B00] text-white hover:bg-[#FF7A1A] active:scale-[0.98] shadow-sm hover:shadow-[0_0_20px_rgba(255,107,0,0.35)] focus:ring-[#FF6B00]",
    secondary:
      "bg-[#171B26] text-[#F8FAFC] hover:bg-[#1F2433] border border-white/10 hover:border-white/20 active:scale-[0.98] focus:ring-white/20",
    outline:
      "bg-transparent text-[#F8FAFC] border border-white/15 hover:border-white/30 hover:bg-white/[0.04] active:scale-[0.98] focus:ring-white/20",
    ghost:
      "bg-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.04] focus:ring-white/20",
    cyan:
      "bg-[#06B6D4] text-[#090A0F] font-semibold hover:bg-[#22D3EE] active:scale-[0.98] shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] focus:ring-[#06B6D4]",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
