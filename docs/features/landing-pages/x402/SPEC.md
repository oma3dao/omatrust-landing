# OMATrust x402 Landing Page Specification

## Implementation Status

**Current state:** Static page with click-through carousel. No scroll-driven animations.

**What's implemented:**
- Hero section with mini-diagram (Agent → Payment → Verified Receipt)
- 5-step click/tap carousel explaining the trust problem and solution (receipt filter → forged receipts → authorization check → verified trust → flywheel)
- "Verification is not authorization" comparison section (3 cards)
- Progressive authorization levels section (Level 1/2/3 as cards)
- Benefits section (3 cards)
- CTA section

**What's deferred (future work):**
- Scroll-triggered animations (Section 2.4 module specs)
- Framer Motion integration
- SVG overlay connectors between diagram elements
- Explainer video integration
- Master SVG asset sheet for video production

**Implementation approach:** The carousel uses Lucide icons in CSS Grid layouts with inline arrow connectors instead of absolute-positioned SVG paths. This keeps diagrams responsive and mobile-friendly without hidden elements.

---

# 1. Narrative

## 1.1 Objective

This page explains how OMATrust makes x402 signed receipts verifiable and trustworthy, enabling legitimate reputation systems for machine-to-machine commerce.

**Target audience:** Developers building x402 resource servers.

**Context:** A separate primary video introduces the general need for trust in online services. This page and video focus specifically on the verification problem: how do you know a signed receipt is authentic and authorized, versus forged by a malicious actor?

The page should communicate that:
- x402 enables machine-native payments with signed receipts.
- Signed receipts can serve as proof of interaction in attestations (user reviews, disputes, audits) — but only if the receipt signer can be verified as authorized.
- Without authorization, anyone can forge receipts and flood reputation systems with fake reviews.
- OMATrust provides the authorization layer that makes receipt-based trust systems viable.

The audience should leave understanding:
1. the verification problem (fake reviews from forged receipts),
2. why x402 receipts are uniquely positioned to solve this,
3. what makes a receipt trustworthy (authorization, not just signature validity),
4. how OMATrust provides authorization at progressive levels,
5. the ecosystem that emerges when receipts become verified trust signals.

---

## 1.2 Lead with the Problem: Fake Reviews

The narrative opens with the agent's problem, not the protocol.

An agent wants to choose between competing x402 services. It checks user reviews. But how does it know those reviews are real? A bot farm can spin up millions of wallets, generate fake receipts, and flood the review system with fraudulent attestations.

The core question:

> How do you verify that a user review comes from someone who actually used the service?

This is the problem x402 receipts can solve — but only with an authorization layer.

---

## 1.3 Introduce x402 and the Receipt Extension

Briefly establish x402 as the payment layer:
- a client requests a resource,
- the service requires payment,
- the client pays,
- the service issues a signed receipt,
- the interaction succeeds.

The key differentiator of x402:

> Every successful payment produces a signed receipt — a portable cryptographic proof of interaction.

This proof can support:
- verified user reviews (the primary use case for this page),
- dispute evidence and auditability,
- authorization decisions,
- ecosystem trust relationships.

The receipt turns every x402 transaction into a potential trust signal.

---

## 1.4 The Verification Problem: Signatures Are Not Enough

A signed receipt proves a key signed data. It does not prove:
- who controls the key,
- whether the key is authorized to represent the service,
- whether the service is legitimate.

**The attack:** A malicious actor creates a service, signs receipts with a valid key, and claims those receipts are from a legitimate service. The signatures pass cryptographic verification. An agent relying only on signature validity cannot distinguish the fraudulent receipt from the real one.

**The consequence:** The agent makes bad decisions — choosing malicious services over legitimate ones because the fake reviews look identical to real ones.

> Verification is not authorization.

---

## 1.5 OMATrust Solves Authorization — Progressive Levels with Failure Modes

