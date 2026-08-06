"use client"

import { useEffect, useRef, useState, type ComponentType, type ReactNode, type SVGProps } from "react"
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileCheck,
  FileQuestion,
  FileWarning,
  Fingerprint,
  Globe,
  Hash,
  Layers,
  Lock,
  Package,
  ScanSearch,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Stamp,
  Upload,
  UserCheck,
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

function ArtifactNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "Problem", href: "#artifact-problem" },
    { label: "How It Works", href: "#artifact-how-it-works" },
    { label: "Use Cases", href: "#artifact-use-cases" },
    { label: "Standards", href: "#artifact-standards" },
  ]

  return (
    <nav className={`fixed inset-x-0 top-10 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
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
        <StatusBadge icon={Fingerprint}>did:artifact</StatusBadge>
        <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
          Give every digital artifact verifiable trust
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Binaries, plugins, documents, and any downloadable file can now carry trust signals that anyone can verify.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={portalLink("/?action=signin")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_hsl(186_100%_50%_/_0.55)]"
          >
            Register an artifact
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#artifact-problem"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            See how it works
          </a>
        </div>

        {/* Hero mini-diagram */}
        <div className="relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border/70 bg-secondary/20 p-4 shadow-2xl shadow-black/30 backdrop-blur md:mt-12">
          <div className="relative grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-3">
              <IconNode icon={Package} label="Digital artifact" tone="primary" size="sm" />
              <span className="text-xs font-medium text-foreground">Artifact</span>
            </div>
            <ArrowRight className="mx-auto hidden h-4 w-4 text-primary md:block" aria-hidden="true" />
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-3">
              <IconNode icon={Fingerprint} label="did:artifact identity" tone="neutral" size="sm" />
              <span className="text-xs font-medium text-foreground">Identity</span>
            </div>
            <ArrowRight className="mx-auto hidden h-4 w-4 text-primary md:block" aria-hidden="true" />
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-3">
              <IconNode icon={ShieldCheck} label="Trust verified" tone="trusted" size="sm" />
              <span className="text-xs font-medium text-foreground">Verified Trust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Problem Section
// ---------------------------------------------------------------------------

function ProblemSection() {
  const { ref, visible } = useInView(0.15)

  const breaches = [
    {
      title: "Malicious VS Code extensions",
      description: "Poisoned plugins infiltrated open-source repositories, compromising developer environments at scale.",
    },
    {
      title: "Fake meeting clients",
      description: "Attackers impersonating investors tricked users into installing malware disguised as video conferencing apps.",
    },
    {
      title: "Prompt injections in SKILL.md",
      description: "A malicious skill can hijack an AI agent’s behavior, exfiltrate sensitive data, or trigger unauthorized actions.",
    },
  ]

  return (
    <section id="artifact-problem" ref={ref} className="relative py-28 md:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">THE PROBLEM</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            You can&apos;t trust what you download
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-7">
            Some of the biggest security breaches in recent history happened because someone used a digital artifact that wasn&apos;t what they thought it was.
          </p>
        </div>

        <div className={`mt-12 grid gap-5 md:grid-cols-3 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {breaches.map((item) => (
            <div key={item.title} className="rounded-2xl border border-red-300/30 bg-red-400/5 p-6">
              <IconNode icon={ShieldAlert} label={item.title} tone="warning" size="sm" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className={`mt-10 rounded-2xl border border-border/70 bg-secondary/20 p-6 md:p-8 transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-start gap-4">
            <IconNode icon={AlertTriangle} label="Warning" tone="warning" size="sm" className="shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">The common thread</h3>
              <p className="mt-2 text-base text-muted-foreground leading-7">
                In every case, the victim had no reliable way to verify the artifact&apos;s origin. Existing signing mechanisms are fragmented across operating systems, app stores, and file formats, leaving many artifacts with little or no portable trust information. There is no internet-native, decentralized way for publishers to claim ownership of an artifact and have that claim independently verified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// ---------------------------------------------------------------------------
// How It Works — Carousel
// ---------------------------------------------------------------------------

function DiagramContentAddress() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Fingerprint} label="Identity" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">IDENTITY</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-4">
          <Package className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[11px] font-mono text-zinc-300">file.zip</span>
          <span className="text-[10px] font-mono text-zinc-500">any digital file</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[10px] font-mono text-primary uppercase">derive</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <Fingerprint className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[11px] font-mono text-primary">did:artifact:a7f3...</span>
          <span className="text-[10px] font-mono text-zinc-400">universal identity</span>
        </div>
      </div>
    </div>
  )
}

function DiagramPublish() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={UserCheck} label="Publisher" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">PUBLISHER</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <Fingerprint className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[11px] font-mono text-primary">did:artifact:a7f3...</span>
          <span className="text-[10px] font-mono text-zinc-400">artifact identity</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[10px] font-mono text-primary uppercase">attest</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-400/8 p-4">
          <Stamp className="h-5 w-5 text-emerald-300" aria-hidden="true" />
          <span className="text-[11px] font-mono text-emerald-300">ownership claim</span>
          <UserCheck className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
          <span className="text-[10px] font-mono text-emerald-300">Acme Corp</span>
        </div>
      </div>
    </div>
  )
}

function DiagramUserResolve() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={ScanSearch} label="User verifying" tone="neutral" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">USER</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/70 p-4">
          <Upload className="h-5 w-5 text-zinc-300" aria-hidden="true" />
          <span className="text-[11px] font-mono text-zinc-300">file.zip</span>
          <span className="text-[10px] font-mono text-zinc-500">downloaded file</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[10px] font-mono text-primary uppercase">hash</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <Fingerprint className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[11px] font-mono text-primary">did:artifact:a7f3...</span>
          <span className="text-[10px] font-mono text-zinc-400">same file → same DID</span>
        </div>
      </div>
    </div>
  )
}

function DiagramPullAttestations() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Fingerprint} label="Artifact DID" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">did:artifact:a7f3...</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <Fingerprint className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[11px] font-mono text-primary">DID</span>
          <span className="text-[10px] font-mono text-zinc-400">lookup attestations</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-[10px] font-mono text-primary uppercase">query</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-400/8 p-4">
          <ShieldCheck className="h-5 w-5 text-emerald-300" aria-hidden="true" />
          <span className="text-[11px] font-mono text-emerald-300">claims found</span>
          <UserCheck className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
          <span className="text-[10px] font-mono text-emerald-300">Acme Corp</span>
        </div>
      </div>
    </div>
  )
}

function DiagramTampered() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={ScanSearch} label="User verifying" tone="neutral" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">USER</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-red-300/30 bg-red-400/5 p-4">
          <Upload className="h-5 w-5 text-red-300" aria-hidden="true" />
          <span className="text-[11px] font-mono text-red-300">different file</span>
          <Hash className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
          <span className="text-[10px] font-mono text-red-400">sha256:b9c1...</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <ArrowRight className="h-5 w-5 text-zinc-500" aria-hidden="true" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase">lookup</span>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-red-300/30 bg-red-400/5 p-4">
          <XCircle className="h-5 w-5 text-red-300" aria-hidden="true" />
          <span className="text-[11px] font-mono text-red-300">no claim found</span>
          <FileWarning className="h-3.5 w-3.5 text-red-400" aria-hidden="true" />
          <span className="text-[10px] font-mono text-red-400">unverified</span>
        </div>
      </div>
    </div>
  )
}

function DiagramMalicious() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={FileQuestion} label="Competing claims" tone="neutral" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">COMPETING CLAIMS</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-400/8 p-4">
          <UserCheck className="h-5 w-5 text-emerald-300" aria-hidden="true" />
          <span className="text-[11px] font-mono text-emerald-300">Acme Corp</span>
          <span className="text-[10px] font-mono text-zinc-400">known publisher</span>
          <StatusBadge icon={ShieldCheck} tone="trusted">trusted identity</StatusBadge>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-red-300/30 bg-red-400/5 p-4">
          <Bot className="h-5 w-5 text-red-300" aria-hidden="true" />
          <span className="text-[11px] font-mono text-red-300">0x9f2a...unknown</span>
          <span className="text-[10px] font-mono text-zinc-500">no reputation</span>
          <StatusBadge icon={AlertTriangle} tone="warning">unknown identity</StatusBadge>
        </div>
      </div>
    </div>
  )
}

function DiagramThirdParty() {
  const signals = [
    { icon: Stamp, label: "Publisher Claim", tone: "trusted" as StateTone },
    { icon: ShieldAlert, label: "Security Audit", tone: "primary" as StateTone },
    { icon: Award, label: "Certification", tone: "primary" as StateTone },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-1">
        <IconNode icon={Fingerprint} label="Artifact identity" tone="primary" size="md" />
        <span className="text-[11px] font-medium text-zinc-200">did:artifact:a7f3...</span>
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
    label: "Identity",
    title: "One identity for every artifact",
    text: "For trust to accumulate around an artifact, everyone has to agree on its identity. did:artifact defines a standardized way to derive an identity from any digital artifact. Every conforming implementation produces the same identifier for the same content.",
    diagram: DiagramContentAddress,
  },
  {
    step: "02",
    label: "Claim",
    title: "A publisher claims responsibility for an artifact",
    text: "The publisher creates an on-chain attestation linking their identity to the artifact's DID, publicly asserting ownership.",
    diagram: DiagramPublish,
  },
  {
    step: "03",
    label: "Resolve",
    title: "A user converts the file to a DID",
    text: "The user hashes the downloaded file independently. Because the content is the same, they arrive at the same DID.",
    diagram: DiagramUserResolve,
  },
  {
    step: "04",
    label: "Verify",
    title: "Pull all attestations for that DID",
    text: "The user queries all attestations associated with the DID — ownership claims, audits, certifications — and sees who made them.",
    diagram: DiagramPullAttestations,
  },
  {
    step: "05",
    label: "Tampered",
    title: "A different file shows no claim",
    text: "If even a single byte is different, the hash changes, producing a different DID with no attestations. The user knows something is wrong.",
    diagram: DiagramTampered,
  },
  {
    step: "06",
    label: "Impersonation",
    title: "Malicious actors can't impersonate the publisher",
    text: "An attacker can claim the same artifact, but they appear as a different identity with no established reputation.",
    diagram: DiagramMalicious,
  },
  {
    step: "07",
    label: "Trust Layers",
    title: "Third-party trust builds on the same identity",
    text: "Security auditors, certifications, and endorsements all attach to the artifact's DID, creating layered trust signals.",
    diagram: DiagramThirdParty,
  },
]

function CarouselSection() {
  const [step, setStep] = useState(0)
  const current = carouselSteps[step]
  const Diagram = current.diagram

  return (
    <section id="artifact-how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-3 block">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            From file to verifiable trust
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
            <StatusBadge icon={Fingerprint}>{current.step} / {String(carouselSteps.length).padStart(2, '0')}</StatusBadge>
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">{current.label}</span>
          </div>

          {/* Diagram area */}
          <div className="min-h-[300px] p-5 md:p-8 flex flex-col justify-center">
            <Diagram />
          </div>

          {/* Footer text */}
          <div className="border-t border-border/50 px-5 py-5 text-center">
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{current.title}</h3>
            {current.text && <p className="mt-2 text-sm text-muted-foreground md:text-base max-w-2xl mx-auto">{current.text}</p>}
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
// Use Cases Section
// ---------------------------------------------------------------------------

function UseCasesSection() {
  const { ref, visible } = useInView(0.15)

  const useCases = [
    {
      icon: Package,
      title: "Software Releases",
      description: "Verify that a binary, installer, or package actually comes from the publisher before you run it.",
    },
    {
      icon: Download,
      title: "Downloadable Binaries",
      description: "Any executable distributed outside an app store can carry verifiable publisher identity.",
    },
    {
      icon: Layers,
      title: "Agent Configuration Files",
      description: "Verify who published a SKILL.md or agent configuration file before allowing an AI agent to use it.",
    },
    {
      icon: Bot,
      title: "AI Models",
      description: "Confirm that a model file was published by the organization that trained it, not a modified copy.",
    },
    {
      icon: Globe,
      title: "VS Code Extensions & Plugins",
      description: "Ensure browser extensions, IDE plugins, and add-ons come from their stated developers.",
    },
    {
      icon: Lock,
      title: "Game Clients",
      description: "Verify that a game client or launcher was published by the game studio, not a trojanized copy.",
    },
    {
      icon: FileCheck,
      title: "Security Audit Reports",
      description: "Did that PDF security report actually come from the auditor? Verify it against their on-chain claim.",
    },
    {
      icon: FileCheck,
      title: "Documents & PDFs",
      description: "Verify the origin of contracts, whitepapers, and official documents before acting on them.",
    },
  ]

  return (
    <section id="artifact-use-cases" ref={ref} className="relative py-28 md:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">USE CASES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
            Trust for every kind of artifact
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-7 max-w-2xl mx-auto">
            Anything you download can carry a decentralized identity for trust signals.
          </p>
        </div>

        <div className={`mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {useCases.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-secondary/20 p-5 transition-all duration-700"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary mb-4">
                  <Icon size={20} strokeWidth={1.5} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Standards Section
// ---------------------------------------------------------------------------

function StandardsSection() {
  const { ref, visible } = useInView(0.15)

  const standards = [
    {
      title: "W3C DID",
      description: "Built on the W3C Decentralized Identifiers standard for interoperability across ecosystems.",
      href: "https://www.w3.org/TR/did-core/",
    },
    {
      title: "did:artifact",
      description: "A purpose-built DID method that standardizes how digital artifacts are identified.",
      href: "https://oma3dao.github.io/omatrust-docs/specification/did-artifact-method-spec.html",
    },
    {
      title: "Ethereum Attestation Service",
      description: "On-chain attestations provide tamper-proof, publicly verifiable trust claims.",
      href: "https://attest.org",
    },
  ]

  return (
    <section id="artifact-standards" ref={ref} className="relative py-28 md:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.2em] text-primary mb-4 block">STANDARDS</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
            Built on open, interoperable standards
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-7 max-w-2xl mx-auto">
            did:artifact leverages established standards to ensure broad compatibility and long-term durability.
          </p>
        </div>

        <div className={`mt-14 grid gap-5 md:grid-cols-3 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {standards.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/70 bg-card/60 p-6 transition-all duration-700 hover:border-primary/40 hover:bg-primary/5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read spec <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// CTA Section
// ---------------------------------------------------------------------------

function CtaSection() {
  const { ref, visible } = useInView(0.2)

  return (
    <section ref={ref} className="relative min-h-[60vh] overflow-hidden py-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px animated-gradient-line" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className={`relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <IconNode icon={Shield} label="OMATrust shield" tone="primary" size="lg" />
        <h2 className="mt-8 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Give your artifacts a verifiable identity
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Register your software, models, and digital artifacts on OMATrust. Let users and agents verify that what they downloaded is what you published.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={portalLink("/?action=signin")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_hsl(186_100%_50%_/_0.55)]"
          >
            Register an artifact
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://docs.oma3.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            Read the docs
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

export function ArtifactLandingPage() {
  return (
    <main className="relative overflow-x-clip bg-background text-foreground">
      <ArtifactNav />
      <HeroSection />
      <ProblemSection />
      <CarouselSection />
      <UseCasesSection />
      <StandardsSection />
      <CtaSection />
    </main>
  )
}
