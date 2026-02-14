"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Globe } from "lucide-react"

const socialLinks = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    title: "Twitter",
    href: "https://twitter.com/oma3dao",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    title: "LinkedIn",
    href: "https://linkedin.com/company/oma3",
  },
  {
    icon: Github,
    title: "GitHub",
    href: "https://github.com/oma3dao",
  },
  {
    icon: Globe,
    title: "OMA3.org",
    href: "https://oma3.org/join",
  },
]

export function SocialSection() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-card/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">
            CONNECT
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Join the community
          </h2>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 md:gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-8 py-6 min-w-[140px] transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_30px_-10px_hsl(186_100%_50%_/_0.15)]"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <Icon />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.title}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
