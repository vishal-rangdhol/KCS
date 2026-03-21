"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function CareersChapter() {
  return (
    <Chapter id="careers" className="bg-background py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Section Header */}
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[9px] sm:text-xs mb-8 font-headline">
            <Sparkles size={12} className="animate-pulse" /> Join Our Team
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.8] tracking-tighter text-foreground mb-10 font-headline">
            Architect the <br />
            <span className="text-primary italic">Future With Us.</span>
          </h2>

          {/* Core Philosophy Block */}
          <div className="w-full py-12 border-y border-black/5 mb-12 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <p className="text-xl md:text-3xl font-bold tracking-tighter leading-tight text-foreground max-w-4xl mx-auto px-4 italic">
              "We believe the best products come from teams that are focused, supported, and given the space to do their best work."
            </p>
          </div>

          {/* Supporting Narrative */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 italic">
            We are looking for visionaries who want to solve the most complex digital challenges of our time. Join a culture that takes engineering quality seriously, and wellbeing just as seriously.
          </p>
          
          {/* Primary Action Terminal */}
          <Link href="/careers">
            <Button size="lg" className="rounded-full h-12 sm:h-14 px-8 sm:px-12 text-sm sm:text-base font-bold group bg-primary hover:bg-primary/90 shadow-[0_10px_30px_rgba(249,115,22,0.2)] border-none text-white transition-all duration-500">
              View All Openings 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Chapter>
  )
}
