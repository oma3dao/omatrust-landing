"use client"

import { useEffect, useRef, useState, type ComponentType, type ReactNode, type SVGProps } from "react"
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bot,
  Building2,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Coins,
  FileCheck,
  FileKey,
  Filter,
  Globe,
  History,
  KeyRound,
  Link2,
  Lock,
  Radio,
  Receipt,
  ScanSearch,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Stamp,
  Star,
  Users,
  XCircle,
} from "lucide-react"

import { portalLink } from "@/lib/portal-url"

// ---------------------------------------------------------------------------
// Types & Tokens
// ---------------------------------------------------------------------------

type IconType = ComponentType<SVGProps<SVGSVGElement>>
type StateTone = "neutral" | "trusted" | "warning" | "muted" | "primary"

const toneClasses: Record<StateTone, string> = {
  neutral: "border-border/80 bg-secondary/35 text-zinc-200",
  trusted: "border-emerald-300/40 bg-emerald-400/10 text-emerald-200",
  warning: "border-red-300/45 bg-red-400/10 text-red-200",
  muted: "border-zinc-500/25 bg-zinc-500/5 text-zinc-500",
  primary: "border-primary/35 bg-primary/10 text-primary",
}

// ---------------------------------------------------------------------------
// Shared Components
// ---------------------------------------------------------------------------

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function IconNode({
  icon: Icon,
  label,
  tone = "neutral",
  size = "sm",
  className = "",
  children,
}: {
  icon: IconType
  label: string
  tone?: StateTone
  size?: "xs" | "sm" | "md" | "lg"
  className?: string
  children?: ReactNode
}) {
  const sizeClasses = {
    xs: "h-8 w-8 rounded-lg",
    sm: "h-10 w-10 rounded-xl",
    md: "h-14 w-14 rounded-2xl",
    lg: "h-20 w-20 rounded-2xl",
  }
  const iconSizes = { xs: "h-4 w-4", sm: "h-5 w-5", md: "h-7 w-7", lg: "h-9 w-9" }

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center border backdrop-blur ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}
    >
      <Icon className={iconSizes[size]} aria-hidden="true" />
      {children}
    </div>
  )
}