Each level addresses a specific failure mode. The narrative presents the attack first, then the solution.

### Good — DNS / DID Binding

**Failure mode without:** Any key can claim to represent any service. There is no binding between the signer and the service identity.

**Solution:** Basic authorization through DNS ownership and DID documents (did.json) hosted at the service domain.

**Protection:** Prevents unrelated signers from claiming a service identity. Gives verifiers a live ownership check.

---

### Better — Controller Witness / Temporal History

**Failure mode without:** The DNS or DID endpoint goes down — CDN outage, misconfiguration, provider issue. During that window, verifiers cannot confirm key authorization, and every receipt from that service becomes unverifiable. Your reputation goes dark through no fault of your own.

**Solution:** Ownership witness systems provide an independent, redundant authorization record via trusted third parties. Verification continues even when the service's own endpoints are unavailable.

**Protection:** Provides fault tolerance for authorization checks. Receipts remain verifiable during outages. Eliminates single points of failure in the trust chain.

---

### Best — Enterprise Key Binding

**Failure mode without:** A compromised key continues to be trusted indefinitely. No mechanism exists to revoke authorization or enforce security policies on key usage.

**Solution:** Enterprise-grade key management including revocations, security policy enforcement (keyPurpose), and lifecycle management.

**Protection:** Broadcasts key revocation to reduce compromised key risk. Enforces security practice for key usage and protection. Supports regulated environments and high-assurance integrations.

---

## 1.6 The Trust Flywheel

Closing beat: return to the opening scenario.

The agent now checks a review. The review includes a signed receipt. OMATrust confirms the receipt signer is authorized to represent the service. The review is verified. The agent makes a confident decision.

Every verified interaction becomes a trust signal for the next agent. The ecosystem compounds trust over time.

---

## 1.7 The OMATrust Portal

The OMATrust portal operationalizes trust management for x402 resource server operators.

The portal dashboard offers:
- visibility into the public trust profile of a service,
- key authorization tracking and management,
- attestation management,
- receipt verification status.

---

# 2. Page Experience / Content Presentation

## 2.1 Hero Experience

The hero section should immediately communicate:

> x402 enables machine payments.  
> OMATrust enables machine trust.

The hero should include:
- concise headline,
- short subheadline,
- primary CTA,
- lightweight explainer animation or video.

The hero should establish:
- machine commerce,
- trust,
- authorization,
- portable proofs of interaction.

---

## 2.2 Primary Explainer Video

The page should include one primary explainer video approximately:
- 60–120 seconds,
- visually simple,
- diagram-oriented,
- focused on conceptual clarity.

The video should explain:
1. x402 payment flow,
2. missing trust problem,
3. receipt extension,
4. OMATrust authorization layer.

Advanced concepts should be explained later through inline modules.

---

## 2.3 Video Script

**Target length:** 60–120 seconds  
**Audience:** Developers building x402 resource servers  
**Tone:** Technical, direct, infrastructure-oriented. Not salesy.  
**Visual style:** Minimal 2D, icon-driven, dark background, diagram-oriented. No photorealism, no cartoon characters, no Web3 neon.

---

### Actors

| Actor | Visual Representation |
|---|---|
| Agent (client) | Robot icon |
| Legitimate x402 service | Server/API icon (solid outline, green/cyan state when trusted) |
| Malicious service | Server icon with red/orange warning badge |
| Receipt | Illuminated document/card icon |
| Forged receipt | Document icon with dashed outline, warning state |
| User review / attestation | Badge/certificate icon |
| Fake review | Badge with dashed outline, warning state |
| OMATrust | Shield icon |
| Signing key | Key icon |
| DID document (did.json) | Document pinned to service domain |
| Controller Witness | Independent record/stamp (separate from service) |
| Enterprise key binding | Building + lock icon |
| Bot farm | Cluster of generic wallet icons spawning rapidly |

---

### Beat 1 — Problem Stage 1: Spam Reviews (0:00–0:20)

