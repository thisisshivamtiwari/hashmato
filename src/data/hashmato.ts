import screen055507 from '@/assets/Data/Screenshot 2026-04-15 at 07.55.07.png'
import screen055538 from '@/assets/Data/Screenshot 2026-04-15 at 07.55.38.png'
import screen055546 from '@/assets/Data/Screenshot 2026-04-15 at 07.55.46.png'
import screen055557 from '@/assets/Data/Screenshot 2026-04-15 at 07.55.57.png'
import screen05610 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.10.png'
import screen05615 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.15.png'
import screen05620 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.20.png'
import screen05626 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.26.png'
import screen05632 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.32.png'
import screen05637 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.37.png'
import screen05642 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.42.png'
import screen05649 from '@/assets/Data/Screenshot 2026-04-15 at 07.56.49.png'

export const HASHMATO_SITE = 'https://hashmato.com'
export const HASHMATO_LOGO =
  'https://hashmato.com/wp-content/uploads/2024/08/Hashmoto-Logo-1.png'

/** Images provided by user for this landing page */
export const HASHMATO_SCREENSHOTS = {
  dashboardBeverage: screen055507,
  dashboardOrders: screen055538,
  dashboardTables: screen055546,
  dashboardReports: screen055557,
  problem: screen05610,
  introRbs: screen05615,
  platformArchitecture: screen05620,
  transformation: screen05626,
  ownerControl: screen05632,
  multiOutlet: screen05637,
  revenueGrowth: screen05642,
  costControl: screen05649,
} as const

export const HASHMATO_PRODUCT_IMAGES = {
  onlineOrdering: HASHMATO_SCREENSHOTS.dashboardOrders,
  pos: HASHMATO_SCREENSHOTS.dashboardBeverage,
  kiosk: HASHMATO_SCREENSHOTS.dashboardTables,
  inventory: HASHMATO_SCREENSHOTS.costControl,
  queue: HASHMATO_SCREENSHOTS.dashboardReports,
  androidPos: HASHMATO_SCREENSHOTS.introRbs,
  restaurantIndustry: HASHMATO_SCREENSHOTS.problem,
  retailIndustry: HASHMATO_SCREENSHOTS.transformation,
  hospitalIndustry: HASHMATO_SCREENSHOTS.ownerControl,
  schoolsIndustry: HASHMATO_SCREENSHOTS.revenueGrowth,
  enterpriseIndustry: HASHMATO_SCREENSHOTS.multiOutlet,
  dineplanIntegration: HASHMATO_SCREENSHOTS.platformArchitecture,
  heroGraphic: HASHMATO_SCREENSHOTS.introRbs,
} as const

export const HASHMATO_CUSTOMER_LOGOS = [
  { name: 'Dashboard', src: HASHMATO_SCREENSHOTS.dashboardBeverage },
  { name: 'Orders', src: HASHMATO_SCREENSHOTS.dashboardOrders },
  { name: 'Tables', src: HASHMATO_SCREENSHOTS.dashboardTables },
  { name: 'Reports', src: HASHMATO_SCREENSHOTS.dashboardReports },
] as const

export const HASHMATO_SCROLL_GALLERY: string[] = [
  HASHMATO_SCREENSHOTS.dashboardBeverage,
  HASHMATO_SCREENSHOTS.dashboardOrders,
  HASHMATO_SCREENSHOTS.dashboardTables,
  HASHMATO_SCREENSHOTS.dashboardReports,
  HASHMATO_SCREENSHOTS.problem,
  HASHMATO_SCREENSHOTS.introRbs,
  HASHMATO_SCREENSHOTS.platformArchitecture,
  HASHMATO_SCREENSHOTS.transformation,
  HASHMATO_SCREENSHOTS.ownerControl,
  HASHMATO_SCREENSHOTS.multiOutlet,
  HASHMATO_SCREENSHOTS.revenueGrowth,
  HASHMATO_SCREENSHOTS.costControl,
  HASHMATO_SCREENSHOTS.dashboardOrders,
  HASHMATO_SCREENSHOTS.dashboardTables,
  HASHMATO_SCREENSHOTS.ownerControl,
  HASHMATO_SCREENSHOTS.multiOutlet,
  HASHMATO_SCREENSHOTS.revenueGrowth,
  HASHMATO_SCREENSHOTS.costControl,
  HASHMATO_SCREENSHOTS.platformArchitecture,
  HASHMATO_SCREENSHOTS.transformation,
]
