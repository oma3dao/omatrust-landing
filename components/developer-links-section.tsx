"use client"

import { useEffect, useRef, useState } from "react"
import { Github, FileText, Globe, BookOpen, ArrowUpRight } from "lucide-react"

const developerLinks = [
  {
    icon: Github,
    title: "Developer Docs",
    description: "API references, SDKs, and integration guides",
    href: "#",
  },
  {
    icon: FileText,
    title: "Technical Docs",
    description: "Architecture, schemas, and protocol specifications",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "Reputation Framework",
    description: "Scoring models, trust signals, and governance",
    href: "#",
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
