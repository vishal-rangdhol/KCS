"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function CareersChapter() {
  return (
    <Chapter id="careers" className="bg-background py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Section Header */}
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-10 font-headline">
            <Sparkles size={14} className="animate-pulse" /> Join Our Team
          </span>
          
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-12 font-headline">
            Architect the <br />
            <span className="text-primary italic">Future With Us.</span>
          </h2>

          {/* Core Philosophy Block */}
          <div className="w-full py-16 border-y border-black/5 mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <p className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground max-w-5xl mx-auto px-4 italic">
              "We believe the best products come from teams that are focused, supported, and given the space to do their best work."
            </p>
          </div>

          {/* Supporting Narrative */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16 italic">
            We are looking for visionaries who want to solve the most complex digital challenges of our time. Join a culture that takes engineering quality seriously, and wellbeing just as seriously.
          </p>
          
          {/* Primary Action Terminal */}
          <Link href="/careers">
            <Button size="lg" className="rounded-full h-16 sm:h-20 px-10 sm:px-16 text-lg sm:text-xl font-bold group bg-primary hover:bg-primary/90 shadow-[0_20px_40px_rgba(249,115,22,0.2)] border-none text-white transition-all duration-500">
              View All Openings 
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Chapter>
  )
}
