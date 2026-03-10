
"use client"

import { HeroChapter } from '@/components/story/HeroChapter'
import { ProblemChapter } from '@/components/story/ProblemChapter'
import { VisionChapter } from '@/components/story/VisionChapter'
import { AboutChapter } from '@/components/story/AboutChapter'
import { ServicesChapter } from '@/components/story/ServicesChapter'
import { SolutionsChapter } from '@/components/story/SolutionsChapter'
import { ProductsChapter } from '@/components/story/ProductsChapter'
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
    <main className="relative selection:bg-primary selection:text-white bg-background">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Persistent 3D Background */}
      <ThreeBackground />

      {/* Chapters */}
      <div className="relative z-10">
        <HeroChapter />
        <ProblemChapter />
        <VisionChapter />
        <AboutChapter />
        <ServicesChapter />
        <SolutionsChapter />
        <ProductsChapter />
        <ImpactChapter />
        <TestimonialsChapter />
        <CTAChapter />
        <ContactChapter />
      </div>

      {/* Navigation Overlay */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 bg-card/60 backdrop-blur-2xl border border-white/10 rounded-full z-40 hidden md:flex shadow-2xl">
        <a href="#hero" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Intro</a>
        <div className="w-1 h-1 rounded-full bg-border" />
        <a href="#services" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Expertise</a>
        <div className="w-1 h-1 rounded-full bg-border" />
        <a href="#impact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Impact</a>
        <div className="w-1 h-1 rounded-full bg-border" />
        <a href="#testimonials" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Reviews</a>
        <div className="w-1 h-1 rounded-full bg-border" />
        <a href="#contact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Contact</a>
      </nav>
    </main>
  )
}
