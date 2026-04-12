import { useEffect, useMemo, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { HASHMATO_SCROLL_GALLERY } from '@/data/hashmato'

export type AnimationPhase = 'scatter' | 'line' | 'circle' | 'bottom-strip'

interface FlipCardProps {
  src: string
  index: number
  target: {
    x: number
    y: number
    rotation: number
    scale: number
    opacity: number
  }
}

const IMG_WIDTH = 60
const IMG_HEIGHT = 85

const FlipCard = ({ src, index, target }: FlipCardProps) => {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 15,
      }}
      style={{
        position: 'absolute',
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-gray-200 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={src}
            alt={`hero-${index}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        <div
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-center">
            <p className="mb-1 text-[8px] font-bold uppercase tracking-widest text-blue-400">
              View
            </p>
            <p className="text-xs font-medium text-white">Hashmato</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const TOTAL_IMAGES = 20
/** Virtual scroll range: morph ~0–600, rotation 600–MAX. Keep end reachable (was 3000 → felt endless). */
const MAX_SCROLL = 1200

const IMAGES = HASHMATO_SCROLL_GALLERY

const lerp = (start: number, end: number, t: number) =>
  start * (1 - t) + end * t

const IntroAnimation = () => {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>('scatter')
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    }

    const observer = new ResizeObserver(handleResize)
    observer.observe(containerRef.current)

    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    })

    return () => observer.disconnect()
  }, [])

  const virtualScroll = useMotionValue(0)
  const scrollRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      const current = scrollRef.current
      const delta = e.deltaY
      const next = current + delta

      // Already at bottom: must scroll the window explicitly — default wheel
      // action often does nothing on nested overflow-hidden stacks.
      if (current >= MAX_SCROLL && delta > 0) {
        e.preventDefault()
        window.scrollBy({ top: delta, left: 0, behavior: 'auto' })
        return
      }

      // Already at top: scroll page up (e.g. back to accordion)
      if (current <= 0 && delta < 0) {
        e.preventDefault()
        window.scrollBy({ top: delta, left: 0, behavior: 'auto' })
        return
      }

      if (next < 0) {
        e.preventDefault()
        scrollRef.current = 0
        virtualScroll.set(0)
        window.scrollBy({ top: next, left: 0, behavior: 'auto' })
        return
      }

      if (next > MAX_SCROLL) {
        e.preventDefault()
        scrollRef.current = MAX_SCROLL
        virtualScroll.set(MAX_SCROLL)
        window.scrollBy({
          top: next - MAX_SCROLL,
          left: 0,
          behavior: 'auto',
        })
        return
      }

      e.preventDefault()
      scrollRef.current = next
      virtualScroll.set(next)
    }

    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY
      const deltaY = touchStartY - touchY
      touchStartY = touchY
      const current = scrollRef.current
      const next = current + deltaY

      if (current >= MAX_SCROLL && deltaY > 0) {
        e.preventDefault()
        window.scrollBy({ top: deltaY, left: 0, behavior: 'auto' })
        return
      }

      if (current <= 0 && deltaY < 0) {
        e.preventDefault()
        window.scrollBy({ top: deltaY, left: 0, behavior: 'auto' })
        return
      }

      if (next < 0) {
        e.preventDefault()
        scrollRef.current = 0
        virtualScroll.set(0)
        window.scrollBy({ top: next, left: 0, behavior: 'auto' })
        return
      }

      if (next > MAX_SCROLL) {
        e.preventDefault()
        scrollRef.current = MAX_SCROLL
        virtualScroll.set(MAX_SCROLL)
        window.scrollBy({
          top: next - MAX_SCROLL,
          left: 0,
          behavior: 'auto',
        })
        return
      }

      e.preventDefault()
      scrollRef.current = next
      virtualScroll.set(next)
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, {
      passive: false,
    })
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [virtualScroll])

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1])
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 })

  const scrollRotate = useTransform(virtualScroll, [600, MAX_SCROLL], [0, 360])
  const smoothScrollRotate = useSpring(scrollRotate, {
    stiffness: 40,
    damping: 20,
  })

  const mouseX = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const relativeX = e.clientX - rect.left
      const normalizedX = (relativeX / rect.width) * 2 - 1
      mouseX.set(normalizedX * 100)
    }
    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX])

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase('line'), 500)
    const timer2 = setTimeout(() => setIntroPhase('circle'), 2500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const scatterPositions = useMemo(() => {
    const seeded = (seed: number) => {
      const x = Math.sin(seed * 12.9898) * 43758.5453
      return x - Math.floor(x)
    }
    return IMAGES.map((_, i) => ({
      x: (seeded(i * 3) - 0.5) * 1500,
      y: (seeded(i * 3 + 1) - 0.5) * 1000,
      rotation: (seeded(i * 3 + 2) - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }))
  }, [])

  const [morphValue, setMorphValue] = useState(0)
  const [rotateValue, setRotateValue] = useState(0)
  const [parallaxValue, setParallaxValue] = useState(0)

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on('change', setMorphValue)
    const unsubscribeRotate = smoothScrollRotate.on('change', setRotateValue)
    const unsubscribeParallax = smoothMouseX.on('change', setParallaxValue)
    return () => {
      unsubscribeMorph()
      unsubscribeRotate()
      unsubscribeParallax()
    }
  }, [smoothMorph, smoothScrollRotate, smoothMouseX])

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1])
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0])

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-[#FAFAFA] dark:bg-zinc-950"
    >
      <div className="flex h-full w-full flex-col items-center justify-center perspective-[1000px]">
        <div className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={
              introPhase === 'circle' && morphValue < 0.5
                ? {
                    opacity: 1 - morphValue * 2,
                    y: 0,
                    filter: 'blur(0px)',
                  }
                : { opacity: 0, filter: 'blur(10px)' }
            }
            transition={{ duration: 1 }}
            className="text-2xl font-medium tracking-tight text-gray-800 md:text-4xl dark:text-zinc-200"
          >
            Hospitality & retail, unified.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              introPhase === 'circle' && morphValue < 0.5
                ? { opacity: 0.5 - morphValue }
                : { opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500 dark:text-zinc-400"
          >
            SCROLL TO EXPLORE HASHMATO
          </motion.p>
        </div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="pointer-events-none absolute top-[10%] z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl dark:text-zinc-50">
            Explore the Hashmato suite
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-gray-600 md:text-base dark:text-zinc-400">
            POS, online ordering, kiosks, waiter tablets, Android POS, cloud
            inventory, and queue tools — built for busy floors and growing
            brands.
            <br className="hidden md:block" /> Scroll to tour product visuals
            from real deployments.
          </p>
        </motion.div>

        <div className="relative flex h-full w-full items-center justify-center">
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
            let target = {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
            }

            if (introPhase === 'scatter') {
              target = scatterPositions[i]
            } else if (introPhase === 'line') {
              const lineSpacing = 70
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing
              const lineX = i * lineSpacing - lineTotalWidth / 2
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 }
            } else {
              const isMobile = containerSize.width < 768
              const minDimension = Math.min(
                containerSize.width,
                containerSize.height,
              )

              const circleRadius = Math.min(minDimension * 0.35, 350)
              const circleAngle = (i / TOTAL_IMAGES) * 360
              const circleRad = (circleAngle * Math.PI) / 180
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              }

              const baseRadius = Math.min(
                containerSize.width,
                containerSize.height * 1.5,
              )
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1)
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25)
              const arcCenterY = arcApexY + arcRadius
              const spreadAngle = isMobile ? 100 : 130
              const startAngle = -90 - spreadAngle / 2
              const step = spreadAngle / (TOTAL_IMAGES - 1)

              const scrollProgress = Math.min(
                Math.max(rotateValue / 360, 0),
                1,
              )
              const maxRotation = spreadAngle * 0.8
              const boundedRotation = -scrollProgress * maxRotation
              const currentArcAngle = startAngle + i * step + boundedRotation
              const arcRad = (currentArcAngle * Math.PI) / 180

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              }

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              }
            }

            return <FlipCard key={i} src={src} index={i} target={target} />
          })}
        </div>
      </div>
    </div>
  )
}

export default IntroAnimation
