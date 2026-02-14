"use client"

import { useEffect, useRef, useState } from "react"

const standards = [
  {
    name: "W3C DID",
    shape: "circle",
    description: "Agent identity and reputation standard",
    href: "https://www.w3.org/TR/did-core/",
  },
  {
    name: "JSON Schema",
    shape: "circle",
    description: "Data validation and documentation standard",
    href: "https://json-schema.org/",
  },
  {
    name: "x402",
    shape: "circle",
    description: "Internet-native payment standard",
    href: "https://www.x402.org/",
  },
  {
    name: "ERC-8004",
    shape: "circle",
    description: "Agent identity and reputation standard",
    href: "https://github.com/erc-8004/erc-8004-contracts",
  },
  {
    name: "Ethereum Attestation Service",
    shape: "circle",
    description: "Schema-based attestation service",
    href: "https://attest.org/",
  },
]

export function StandardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
            COMPATIBILITY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Compatibility with standards
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-7 max-w-2xl">
            OMATrust aligns with emerging agentic standards like x402 and ERC-8004, as well as established standards like W3C DID, JSON Schema, and many more.
          </p>
        </div>

        {/* Standards badges */}
        <div
          className={`mt-16 flex flex-wrap items-center gap-4 md:gap-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {standards.map((std) => (
            <a
              key={std.name}
              href={std.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              {/* Shape indicator */}
              <div className="flex items-center justify-center w-4 h-4">
                {std.shape === "square" && (
                  <div className="w-3 h-3 rounded-sm bg-muted-foreground/40 group-hover:bg-primary transition-colors" />
                )}
                {std.shape === "circle" && (
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/40 group-hover:bg-primary transition-colors" />
                )}
                {std.shape === "triangle" && (
                  <div
                    className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-muted-foreground/40 group-hover:border-b-primary transition-colors"
                  />
                )}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {std.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
