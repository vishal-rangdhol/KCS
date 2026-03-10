
"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowDown, Rocket } from 'lucide-react'
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

  const headline = "Empowering Businesses Through Intelligent Technology."
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
        
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-6 sm:mb-8 leading-[1.1] max-w-5xl mx-auto tracking-tight px-2">
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
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-body mb-8 sm:mb-12 px-4"
        >
          KCS is a premier technology consultancy architecting the future through 
          <span className="text-foreground font-medium"> AI integration</span>, 
          <span className="text-foreground font-medium"> cloud optimization</span>, 
          <span className="text-foreground font-medium"> advanced cybersecurity</span>, and 
          <span className="text-foreground font-medium"> data-driven solutions</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2 }}
          className="px-4"
        >
          <MagneticButton>
            <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-full group bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(62,128,219,0.3)] border-none w-full sm:w-auto">
              Discover Our Story
              <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
        <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">Scroll Story</span>
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
    // Disable magnetic effect on mobile
    if (window.innerWidth < 768) return
    if (!buttonRef.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    
    const factor = 0.35
    setPosition({ x: x * factor, y: y * factor })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block w-full sm:w-auto"
    >
      {children}
    </motion.div>
  )
}