function StatusBadge({
  icon: Icon,
  children,
  tone = "primary",
}: {
  icon: IconType
  children: ReactNode
  tone?: StateTone
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-mono ${toneClasses[tone]}`}>
      <Icon className="h-3 w-3" aria-hidden="true" />
      {children}
    </span>
  )
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

function X402Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "Problem", href: "#x402-problem" },
    { label: "Authorization", href: "#x402-authorization" },
    { label: "Levels", href: "#x402-levels" },
    { label: "Start", href: "#x402-start" },
  ]

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold tracking-tight text-foreground">OMATrust</a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a
            href={portalLink("/?action=signin")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/20"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  )
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function HeroSection() {
  const { ref, visible } = useInView(0.2)

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden px-6 pb-14 pt-28 md:pb-16 md:pt-24">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className={`relative mx-auto w-full max-w-7xl text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <StatusBadge icon={Receipt}>x402 receipt authorization</StatusBadge>
        <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
          x402 for machine payments — <br />OMATrust for machine trust
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          OMATrust ties x402 Signed Receipts to your service, preventing identity attacks that can impact your online reputation.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={portalLink("/?action=signin")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_hsl(186_100%_50%_/_0.55)]"
          >
            Protect your x402 service
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#x402-problem"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            See how it works
          </a>
        </div>

        {/* Hero mini-diagram */}
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border/70 bg-secondary/20 p-4 shadow-2xl shadow-black/30 backdrop-blur md:mt-12">
          <div className="relative grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-3">
              <IconNode icon={Bot} label="Machine client" tone="primary" size="sm" />
              <span className="text-xs font-medium text-foreground">Agent</span>
            </div>
            <ArrowRight className="mx-auto hidden h-4 w-4 text-primary md:block" aria-hidden="true" />
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-3">
              <IconNode icon={Coins} label="x402 payment" tone="neutral" size="sm" />
              <span className="text-xs font-medium text-foreground">x402 payment</span>
            </div>
            <ArrowRight className="mx-auto hidden h-4 w-4 text-primary md:block" aria-hidden="true" />
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-3">
              <IconNode icon={ShieldCheck} label="Authorized receipt" tone="trusted" size="sm" />
              <span className="text-xs font-medium text-foreground">Verified receipt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Carousel Diagrams
// ---------------------------------------------------------------------------

const reviews = [
  { hasReceipt: true, authorized: true },
  { hasReceipt: false, authorized: false },
  { hasReceipt: true, authorized: false },
  { hasReceipt: true, authorized: true },
  { hasReceipt: false, authorized: false },
  { hasReceipt: true, authorized: true },
  { hasReceipt: false, authorized: false },
  { hasReceipt: true, authorized: false },
]

function ReviewTile({
  hasReceipt,
  authorized,
  showKey,
  showResult,
  rejected,
  faded,
}: {
  hasReceipt?: boolean
  authorized?: boolean
  showKey?: boolean
  showResult?: boolean
  rejected?: boolean
  faded?: boolean
}) {
  const border = faded
    ? "border-red-300/30 bg-red-400/5"
    : rejected
      ? "border-red-300/30 bg-red-400/5"
      : hasReceipt && showResult && authorized
        ? "border-emerald-300/35 bg-emerald-400/8"
        : hasReceipt
          ? "border-primary/30 bg-primary/5"
          : "border-border/60 bg-secondary/20"

  return (
    <div className={`relative flex flex-col items-center justify-center gap-1 rounded-lg border p-2 min-h-[5.5rem] ${border}`}>
      <Star className="h-4 w-4 text-primary" aria-hidden="true" />
      {hasReceipt ? (
        <Receipt className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
      ) : (
        <span className="text-[11px] font-mono text-red-300">no receipt</span>
      )}
      {showKey && hasReceipt && (
        <div className={`flex items-center gap-1 text-[11px] font-mono ${authorized ? "text-emerald-300" : "text-red-300"}`}>
          <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
          {authorized ? "key A" : "key X"}
        </div>
      )}
      {showResult && hasReceipt && (
        <div className={`text-[11px] font-mono ${authorized ? "text-emerald-300" : "text-red-300"}`}>
          {authorized ? "\u2713 authorized" : "\u2717 rejected"}
        </div>
      )}
      {rejected && (
        <div className="absolute inset-x-2 top-1/2 h-px -rotate-12 bg-red-300/70" />
      )}
    </div>
  )
}

function DiagramStep0() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Server} label="x402 service" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">X402 SERVICE</span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
        {reviews.map((r, i) => (
          <ReviewTile key={i} hasReceipt={r.hasReceipt} faded={!r.hasReceipt} />
        ))}
      </div>
      <div className="mx-auto flex h-7 max-w-xs items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-wider text-primary">
        <Filter className="h-3 w-3" aria-hidden="true" />
        receipt filter
      </div>
    </div>
  )
}

function DiagramStep1() {
  const receiptReviews = reviews.filter((r) => r.hasReceipt)
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Server} label="x402 service" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">X402 SERVICE</span>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {receiptReviews.map((r, i) => (
          <ReviewTile key={i} hasReceipt showKey authorized={r.authorized} rejected={!r.authorized} />
        ))}
      </div>
      <div className="text-center">
        <StatusBadge icon={AlertTriangle} tone="warning">valid signature &ne; authorized signer</StatusBadge>
      </div>
    </div>
  )
}

function DiagramStep2() {
  const receiptReviews = reviews.filter((r) => r.hasReceipt)
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Server} label="x402 service" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">X402 SERVICE</span>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {receiptReviews.map((r, i) => (
          <ReviewTile key={i} hasReceipt showKey showResult authorized={r.authorized} rejected={!r.authorized} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <StatusBadge icon={ShieldCheck} tone="trusted">authorized keys survive</StatusBadge>
        <StatusBadge icon={ShieldX} tone="warning">forged receipts rejected</StatusBadge>
      </div>
    </div>
  )
}

function DiagramStep3() {
  const verified = reviews.filter((r) => r.hasReceipt && r.authorized)
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Server} label="x402 service" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">X402 SERVICE</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {verified.map((_, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-400/8 px-2 py-4 min-h-[5.5rem] text-emerald-200">
            <div className="flex items-center gap-1">
              <Receipt className="h-3.5 w-3.5" aria-hidden="true" />
              <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
              <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
              <ArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <span className="text-[11px] font-mono">verified</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <StatusBadge icon={Receipt}>receipt present</StatusBadge>
        <StatusBadge icon={CheckCheck} tone="trusted">signature valid</StatusBadge>
        <StatusBadge icon={ShieldCheck} tone="trusted">key authorized</StatusBadge>
      </div>
    </div>
  )
}

