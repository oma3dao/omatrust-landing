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

            {/* Key stats or facts */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="text-2xl font-bold text-foreground">8</div>
                <div className="text-sm text-zinc-400">Verifiable schemas live</div>
              </div>
              <div className="border-l-2 border-primary/30 pl-4">
                <div className="text-2xl font-bold text-foreground">OMA3</div>
                <div className="text-sm text-zinc-400">Swiss governance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
