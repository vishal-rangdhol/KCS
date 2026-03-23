"use client"

import { Chapter } from './Chapter'
import { motion, AnimatePresence } from 'framer-motion'
import { Focus, Heart, ShieldCheck, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

const pillars = [
  { 
    id: "focus",
    icon: Focus, 
    title: "Deep Focus", 
    text: "We prioritize deep work over constant distraction. Our environment is engineered for flow, allowing for the architectural precision that high-end digital products demand.",
    tag: "Protocol 01"
  },
  { 
    id: "sustainable",
    icon: Heart, 
    title: "Sustainable", 
    text: "Balance is the fuel for long-term technical excellence. We reject the industry standard of burnout, choosing instead a pace that preserves creativity and rigor.",
    tag: "Protocol 02"
  },
  { 
    id: "reliability",
    icon: ShieldCheck, 
    title: "Reliability", 
    text: "Teams that thrive build products that last. By investing in our people's stability, we ensure the platforms we build remain robust and future-proof.",
    tag: "Protocol 03"
  }
]

export function CultureChapter() {
  const [expandedId, setExpandedId] = useState<string | null>("focus")

  return (
    <Chapter id="culture" className="bg-background py-16 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Philosophy Header */}
        <div className="text-center mb-10 md:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-4 font-headline">
              <Sparkles size={14} className="animate-pulse" /> The KCS Conviction
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] md:leading-[0.8] tracking-tighter text-foreground mb-6 font-headline">
              Built on <br />
              <span className="text-primary italic">Focus, Not Burnout.</span>
            </h2>
          </motion.div>
        </div>

        {/* Unique Tiles Structure - Responsive Height */}
        <div className="flex flex-col md:flex-row gap-4 h-[400px] md:h-[250px] w-full items-stretch px-2 md:px-0">
          {pillars.map((pillar, i) => {
            const isExpanded = expandedId === pillar.id;
            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setExpandedId(pillar.id)}
                onClick={() => setExpandedId(pillar.id)}
                className={cn(
                  "relative group overflow-hidden cursor-pointer rounded-[1.5rem] border border-border/40 transition-all duration-700 ease-[0.23, 1, 0.32, 1]",
                  isExpanded ? "flex-[5] md:flex-[4] bg-card shadow-2xl" : "flex-1 bg-card/40 hover:bg-card/60"
                )}
                layout
              >
                {/* Background Accent Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-700",
                  isExpanded && "opacity-100"
                )} />

                {/* Content Container */}
                <div className="relative z-10 p-3.5 md:p-6 h-full flex flex-col">
                  {/* Top Bar: Icon and Protocol ID */}
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <div className={cn(
                      "p-1.5 md:p-3 rounded-lg transition-all duration-500",
                      isExpanded ? "bg-primary text-white scale-105 shadow-md shadow-primary/20" : "bg-primary/10 text-primary"
                    )}>
                      <pillar.icon size={16} />
                    </div>
                    <span className={cn(
                      "text-[6px] md:text-[8px] font-bold uppercase tracking-[0.2em] font-headline transition-colors duration-500",
                      isExpanded ? "text-primary/60" : "text-muted-foreground/30"
                    )}>
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Narrative Block */}
                  <div className="mt-auto">
                    <h3 className={cn(
                      "text-sm md:text-xl font-bold tracking-tighter mb-1.5 transition-all duration-500 font-headline",
                      isExpanded ? "text-foreground" : "text-foreground/40"
                    )}>
                      {pillar.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <p className="text-[9px] md:text-sm text-muted-foreground leading-snug italic max-w-2xl font-medium">
                            {pillar.text}
                          </p>
                          <div className="mt-2 flex gap-1.5">
                            <div className="w-6 h-0.5 bg-primary rounded-full" />
                            <div className="w-1.5 h-0.5 bg-primary/20 rounded-full" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Decorative Architectural Element */}
                <div className={cn(
                  "absolute -bottom-4 -right-4 w-12 h-12 md:w-24 md:h-24 opacity-0 transition-opacity duration-1000",
                  isExpanded && "opacity-[0.05]"
                )}>
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:8px_8px]" />
                </div>

                {/* Vertical Text when collapsed */}
                {!isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex"
                  >
                    <span className="rotate-90 text-[8px] font-bold uppercase tracking-[0.4em] text-foreground/10 whitespace-nowrap">
                      Expand Protocol
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </Chapter>
  )
}