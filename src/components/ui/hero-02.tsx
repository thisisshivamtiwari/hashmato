import {
  LayoutGrid,
  MonitorSmartphone,
  ShoppingBag,
  Store,
  TabletSmartphone,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { GradientWave } from '@/components/ui/gradient-wave'
import { Marquee } from '@/components/ui/marquee'
import {
  HASHMATO_CUSTOMER_LOGOS,
  HASHMATO_PRODUCT_IMAGES,
  HASHMATO_SITE,
} from '@/data/hashmato'

const suiteHighlights = [
  {
    name: 'Online ordering',
    designation: 'Web & app',
    description: 'Orders flow straight into your POS and kitchen.',
    logo: HASHMATO_PRODUCT_IMAGES.onlineOrdering,
    icon: <ShoppingBag className="size-6 text-emerald-700" aria-hidden />,
  },
  {
    name: 'Point of sale',
    designation: 'Counter & back office',
    description: 'Fast tenders, splits, and 50+ downloadable reports.',
    logo: HASHMATO_PRODUCT_IMAGES.pos,
    icon: <Store className="size-6 text-emerald-700" aria-hidden />,
  },
  {
    name: 'Self-order kiosk',
    designation: 'Queue-busting',
    description: 'Guests customize orders; you keep the line moving.',
    logo: HASHMATO_PRODUCT_IMAGES.kiosk,
    icon: <TabletSmartphone className="size-6 text-emerald-700" aria-hidden />,
  },
  {
    name: 'Cloud inventory',
    designation: 'Real-time stock',
    description: 'Track usage across outlets from one dashboard.',
    logo: HASHMATO_PRODUCT_IMAGES.inventory,
    icon: <LayoutGrid className="size-6 text-emerald-700" aria-hidden />,
  },
]

export const HeroSection02 = () => {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col items-center justify-center overflow-hidden px-6">
        <GradientWave
          className="absolute inset-0 opacity-50 dark:opacity-10"
          colors={[
            '#059669',
            '#ecfdf5',
            '#0d9488',
            '#ffffff',
            '#047857',
            '#f0fdfa',
          ]}
        />
        <div className="relative z-10 mx-auto my-16 mt-8 flex max-w-7xl flex-col space-y-10 rounded-xl border border-border bg-background/70 p-10 shadow-2xl backdrop-blur-sm lg:my-20 lg:p-20">
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10">
            <h1 className="text-center text-3xl font-medium mix-blend-overlay md:text-5xl lg:text-7xl">
              Serve faster.
            </h1>
            <p className="max-w-md text-center text-sm text-muted-foreground lg:text-left">
              Hashmato is not just another POS — it is an end-to-end platform
              for restaurants, retail, institutions, and franchises. Offline
              mode, multi-location, and 100+ online integrations keep you
              selling when it matters.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {HASHMATO_CUSTOMER_LOGOS.map((c) => (
                <img
                  key={c.name}
                  src={c.src}
                  alt={c.name}
                  title={c.name}
                  className="h-11 w-auto max-w-[100px] object-contain opacity-90 transition hover:opacity-100 dark:opacity-85"
                />
              ))}
            </div>
            <h2 className="text-center text-2xl font-medium mix-blend-overlay md:text-4xl lg:text-6xl">
              Trusted worldwide
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-3 text-center lg:text-left">
              <MonitorSmartphone
                className="size-10 shrink-0 text-emerald-600"
                aria-hidden
              />
              <h2 className="text-2xl font-medium underline decoration-emerald-600/40 decoration-2 underline-offset-4 mix-blend-overlay md:text-4xl lg:text-6xl">
                One unified stack
              </h2>
            </div>
            <Button className="h-14 rounded-full px-12 lg:h-20 lg:px-20" asChild>
              <a href={HASHMATO_SITE} target="_blank" rel="noreferrer">
                See solutions
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center pb-16">
        <p className="relative z-10 mb-10 max-w-xl px-4 text-center text-lg text-muted-foreground">
          Product highlights from the Hashmato suite — POS, ordering, kiosk, and
          inventory.
        </p>
        <Marquee className="w-full" pauseOnHover>
          {suiteHighlights.map((item, index) => (
            <div key={index} className="h-full">
              <div className="relative mx-10 flex h-full min-w-[240px] items-center gap-3 overflow-visible rounded-xl border border-border bg-background/60 backdrop-blur-md">
                <div className="absolute -left-12.5 top-6 z-0 rounded-l-md border border-border bg-white p-3 dark:bg-zinc-900">
                  {item.icon}
                </div>
                <div className="flex flex-1 flex-col px-4 py-3 pl-2">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.designation}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <img
                  src={item.logo}
                  alt=""
                  className="h-full min-h-[100px] w-38 rounded-r-xl object-cover"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
