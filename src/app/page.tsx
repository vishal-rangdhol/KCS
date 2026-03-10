
"use client"

import { HeroChapter } from '@/components/story/HeroChapter'
import { AboutChapter } from '@/components/story/AboutChapter'
import { ServicesChapter } from '@/components/story/ServicesChapter'
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
    <main className="relative selection:bg-primary selection:text-white">
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
        <AboutChapter />
        <ServicesChapter />
        <ContactChapter />
      </div>

      {/* Navigation Overlay */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-8 px-8 py-3 bg-card/50 backdrop-blur-xl border border-border rounded-full z-40 hidden md:flex">
        <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">Intro</a>
        <a href="#story" className="text-sm font-medium hover:text-primary transition-colors">Our Story</a>
        <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Expertise</a>
        <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
      </nav>
    </main>
  )
}
