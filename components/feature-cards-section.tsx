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
    label: "LIVE (PREVIEW)",
    title: "OMAChain and OMA",
    description:
      "OMATrust runs on OMAChain, OMA3's new Layer 2 powered by the OMA token.  OMAChain allows OMA3 to bring web2 simplicity to decentralized trust.",
    icon: BadgeCheck,
    href: "#",
    accentColor: "hsl(186 100% 50%)",
  },
  {
    label: "COMING SOON",
    title: "OMATrust Identity Registry",
    description:
      "A standards-based identity registry coming soon on OMAChain. The OMATrust Registry extends ERC-8004 to bring app store-level trust to identity and discoverability.",
    icon: IdCard,
    href: "https://registry.omatrust.org",
    accentColor: "hsl(220 80% 60%)",
  },
  {
    label: "COMING SOON",
    title: "Cross-Chain Support",
    description:
      "OMATrust can be deployed on any EAS-compatible chain, enabling portable trust signals across ecosystems. OMATrust schemas can be deployed to non-EAS attestations easily.",
    icon: Network,
    href: "#",
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
                    Learn more <ArrowUpRight size={12} />
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
