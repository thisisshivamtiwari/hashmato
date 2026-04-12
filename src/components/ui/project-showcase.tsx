import type { MouseEvent } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { hashmatoShowcaseItems } from '@/data/hashmato-showcase'

const projects = hashmatoShowcaseItems

export const ProjectShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [anchor, setAnchor] = useState({ left: 0, top: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  const updateAnchor = () => {
    if (containerRef.current) {
      const r = containerRef.current.getBoundingClientRect()
      setAnchor({ left: r.left, top: r.top })
    }
  }

  useLayoutEffect(() => {
    updateAnchor()
    window.addEventListener('scroll', updateAnchor, true)
    window.addEventListener('resize', updateAnchor)
    return () => {
      window.removeEventListener('scroll', updateAnchor, true)
      window.removeEventListener('resize', updateAnchor)
    }
  }, [])

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mx-auto w-full max-w-2xl px-6 py-16"
    >
      <h2 className="mb-8 text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Platform highlights
      </h2>

      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: anchor.left,
          top: anchor.top,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0) scale(${isVisible ? 1 : 0.8})`,
          opacity: isVisible ? 1 : 0,
          transition:
            'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="relative h-[180px] w-[280px] overflow-hidden rounded-xl bg-secondary">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform:
                  hoveredIndex === index ? 'scale(1)' : 'scale(1.1)',
                filter:
                  hoveredIndex === index ? 'none' : 'blur(10px)',
              }}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative border-t border-border py-5 transition-all duration-300 ease-out">
              <div
                className={`
                  absolute inset-0 -mx-4 rounded-lg bg-secondary/50 px-4
                  transition-all duration-300 ease-out
                  ${
                    hoveredIndex === index
                      ? 'scale-100 opacity-100'
                      : 'scale-95 opacity-0'
                  }
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-lg font-medium tracking-tight text-foreground">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`
                            absolute -bottom-0.5 left-0 h-px bg-foreground
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? 'w-full' : 'w-0'}
                          `}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      className={`
                        size-4 text-muted-foreground
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? 'translate-x-0 translate-y-0 opacity-100'
                            : '-translate-x-2 translate-y-2 opacity-0'
                        }
                      `}
                    />
                  </div>

                  <p
                    className={`
                      mt-1 text-sm leading-relaxed transition-all duration-300 ease-out
                      ${
                        hoveredIndex === index
                          ? 'text-foreground/70'
                          : 'text-muted-foreground'
                      }
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  className={`
                    font-mono text-xs tabular-nums text-muted-foreground
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? 'text-foreground/60' : ''}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}

        <div className="border-t border-border" />
      </div>
    </section>
  )
}
