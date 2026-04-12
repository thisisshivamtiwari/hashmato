import { motion, type Variants } from 'framer-motion'

import { cn } from '@/lib/utils'
import { HASHMATO_LOGO, HASHMATO_SITE } from '@/data/hashmato'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 28 },
  },
}

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Online ordering', href: `${HASHMATO_SITE}/online-ordering-system/` },
      { label: 'POS & billing', href: HASHMATO_SITE },
      { label: 'Self-order kiosk', href: HASHMATO_SITE },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'hashmato.com', href: HASHMATO_SITE },
      { label: 'Schedule a demo', href: HASHMATO_SITE },
      { label: 'Privacy', href: `${HASHMATO_SITE}/privacy-policy/` },
    ],
  },
  {
    title: 'On this page',
    links: [
      { label: 'Platform', href: '#platform' },
      { label: 'Suite explorer', href: '#suite' },
      { label: 'Highlights', href: '#highlights' },
    ],
  },
] as const

export const AnimatedFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'relative mt-20 overflow-hidden border-t border-border',
        'bg-linear-to-b from-muted/40 via-background to-background',
        'dark:from-muted/20',
      )}
      aria-label="Site footer"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <a
              href="#platform"
              className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Hashmato — home"
            >
              <img
                src={HASHMATO_LOGO}
                alt="Hashmato"
                width={200}
                height={52}
                className="h-10 w-auto object-contain object-left dark:brightness-0 dark:invert"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Restaurant & retail POS, online ordering, kiosks, and cloud
              inventory — trusted by 2,000+ outlets in multiple countries.
            </p>
            <motion.a
              href={HASHMATO_SITE}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'mt-6 inline-flex items-center text-sm font-semibold text-emerald-600',
                'transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm',
              )}
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              Visit hashmato.com →
            </motion.a>
          </motion.div>

          {FOOTER_LINKS.map((column) => (
            <motion.div key={column.title} variants={itemVariants}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                      className={cn(
                        'text-sm text-muted-foreground transition-colors hover:text-foreground',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm',
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row"
        >
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {currentYear} Hashmato. Demo showcase — assets and trademarks
            belong to their respective owners.
          </p>
          <p className="text-xs text-muted-foreground">
            Singapore · India · UAE —{' '}
            <a
              href={`${HASHMATO_SITE}/terms-of-service/`}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Terms
            </a>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="h-1 w-full bg-linear-to-r from-emerald-600/0 via-emerald-500/40 to-teal-600/0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </footer>
  )
}
