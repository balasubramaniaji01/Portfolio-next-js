"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [scale, setScale] = useState(1)

  const updatePosition = (e: MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
    setScale(1.5)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
    setScale(1)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container || !animate) return

    container.addEventListener("mousemove", updatePosition)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", updatePosition)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [animate])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          "bg-gradient-to-r from-primary/20 to-purple-500/20",
          className,
        )}
        style={{
          opacity,
          transform: `scale(${scale})`,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139,92,246,.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

