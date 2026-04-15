import { HASHMATO_PRODUCT_IMAGES, HASHMATO_SITE } from '@/data/hashmato'

export interface HashmatoShowcaseItem {
  title: string
  description: string
  year: string
  link: string
  image: string
}

/** Product & program highlights — mirrors “selected work” pattern */
export const hashmatoShowcaseItems: HashmatoShowcaseItem[] = [
  {
    title: 'Problem diagnosis',
    description:
      'Map people, process, and tool gaps before they hit your service quality.',
    year: 'Step 01',
    link: `${HASHMATO_SITE}/online-ordering-system/`,
    image: HASHMATO_PRODUCT_IMAGES.restaurantIndustry,
  },
  {
    title: 'All-in-one architecture',
    description:
      'Connect menu, billing, inventory, reports, and integrations on one stack.',
    year: 'Step 02',
    link: HASHMATO_SITE,
    image: HASHMATO_PRODUCT_IMAGES.dineplanIntegration,
  },
  {
    title: 'Operational transformation',
    description:
      'Move from disconnected manual flow to consistent, auditable operations.',
    year: 'Step 03',
    link: HASHMATO_SITE,
    image: HASHMATO_PRODUCT_IMAGES.retailIndustry,
  },
  {
    title: 'Outcome tracking',
    description:
      'Monitor ownership controls, outlet growth, revenue lift, and cost health.',
    year: 'Step 04',
    link: HASHMATO_SITE,
    image: HASHMATO_PRODUCT_IMAGES.inventory,
  },
]
