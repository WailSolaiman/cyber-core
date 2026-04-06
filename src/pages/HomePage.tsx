import {
  CapabilitiesSection,
  ChapterNav,
  CtaBandSection,
  CustomerLogosSection,
  DataStripesSection,
  HeroSection,
  IntelBentoSection,
  PerimeterMapSection,
  SecureUplinkSection,
  SiteFooter,
  SiteHeader,
  TeamTrustSection,
} from '../components/landing'

export function HomePage() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <SiteHeader />
      <ChapterNav />
      <main className="relative min-w-0">
        <HeroSection />
        <DataStripesSection />
        <IntelBentoSection />
        <PerimeterMapSection />
        <CtaBandSection />
        <CustomerLogosSection />
        <CapabilitiesSection />
        <TeamTrustSection />
        <SecureUplinkSection />
      </main>
      <SiteFooter />
    </div>
  )
}
