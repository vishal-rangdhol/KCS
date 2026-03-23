"use client"

import { Chapter } from './Chapter'
import { motion, AnimatePresence } from 'framer-motion'
import { Focus, Heart, ShieldCheck, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

const protocols = [
  { 
    id: "01",
    slug: "focus",
    icon: Focus, 
    title: "Deep Focus", 
    text: "We prioritize deep work over constant distraction. Our environment is engineered for flow, allowing for the architectural precision that high-end digital products demand.",
    tag: "Protocol 01"
  },
  { 
    id: "02",
    slug: "sustainable",
    icon: Heart, 
    title: "Sustainable Pace", 
    text: "Balance is the fuel for long-term technical excellence. We reject the industry standard of burnout, choosing instead a pace that preserves creativity and rigor.",
    tag: "Protocol 02"
  },
  { 
    id: "03",
    slug: "reliability",
    icon: ShieldCheck, 
    title: "Operational Stability", 
    text: "Teams that thrive build products that last. By investing in our people's stability, we ensure the platforms we build remain robust and future-proof.",
    tag: "Protocol 03"
  }
]

export function CultureChapter() {
  const [activeSlug, setActiveSlug] = useState("focus")
  const activeProtocol = protocols.find(p => p.slug === activeSlug) || protocols[0]

  return (
    <Chapter id="culture" className="bg-background py-24 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Philosophy Header */}
        <div className="text-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-8 font-headline">
              <Sparkles size={14} className="animate-pulse" /> The KCS Conviction
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-foreground mb-6 font-headline">
              Built on Focus, Not Burnout.
            </h2>
          </motion.div>
        </div>

        {/* The Protocol Switcher Architecture */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-stretch min-h-[400px]">
          {/* Left: Vertical Timeline Navigation */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col justify-center lg:justify-start gap-4 md:gap-8 relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
            
            {protocols.map((protocol) => {
              const isActive = activeSlug === protocol.slug;
              return (
                <button
                  key={protocol.slug}
                  onClick={() => setActiveSlug(protocol.slug)}
                  className="group relative flex items-center gap-6 text-left outline-none"
                >
                  <div className={cn(
                    "relative z-10 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 font-headline font-bold text-xs",
                    isActive 
                      ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]" 
                      : "bg-background border-white/10 text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
                  )}>
                    {protocol.id}
                  </div>
                  <div className="hidden lg:block">
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.3em] font-headline transition-colors duration-500",
                      isActive ? "text-primary" : "text-muted-foreground/40 group-hover:text-foreground"
                    )}>
                      {protocol.title}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -left-1 w-14 h-14 bg-primary/10 rounded-full -z-10 blur-xl"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Right: Large Display Area with Glitch Transition */}
          <div className="lg:w-3/4 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlug}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ 
                  opacity: 1, x: 0, filter: 'blur(0px)',
                  transition: { duration: 0.4, ease: [0.17, 0.67, 0.83, 0.67] }
                }}
                exit={{ 
                  opacity: 0, x: -20, filter: 'blur(10px)',
                  transition: { duration: 0.2 }
                }}
                className="bg-card/40 border border-white/5 p-10 md:p-20 rounded-[2.5rem] relative overflow-hidden backdrop-blur-md shadow-2xl w-full"
              >
                {/* Subtle Glitch Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                      <activeProtocol.icon size={32} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/60 font-headline block mb-1">
                        {activeProtocol.tag}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground font-headline">
                        {activeProtocol.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-base md:text-2xl text-muted-foreground leading-relaxed italic font-medium max-w-2xl">
                    {activeProtocol.text}
                  </p>

                  <div className="pt-8 flex gap-4">
                    <div className="w-12 h-1 bg-primary rounded-full" />
                    <div className="w-2 h-1 bg-white/5 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Chapter>
  )
}
