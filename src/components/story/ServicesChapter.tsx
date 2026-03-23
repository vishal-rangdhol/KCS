"use client"

import { Chapter } from './Chapter'
import { motion, AnimatePresence } from 'framer-motion'
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
    extraContent: "KCS provides comprehensive cybersecurity services including security architecture design, risk assessments, threat detection systems, and incident response strategies — ensuring every product we develop meets modern compliance and security standards.",
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
    extraContent: "We design cloud-native architectures built for global performance, high availability, and long-term reliability. Services include cloud-native application development, scalable infrastructure architecture, and cloud security implementation across AWS, Google Cloud, and Azure.",
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
    extraContent: "We help organizations transform raw data into strategic clarity — building data architectures, business intelligence systems, predictive models, and real-time analytics dashboards that give leadership a clear view of what's happening and what's coming.",
    icon: BarChart3,
    color: "from-sky-600/20 to-sky-600/5",
    accent: "bg-sky-500",
    borderColor: "group-hover:border-sky-500/50",
    iconColor: "text-sky-400"
  },
  {
    id: "enterprise",
    title: "Enterprise Software (ERP / CRM)",
    description: "Your business has unique workflows. Your software should fit them — not the other way around.",
    extraContent: "KCS builds custom enterprise platforms including CRM systems, ERP solutions, workflow automation tools, and integrated business dashboards tailored to the way your organization actually operates.",
    icon: Building2,
    color: "from-violet-600/20 to-violet-600/5",
    accent: "bg-violet-500",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
  {
    id: "mobile",
    title: "Mobile & Cross-Platform Development",
    description: "We build high-performance applications across all modern platforms — iOS, Android, and web.",
    extraContent: "Our mobile development expertise covers Flutter, React Native, Swift, Kotlin, and .NET, delivering seamless experiences regardless of platform or device.",
    icon: Smartphone,
    color: "from-fuchsia-600/20 to-fuchsia-600/5",
    accent: "bg-fuchsia-500",
    borderColor: "group-hover:border-fuchsia-500/50",
    iconColor: "text-fuchsia-400"
  },
  {
    id: "lifecycle",
    title: "Product Lifecycle Support",
    description: "Build. Run. Maintain. KCS supports digital products across their entire lifecycle:",
    points: [
      { label: "Product Development", text: "Architecture design, user experience, and backend infrastructure built from the ground up." },
      { label: "Operational Support", text: "Post-launch technical operations so your team can focus on growth, marketing, and strategy." },
      { label: "Continuous Maintenance", text: "Adaptive maintenance ensuring your platforms remain compatible with new operating systems, security standards, and performance requirements." },
      { label: "24/7 Global Support", text: "AI-assisted and human support teams handling technical queries, user assistance, and troubleshooting." }
    ],
    icon: RefreshCw,
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    borderColor: "group-hover:border-primary/50",
    iconColor: "text-primary"
  }
]

function ServiceCard({ item, index }: { item: typeof services[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -15, scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col rounded-[2rem] bg-card/40 border border-white/5 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md shadow-2xl h-fit w-full",
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

      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
        <div className="flex items-start justify-between mb-8">
          <motion.div 
            layout="position"
            className={cn(
              "p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10",
              item.iconColor
            )}
          >
            <item.icon size={32} />
          </motion.div>
        </div>

        <div className="flex-1 space-y-6">
          <motion.h3 
            layout="position"
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-foreground group-hover:text-primary transition-colors leading-tight"
          >
            {item.title}
          </motion.h3>
          
          <motion.p 
            layout="position"
            className={cn(
              "text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-snug italic font-medium transition-all duration-500",
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
                className="pt-8 space-y-8"
              >
                {item.extraContent && (
                  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/80 leading-relaxed border-l-4 border-primary/30 pl-8 py-2">
                    {item.extraContent}
                  </p>
                )}
                {item.points && (
                  <div className="grid grid-cols-1 gap-6 pt-4">
                    {item.points.map((point, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                        <div>
                          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary block mb-1">{point.label}</span>
                          <span className="text-base md:text-lg lg:text-xl text-muted-foreground italic leading-tight">{point.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
          <motion.button
            layout="position"
            className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors flex items-center gap-3 group/trigger"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Hide Spec" : "Learn More"}
            <motion.div
              animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              className="transition-transform duration-300"
            >
              <ChevronDown size={16} />
            </motion.div>
            {!isExpanded && <Sparkles size={14} className="animate-pulse opacity-40" />}
          </motion.button>
          
          <motion.span 
            layout="position"
            className="text-[10px] font-bold text-white/5 uppercase tracking-[0.4em] font-headline"
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
    <Chapter id="services" className="bg-background py-24 md:py-32 lg:py-48 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 md:mb-32">
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
            
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8.5rem] font-bold leading-[0.85] tracking-tighter text-foreground mb-12 font-headline">
              Core <br />
              <span className="text-primary italic">Services.</span>
            </h2>

            <div className="w-full max-w-4xl py-10 border-y border-white/5 mb-20 relative overflow-hidden group">
              <motion.div 
                className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-xl md:text-4xl font-bold tracking-tighter leading-tight text-foreground italic relative z-10 font-headline">
                "Technical discipline required to scale global businesses with absolute predictability."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16 w-full max-w-6xl mx-auto items-start">
          {services.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </Chapter>
  )
}
