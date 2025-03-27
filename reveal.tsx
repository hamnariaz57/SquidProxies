"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const getDirectionStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translate3d(0, 0, 0)" : "",
      transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
    }

    switch (direction) {
      case "up":
        return {
          ...baseStyles,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 50px, 0)",
        }
      case "down":
        return {
          ...baseStyles,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, -50px, 0)",
        }
      case "left":
        return {
          ...baseStyles,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(50px, 0, 0)",
        }
      case "right":
        return {
          ...baseStyles,
          transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(-50px, 0, 0)",
        }
      default:
        return baseStyles
    }
  }

  return (
    <div ref={ref} className={cn(className)} style={getDirectionStyles()}>
      {children}
    </div>
  )
}

