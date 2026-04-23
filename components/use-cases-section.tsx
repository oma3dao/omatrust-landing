"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const useCases = [
  {
    title: "Verify x402 Receipts",
    description: "Confirm that signed receipts come from authorized services",
    href: "https://app.omatrust.org/publish?type=receipt",
  },
  {
    title: "Authorize Service Keys",
    description: "Bind signing keys to your service identity",
    href: "https://app.omatrust.org/publish?type=key-binding",
  },
  {
    title: "Publish Security Audits",
    description: "Make security audits verifiable and portable across platforms",
    href: "https://app.omatrust.org/publish?type=security-assessment",
  },
  {
    title: "Issue Certifications",
    description: "Create verifiable certifications for applications and services",
    href: "https://app.omatrust.org/publish?type=certification",
  },
  {
    title: "Enable Portable Reviews",
    description: "Publish and respond to user reviews across platforms",
    href: "https://app.omatrust.org/publish?type=user-review",
  },
]

export function UseCasesSection() {
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
      id="use-cases"
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
            HOW IT&apos;S USED
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Trust for every use case
          </h2>
          <p className="mt-5 text-lg text-zinc-200 leading-relaxed max-w-3xl mx-auto">
            OMATrust enables trust across a wide range of services and protocols.
          </p>
        </div>

        <div
          className={`mt-14 mx-auto max-w-5xl grid gap-5 md:grid-cols-2 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="rounded-2xl border border-border bg-card/60 p-6 text-left"
            >
              <h3 className="text-base font-semibold text-foreground">
                {useCase.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {useCase.description}
              </p>
              <a
                href={useCase.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-primary underline-offset-4 hover:underline"
              >
                Get Started
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
