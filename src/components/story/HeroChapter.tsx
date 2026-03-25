"use client"

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Rocket, LayoutPanelLeft, Cpu, Shield, Network, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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

  const problemSectionRef = useRef<HTMLDivElement>(null)
  const problemContainerRef = useRef<HTMLDivElement>(null)
  const text1Ref = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const text3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) - 0.5)
      mouseY.set((e.clientY / innerHeight) - 0.5)
    }
    window.addEventListener('mousemove', handleMouseMove)

    const section = problemSectionRef.current
    const container = problemContainerRef.current
    if (section && container) {
      const isMobile = window.innerWidth < 768
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: isMobile ? "+=150%" : "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      })

      tl.fromTo(text1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        
        .fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        
        .fromTo(text3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [mouseX, mouseY])

  const scrollToNext = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headline = "Engineering Digital Ecosystems for the AI Era"
  const words = headline.split(" ")

  return (
    <>
      <section 
        id="hero" 
        className="min-h-screen w-full flex flex-col justify-center items-center relative text-center px-4 md:px-12 overflow-hidden pt-28 pb-20 md:pt-32 md:pb-40 bg-background"
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

        <div className="z-10 w-full max-w-7xl mx-auto px-2 md:px-4">
          <motion.div style={{ x: subTextX, y: subTextY }}>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary font-headline uppercase tracking-[0.2em] md:tracking-[0.6em] text-[10px] sm:text-[11px] mb-4 md:mb-8 block font-bold"
            >
              Kandhugule Consultancy Services
            </motion.span>
          </motion.div>
          
          <motion.h1 
            style={{ x: textX, y: textY }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-bold mb-6 md:mb-10 leading-[1.1] md:leading-[0.85] tracking-tighter text-foreground font-headline break-words"
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
                className="inline-block mr-[0.2em]"
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
              className="text-muted-foreground text-[12px] sm:text-sm md:text-base max-w-2xl mx-auto font-body mb-10 md:mb-12 px-4 leading-relaxed font-medium italic"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <MagneticButton>
              <Button 
                variant="outline"
                size="lg" 
                asChild
                className="h-11 md:h-12 px-8 text-xs sm:text-sm rounded-full group border border-primary/20 bg-white/5 text-foreground hover:bg-primary/5 hover:border-primary transition-all duration-500 w-full sm:w-auto font-bold shadow-xl backdrop-blur-md"
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
                className="h-11 md:h-12 px-8 text-xs sm:text-sm rounded-full group bg-primary border-none hover:bg-primary/90 transition-all duration-500 w-full sm:w-auto font-bold text-white shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
              >
                Explore Services
                <LayoutPanelLeft className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1.5 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 z-20"
        >
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-muted-foreground/40 font-bold font-headline">Scroll Story</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary/60 to-transparent"
          />
        </motion.div>
      </section>

      <section ref={problemSectionRef} id="problem" className="relative h-screen w-full bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5 pointer-events-none" />
        
        <div ref={problemContainerRef} className="relative h-full w-full flex items-center justify-center px-6 md:px-12">
          <div className="max-w-7xl w-full text-center space-y-0 relative h-full flex items-center justify-center">
            
            <div ref={text1Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none px-4">
              <h2 className="text-2xl sm:text-4xl md:text-7xl lg:text-[7rem] font-bold leading-tight tracking-tighter text-foreground font-headline">
                Technology is evolving <br className="hidden md:block" />
                <span className="text-primary italic">faster than businesses</span> <br className="hidden md:block" />
                can adapt.
              </h2>
            </div>

            <div ref={text2Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none px-4">
              <h2 className="text-2xl sm:text-4xl md:text-7xl lg:text-[7rem] font-bold leading-tight tracking-tighter text-foreground font-headline">
                Data is everywhere, <br className="hidden md:block" />
                but <span className="text-primary">insights are rare.</span>
              </h2>
            </div>

            <div ref={text3Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none px-4">
              <h2 className="text-2xl sm:text-4xl md:text-7xl lg:text-[7rem] font-bold leading-tight tracking-tighter text-foreground font-headline">
                Security threats <br className="hidden md:block" />
                <span className="text-destructive">grow every second.</span>
              </h2>
            </div>

          </div>
        </div>
      </section>
    </>
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
