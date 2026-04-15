import type { Feature } from '@/components/ui/hero-5'

import {
  HASHMATO_SCREENSHOTS,
  HASHMATO_SITE,
} from '@/data/hashmato'

export const ethicalHeroDemoTitle = (
  <>
    One platform for restaurants
    <br />
    and retail — powered by{' '}
    <span className="text-primary">Hashmato.</span>
  </>
)

export const ethicalHeroDemoSubtitle =
  'Built from real operator workflows: issue-wise controls, outlet-level reporting, scalable architecture, and faster decision loops for owners and managers.'

export const ethicalHeroDemoCtaLabel = 'Schedule a demo'
export const ethicalHeroDemoCtaHref = HASHMATO_SITE

export const ethicalHeroDemoFeatures: Feature[] = [
  {
    id: 'online-ordering',
    title: 'Owner control in one view',
    imageUrl: HASHMATO_SCREENSHOTS.ownerControl,
    href: `${HASHMATO_SITE}/online-ordering-system/`,
  },
  {
    id: 'pos-suite',
    title: 'Multi-outlet visibility',
    imageUrl: HASHMATO_SCREENSHOTS.multiOutlet,
    href: HASHMATO_SITE,
  },
  {
    id: 'cloud-inventory',
    title: 'Revenue and cost confidence',
    imageUrl: HASHMATO_SCREENSHOTS.revenueGrowth,
    href: HASHMATO_SITE,
  },
]
