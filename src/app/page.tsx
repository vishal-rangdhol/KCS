
"use client"

import { Navbar } from '@/components/layout/Navbar'
import { HeroChapter } from '@/components/story/HeroChapter'
import { ProblemChapter } from '@/components/story/ProblemChapter'
import { VisionChapter } from '@/components/story/VisionChapter'
import { AboutChapter } from '@/components/story/AboutChapter'
import { ServicesChapter } from '@/components/story/ServicesChapter'
import { SolutionsChapter } from '@/components/story/SolutionsChapter'
import { ProductsChapter } from '@/components/story/ProductsChapter'
import { CareersChapter } from '@/components/story/CareersChapter'
import { ImpactChapter } from '@/components/story/ImpactChapter'
import { TestimonialsChapter } from '@/components/story/TestimonialsChapter'
import { CTAChapter } from '@/components/story/CTAChapter'
import { ContactChapter } from '@/components/story/ContactChapter'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="relative selection:bg-primary selection:text-white bg-background overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[110] shadow-[0_0_15px_rgba(62,128,219,0.8)]"
        style={{ scaleX }}
      />

      {/* Persistent 3D Background */}
      <ThreeBackground />

      {/* Background Ambient Glows - Enhanced for a more colorful feel */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-primary/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-secondary/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-background/40 radial-gradient(circle, transparent 0%, var(--background) 100%)" />
      </div>

      {/* Chapters Wrapper with Page Transition */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <HeroChapter />
        <ProblemChapter />
        <VisionChapter />
        <AboutChapter />
        <ServicesChapter />
        <SolutionsChapter />
        <ProductsChapter />
        <ImpactChapter />
        <CareersChapter />
        <TestimonialsChapter />
        <CTAChapter />
        <ContactChapter />
      </motion.div>

      {/* Background Vignette for cinematic feel */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />
    </main>
  )
}