**ON SCREEN:**  
A verifier (agent) is evaluating an x402 service. Below the service: a wall of user reviews. Some are legitimate, some are spam — bot-generated reviews from accounts that never interacted with the service.

The verifier has no way to tell which reviewers actually used the service.

Then: introduce the x402 receipt. Show that legitimate interactions produce signed receipts. The verifier filters: reviews with a valid receipt attached stay. Reviews without a receipt are discarded. The spam clears.

**NARRATION:**

"You're evaluating an x402 service. It has dozens of reviews. But which reviewers actually used the service?

x402 receipts solve this. Every real interaction produces a signed receipt — proof the reviewer actually paid and received service. No receipt, no credibility. The spam is gone."

---

### Beat 2 — Problem Stage 2: Forged Receipts (0:20–0:40)

**ON SCREEN:**  
The filtered reviews remain — all have receipts attached. But now reveal: some of those receipts were not signed by the x402 service. A malicious actor created receipts with the same `resourceUrl` but signed with their own key to falsify bad user reviews. The signatures are valid. The fields match. The forged receipts passed the "has a receipt" filter.

The verifier is stuck again. All receipts look identical. Valid signatures, correct resource URL. But some came from the real service and some didn't.

**NARRATION:**

"But receipts alone aren't enough. An attacker can forge a receipt — same resource URL, valid signature, correct fields, to hurt the reputation of an x402 service. The receipt passes every check except one: the key that signed it isn't authorized to represent this service.

How do you tell which receipts actually came from the real service?"

---

### Beat 3 — OMATrust: Key Authorization (0:40–0:50)

**ON SCREEN:**  
Introduce the OMATrust shield. Show the forged receipts from Beat 2 being checked — not just "is the signature valid?" but "is this key authorized to sign for this service?"

The legitimate receipts: key is listed in the service's DID document. Authorization confirmed. Green check.

The forged receipts: key is not listed anywhere. Authorization fails. Red X. Discarded.

The verifier now sees only verified reviews backed by authorized receipts.

**NARRATION:**

"OMATrust enables key authorization. It's not enough that a signature is valid — the signing key must be authorized to represent the service. Forged receipts fail authorization. Only real receipts survive."

---

### Beat 4 — Progressive Authorization Levels (0:50–1:30)

**ON SCREEN:**  
Show three levels stacking up progressively.

**Level 1 — DNS/DID Binding:**

Show a service with a did.json document hosted at its domain. A key is listed in the document. Draw a solid line from the key to the service identity. Now show the attacker's key — it's not in the did.json. Authorization fails. Red X.

**NARRATION:**

"Level one: DNS and DID binding. Your service hosts a DID document at your domain listing your authorized keys. Any receipt signed by an unlisted key fails authorization — even if the signature is valid."

**Level 2 — Controller Witness:**

Show the did.json endpoint going down (404 / error state). All receipts from that service go gray — unverifiable. Then show a Controller Witness (independent record, separate from the service). Even with the endpoint down, the witness confirms authorization. Receipts stay green.

**NARRATION:**

"Level two: Independent Witness. What if your endpoint goes down? CDN outage, DNS issue — suddenly your receipts are unverifiable. Your reputation goes dark.

A Controller Witness is an independent authorization record on the blockchain. Verification continues even when your infrastructure doesn't, protecting your reputation."

**Level 3 — Enterprise Key Binding:**

Show a key being compromised (warning state). Without enterprise binding, the compromised key continues signing receipts that look valid. With enterprise binding, a revocation is broadcast — all verifiers immediately reject the compromised key. Show receipts from the revoked key turning red across the ecosystem.

**NARRATION:**

"Level three: Enterprise key binding. If a key is compromised, you broadcast a revocation. Every verifier in the ecosystem rejects that key immediately. You control your key lifecycle."

---

### Beat 5 — The Flywheel (1:30–1:45)

