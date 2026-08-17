"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "default" | "sm";
  asChild?: boolean;
  href?: string;
}

export function Button({
  className,
  variant = "primary",
  children,
  onClick,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-bold uppercase tracking-wider transition-all duration-200 rounded-sm cursor-pointer border-none";
  const variants = {
    primary:
      "bg-blue text-white px-10 py-[18px] text-[1.02rem] hover:-translate-y-0.5 hover:bg-[#0d7de8]",
    ghost:
      "bg-transparent text-white border border-white/25 px-9 py-[18px] text-[1.02rem] font-medium hover:border-blue hover:bg-blue-dim hover:-translate-y-0.5",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
