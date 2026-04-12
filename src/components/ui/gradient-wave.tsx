import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

/**
 * Animated gradient background (canvas 2D) matching the public API of the
 * WebGL `GradientWave` from the design reference — same props and placement.
 */
export interface GradientWaveProps {
  colors?: string[]
  isPlaying?: boolean
  className?: string
  shadowPower?: number
  darkenTop?: boolean
  noiseSpeed?: number
  noiseFrequency?: [number, number]
  deform?: {
    incline?: number
    offsetTop?: number
    offsetBottom?: number
    noiseFreq?: [number, number]
    noiseAmp?: number
    noiseSpeed?: number
    noiseFlow?: number
    noiseSeed?: number
  }
}

export const GradientWave = ({
  colors = [
    '#38bdf8',
    '#ffffff',
    '#38bdf8',
    '#ffffff',
    '#38bdf8',
    '#ffffff',
  ],
  isPlaying = true,
  className = '',
  shadowPower = 8,
  darkenTop = false,
  noiseSpeed = 0.00001,
}: GradientWaveProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const timeRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = (t: number) => {
      const { width, height } = container.getBoundingClientRect()
      if (width < 1 || height < 1) return

      const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      ctx.clearRect(0, 0, width, height)

      const phase = isPlaying ? t * (noiseSpeed * 80000) : 0

      for (let i = 0; i < colors.length; i++) {
        const y0 =
          height * 0.45 +
          Math.sin(phase + i * 0.9) * height * 0.12 +
          Math.cos(phase * 0.6 + i) * height * 0.06
        const x1 =
          width * 0.55 + Math.sin(phase * 0.4 + i * 0.3) * width * 0.2
        const g = ctx.createLinearGradient(0, y0, x1, height * 0.85)
        g.addColorStop(0, colors[i % colors.length])
        g.addColorStop(1, colors[(i + 1) % colors.length])
        ctx.globalAlpha = 0.35 + (i % 3) * 0.08
        ctx.fillStyle = g
        ctx.fillRect(0, 0, width, height)
      }

      ctx.globalAlpha = 1

      if (darkenTop) {
        const strength = Math.min(shadowPower / 10, 1)
        const overlay = ctx.createLinearGradient(0, 0, 0, height * 0.55)
        overlay.addColorStop(0, `rgba(0,0,0,${0.25 * strength})`)
        overlay.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = overlay
        ctx.fillRect(0, 0, width, height)
      }
    }

    const loop = (t: number) => {
      timeRef.current = t
      draw(t)
      if (isPlaying) {
        rafRef.current = requestAnimationFrame(loop)
      }
    }

    if (isPlaying) {
      rafRef.current = requestAnimationFrame(loop)
    } else {
      draw(0)
    }

    const ro = new ResizeObserver(() => draw(timeRef.current))
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [colors, isPlaying, shadowPower, darkenTop, noiseSpeed])

  return (
    <div
      ref={containerRef}
      className={cn(
        'absolute inset-0 z-0 h-full w-full overflow-hidden',
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        aria-hidden
      />
    </div>
  )
}