**ON SCREEN:**  
Return to the opening scene. Same service, same reviews. But now each review shows a verification state. Reviews with authorized receipts: verified badge. Reviews with forged receipts: rejected, faded out. The service's real reputation is clear and protected.

Pull back: an agent evaluating this service sees only verified reviews. It makes a confident decision. Many agents doing the same. Legitimate services build reputation based on real interactions. Forged receipts are rejected ecosystem-wide.

**NARRATION:**

"Now every review is checked. Receipt present? Signature valid? Key authorized? Only then is the review verified. Real reputation is protected. Fraudulent receipts can't survive."

---

### Beat 6 — The OMATrust Framework (1:45–1:50)

**ON SCREEN:**  
Pull back even more:  show that key authorizations is just set of trust signals.  Other trust signals enabled by OMATrust include cybersecurity assessments and compliance certifications.  Represent these signals as other types of reviews (see table below).  All these signals together feed into the overall reputation of an x402 service.

**NARRATION:**

"Key authorization is just one trust signal among many that enable a complete reputation system for x402 services."

---

### Beat 7 — CTA (1:50–2:00)

**ON SCREEN:**  

"OMATrust. Verified trust for x402."

**NARRATION:**

"Protect your x402 reputation with OMATrust.  Create your OMATrust profile today."

---

### Total Estimated Runtime: ~2:00

---

### Graphics / Assets Required

| Asset | Type | Description |
|---|---|---|
| Agent icon | SVG | Robot/client icon, neutral state |
| Service icon | SVG | Server/API, with trusted (green) and warning (red) variants |
| Receipt card | SVG | Document with fields visible, illuminated state |
| Forged receipt | SVG | Same as receipt but dashed outline, warning state |
| Bot farm cluster | SVG | Multiple wallet icons spawning, conveying volume |
| Key icon | SVG | Signing key, with authorized (green) and compromised (red) variants |
| DID document | SVG | Document pinned to a domain, showing key listings |
| Controller Witness | SVG | Independent record/stamp, visually separate from service |
| Enterprise binding | SVG | Building + lock, revocation broadcast visual |
| OMATrust shield | SVG | Shield with check, primary brand element |
| Review/attestation badge | SVG | Certificate icon, verified (solid) and unverified (dashed) variants |
| 402 response indicator | SVG | HTTP status badge |
| Payment flow arrows | SVG | Directional connectors between actors |
| Verification checkmark | SVG | Green check for signature validity |
| Authorization X | SVG | Red X for failed authorization |
| Endpoint down state | SVG | 404/error overlay on did.json |

---

### Audio / Music Notes

- Background: subtle ambient/electronic, low energy, not distracting
- No voiceover music swells or dramatic beats
- Tone should feel like infrastructure documentation, not a product launch

---

## 2.4 Animated Page Modules — Implementation Spec

This section specifies how the video script beats translate into scroll-triggered animated React components on the page. These modules replace a traditional video — the page *is* the explainer.

---

### Interaction Model

- **Scroll-triggered.** Each beat activates as the user scrolls it into the viewport.
- **No autoplay, no timers.** The user controls pacing by scrolling.
- **Each beat is a full-viewport section** (or near-full). One concept per screen.
- **Animations play once** on first scroll-in. They hold their final state after completing.
- **Reduced motion:** If the user has `prefers-reduced-motion` enabled, show the final state immediately without animation.

---

### Layout Pattern

All beats follow the same general layout:

```
┌─────────────────────────────────────────┐
│                                         │
│   [On-screen text — 1-2 lines]          │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │                                 │   │
│   │     [Animated diagram area]     │   │
│   │                                 │   │
│   └─────────────────────────────────┘   │
│                                         │
│   [Supporting subtext — optional]       │
│                                         │
└─────────────────────────────────────────┘
```

