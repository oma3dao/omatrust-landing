"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, Fingerprint, Layers } from "lucide-react"

const solutionPillars = [
  {
    icon: ShieldCheck,
    title: "Attestation Framework",
    description:
      "OMATrust uses on-chain attestations to create verifiable trust signals for any internet-native service — apps, APIs, agents, and more. Attestations are structured, schema-based claims that can be independently verified by anyone.",
    accentColor: "hsl(186 100% 50%)",
  },
  {
    icon: Fingerprint,
    title: "Portable Reputation",
    description:
      "Trust signals follow services across platforms and chains. A reputation earned in one ecosystem is recognized everywhere, eliminating the need to rebuild trust from scratch in every new context.",
    accentColor: "hsl(220 80% 60%)",
  },
  {
    icon: Layers,
    title: "Standards-Based Trust",
    description:
      "Built on recognized standards such as W3C DID and Ethereum Attestation Service, OMATrust provides a shared, open trust layer that any platform can integrate. No proprietary lock-in, no walled gardens.",
    accentColor: "hsl(260 65% 55%)",
  },
]

export function TrustSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="solution"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-left md:text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
            THE SOLUTION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
            An attestation layer for the open internet
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-7 max-w-2xl mx-auto">
            OMATrust replaces fragmented, platform-specific trust with a shared attestation framework.
            Any service can earn, carry, and prove its reputation through verifiable on-chain attestations.
          </p>
        </div>

        {/* Three pillars */}
        <div
          className={`mt-16 grid gap-8 md:grid-cols-3 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {solutionPillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="relative rounded-2xl border border-border bg-card/60 p-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary mb-6">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    style={{ color: pillar.accentColor }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base text-zinc-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
