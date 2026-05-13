import type { Metadata } from "next"

import { X402LandingPage } from "@/components/x402-landing-page"

export const metadata: Metadata = {
  title: "OMATrust for x402 - Verified Trust for Machine Payments",
  description:
    "OMATrust verifies that x402 signed receipts come from authorized service keys, turning machine payments into trustworthy reputation signals.",
  openGraph: {
    title: "OMATrust for x402",
    description:
      "Verify x402 receipts, reject forged reviews, and protect service reputation with authorized signing keys.",
    url: "https://omatrust.org/x402",
    siteName: "OMATrust",
    type: "website",
  },
}

export default function X402Page() {
  return <X402LandingPage />
}