- Text above the diagram (headline/hook)
- Diagram center-stage (icons, arrows, state transitions)
- Optional subtext below (clarification or detail)
- Dark background, consistent with site aesthetic

---

### Beat-by-Beat Module Spec

#### Module 1 — Spam Reviews Filtered by Receipts

**On-screen text:**  
"Which reviews are real?"

**Layout:**  
Center: a `Server` icon (the service). Below it: a grid of `Star` review icons (6–8 reviews). Some have a `Receipt` icon attached, some don't.

**Animation sequence:**
1. All reviews appear (fade in, staggered) — mixed state, no differentiation
2. A filter line sweeps across. Reviews without receipts fade to gray and shrink/disappear
3. Reviews with receipts remain, highlighted with green/cyan border

**Supporting subtext:**  
"x402 receipts prove interaction. No receipt — no credibility."

**Transition timing:**  
- Step 1: 0.5s staggered fade-in
- Step 2: 0.8s filter sweep
- Step 3: 0.3s highlight remaining

---

#### Module 2 — Forged Receipts

**On-screen text:**  
"But what if the receipt is forged?"

**Layout:**  
Same layout as Module 1's final state (only receipt-backed reviews remain). Below each receipt: a `KeyRound` icon showing which key signed it.

**Animation sequence:**
1. Hold Module 1's final state (reviews with receipts)
2. Keys appear below each receipt (fade in)
3. Reveal: some keys are green (authorized), some are red/orange (unauthorized — different key, same resourceUrl)
4. A "signature check" badge (`CheckCheck`) appears on ALL receipts — they all pass signature verification
5. Pause. Text updates: "Valid signature ≠ authorized signer"

**Supporting subtext:**  
"An attacker can forge receipts with valid signatures. The key isn't authorized — but the math checks out."

**Transition timing:**
- Step 2: 0.5s fade-in keys
- Step 3: 0.4s color reveal on keys
- Step 4: 0.3s checkmarks appear
- Step 5: 0.5s text transition

---

#### Module 3 — Key Authorization

**On-screen text:**  
"OMATrust checks authorization, not just signatures."

**Layout:**  
Center: `Shield` (OMATrust) icon, large. To the left: receipts with keys from Module 2. Arrows flow from each receipt/key toward the shield.

**Animation sequence:**
1. OMATrust shield fades in (center)
2. Arrows draw from each receipt toward the shield
3. Shield checks each key: authorized keys get `ShieldCheck` (green). Unauthorized keys get `ShieldX` (red)
4. Receipts with unauthorized keys fade out / get crossed out
5. Only authorized receipts remain

**Supporting subtext:**  
"The signing key must be authorized to represent the service. Forged receipts fail."

**Transition timing:**
- Step 1: 0.4s fade-in
- Step 2: 0.5s arrows draw
- Step 3: 0.6s staggered check results
- Step 4: 0.4s fade-out rejected
- Step 5: 0.3s settle

---

#### Module 4a — Level 1: DNS/DID Binding

**On-screen text:**  
"Level 1: Your domain proves your keys."

**Layout:**  
Left: `Server` icon (your service) with `Globe` (domain). Right: `FileKey` (did.json) document showing a list of authorized keys. Arrows connect keys in the document to the service.

**Animation sequence:**
1. Service + domain appear
2. did.json document appears, connected to the domain
3. Authorized key listed in document — solid green line to service
4. Attacker's key appears (bottom) — tries to connect. No entry in did.json. Red dashed line. `ShieldX`.

**Supporting subtext:**  
"Host a DID document at your domain. Only listed keys pass authorization."

**Transition timing:**
- Steps 1–2: 0.5s each
- Step 3: 0.4s line draws
- Step 4: 0.6s attacker attempt + rejection

---

#### Module 4b — Level 2: Controller Witness

**On-screen text:**  
"Level 2: What if your endpoint goes down?"

**Layout:**  
Left: `Server` + `Globe` (your service/domain). Center: `FileKey` (did.json). Right: `History` + `Stamp` (Controller Witness — independent).

