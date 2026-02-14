import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustProblemSection } from "@/components/trust-problem-section"
import { FeatureCardsSection } from "@/components/feature-cards-section"
import { GovernanceSection } from "@/components/governance-section"
import { StandardsSection } from "@/components/standards-section"
import { DeveloperLinksSection } from "@/components/developer-links-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <TrustProblemSection />
      <FeatureCardsSection />
      <GovernanceSection />
      <StandardsSection />
      <DeveloperLinksSection />
      <SocialSection />
      <Footer />
    </main>
  )
}
