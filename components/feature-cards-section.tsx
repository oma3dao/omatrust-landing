"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Shield, Fingerprint, Scale } from "lucide-react"

const features = [
  {
    label: "LIVE NOW",
    title: "Launch. Ethereum Attestation.",
    description:
      "OMATrust launches on OMAChain, delivering an attestation service for Ethereum with 8 verifiable schemas. Production-ready infrastructure for decentralized trust.",
    image: "/images/card-attestation.jpg",
    icon: Shield,
    href: "#",
    accentColor: "hsl(186 100% 50%)",
  },
  {
    label: "COMING SOON",
    title: "Identity Registry. Audited.",
    description:
      "A standards-based identity registry on OMAChain, currently under audit and coming soon for public use. Institutional-grade identity verification at scale.",
    image: "/images/card-registry.jpg",
    icon: Fingerprint,
    href: "https://registry.omatrust.org",
    accentColor: "hsl(220 80% 60%)",
  },
  {
    label: "GOVERNANCE",
    title: "OMA3. Swiss Association.",
    description:
      "OMATrust is governed by OMA3, a Swiss association ensuring neutrality, security, and open governance. No single entity controls the trust layer.",
    image: "/images/card-governance.jpg",
    icon: Scale,
    href: "https://oma3.org",
    accentColor: "hsl(260 65% 55%)",
  },
]

export function FeatureCardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="launch" ref={sectionRef} className="relative py-24 md:py-32">
      {/* Section gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
            INFRASTRUCTURE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Built for the next era of trust
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <a
                key={feature.title}
                href={feature.href}
                target={feature.href.startsWith("http") ? "_blank" : undefined}
                rel={feature.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_50px_-12px_hsl(186_100%_50%_/_0.15)] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                  {/* Status badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-[10px] font-mono tracking-widest text-primary border border-primary/20">
                    {feature.label === "LIVE NOW" && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                    )}
                    {feature.label}
                  </div>

                  {/* External arrow */}
                  <div className="absolute top-4 right-4 rounded-full bg-background/60 backdrop-blur-sm p-2 opacity-0 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                    <ArrowUpRight size={14} className="text-primary" />
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-lg p-2"
                      style={{
                        backgroundColor: `${feature.accentColor.replace(")", " / 0.1)")}`,
                      }}
                    >
                      <Icon size={18} style={{ color: feature.accentColor }} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* Hover underline */}
                  <div className="mt-4 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