function DiagramStep4() {
  const signals = [
    { icon: KeyRound, label: "Key Authorization", tone: "trusted" as StateTone },
    { icon: ShieldAlert, label: "Security Audits", tone: "primary" as StateTone },
    { icon: Award, label: "Compliance", tone: "primary" as StateTone },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Server} label="x402 service" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">X402 SERVICE</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {signals.map((s) => {
          const SIcon = s.icon
          return (
            <div key={s.label} className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 min-h-[5.5rem] ${toneClasses[s.tone]}`}>
              <SIcon className="h-5 w-5" aria-hidden="true" />
              <span className="text-[11px] font-mono text-center">{s.label}</span>
            </div>
          )
        })}
      </div>
      <div className="mx-auto flex h-7 max-w-xs items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-mono uppercase tracking-wider text-primary">
        <Shield className="h-3 w-3" aria-hidden="true" />
        trust aggregator
      </div>
    </div>
  )
}

const carouselSteps = [
  {
    step: "01",
    label: "Receipt Proofs",
    title: "How do you know which reviews are legitimate?",
    text: "x402 receipts prove a service transaction. Reviews without receipts are filtered out.",
    diagram: DiagramStep0,
  },
  {
    step: "02",
    label: "Forged Receipts",
    title: "But what if the receipt is forged?",
    text: "An attacker can forge receipts by signing with their own key. Which key is valid?",
    diagram: DiagramStep1,
  },
  {
    step: "03",
    label: "Authorization check",
    title: "Solution:  keys must be authorized",
    text: "Only keys publicly authorized by the service are accepted.",
    diagram: DiagramStep2,
  },
  {
    step: "04",
    label: "Verified trust",
    title: "Only verified reviews remain",
    text: "Forged receipts are rejected before they can affect your reputation.",
    diagram: DiagramStep3,
  },
  {
    step: "05",
    label: "reputation",
    title: "Your reputation portfolio",
    text: "Key authorization is just one of many OMATrust reputation signals.",
    diagram: DiagramStep4,
  },
]

function CarouselSection() {
  const [step, setStep] = useState(0)
  const current = carouselSteps[step]
  const Diagram = current.diagram

  return (
    <section id="x402-problem" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-3 block">OMATRUST AND X402</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            x402 receipts need authorization
          </h2>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/70 bg-background/75 shadow-2xl shadow-black/25 backdrop-blur">
          {/* Progress bar */}
          <div className="h-1 bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((step + 1) / carouselSteps.length) * 100}%` }}
            />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 px-5 py-3">
            <StatusBadge icon={Receipt}>{current.step} / 05</StatusBadge>
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">{current.label}</span>
          </div>

          {/* Diagram area */}
          <div className="min-h-[300px] p-5 md:p-8 flex flex-col justify-center">
            <Diagram />
          </div>

          {/* Footer text */}
          <div className="border-t border-border/50 px-5 py-5 text-center">
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{current.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base max-w-2xl mx-auto">{current.text}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between border-t border-border/50 px-5 py-3">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Prev
            </button>
            <div className="flex gap-1.5">
              {carouselSteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`h-2 rounded-full transition-all ${i === step ? "bg-primary w-5" : "bg-zinc-600 hover:bg-zinc-400 w-2"}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setStep((s) => Math.min(carouselSteps.length - 1, s + 1))}
              disabled={step === carouselSteps.length - 1}
              className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next step"
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Comparison Section
// ---------------------------------------------------------------------------

function ComparisonSection() {
  const { ref, visible } = useInView(0.15)

  const items = [
    {
      icon: CheckCheck,
      title: "Signature verification",
      text: "Confirms that some private key signed the receipt payload.",
      tone: "neutral" as StateTone,
    },
    {
      icon: ShieldCheck,
      title: "Authorization verification",
      text: "Confirms that the signer was allowed to represent the service.",
      tone: "trusted" as StateTone,
    },
    {
      icon: ShieldX,
      title: "Forged receipt rejection",
      text: "Rejects valid-looking receipts from keys outside the trust profile.",
      tone: "warning" as StateTone,
    },
  ]

  return (
    <section id="x402-authorization" ref={ref} className="relative py-28 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">VERIFICATION IS NOT AUTHORIZATION</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            A valid signature only proves the math
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-7">
            x402 receipts are powerful because they are portable proof of interaction. OMATrust makes them trustworthy by checking the signer against the service&apos;s authorization record.
          </p>
        </div>
        <div className={`mt-12 grid gap-5 md:grid-cols-3 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/70 bg-secondary/20 p-6">
              <IconNode icon={item.icon} label={item.title} tone={item.tone} size="sm" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Authorization Levels
// ---------------------------------------------------------------------------

function LevelsSection() {
  const { ref, visible } = useInView(0.15)

  const levels = [
    {
      icon: FileKey,
      accentColor: "hsl(186 100% 50%)",
      label: "LEVEL 1",
      title: "Your domain proves your keys",
      description:
        "Host a DID document at your domain listing your authorized signing keys. Any receipt signed by an unlisted key fails authorization \u2014 even if the signature is valid.",
      detail: "Prevents unrelated signers from claiming a service identity. Gives verifiers a live ownership check.",
    },
    {
      icon: History,
      accentColor: "hsl(156 84% 55%)",
      label: "LEVEL 2",
      title: "Your reputation survives outages",
      description:
        "A Controller Witness provides an independent authorization record. Verification continues even when your own endpoint is unavailable.",
      detail: "Eliminates single points of failure in the trust chain. Receipts remain verifiable during CDN outages or DNS issues.",
    },
    {
      icon: Building2,
      accentColor: "hsl(260 65% 55%)",
      label: "LEVEL 3",
      title: "Revoke a compromised key instantly",
      description:
        "Enterprise key binding lets you broadcast revocation. Every verifier in the ecosystem rejects the compromised key immediately.",
      detail: "Supports regulated environments, security policy enforcement, and key lifecycle management.",
    },
  ]

  return (
    <section id="x402-levels" ref={ref} className="relative py-28 md:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">PROGRESSIVE AUTHORIZATION</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
            Three levels of trust protection
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-7 max-w-2xl mx-auto">
            Each level addresses a specific failure mode. Start with DNS binding and add layers as your security requirements grow.
          </p>
        </div>

        <div className={`mt-16 grid gap-8 md:grid-cols-3 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {levels.map((level, index) => {
            const Icon = level.icon
            return (
              <div
                key={level.title}
                className="relative rounded-2xl border border-border bg-card/60 p-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="text-[10px] font-mono tracking-[0.2em] text-primary mb-3 block">{level.label}</span>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-5">
                  <Icon size={24} strokeWidth={1.5} style={{ color: level.accentColor }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground leading-tight">{level.title}</h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{level.description}</p>
                <p className="mt-3 text-xs text-zinc-500 leading-relaxed">{level.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Benefits Cards
// ---------------------------------------------------------------------------

function BenefitsSection() {
  const { ref, visible } = useInView(0.15)

  const cards = [
    { icon: Receipt, title: "Receipts become attestations", text: "Reviews, disputes, and audits can reference portable proof of service interaction." },
    { icon: Link2, title: "Keys bind to service identity", text: "Receipts resolve through DNS/DID, witnesses, and key lifecycle controls." },
    { icon: Users, title: "Agents inherit better signals", text: "Machine clients can evaluate reputation without trusting raw wallet volume." },
  ]

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />
      <div className={`mx-auto max-w-7xl px-6 grid gap-5 md:grid-cols-3 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {cards.map((item, index) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border/70 bg-secondary/20 p-6 transition-all duration-700"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <IconNode icon={item.icon} label={item.title} tone="primary" size="sm" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------

function CtaSection() {
  const { ref, visible } = useInView(0.2)

  return (
    <section id="x402-start" ref={ref} className="relative min-h-[60vh] overflow-hidden py-28">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className={`relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <IconNode icon={Shield} label="OMATrust shield" tone="primary" size="lg" />
        <h2 className="mt-8 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Protect your x402 service reputation
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Turn signed receipts into verified trust signals with service identity, authorized signing keys, witness continuity, and revocation controls.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={portalLink("/?action=signin")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_hsl(186_100%_50%_/_0.55)]"
          >
            Manage keys
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={portalLink("/publish")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            Publish trust profile
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Page Export
// ---------------------------------------------------------------------------

export function X402LandingPage() {
  return (
    <main className="relative overflow-x-clip bg-background text-foreground">
      <X402Nav />
      <HeroSection />
      <CarouselSection />
      <ComparisonSection />
      <LevelsSection />
      <BenefitsSection />
      <CtaSection />
    </main>
  )
}
