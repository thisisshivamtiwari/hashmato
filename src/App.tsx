import { AnimatedFooter } from '@/components/layout/AnimatedFooter'
import { ResizableNavbar } from '@/components/layout/ResizableNavbar'
import IntroAnimation from '@/components/ui/scroll-morph-hero'
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion'
import { EthicalHero } from '@/components/ui/hero-5'
import {
  ethicalHeroDemoCtaHref,
  ethicalHeroDemoCtaLabel,
  ethicalHeroDemoFeatures,
  ethicalHeroDemoSubtitle,
  ethicalHeroDemoTitle,
} from '@/data/ethical-hero-demo'
import { HeroSection02 } from '@/components/ui/hero-02'
import { Hero195 } from '@/components/ui/hero-195'
import AeroHeroDemo from '@/components/ui/aero-hero-1-demo'
import { Component as AeroCounter } from '@/components/ui/aero-hero-1'
import { FeaturesSection } from '@/components/ui/feature'
import FeatureSections from '@/components/ui/feature-sections'
import FeatureSectionsDemo from '@/components/ui/feature-sections-demo'
import FeaturesCards from '@/components/ui/feature-shader-cards'
import { ProjectShowcase } from '@/components/ui/project-showcase'

const App = () => {
  return (
    <div className="w-full bg-background">
      <ResizableNavbar />

      <div className="pt-19 sm:pt-21">
        <div id="platform" className="scroll-mt-24">
          <LandingAccordionItem />
        </div>

        <section
          id="suite"
          aria-label="Explore the Hashmato product suite — interactive scroll"
          className="w-full scroll-mt-24 px-4 py-8"
        >
          <div className="relative mx-auto h-[800px] w-full max-w-6xl overflow-hidden rounded-lg border border-border">
            <IntroAnimation />
          </div>
        </section>

        <div id="solutions" className="scroll-mt-24">
          <EthicalHero
            title={ethicalHeroDemoTitle}
            subtitle={ethicalHeroDemoSubtitle}
            ctaLabel={ethicalHeroDemoCtaLabel}
            ctaHref={ethicalHeroDemoCtaHref}
            features={ethicalHeroDemoFeatures}
          />
        </div>

        <div id="customers" className="scroll-mt-24">
          <HeroSection02 />
        </div>

        <div id="growth" className="scroll-mt-24">
          <Hero195 />
        </div>

        <div id="features-ui" className="scroll-mt-24">
          <FeaturesSection />
        </div>

        <div id="feature-sections" className="scroll-mt-24">
          <FeatureSections />
          <FeatureSectionsDemo />
        </div>

        <div id="aero-hero" className="scroll-mt-24">
          <AeroHeroDemo />
          <div className="mx-auto w-full max-w-6xl px-4 py-8">
            <AeroCounter />
          </div>
        </div>

        <div id="shader-cards" className="scroll-mt-24">
          <FeaturesCards />
        </div>

        <main
          id="highlights"
          className="flex min-h-screen w-full scroll-mt-24 items-center justify-center"
        >
          <ProjectShowcase />
        </main>

        <AnimatedFooter />
      </div>
    </div>
  )
}

export default App
