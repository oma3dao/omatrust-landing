"use client"

import { ArrowRight } from "lucide-react"

export function TokenSaleBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-shimmer" />
      <div className="relative flex items-center justify-center gap-3 px-4 py-2.5">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <p className="text-xs font-medium text-foreground sm:text-sm">
          The OMA Token sale is live
        </p>
        <a
          href="https://republic.com/oma3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-primary/15 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary transition-all hover:bg-primary/25 hover:border-primary/50"
        >
          on Republic
          <ArrowRight size={12} />
        </a>
      </div>
    </div>
  )
}
