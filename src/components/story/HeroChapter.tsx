
"use client"

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Rocket, LayoutPanelLeft, Cpu, Shield, Network, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroChapter() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse coordinates for parallax/spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring configuration for silky smooth movement
  const springConfig = { stiffness: 60, damping: 30, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  // Text Parallax Layers - Primary headline moves more than the subheadline
  const textX = useTransform(smoothX, [-0.5, 0.5], [20, -20])
  const textY = useTransform(smoothY, [-0.5, 0.5], [15, -15])
  
  const subTextX = useTransform(smoothX, [-0.5, 0.5], [10, -10])
  const subTextY = useTransform(smoothY, [-0.5, 0.5], [5, -5])

  // Spotlight Position - Follows mouse smoothly
  const spotlightX = useTransform(smoothX, [-0.5, 0.5], ["20%", "80%"])
  const spotlightY = useTransform(smoothY, [-0.5, 0.5], ["20%", "80%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Normalize to -0.5 to 0.5 range
      mouseX.set((e.clientX / innerWidth) - 0.5)
      mouseY.set((e.clientY / innerHeight) - 0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const headline = "Engineering Digital Ecosystems for the AI Era"
  const words = headline.split(" ")

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col justify-center items-center relative text-center px-4 sm:px-6 overflow-hidden py-20 bg-background"
    >
      {/* Dynamic Interactive Spotlight Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(249, 115, 22, 0.12) 0%, transparent 50%)`
          )
        }}
      />

      {/* Floating Interactive Protocol Nodes */}
      <FloatingNode icon={Cpu} top="20%" left="12%" delay={0} smoothX={smoothX} smoothY={smoothY} speed={-45} />
      <FloatingNode icon={Shield} top="75%" left="18%" delay={0.2} smoothX={smoothX} smoothY={smoothY} speed={35} />
      <FloatingNode icon={Network} top="25%" left="85%" delay={0.4} smoothX={smoothX} smoothY={smoothY} speed={-55} />
      <FloatingNode icon={Zap} top="68%" left="78%" delay={0.6} smoothX={smoothX} smoothY={smoothY} speed={45} />

      <div className="z-10 w-full max-w-6xl mx-auto">
        <motion.div style={{ x: subTextX, y: subTextY }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-6 block font-bold"
          >
            Kandhugule Consultancy Services
          </motion.span>
        </motion.div>
        
        <motion.h1 
          style={{ x: textX, y: textY }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-10 leading-[0.9] tracking-tighter text-foreground"
        >
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
        </motion.h1>

        <motion.div style={{ x: subTextX, y: subTextY }}>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-body mb-12 sm:mb-16 px-4 leading-relaxed"
          >
            KCS Product Lab designs, builds, and operates scalable technology platforms 
            powered by <span className="text-foreground font-semibold">artificial intelligence</span>, 
            <span className="text-foreground font-semibold"> cloud infrastructure</span>, and 
            <span className="text-foreground font-semibold"> cybersecurity</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
        >
          <MagneticButton>
            <Button size="lg" className="h-14 sm:h-20 px-8 sm:px-14 text-base sm:text-lg rounded-full group bg-primary hover:bg-primary/90 shadow-[0_20px_40px_rgba(249,115,22,0.2)] border-none w-full sm:w-auto font-bold text-white">
              Start Your Project
              <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button variant="outline" size="lg" className="h-14 sm:h-20 px-8 sm:px-14 text-base sm:text-lg rounded-full group border-black/10 bg-black/5 hover:bg-black/10 transition-all w-full sm:w-auto font-bold text-foreground">
              Explore Our Platforms
              <LayoutPanelLeft className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

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

function FloatingNode({ icon: Icon, top, left, delay, smoothX, smoothY, speed }: any) {
  // Nodes move in response to mouse but at unique offsets and speeds
  const x = useTransform(smoothX, [-0.5, 0.5], [speed, -speed])
  const y = useTransform(smoothY, [-0.5, 0.5], [speed, -speed])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ delay, duration: 1, type: "spring" }}
      style={{ top, left, x, y }}
      className="absolute p-5 rounded-3xl bg-primary/5 text-primary border border-primary/10 hidden lg:flex items-center justify-center shadow-sm"
    >
      <Icon size={28} strokeWidth={1.5} />
    </motion.div>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null)
  
  // Use MotionValues and Springs for ultra-stable, smooth displacement
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const div = buttonRef.current
    if (!div) return

    const { clientX, clientY } = e
    const { left, top, width, height } = div.getBoundingClientRect()
    
    // Calculate relative to the static outer container's center
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const moveX = clientX - centerX
    const moveY = clientY - centerY
    
    const factor = 0.35
    x.set(moveX * factor)
    y.set(moveY * factor)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block w-full sm:w-auto relative"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}
