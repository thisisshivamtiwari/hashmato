import { HASHMATO_PRODUCT_IMAGES } from '@/data/hashmato'

export type AccordionItemData = {
  id: number
  title: string
  imageUrl: string
}

export const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Drinks & modifiers',
    imageUrl: HASHMATO_PRODUCT_IMAGES.pos,
  },
  {
    id: 2,
    title: 'Order queue',
    imageUrl: HASHMATO_PRODUCT_IMAGES.onlineOrdering,
  },
  {
    id: 3,
    title: 'Table control',
    imageUrl: HASHMATO_PRODUCT_IMAGES.kiosk,
  },
  {
    id: 4,
    title: 'Issue-wise reports',
    imageUrl: HASHMATO_PRODUCT_IMAGES.queue,
  },
  {
    id: 5,
    title: 'Unified platform map',
    imageUrl: HASHMATO_PRODUCT_IMAGES.dineplanIntegration,
  },
]
