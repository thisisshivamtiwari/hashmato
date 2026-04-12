import { HASHMATO_PRODUCT_IMAGES } from '@/data/hashmato'

export type AccordionItemData = {
  id: number
  title: string
  imageUrl: string
}

export const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Online Ordering',
    imageUrl: HASHMATO_PRODUCT_IMAGES.onlineOrdering,
  },
  {
    id: 2,
    title: 'Point of Sale',
    imageUrl: HASHMATO_PRODUCT_IMAGES.pos,
  },
  {
    id: 3,
    title: 'Self-Ordering Kiosk',
    imageUrl: HASHMATO_PRODUCT_IMAGES.kiosk,
  },
  {
    id: 4,
    title: 'Cloud Inventory',
    imageUrl: HASHMATO_PRODUCT_IMAGES.inventory,
  },
  {
    id: 5,
    title: 'Queue Management',
    imageUrl: HASHMATO_PRODUCT_IMAGES.queue,
  },
]
