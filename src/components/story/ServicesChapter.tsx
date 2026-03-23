"use client"

import { Chapter } from './Chapter'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Smartphone, RefreshCw, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence Solutions",
    description: "We help businesses turn AI from a buzzword into a genuine operational advantage.",
    extraContent: "Our AI capabilities span predictive analytics, machine learning models, intelligent process automation, and AI-driven decision systems — all engineered to integrate cleanly with existing infrastructure.",
    icon: BrainCircuit,
    color: "from-indigo-600/20 to-indigo-600/5",
    accent: "bg-indigo-500",
    borderColor: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-400"
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    description: "Security isn't a feature we bolt on at the end. It's built into every system we design.",
    extraContent: "KCS provides comprehensive cybersecurity services including security architecture design, risk assessments, threat detection systems, and incident response strategies.",
    icon: Shield,
    color: "from-rose-600/20 to-rose-600/5",
    accent: "bg-rose-500",
    borderColor: "group-hover:border-rose-500/50",
    iconColor: "text-rose-400"
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "Modern businesses require infrastructure that scales without breaking.",
    extraContent: "We design cloud-native architectures built for global performance, high availability, and long-term reliability across AWS, Google Cloud, and Azure.",
    icon: Cloud,
    color: "from-emerald-600/20 to-emerald-600/5",
    accent: "bg-emerald-500",
    borderColor: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-400"
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Data is only valuable when it drives decisions.",
    extraContent: "We help organizations transform raw data into strategic clarity — building architectures, BI systems, and real-time dashboards for strategic vision.",
    icon: BarChart3,
    color: "from-sky-600/20 to-sky-600/5",
    accent: "bg-sky-500",
    borderColor: "group-hover:border-sky-500/50",
    iconColor: "text-sky-400"
  },
  {
    id: "enterprise",
    title: "Enterprise Software (ERP / CRM)",
    description: "Your business has unique workflows. Your software should fit them.",
    extraContent: "KCS builds custom enterprise platforms including CRM systems, ERP solutions, and workflow automation tools tailored to your actual operations.",
    icon: Building2,
    color: "from-violet-600/20 to-violet-600/5",
    accent: "bg-violet-500",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "We build high-performance applications across iOS, Android, and web.",
    extraContent: "Our mobile development expertise covers Flutter, React Native, Swift, Kotlin, and .NET, delivering seamless experiences regardless of platform.",
    icon: Smartphone,
    color: "from-fuchsia-600/20 to-fuchsia-600/5",
    accent: "bg-fuchsia-500",
    borderColor: "group-hover:border-fuchsia-500/50",
    iconColor: "text-fuchsia-400"
  },
  {
    id: "lifecycle",
    title: "Product Lifecycle Support",
    description: "Build. Run. Maintain. Comprehensive support across the entire digital lifecycle.",
    points: [
      { label: "Product Development", text: "architecture design and backend infrastructure." },
      { label: "Operational Support", text: "post-launch technical operations and strategy." },
      { label: "Continuous Maintenance", text: "adaptive maintenance for OS and security standards." },
      { label: "24/7 Global Support", text: "AI-assisted and human technical assistance." }
    ],
    icon: RefreshCw,
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    borderColor: "group-hover:border-primary/50",
    iconColor: "text-primary",
    isHero: true
  }
]

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
        "group relative flex flex-col rounded-[1.5rem] md:rounded-[2rem] bg-card/40 border border-white/5 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md shadow-2xl",
        item.borderColor,
        item.isHero ? "md:col-span-2 lg:col-span-3 lg:max-w-5xl lg:mx-auto w-full" : "",
        isExpanded ? "ring-2 ring-white/10" : ""
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background Chromatic Gradient */}
      <motion.div 
        layout
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br",
          item.color
        )} 
      />

      <div className="relative z-10 p-5 md:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <motion.div 
            layout="position"
            className={cn(
              "p-2.5 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10",
              item.iconColor
            )}
          >
            <item.icon size={20} className="md:size-[24px]" />
          </motion.div>
          
          <motion.div 
            layout="position"
            className={cn(
              "p-2 rounded-full transition-transform duration-500 bg-white/5 border border-white/5",
              isExpanded && "rotate-180 bg-primary/20 text-primary border-primary/20"
            )}
          >
            <ChevronDown size={14} />
          </motion.div>
        </div>

        <div className="flex-1 space-y-2">
          <motion.h3 
            layout="position"
            className="text-base md:text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors leading-tight"
          >
            {item.title}
          </motion.h3>
          
          <motion.p 
            layout="position"
            className={cn(
              "text-[10px] md:text-sm text-muted-foreground leading-snug italic font-medium transition-all duration-500",
              isExpanded ? "text-foreground/90" : "line-clamp-2"
            )}
          >
            {item.description}
          </motion.p>

          <AnimatePresence mode="popLayout">
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.3 }}
                className="pt-4 space-y-4"
              >
                {item.extraContent && (
                  <p className="text-[10px] md:text-xs text-muted-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
                    {item.extraContent}
                  </p>
                )}
                {item.points && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {item.points.map((point, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-primary block">{point.label}</span>
                          <span className="text-[9px] md:text-[11px] text-muted-foreground italic leading-tight">{point.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2 pt-2">
                   <div className={cn("w-8 h-1 rounded-full", item.accent)} />
                   <span className="text-[8px] font-bold uppercase tracking-widest text-primary/40">Technical Spec Reveal</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapsed Hint */}
      {!isExpanded && (
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
          <span className="text-[8px] font-bold uppercase tracking-widest text-primary">Click to Expand</span>
        </div>
      )}
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="bg-background py-20 md:py-32 lg:py-48 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-8 font-headline">
              <Sparkles size={14} className="animate-pulse" /> Operational Precision
            </span>
            
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] font-bold leading-[0.85] tracking-tighter text-foreground mb-10 font-headline">
              Core <br />
              <span className="text-primary italic">Services.</span>
            </h2>

            <div className="w-full max-w-4xl py-8 border-y border-white/5 mb-16 relative overflow-hidden group">
              <motion.div 
                className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-lg md:text-3xl font-bold tracking-tighter leading-tight text-foreground italic relative z-10 font-headline">
                "Technical discipline required to scale global businesses with absolute predictability."
              </p>
            </div>
          </motion.div>
        </div>

        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full relative">
            {services.map((item, i) => (
              <ServiceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </LayoutGroup>
      </div>
    </Chapter>
  )
}
