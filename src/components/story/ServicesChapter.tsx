"use client"

import { Chapter } from './Chapter'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Smartphone, RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useState, useEffect, useRef } from 'react'

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence Solutions",
    description: "Turning AI from a buzzword into a genuine operational advantage.",
    points: [
      { label: "Predictive Analytics", text: "Forecasting trends to drive strategy." },
      { label: "Machine Learning", text: "Custom models for complex data." },
      { label: "Intelligent Automation", text: "AI-driven process optimization." },
      { label: "Seamless Integration", text: "Plugs into existing infrastructure." }
    ],
    icon: BrainCircuit,
    color: "from-indigo-600/20 to-indigo-600/5",
    accent: "bg-indigo-500",
    borderColor: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-400"
  },
  {
    id: "cyber",
    title: "Cybersecurity & Compliance",
    description: "Security isn't an afterthought—it’s the foundation of every system.",
    points: [
      { label: "Security Architecture", text: "End-to-end 'Secure by Default'." },
      { label: "Threat Management", text: "Detection and incident response." },
      { label: "Modern Compliance", text: "Meeting global regulatory standards." }
    ],
    icon: Shield,
    color: "from-rose-600/20 to-rose-600/5",
    accent: "bg-rose-500",
    borderColor: "group-hover:border-rose-500/50",
    iconColor: "text-rose-400"
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "Scalable architectures built for global performance and high availability.",
    points: [
      { label: "Cloud-Native", text: "Purpose-built for the modern web." },
      { label: "Multi-Cloud", text: "AWS, Google Cloud, and Azure." },
      { label: "Scalable Frameworks", text: "Frictionless growth architecture." }
    ],
    icon: Cloud,
    color: "from-emerald-600/20 to-emerald-600/5",
    accent: "bg-emerald-500",
    borderColor: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-400"
  },
  {
    id: "data",
    title: "Data & Strategic Analytics",
    description: "Transforming raw data into strategic clarity and actionable insights.",
    points: [
      { label: "Business Intelligence", text: "Custom BI and real-time dashboards." },
      { label: "Data Architecture", text: "Foundations for complex data sets." },
      { label: "Predictive Modeling", text: "Anticipating 'what’s coming next'." }
    ],
    icon: BarChart3,
    color: "from-sky-600/20 to-sky-600/5",
    accent: "bg-sky-500",
    borderColor: "group-hover:border-sky-500/50",
    iconColor: "text-sky-400"
  },
  {
    id: "enterprise",
    title: "Custom Enterprise Software",
    description: "Software that fits your unique workflows—not the other way around.",
    points: [
      { label: "Custom ERP & CRM", text: "Tailored for your organization." },
      { label: "Workflow Automation", text: "Removing manual bottlenecks." },
      { label: "Unified Dashboards", text: "Centralized business ecosystem." }
    ],
    icon: Building2,
    color: "from-violet-600/20 to-violet-600/5",
    accent: "bg-violet-500",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
  {
    id: "lifecycle",
    title: "Full Product Lifecycle Support",
    description: "From initial architecture to 24/7 global operations.",
    points: [
      { label: "End-to-End Build", text: "UX, backend, and development." },
      { label: "Operational Support", text: "Post-launch technical management." },
      { label: "Adaptive Maintenance", text: "Preventing technical debt." },
      { label: "24/7 Support", text: "Hybrid AI and human teams." }
    ],
    icon: RefreshCw,
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    borderColor: "group-hover:border-primary/50",
    iconColor: "text-primary"
  }
]

function TypewriterQuote({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      let i = 0
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i))
        i++
        if (i > text.length) clearInterval(interval)
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isInView, text])

  return (
    <p ref={ref} className="text-base sm:text-xl md:text-2xl font-bold tracking-tighter leading-tight text-foreground italic relative z-10 font-headline">
      "{displayText}"
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </p>
  )
}

function ServiceCard({ item, index }: { item: typeof services[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col rounded-[1.2rem] md:rounded-[1.5rem] bg-card/40 border border-white/5 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md shadow-xl h-fit w-full",
        item.borderColor,
        isExpanded ? "ring-2 ring-primary/30" : ""
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div 
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br",
          item.color
        )} 
      />

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ top: "-100%" }}
            animate={{ top: "200%" }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-primary/40 blur-sm z-30 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 p-5 md:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <motion.div 
            layout
            className={cn(
              "p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10",
              item.iconColor,
              isExpanded ? "scale-110 md:scale-125 mb-2 md:mb-4" : ""
            )}
          >
            <item.icon size={20} className="md:size-[24px]" />
          </motion.div>
        </div>

        <div className="flex-1 space-y-3 md:space-y-4">
          <motion.h3 
            layout
            className="text-base md:text-xl lg:text-2xl font-bold font-headline text-foreground group-hover:text-primary transition-colors leading-tight tracking-tighter"
          >
            {item.title}
          </motion.h3>
          
          <motion.p 
            layout
            className={cn(
              "text-[11px] md:text-sm lg:text-base text-muted-foreground leading-relaxed italic font-medium transition-all duration-500",
              isExpanded ? "text-foreground/90" : "line-clamp-2"
            )}
          >
            {item.description}
          </motion.p>

          <AnimatePresence mode="popLayout">
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 md:pt-6 space-y-4 md:space-y-6 overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-4 pt-3 md:pt-4 border-t border-white/5">
                  {item.points.map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-2 md:gap-3 items-start"
                    >
                      <CheckCircle2 size={12} className="text-primary mt-1 shrink-0 md:size-[14px]" />
                      <div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-primary block mb-0.5">{point.label}</span>
                        <span className="text-[10px] md:text-sm text-muted-foreground italic leading-tight">{point.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
          <motion.button
            layout
            className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group/trigger"
          >
            {isExpanded ? "Collapse Protocol" : "Access Dossier"}
            <motion.div
              animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              className="transition-transform duration-300"
            >
              <ChevronDown size={12} className="md:size-[14px]" />
            </motion.div>
          </motion.button>
          
          <motion.span 
            layout
            className="text-[6px] md:text-[8px] font-bold text-white/5 uppercase tracking-[0.4em] font-headline"
          >
            KCS_PROTOCOL_0{index + 1}
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="bg-background py-12 md:py-24 lg:py-48 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[9px] sm:text-[10px] md:text-xs mb-4 md:mb-6 font-headline">
              Operational Precision
            </span>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tighter text-foreground mb-6 md:mb-8 font-headline">
              Core Services.
            </h2>

            <div className="w-full max-w-4xl py-6 md:py-8 border-y border-white/5 mb-10 md:mb-16 relative overflow-hidden group">
              <motion.div 
                className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <TypewriterQuote text="Technical discipline required to scale global businesses with absolute predictability." />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full max-w-7xl mx-auto items-start">
          {services.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </Chapter>
  )
}
