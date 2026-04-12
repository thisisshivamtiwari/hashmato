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
