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
    <Chapter id="culture" className="bg-background py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Philosophy Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-8 font-headline">
              <Sparkles size={14} className="animate-pulse" /> The KCS Conviction
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-12 font-headline">
              Built on <br />
              <span className="text-primary italic">Focus, Not Burnout.</span>
            </h2>
          </motion.div>
        </div>

        {/* Unique Tiles Structure - Reduced Height */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[450px] w-full items-stretch">
          {pillars.map((pillar, i) => {
            const isExpanded = expandedId === pillar.id;
            return (
              <motion.div
                key={pillar.id}
                onMouseEnter={() => setExpandedId(pillar.id)}
                className={cn(
                  "relative group overflow-hidden cursor-pointer rounded-[2rem] border border-border/40 transition-all duration-700 ease-[0.23, 1, 0.32, 1]",
                  isExpanded ? "flex-[4] bg-card shadow-2xl" : "flex-1 bg-card/40 hover:bg-card/60"
                )}
                layout
              >
                {/* Background Accent Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-700",
                  isExpanded && "opacity-100"
                )} />

                {/* Content Container - Refined Padding */}
                <div className="relative z-10 p-6 md:p-10 h-full flex flex-col">
                  {/* Top Bar: Icon and Protocol ID */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={cn(
                      "p-4 rounded-xl transition-all duration-500",
                      isExpanded ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-primary/10 text-primary"
                    )}>
                      <pillar.icon size={24} />
                    </div>
                    <span className={cn(
                      "text-[9px] font-bold uppercase tracking-[0.3em] font-headline transition-colors duration-500",
                      isExpanded ? "text-primary/60" : "text-muted-foreground/30"
                    )}>
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Narrative Block */}
                  <div className="mt-auto">
                    <h3 className={cn(
                      "text-2xl md:text-4xl font-bold tracking-tighter mb-4 transition-all duration-500 font-headline",
                      isExpanded ? "text-foreground" : "text-foreground/40"
                    )}>
                      {pillar.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          <p className="text-base md:text-xl text-muted-foreground leading-relaxed italic max-w-2xl font-medium">
                            {pillar.text}
                          </p>
                          <div className="mt-6 flex gap-2">
                            <div className="w-10 h-1 bg-primary rounded-full" />
                            <div className="w-3 h-1 bg-primary/20 rounded-full" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Decorative Architectural Element */}
                <div className={cn(
                  "absolute -bottom-8 -right-8 w-32 h-32 opacity-0 transition-opacity duration-1000",
                  isExpanded && "opacity-[0.08]"
                )}>
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1.5px,_transparent_1.5px)] bg-[size:12px_12px]" />
                </div>

                {/* Vertical Text when collapsed */}
                {!isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex"
                  >
                    <span className="rotate-90 text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/10 whitespace-nowrap">
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