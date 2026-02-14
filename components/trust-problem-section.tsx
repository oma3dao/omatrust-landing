"use client"

import { useEffect, useRef, useState } from "react"

export function TrustProblemSection() {
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
    <section
      id="trust-problem"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Subtle side accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Section label + headline */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
              THE PROBLEM
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
              The open internet has a trust deficit.
            </h2>
            {/* Animated accent line */}
            <div className="mt-6 h-1 w-24 rounded-full animated-gradient-line" />
          </div>

          {/* Right: Descriptive text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-7">
              Despite rapid digital transformation, the open internet struggles with credible, neutral trust for users, agents, and services. There is no shared infrastructure for attestation, verification, or reputation that works across platforms, chains, and jurisdictions.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-7">
              OMATrust addresses systemic integrity, provenance, and verification challenges for the next phase of internet coordination — where AI agents, decentralized services, and traditional platforms must interoperate with trust.
            </p>
          </div>
        </div>

        {/* Diagnostic blocks */}
        <div
          className={`mt-14 grid gap-6 md:grid-cols-2 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border-l-2 border-primary/30 pl-5 pr-2">
            <h3 className="text-xl font-semibold text-foreground leading-tight">
              Fragmented Trust Signals
            </h3>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed">
              Attestations and reputation systems exist in silos across chains
              and platforms, with no shared verification layer.
            </p>
          </div>
          <div className="border-l-2 border-primary/30 pl-5 pr-2">
            <h3 className="text-xl font-semibold text-foreground leading-tight">
              No Trust for Internet-Native Services
            </h3>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed">
              Existing trust models focus on e-commerce and app stores. APIs,
              websites, and decentralized services lack standardized,
              verifiable trust signals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
