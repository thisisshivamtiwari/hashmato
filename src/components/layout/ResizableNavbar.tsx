import {
  useEffect,
  useState,
  useSyncExternalStore,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { HASHMATO_LOGO, HASHMATO_SITE } from '@/data/hashmato'

type NavItem = { label: string; href: string; external?: boolean }

const NAV_ITEMS: NavItem[] = [
  { label: 'Platform', href: '#platform' },
  { label: 'Suite', href: '#suite' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Customers', href: '#customers' },
  { label: 'Growth', href: '#growth' },
  { label: 'Aero Hero', href: '#aero-hero' },
  { label: 'Shader Cards', href: '#shader-cards' },
  { label: 'Highlights', href: '#highlights' },
]

const subscribeCompact = (onStoreChange: () => void) => {
  window.addEventListener('scroll', onStoreChange, { passive: true })
  return () => window.removeEventListener('scroll', onStoreChange)
}

const getCompactSnapshot = () => window.scrollY > 24

const getCompactServerSnapshot = () => false

export const ResizableNavbar = () => {
  const compact = useSyncExternalStore(
    subscribeCompact,
    getCompactSnapshot,
    getCompactServerSnapshot,
  )
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleToggleMobile = () => {
    setMobileOpen((o) => !o)
  }

  const handleKeyDownToggle = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleMobile()
    }
  }

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <motion.header
      layout
      initial={false}
      animate={{
        boxShadow: compact
          ? '0 8px 30px -12px rgba(0,0,0,0.12)'
          : '0 1px 0 0 rgba(0,0,0,0.06)',
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
      className={cn(
        'fixed left-0 right-0 top-0 z-100 border-b border-border/60 bg-background/80 backdrop-blur-xl',
        'dark:border-border/40 dark:bg-background/75',
      )}
    >
      <motion.div
        layout
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        animate={{
          paddingTop: compact ? 8 : 14,
          paddingBottom: compact ? 8 : 14,
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      >
        <a
          href="#platform"
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Hashmato — top of page"
          onClick={handleNavClick}
        >
          <motion.img
            layout
            src={HASHMATO_LOGO}
            alt=""
            width={180}
            height={48}
            className="w-auto object-contain object-left dark:brightness-0 dark:invert"
            animate={{ height: compact ? 28 : 36 }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          />
          <span className="sr-only">Hashmato</span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors',
                'hover:text-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a
              href={HASHMATO_SITE}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground"
            >
              hashmato.com
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500"
            asChild
          >
            <a href={HASHMATO_SITE} target="_blank" rel="noreferrer">
              Book a demo
            </a>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex items-center justify-center rounded-md p-2 md:hidden',
            'text-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={handleToggleMobile}
          onKeyDown={handleKeyDownToggle}
        >
          {mobileOpen ? (
            <X className="size-6" aria-hidden />
          ) : (
            <Menu className="size-6" aria-hidden />
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-border/60 md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 py-4 sm:px-6"
              aria-label="Mobile primary"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.22 }}
                  className={cn(
                    'rounded-lg px-3 py-3 text-base font-medium text-foreground',
                    'hover:bg-muted/80',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  )}
                  onClick={handleNavClick}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-2 flex flex-col gap-2 border-t border-border pt-4"
              >
                <Button variant="outline" asChild>
                  <a
                    href={HASHMATO_SITE}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleNavClick}
                  >
                    Visit hashmato.com
                  </a>
                </Button>
                <Button
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                  asChild
                >
                  <a
                    href={HASHMATO_SITE}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleNavClick}
                  >
                    Book a demo
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
