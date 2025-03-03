"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  className,
  ...props
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  className?: string
  [key: string]: any
}) => {
  return (
    <div className={cn("relative cursor-pointer w-fit hover:scale-105 transition duration-500", className)} {...props}>
      <div className="absolute -inset-px bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative bg-black px-6 py-3 rounded-xl leading-none flex items-center">{children}</div>
    </div>
  )
}

