"use client"

import { useState, useEffect } from "react"

const ROTATE_DURATION_MS = 2000

const phrases = [
  "Online Services",
  "Websites",
  "Apps",
  "Downloads",
  "APIs",
  "x402",
  "MCP",
  "A2A",
  "Smart Contracts",
]

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, ROTATE_DURATION_MS)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block min-h-[1.1em] overflow-hidden align-baseline min-w-[220px] md:min-w-[320px]">
      <span
        key={currentIndex}
        className="inline-block animate-hero-rotate"
        style={{
          animationDuration: `${ROTATE_DURATION_MS}ms`,
          background: "linear-gradient(135deg, hsl(186 100% 50%), hsl(220 80% 60%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {phrases[currentIndex]}
      </span>
    </span>
  )
}
