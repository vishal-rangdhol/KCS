"use client"

import { Navbar } from '@/components/layout/Navbar'
import { HeroChapter } from '@/components/story/HeroChapter'
import { ProblemChapter } from '@/components/story/ProblemChapter'
import { VisionChapter } from '@/components/story/VisionChapter'
import { AboutChapter } from '@/components/story/AboutChapter'
import { ServicesChapter } from '@/components/story/ServicesChapter'
import { ProductsChapter } from '@/components/story/ProductsChapter'
import { CareersChapter } from '@/components/story/CareersChapter'
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
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[110] shadow-[0_0_15px_rgba(249,115,22,0.4)]"
        style={{ scaleX }}
      />

      {/* Persistent 3D Background */}
      <ThreeBackground />

      {/* Background Ambient Layers - Light Version */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Soft Vibrant Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-primary/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-secondary/5 blur-[160px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[50%] h-[50%] bg-orange-600/5 blur-[140px] rounded-full" />
      </div>

      {/* Chapters Wrapper */}
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
        <ProductsChapter />
        <CareersChapter />
        <CTAChapter />
        <ContactChapter />
      </motion.div>

      {/* Final Cinematic Vignette - Light Mode */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.4)_100%)]" />
    </main>
  )
}
