
"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowDown, Rocket, LayoutPanelLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroChapter() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Parallax Mouse Movement
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring smooth movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) - 0.5)
      mouseY.set((e.clientY / innerHeight) - 0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const headline = "Engineering Digital Ecosystems for the AI Era"
  const words = headline.split(" ")

  return (
    <section id="hero" className="min-h-screen w-full flex flex-col justify-center items-center relative text-center px-4 sm:px-6 overflow-hidden py-20">
      <motion.div
        ref={containerRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 perspective-1000 w-full"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-headline uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6 block font-bold"
        >
          Kandhugule Consultancy Services
        </motion.span>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-10 leading-[1.0] max-w-6xl mx-auto tracking-tighter px-2 text-foreground">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + (i * 0.1),
                ease: [0.2, 0.65, 0.3, 0.9]
              }}
              className="inline-block mr-[0.2em] sm:mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body mb-10 sm:mb-16 px-4 leading-relaxed"
        >
          KCS Product Lab designs, builds, and operates scalable technology platforms 
          powered by <span className="text-foreground font-semibold">artificial intelligence</span>, 
          <span className="text-foreground font-semibold"> cloud infrastructure</span>, and 
          <span className="text-foreground font-semibold"> cybersecurity</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
        >
          <MagneticButton>
            <Button size="lg" className="h-14 sm:h-18 px-8 sm:px-12 text-base sm:text-lg rounded-full group bg-primary hover:bg-primary/90 shadow-[0_20px_40px_rgba(249,115,22,0.2)] border-none w-full sm:w-auto font-bold">
              Start Your Project
              <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button variant="outline" size="lg" className="h-14 sm:h-18 px-8 sm:px-12 text-base sm:text-lg rounded-full group border-black/10 bg-black/5 hover:bg-black/10 transition-all w-full sm:w-auto font-bold text-foreground">
              Explore Our Platforms
              <LayoutPanelLeft className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3"
      >
        <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 font-bold">Scroll Story</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const div = buttonRef.current
    if (!div) return

    const { clientX, clientY } = e
    const { left, top, width, height } = div.getBoundingClientRect()
    
    // Calculate relative to the static outer center
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const x = clientX - centerX
    const y = clientY - centerY
    
    const factor = 0.3
    setPosition({ x: x * factor, y: y * factor })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block w-full sm:w-auto"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
