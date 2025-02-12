"use client"
import Lenis from "@studio-freight/lenis"
import { ReactNode, forwardRef, useEffect } from "react"

const SmoothScrolling = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    useEffect(() => {
      const lenis = new Lenis({
        lerp: 0.1,
        duration: 1.5,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
      }
    }, [])

    return <div ref={ref}>{children}</div>
  }
)

SmoothScrolling.displayName = "SmoothScrolling"

export default SmoothScrolling