**Animation sequence:**
1. Show normal state: service → did.json → key authorized (green)
2. did.json goes down: `XCircle` overlay, document grays out
3. All authorization lines from did.json go gray/dashed — "unverifiable"
4. Controller Witness activates: `History` icon glows, independent line to key stays green
5. Authorization confirmed via witness. `ShieldCheck` returns.

**Supporting subtext:**  
"A Controller Witness provides independent authorization. Your reputation survives outages."

**Transition timing:**
- Step 1: 0.4s establish
- Step 2: 0.5s endpoint failure
- Step 3: 0.4s lines gray out
- Step 4: 0.5s witness activates
- Step 5: 0.3s resolution

---

#### Module 4c — Level 3: Enterprise Key Binding

**On-screen text:**  
"Level 3: Revoke a compromised key instantly."

**Layout:**  
Center: `KeyRound` icon (compromised — red warning). Around it: multiple `Bot` agents relying on receipts signed by this key. Right: `Radio` broadcast icon.

**Animation sequence:**
1. Show key signing receipts — agents trusting them (green lines)
2. Key gets compromised: `AlertTriangle` overlay, turns red
3. Without revocation: key keeps signing, agents still trust (problem state — hold 1s)
4. Enterprise binding activates: `Radio` broadcasts revocation
5. All agents receive broadcast — lines to compromised key turn red, receipts rejected
6. New key (`KeyRound` green) takes over

**Supporting subtext:**  
"Broadcast revocation. Every verifier rejects the compromised key immediately."

**Transition timing:**
- Step 1: 0.4s establish
- Step 2: 0.4s compromise reveal
- Step 3: 1.0s hold (let problem sink in)
- Step 4: 0.4s broadcast
- Step 5: 0.6s staggered rejection
- Step 6: 0.3s new key

---

#### Module 5 — The Flywheel

**On-screen text:**  
"Verified trust compounds."

**Layout:**  
Center: `Server` (your service). Below: reviews with full verification chain visible (receipt → key → authorization → `CheckCheck`). Around the edges: multiple `Bot` agents connecting, making decisions.

**Animation sequence:**
1. Show single verified review (full chain visible)
2. Agent evaluates, sees verification, connects (green line)
3. More reviews accumulate (staggered)
4. More agents connect
5. Service reputation grows (subtle glow/scale increase on service icon)

**Supporting subtext:**  
"Every verified interaction builds trust. Fraudulent receipts can't survive."

**Transition timing:**
- Steps 1–5: 0.4s each, staggered for organic feel
- Total sequence: ~2.5s

---

#### Module 6 — CTA

**On-screen text:**  
"Protect your x402 service reputation."

**Layout:**  
Center: OMATrust `Shield` logo. Below: primary CTA button. Minimal, clean.

**Animation:**  
Simple fade-in. No complex animation. Let the previous modules do the work.

---

### Technical Notes

