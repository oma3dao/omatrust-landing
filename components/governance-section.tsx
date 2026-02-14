"use client"

import { useEffect, useRef, useState } from "react"

const governancePoints = [
  {
    title: "Swiss Association",
    description:
      "Established in Zug, Switzerland, OMA3 provides a legally neutral foundation for long-term infrastructure governance.",
  },
  {
    title: "Open Consortium Model",
    description:
      "Industry participants collaborate through structured working groups to shape standards and infrastructure.",
  },
  {
    title: "No Single-Entity Control",
    description:
      "OMATrust infrastructure is not owned or controlled by a single company or protocol.",
  },
  {
    title: "Standards-Led Development",
    description:
      "Governance aligns with emerging standards including EAS-compatible deployments, x402, and ERC-8004.",
  },
]

export function GovernanceSection() {
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
      id="governance"
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto max-w-3xl text-left md:text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
            GOVERNANCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Credibly neutral by design.
          </h2>
          <p className="mt-5 text-lg text-zinc-200 leading-relaxed max-w-3xl mx-auto">
            OMATrust is governed by OMA3, a Swiss association structured for
            credible neutrality and long-term stewardship of open trust
            infrastructure. This model ensures transparency and
            multi-stakeholder participation across chains, platforms, and
            jurisdictions.
          </p>
        </div>

        <div
          className={`mt-14 mx-auto max-w-5xl grid gap-5 md:grid-cols-2 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {governancePoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-card/60 p-6 text-left"
            >
              <h3 className="text-base font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } text-left md:text-center`}
        >
          <a
            href="https://oma3.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Learn more about OMA3
          </a>
        </div>
      </div>
    </section>
  )
}
