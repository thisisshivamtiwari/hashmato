import { useState } from 'react'

import { accordionItems, type AccordionItemData } from '@/data/interactive-accordion-items'

type AccordionItemProps = {
  item: AccordionItemData
  isActive: boolean
  onMouseEnter: () => void
}

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] cursor-pointer overflow-hidden rounded-2xl
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          const el = e.currentTarget
          el.onerror = null
          el.src =
            'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <span
        className={`
          absolute text-lg font-semibold whitespace-nowrap text-white
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 text-left'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  )
}

export const LandingAccordionItem = () => {
  const [activeIndex, setActiveIndex] = useState(4)

  const handleItemHover = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="bg-white font-sans dark:bg-zinc-950">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-6xl dark:text-zinc-50">
              Your screenshots, unified into one{' '}
              <span className="text-emerald-700 dark:text-emerald-400">
                Hashmato
              </span>{' '}
              platform
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 md:mx-0 dark:text-zinc-400">
              POS screens, order queues, table management, and issue-wise reports
              are now connected in one landing story that mirrors your actual
              product workflows.
            </p>
            <div className="mt-8">
              <a
                href="https://hashmato.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg bg-gray-900 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-gray-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Book a demo
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
