"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useVelocity, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useTransform(scrollYProgress, [0, 0.9], [50, svgHeight - 50])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50])

  const latestY = useRef(0)
  const prevProgress = useRef(0)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      latestY.current = latest
      prevProgress.current = latest
      prevScrollY.current = window.scrollY
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const yVelocity = useVelocity(scrollYProgress)
  const springyY = useSpring(y1, {
    stiffness: 500,
    damping: 90,
  })

  return (
    <motion.div ref={ref} className={cn("relative", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "var(--primary)",
              borderColor: scrollYProgress.get() > 0 ? "white" : "var(--primary)",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
          <motion.path
            d={`M 1 0 V ${svgHeight} M 1 ${y1} H 12`}
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.2"
            strokeWidth="1"
            transition={{
              duration: 0.1,
            }}
          />
          <motion.path
            d={`M 1 ${y2} H 12`}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            transition={{
              duration: 0.1,
            }}
          />
        </svg>
      </div>
      <div ref={contentRef} className="ml-4 md:ml-16 pt-16 pb-16">
        {children}
      </div>
    </motion.div>
  )
}

