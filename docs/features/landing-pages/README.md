# Landing Pages System

This directory contains the specifications, assets, prompts, and supporting documentation for OMATrust ecosystem landing pages.

The goal of this system is to:
- explain complex trust infrastructure concepts clearly,
- support AI-assisted implementation workflows,
- maintain visual and messaging consistency across pages,
- enable reusable diagrams, assets, and components.

Each landing page is treated as an independent narrative and implementation unit.

Examples:
- x402
- MCP
- Certifications
- Enterprise Trust
- Attestations

---

# Directory Structure

```text
landing-pages/
  README.md
  shared/
    visual-grammar.md
    messaging-principles.md
    component-patterns.md
  x402/
    SPEC.md
    notebooklm-prompts.md
    assets/
  mcp/
    SPEC.md
    notebooklm-prompts.md
    assets/
```

---

# Philosophy

Landing pages are not treated as generic marketing pages.

They are:
- technical explainers,
- ecosystem onboarding experiences,
- trust architecture narratives,
- protocol education systems.

The pages should balance:
- conceptual clarity,
- technical correctness,
- visual simplicity,
- progressive disclosure.

---

# AI Workflow

Recommended workflow:

1. Create or refine `SPEC.md` for each page
2. Review narrative and technical correctness
3. Generate or refine diagrams
4. Generate NotebookLM prompts
5. Implement with Codex
6. Integrate assets
7. Browser test and refine

---

# Shared Conventions

The `shared/` directory contains reusable standards:
- visual grammar,
- icon semantics,
- component conventions,
- messaging conventions,
- reusable UX patterns.

These shared standards help maintain consistency across:
- diagrams,
- videos,
- page layouts,
- CTAs,
- trust concepts.

---

# SPEC.md Responsibilities

Each landing page should maintain its own `SPEC.md`.

The spec should contain:
1. Narrative
2. Page Experience / Content Presentation
3. Technical / Implementation Specification

The spec is the primary source of truth for:
- messaging,
- page flow,
- visual structure,
- implementation requirements.

---

# Asset Philosophy

The system prioritizes:
- conceptual clarity,
- reusable visuals,
- lightweight infrastructure-style design,
- icon-driven explanations,
- modular diagrams.

Preferred tools:
- Markdown
- Google Slides
- Mermaid
- NotebookLM
- SVG assets
- Codex for implementation

Heavy design tooling is intentionally avoided unless necessary.

---

# Diagram Philosophy

Diagrams should:
- communicate systems clearly,
- visually explain trust relationships,
- demonstrate attacks and mitigations,
- progressively reveal complexity.

Diagrams should avoid:
- unnecessary artistic complexity,
- generic Web3 visuals,
- decorative clutter.

---

# Video Philosophy

Videos should:
- remain concise,
- explain one conceptual arc,
- prioritize understanding over visual spectacle,
- complement text rather than replace it.

Every major concept introduced in video form should also exist in:
- text,
- diagrams,
- structured explanations.

---

# Future Goals

Over time this system should evolve into:
- a reusable visual trust language,
- reusable trust architecture components,
- reusable NotebookLM prompt patterns,
- reusable diagram systems,
- reusable implementation patterns.

The long-term goal is to create a scalable ecosystem communication framework for OMATrust technologies.
