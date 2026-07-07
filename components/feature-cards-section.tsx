"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, BadgeCheck, IdCard, Network } from "lucide-react"
import {
  resourceIconBadgeClass,
  resourceIconClass,
  statusPillClass,
} from "./landing-ui-tokens"

const features = [
  {
    label: "LIVE",
    title: "OMAChain",
    description:
      "OMATrust runs on OMAChain, OMA3's Ethereum Layer 2. OMAChain provides low-cost transactions and a Web2-style user experience while preserving decentralized trust.",
    icon: Network,
    href: "https://github.com/oma3dao/omatrust-docs/blob/main/whitepaper/omatrust-whitepaper.md",
    accentColor: "hsl(186 100% 50%)",
  },
  {
    label: "COMING SOON",
    title: "Cross-Chain Support",
    description:
      "OMATrust is designed to run anywhere. Interested in bringing OMATrust to your chain? Contact OMA3 to discuss deployment to your network.",
    icon: IdCard,
    href: "https://www.oma3.org/#contact",
    linkText: "Contact us",
    accentColor: "hsl(220 80% 60%)",
  },
  {
    label: "REPUBLIC SALE",
    title: "OMA Token",
    description:
      "The OMA token powers OMAChain and supports the long-term growth of the OMATrust ecosystem. Learn about the current Republic token offering.",
    icon: BadgeCheck,
    href: "https://republic.com/oma3",
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
    <section id="infrastructure" ref={sectionRef} className="relative py-24 md:py-32">
      {/* Section gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
            INFRASTRUCTURE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            The platform behind OMATrust
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
                className={`group relative flex min-h-[340px] flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_50px_-12px_hsl(186_100%_50%_/_0.15)] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card body */}
                <div className="flex flex-1 flex-col items-start">
                  <div>
                    <span className={statusPillClass}>
                      {feature.label === "LIVE" && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                      )}
                      {feature.label}
                    </span>
                  </div>

                  <div className={`mt-5 ${resourceIconBadgeClass}`}>
                    <Icon
                      size={32}
                      strokeWidth={1.5}
                      className={resourceIconClass}
                      style={{ color: feature.accentColor }}
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base text-zinc-200 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-1 text-xs text-primary/80 opacity-0 transition-all group-hover:opacity-100">
                    {feature.linkText || "Learn more"} <ArrowUpRight size={12} />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
