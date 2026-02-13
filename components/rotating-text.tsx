"use client"

import { useState, useEffect } from "react"

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
  "AI Agents",
  "Wallets",
  "Exchanges",
  "Marketplaces",
  "DeFi Protocols",
  "Identity Providers",
]

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block min-h-[1.25em] align-bottom min-w-[220px] md:min-w-[320px]">
      <span
        key={currentIndex}
        className="inline-block animate-hero-rotate"
        style={{
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
