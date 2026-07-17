import type { Metadata } from "next"

import { ArtifactLandingPage } from "@/components/artifact-landing-page"

export const metadata: Metadata = {
  title: "OMATrust for Digital Artifacts - Verifiable Identity for Software & Files",
  description:
    "Give every digital artifact a decentralized identity with did:artifact. Verify that software, AI models, and documents come from their claimed publisher.",
  openGraph: {
    title: "OMATrust — Digital Artifact Identity",
    description:
      "Verify software, AI models, plugins, and any downloadable file with decentralized identity and on-chain attestations.",
    url: "https://omatrust.org/artifact",
    siteName: "OMATrust",
    type: "website",
  },
}

export default function ArtifactPage() {
  return <ArtifactLandingPage />
}
