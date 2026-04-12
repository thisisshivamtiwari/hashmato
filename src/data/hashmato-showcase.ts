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
    title: 'Online ordering system',
    description:
      'Branded web and app ordering with centralized menu and promo control.',
    year: 'Suite',
    link: `${HASHMATO_SITE}/online-ordering-system/`,
    image: HASHMATO_PRODUCT_IMAGES.onlineOrdering,
  },
  {
    title: 'Waiter & Android POS',
    description:
      'Tableside ordering and rugged Android terminals built for peak hours.',
    year: 'Suite',
    link: HASHMATO_SITE,
    image: HASHMATO_PRODUCT_IMAGES.androidPos,
  },
  {
    title: 'DinePlan & integrations',
    description:
      'Connect reservations and delivery marketplaces into one operations hub.',
    year: 'Partner',
    link: HASHMATO_SITE,
    image: HASHMATO_PRODUCT_IMAGES.dineplanIntegration,
  },
  {
    title: 'Multi-industry coverage',
    description:
      'Restaurants, retail, hospitals, schools, franchises, and enterprise rollouts.',
    year: 'Global',
    link: HASHMATO_SITE,
    image: HASHMATO_PRODUCT_IMAGES.enterpriseIndustry,
  },
]