- **Framework:** React components with `lucide-react` for icons
- **Animation library:** Framer Motion (scroll-triggered via `whileInView`)
- **Scroll detection:** Intersection Observer (via Framer Motion's viewport detection)
- **Responsive:** Diagrams scale down on mobile. On small screens, layouts stack vertically.
- **Performance:** Icons are inline SVG (no network requests). Animations use CSS transforms (GPU-accelerated). No heavy assets.
- **Accessibility:** All icons have `aria-label`. Animation respects `prefers-reduced-motion`. Text is readable without animation.

---

## 2.5 Supporting Inline Visual Modules

Each major concept should include:
- concise text,
- supporting diagram,
- optional lightweight animation,
- expandable deeper detail.

Recommended modules:

| Concept | Presentation |
|---|---|
| x402 flow | Request/payment diagram |
| Trust gap | Attack/failure scenarios |
| Verification vs authorization | Side-by-side comparison |
| Authorization levels | Security ladder/cards |
| Controller witness | Temporal continuity diagram |
| Key binding | Enterprise security diagram |
| Attestations | Trust graph visualization |

---

## 2.6 Text Strategy

The page should remain understandable even if the user never watches the video.

Every major concept introduced in video form must also appear as:
- text,
- diagrams,
- structured explanations.

Text should be:
- concise,
- layered,
- progressively detailed.

Avoid:
- large uninterrupted prose sections,
- specification-heavy formatting,
- marketing fluff.

Preferred structure:
- short explanatory paragraphs,
- diagrams,
- comparison cards,
- callouts,
- expandable detail sections.

---

## 2.7 Visual Grammar

The site should use consistent visual semantics. The icon system is based on **Lucide** (MIT licensed, SVG-native, consistent stroke weight).

### Icon Mapping

| Concept | Lucide Icon(s) | State Variants |
|---|---|---|
| Agent / Client | `Bot` | Neutral |
| Service / API | `Server` | Trusted (green stroke), Warning (red stroke) |
| Website / Domain | `Globe` | Domain context |
| Malicious actor | Normal icon + `AlertTriangle` overlay | Red/orange warning state |
| Receipt | `Receipt` | Illuminated (cyan glow), Forged (dashed stroke, red) |
| Signing key | `KeyRound` | Authorized (green), Compromised (red), Unbound (gray dashed) |
| Key binding | `KeyRound` + `Lock` | Combined composite |
| Authorization | `ShieldCheck` | Green fill/stroke |
| Authorization failure | `ShieldX` | Red fill/stroke |
| OMATrust | `Shield` | Primary brand treatment |
| Identity | `BadgeCheck` | Service identity verified |
| Verified relationship | `Link2` | Solid stroke, illuminated |
| Untrusted relationship | `Link2` | Dashed stroke, muted |
| Attestation / Review | `BadgeCheck` | Verified (solid green), Unverified (dashed gray) |
| Reputation | `Star` | Rating/review context |
| DID document | `FileKey` | Pinned to domain |
| Controller Witness / History | `History` + `Stamp` | Independent temporal record |
| Enterprise binding | `Building2` + `Lock` | Combined composite |
| Endpoint down | `Server` + `XCircle` | Error state overlay, grayed out |
| Revocation broadcast | `Radio` + `XCircle` | Red broadcast |
| Bot farm / spam | `Users` (cluster) | Rapid spawn animation |
| Payment | `Coins` | Neutral |
| Verification (confirmed) | `CheckCheck` | Double-check for verified state |
| Warning | `AlertTriangle` | General warning/caution |
| Cyber security assessment | `ShieldAlert` + `ScanSearch` | Assessment/audit attestation |
| Compliance certification | `Award` + `FileCheck` | Regulatory/compliance attestation |

### Composite States

Lucide provides the base primitives. Composite states (e.g., "compromised key with warning badge") are built by layering icons:

- **Trusted service:** `Server` with `ShieldCheck` overlay (green)
- **Compromised key:** `KeyRound` with `AlertTriangle` badge (red)
- **Forged receipt:** `Receipt` with dashed stroke + `ShieldX` (red)
- **Endpoint down:** `Server` with `XCircle` overlay, grayed out
- **Verified review:** `Star` + `Receipt` attachment + `CheckCheck` (green)
- **Unverified review:** `Star` dashed + no receipt or `ShieldX` (unauthorized)
- **Controller Witness active:** `History` with `ShieldCheck` (green, independent of service state)
- **Key revoked:** `KeyRound` with `XCircle` + `Radio` broadcast (red, ecosystem-wide)

### Usage Notes

- Lucide icons are used for the **web page** (inline diagrams, component icons, visual modules)
- For **manual video production**, Lucide SVGs serve as the base assets; a designer adds animation states, glow effects, and transitions
- For **AI-generated video** (e.g., NotebookLM), the icon library is not directly consumed — the script's on-screen descriptions guide visual generation independently
- All icons should be rendered with consistent stroke width on dark backgrounds
- Color overrides via CSS/SVG fill for trust-state semantics

---

# 2.8 Visual Tone and Aesthetic

The x402 landing page should visually align with the primary OMATrust website aesthetic.

The page should assume:
- dark backgrounds,
- restrained lighting,
- infrastructure-oriented visuals,
- minimal motion graphics,
- clean iconography.

The visual tone should feel:
- trustworthy,
- technical,
- modern,
- composable,
- security-oriented,
- ecosystem-scale.

Avoid:
- bright SaaS aesthetics,
- excessive gradients,
- playful illustrations,
- cartoon visuals,
- generic “Web3 neon” design language.

Preferred palette:
- dark charcoal / deep navy backgrounds,
- muted grays,
- restrained accent colors,
- subtle trust-state highlights.

---

## Trust-State Visual Semantics

| State | Suggested Treatment |
|---|---|
| Trusted | Soft green/cyan highlight |
| Authorized | Shield/check overlay |
| Unauthorized | Red/orange warning |
| Unknown | Muted gray |
| Malicious actor | Warning badge / red outline |
| Verified relationship | Solid illuminated connection |
| Untrusted relationship | Dashed/fading connection |
| Attestation | Minimal badge/certificate glow |
| Receipt | Illuminated document/receipt card |

---

## Diagram and Video Styling

Diagrams should prioritize conceptual clarity over artistic polish.

Preferred workflow:
- Mermaid for rough/spec diagrams,
- Google Slides for polished diagrams,
- SVG export for web integration.

Diagrams should be:
- modular,
- reusable,
- consistent,
- exportable for animation.

Diagrams and videos should:
- integrate naturally into dark backgrounds,
- support transparent-background SVG assets when possible,
- prioritize clarity over visual complexity,
- use restrained animation,
- maintain visual consistency across all OMATrust pages.

Animations should feel:
- infrastructural,
- deliberate,
- compositional,
- not entertainment-oriented.

---

# 3. Technical / Implementation Specification

## 3.1 General Requirements

The page should:
- be responsive,
- support desktop and mobile layouts,
- support dark mode if site-wide dark mode exists,
- load quickly,
- support accessibility best practices.

---

## 3.2 Route / Structure

The page should:
- exist as a dedicated x402 landing page route,
- support direct linking,
- support SEO indexing.

---

## 3.3 Component Strategy

Use reusable components for:
- comparison cards,
- diagrams,
- authorization levels,
- CTA sections,
- inline callouts,
- expandable technical detail.

---

## 3.4 Asset Strategy

Assets should be organized under:

/public/assets/x402/

Support:
- SVG diagrams,
- PNG fallbacks,
- MP4/WebM videos.

All videos should have static fallback visuals.

---

## 3.5 Video Integration

The hero video should:
- lazy-load,
- not block page rendering,
- support silent autoplay if appropriate,
- degrade gracefully on unsupported devices.

---

## 3.6 Diagram Integration

Diagrams should:
- scale responsively,
- remain readable on mobile,
- support inline embedding,
- support future animation upgrades.

---

## 3.7 Accessibility

The page should support:
- keyboard navigation,
- reduced motion mode,
- accessible color contrast,
- alt text for diagrams and videos.

---

## 3.8 SEO / Metadata

The page should include:
- SEO title,
- meta description,
- Open Graph tags,
- structured headings.

---

## 3.9 Browser Testing

Codex should test:
- responsive layouts,
- dark/light rendering,
- mobile breakpoints,
- video loading,
- SVG rendering,
- CTA functionality,
- performance regressions.

---

## 3.10 Future Extensibility

The implementation should support future:
- additional protocol landing pages,
- reusable visual modules,
- shared trust diagrams,
- additional attestation ecosystems,
- expanded authorization models.
