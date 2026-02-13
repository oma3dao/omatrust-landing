"use client"

import { ParticleField } from "./particle-field"
import { RotatingText } from "./rotating-text"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Particle field */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Radial glow behind headline */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-mono tracking-wider text-primary backdrop-blur-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          LIVE ON OMACHAIN
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-foreground animate-fade-in-up text-balance">
          Trust for
          <br />
          <RotatingText />
        </h1>

        {/* Subtitle */}
        <p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-7 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          A decentralized, institutional-grade trust layer governed by OMA3 — delivering attestation, identity, and reputation for the next phase of internet coordination.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="https://registry.omatrust.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_hsl(186_100%_50%_/_0.4)] active:scale-[0.98]"
          >
            Explore the Registry
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#trust-problem"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-secondary backdrop-blur-sm"
          >
            Learn more
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-20 flex flex-col items-center gap-2 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <span className="text-xs font-mono text-zinc-400 tracking-widest">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
