import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: ReactNode
  vertical?: boolean
  repeat?: number
  speed?: 'slow' | 'normal' | 'fast'
}

export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 5,
  speed = 'normal',
  ...props
}: MarqueeProps) => {
  const speedVariants = {
    slow: '[--duration:120s]',
    normal: '[--duration:40s]',
    fast: '[--duration:10s]',
  }

  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-1 [--gap:6px] gap-(--gap)',
        speedVariants[speed],
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn('flex shrink-0 justify-around gap-(--gap)', {
            'animate-marquee flex-row': !vertical,
            'animate-marquee-vertical flex-col': vertical,
            'group-hover:[animation-play-state:paused]': pauseOnHover,
            '[animation-direction:reverse]': reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
