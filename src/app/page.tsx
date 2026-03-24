"use client"

import dynamic from 'next/dynamic'
import { Navbar } from '@/components/layout/Navbar'
import { HeroChapter } from '@/components/story/HeroChapter'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'

const ServicesChapter = dynamic(() => import('@/components/story/ServicesChapter').then(mod => mod.ServicesChapter), { ssr: true })
const ProductsChapter = dynamic(() => import('@/components/story/ProductsChapter').then(mod => mod.ProductsChapter), { ssr: true })
const AboutChapter = dynamic(() => import('@/components/story/AboutChapter').then(mod => mod.AboutChapter), { ssr: true })
const FoundersChapter = dynamic(() => import('@/components/story/FoundersChapter').then(mod => mod.FoundersChapter), { ssr: true })
const CultureChapter = dynamic(() => import('@/components/story/CultureChapter').then(mod => mod.CultureChapter), { ssr: true })
const CareersChapter = dynamic(() => import('@/components/story/CareersChapter').then(mod => mod.CareersChapter), { ssr: true })
const CTAChapter = dynamic(() => import('@/components/story/CTAChapter').then(mod => mod.CTAChapter), { ssr: true })

export function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main className="relative selection:bg-primary selection:text-white bg-background overflow-hidden">
      <Navbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[110] shadow-[0_0_15px_rgba(251,146,60,0.4)]"
        style={{ scaleX }}
      />

      <ThreeBackground />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-primary/5 blur-[160px] rounded-full opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-secondary/10 blur-[160px] rounded-full opacity-40" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <HeroChapter />
        <ServicesChapter />
        <ProductsChapter />
        <AboutChapter />
        <FoundersChapter />
        <CultureChapter />
        <CareersChapter />
        <CTAChapter />
        <Footer />
      </motion.div>

      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(11,17,32,0.05)_100%)]" />
    </main>
  )
}

export default Home;
