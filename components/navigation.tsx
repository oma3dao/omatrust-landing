"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const OMA3_LOGO_SRC: string | null = null
// TODO: Set to "/oma3-logo.svg" (or your preferred path in /public) after uploading the oma3 SVG asset.

type NavLink = {
  label: string
  href: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { label: "What It Does", href: "#trust-problem" },
  { label: "How It's Used", href: "#use-cases" },
  { label: "Developers", href: "#developers" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand mark */}
        <a href="#" className="flex items-center gap-2 group">
          {OMA3_LOGO_SRC && (
            <img
              src={OMA3_LOGO_SRC}
              alt="OMA3"
              className="h-6 w-auto object-contain opacity-90"
            />
          )}
          <span className="text-xl font-bold tracking-tight text-foreground">
            OMATrust
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <span
            aria-hidden="true"
            className="text-primary/60 text-xs font-mono tracking-widest"
          >
            {"//"}
          </span>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://app.omatrust.org?action=signin"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-all hover:border-primary/60"
          >
            Sign In
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.omatrust.org?action=signin"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary"
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  )
}
