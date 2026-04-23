"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Globe, BookOpen, ArrowUpRight } from "lucide-react"
import { portalLink } from "@/lib/portal-url"

function GithubIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

const developerLinks = [
  {
    icon: GithubIcon,
    title: "Specifications and Papers",
    description: "Whitepapers, tokenomics, use cases, and specifications",
    href: "https://github.com/oma3dao",
  },
  {
    icon: FileText,
    title: "Developer Docs",
    description: "API references, SDKs, and integration guides",
    href: "https://docs.omatrust.org",
  },
  {
    icon: BookOpen,
    title: "Reputation Portal",
    description: "Submit, read, and manage OMATrust attestations on OMAChain",
    href: portalLink("/"),
  },
  {
    icon: Globe,
    title: "OMA3.org",
    description: "The consortium behind OMATrust governance",
    href: "https://oma3.org",
  },
]

export function DeveloperLinksSection() {
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
    <section id="developers" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
            RESOURCES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            For developers and builders
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {developerLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative flex flex-col items-center text-center rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:border-primary/30 hover:bg-primary/5 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative mb-5">
                  <div className="flex items-center justify-center rounded-xl bg-secondary p-4 transition-colors group-hover:bg-primary/10">
                    <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  {/* Hover arrow */}
                  <div className="absolute -top-1 -right-1 rounded-full bg-primary p-1 opacity-0 scale-75 transition-all group-hover:opacity-100 group-hover:scale-100">
                    <ArrowUpRight size={10} className="text-primary-foreground" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-foreground mb-2">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
