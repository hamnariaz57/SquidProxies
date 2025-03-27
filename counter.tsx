
// "use client"

// import { useEffect, useRef, useState } from "react"
// import { cn } from "@/lib/utils"

// interface CounterProps {
//   from: number
//   to: number
//   duration?: number
//   className?: string
//   format?: "percentage" | "number" | "speed" | "time" | "count"
//   decimals?: number
// }

// export function Counter({ from, to, duration = 2000, className, format = "number", decimals = 1 }: CounterProps) {
//   const [count, setCount] = useState(from)
//   const countRef = useRef(from)
//   const startTimeRef = useRef<number | null>(null)
//   const rafRef = useRef<number | null>(null)

//   // Format the count based on the format type
//   const formatValue = (value: number): string => {
//     switch (format) {
//       case "percentage":
//         return `${value.toFixed(decimals)}%`
//       case "speed":
//         return `${value} Gbps`
//       case "time":
//         return `${value}ms`
//       case "count":
//         return `${value}M+`
//       default:
//         return value.toString()
//     }
//   }

//   useEffect(() => {
//     const animate = (timestamp: number) => {
//       if (startTimeRef.current === null) {
//         startTimeRef.current = timestamp
//       }

//       const progress = timestamp - startTimeRef.current
//       const percentage = Math.min(progress / duration, 1)

//       // Easing function for smoother animation
//       const easeOutQuad = (t: number) => t * (2 - t)
//       const easedPercentage = easeOutQuad(percentage)

//       const nextCount = Math.floor(from + (to - from) * easedPercentage)

//       if (countRef.current !== nextCount) {
//         countRef.current = nextCount
//         setCount(nextCount)
//       }

//       if (percentage < 1) {
//         rafRef.current = requestAnimationFrame(animate)
//       }
//     }

//     rafRef.current = requestAnimationFrame(animate)

//     return () => {
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current)
//       }
//     }
//   }, [from, to, duration])

//   return <span className={cn(className)}>{formatValue(count)}</span>
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CounterProps {
  from: number
  to: number
  duration?: number
  className?: string
  formatString?: string
  suffix?: string
}

export function Counter({ from, to, duration = 2000, className, formatString, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(from)
  const countRef = useRef(from)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedPercentage = easeOutQuad(percentage)

      const nextCount = Math.floor(from + (to - from) * easedPercentage)

      if (countRef.current !== nextCount) {
        countRef.current = nextCount
        setCount(nextCount)
      }

      if (percentage < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [from, to, duration])

  const formatValue = (value: number) => {
    if (formatString === "decimal") {
      return value.toFixed(1)
    }
    return value.toString()
  }

  return (
    <span className={cn(className)}>
      {formatValue(count)}
      {suffix}
    </span>
  )
}

