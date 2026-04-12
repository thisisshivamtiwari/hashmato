import type { Feature } from '@/components/ui/hero-5'

import { HASHMATO_PRODUCT_IMAGES, HASHMATO_SITE } from '@/data/hashmato'

export const ethicalHeroDemoTitle = (
  <>
    One platform for restaurants
    <br />
    and retail — powered by{' '}
    <span className="text-primary">Hashmato.</span>
  </>
)

export const ethicalHeroDemoSubtitle =
  'Trusted by 2,000+ locations worldwide: take orders, fire KOTs, sync inventory, and reconcile sales across dine-in, takeaway, delivery, and 100+ integrations — with offline mode and enterprise-grade security.'

export const ethicalHeroDemoCtaLabel = 'Schedule a demo'
export const ethicalHeroDemoCtaHref = HASHMATO_SITE

export const ethicalHeroDemoFeatures: Feature[] = [
  {
    id: 'online-ordering',
    title: 'Online ordering',
    imageUrl: HASHMATO_PRODUCT_IMAGES.onlineOrdering,
    href: `${HASHMATO_SITE}/online-ordering-system/`,
  },
  {
    id: 'pos-suite',
    title: 'POS & kitchen display',
    imageUrl: HASHMATO_PRODUCT_IMAGES.pos,
    href: HASHMATO_SITE,
  },
  {
    id: 'cloud-inventory',
    title: 'Cloud inventory',
    imageUrl: HASHMATO_PRODUCT_IMAGES.inventory,
    href: HASHMATO_SITE,
  },
]
