"use client"

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Rocket, LayoutPanelLeft, Cpu, Shield, Network, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroChapter() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 60, damping: 30, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const textX = useTransform(smoothX, [-0.5, 0.5], [15, -15])
  const textY = useTransform(smoothY, [-0.5, 0.5], [10, -10])
  
  const subTextX = useTransform(smoothX, [-0.5, 0.5], [8, -8])
  const subTextY = useTransform(smoothY, [-0.5, 0.5], [4, -4])

  const spotlightX = useTransform(smoothX, [-0.5, 0.5], ["30%", "70%"])
  const spotlightY = useTransform(smoothY, [-0.5, 0.5], ["30%", "70%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) - 0.5)
      mouseY.set((e.clientY / innerHeight) - 0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToNext = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headline = "Engineering Digital Ecosystems for the AI Era"
  const words = headline.split(" ")

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col justify-center items-center relative text-center px-4 md:px-12 overflow-hidden pt-32 pb-40 bg-background"
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(249, 115, 22, 0.08) 0%, transparent 60%)`
          )
        }}
      />

      <FloatingNode icon={Cpu} top="15%" left="10%" delay={0} smoothX={smoothX} smoothY={smoothY} speed={-35} />
      <FloatingNode icon={Shield} top="70%" left="15%" delay={0.2} smoothX={smoothX} smoothY={smoothY} speed={25} />
      <FloatingNode icon={Network} top="20%" left="82%" delay={0.4} smoothX={smoothX} smoothY={smoothY} speed={-45} />
      <FloatingNode icon={Zap} top="75%" left="85%" delay={0.6} smoothX={smoothX} smoothY={smoothY} speed={35} />

      <div className="z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div style={{ x: subTextX, y: subTextY }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary font-headline uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] sm:text-[11px] mb-6 md:mb-8 block font-bold"
          >
            Kandhugule Consultancy Services
          </motion.span>
        </motion.div>
        
        <motion.h1 
          style={{ x: textX, y: textY }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-bold mb-8 md:mb-10 leading-[1] md:leading-[0.85] tracking-tighter text-foreground font-headline"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 1, 
                delay: 0.4 + (i * 0.08),
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
            transition={{ delay: 1.6, duration: 1.2 }}
            className="text-muted-foreground text-[12px] sm:text-sm md:text-base max-w-2xl mx-auto font-body mb-10 md:mb-12 px-2 md:px-4 leading-relaxed font-medium italic"
          >
            KCS Product Lab designs, builds, and operates scalable technology platforms 
            powered by <span className="text-foreground">artificial intelligence</span>, 
            <span className="text-foreground"> cloud infrastructure</span>, and 
            <span className="text-foreground"> cybersecurity</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <MagneticButton>
            <Button 
              variant="outline"
              size="lg" 
              asChild
              className="h-12 px-8 text-xs sm:text-sm rounded-full group border border-primary/20 bg-white/5 text-foreground hover:bg-primary/5 hover:border-primary transition-all duration-500 w-full sm:w-auto font-bold shadow-xl backdrop-blur-md"
            >
              <Link href="/contact">
                Start Your Project
                <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button 
              size="lg" 
              onClick={scrollToNext}
              className="h-12 px-8 text-xs sm:text-sm rounded-full group bg-primary border-none hover:bg-primary/90 transition-all duration-500 w-full sm:w-auto font-bold text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
            >
              Explore Our Platforms
              <LayoutPanelLeft className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 z-20"
      >
        <span className="text-[7px] md:text-[8px] uppercase tracking-[0.6em] text-muted-foreground/40 font-bold font-headline">Scroll Story</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}

function FloatingNode({ icon: Icon, top, left, delay, smoothX, smoothY, speed }: any) {
  const x = useTransform(smoothX, [-0.5, 0.5], [speed, -speed])
  const y = useTransform(smoothY, [-0.5, 0.5], [speed, -speed])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.2, scale: 1 }}
      transition={{ delay, duration: 1.5, type: "spring" }}
      style={{ top, left, x, y }}
      className="absolute p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] bg-white/40 text-primary border border-primary/10 hidden lg:flex items-center justify-center shadow-2xl backdrop-blur-sm"
    >
      <Icon size={24} strokeWidth={1} />
    </motion.div>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null)
  
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
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const moveX = clientX - centerX
    const moveY = clientY - centerY
    
    const factor = 0.15
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
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
