
"use client"

import { Chapter } from './Chapter'
import { motion, AnimatePresence } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Smartphone, RefreshCw, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence Solutions",
    description: "Turning AI from a buzzword into a genuine operational advantage.",
    points: [
      { label: "Predictive Analytics", text: "Forecasting trends to drive proactive strategy." },
      { label: "Machine Learning", text: "Custom models engineered for complex data environments." },
      { label: "Intelligent Automation", text: "Streamlining workflows via AI-driven process optimization." },
      { label: "Seamless Integration", text: "Solutions designed to plug directly into your existing infrastructure." }
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
    description: "Security isn't an afterthought—it’s the foundation of every system we design.",
    points: [
      { label: "Security Architecture", text: "End-to-end design focused on 'Secure by Default' principles." },
      { label: "Risk & Threat Management", text: "Comprehensive assessments, detection systems, and incident response." },
      { label: "Modern Compliance", text: "Ensuring every product meets global security and regulatory standards." }
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
      { label: "Cloud-Native Development", text: "Purpose-built applications for the modern web." },
      { label: "Multi-Cloud Expertise", text: "Architecture and implementation across AWS, Google Cloud, and Azure." },
      { label: "Scalable Frameworks", text: "Infrastructure designed to grow alongside your business without friction." }
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
    description: "Transforming raw data into strategic clarity and actionable leadership insights.",
    points: [
      { label: "Business Intelligence", text: "Custom BI systems and real-time analytics dashboards." },
      { label: "Data Architecture", text: "Robust foundations for managing complex data sets." },
      { label: "Predictive Modeling", text: "Moving beyond historical data to anticipate 'what’s coming next'." }
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
      { label: "Custom ERP & CRM", text: "Tailored platforms built for the way your organization actually operates." },
      { label: "Workflow Automation", text: "Removing manual bottlenecks with integrated digital tools." },
      { label: "Unified Dashboards", text: "Centralized views of your entire business ecosystem." }
    ],
    icon: Building2,
    color: "from-violet-600/20 to-violet-600/5",
    accent: "bg-violet-500",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
  {
    id: "mobile",
    title: "Mobile & Cross-Platform Development",
    description: "High-performance applications delivering seamless experiences across every device.",
    points: [
      { label: "Cross-Platform Mastery", text: "Expert development in Flutter and React Native." },
      { label: "Native Precision", text: "Specialized builds using Swift, Kotlin, and .NET." },
      { label: "Performance-First", text: "Optimized for speed, reliability, and intuitive user experiences." }
    ],
    icon: Smartphone,
    color: "from-fuchsia-600/20 to-fuchsia-600/5",
    accent: "bg-fuchsia-500",
    borderColor: "group-hover:border-fuchsia-500/50",
    iconColor: "text-fuchsia-400"
  },
  {
    id: "lifecycle",
    title: "Full Product Lifecycle Support",
    description: "From initial architecture to 24/7 global operations.",
    points: [
      { label: "End-to-End Build", text: "UX design, backend infrastructure, and scalable development." },
      { label: "Operational Support", text: "Post-launch technical management so you can focus on growth." },
      { label: "Adaptive Maintenance", text: "Continuous updates to prevent legacy debt and ensure compatibility." },
      { label: "24/7 Global Support", text: "Hybrid AI and human teams for troubleshooting and feedback analysis." }
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col rounded-[1.5rem] bg-card/40 border border-white/5 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-md shadow-xl h-fit w-full",
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

      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <motion.div 
            layout="position"
            className={cn(
              "p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10",
              item.iconColor
            )}
          >
            <item.icon size={24} />
          </motion.div>
        </div>

        <div className="flex-1 space-y-4">
          <motion.h3 
            layout="position"
            className="text-lg md:text-xl lg:text-2xl font-bold font-headline text-foreground group-hover:text-primary transition-colors leading-tight tracking-tighter"
          >
            {item.title}
          </motion.h3>
          
          <motion.p 
            layout="position"
            className={cn(
              "text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed italic font-medium transition-all duration-500",
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
                className="pt-6 space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/5">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 size={14} className="text-primary mt-1 shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-0.5">{point.label}</span>
                        <span className="text-xs md:text-sm text-muted-foreground italic leading-tight">{point.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <motion.button
            layout="position"
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group/trigger"
          >
            {isExpanded ? "Contract Protocol" : "Learn More"}
            <motion.div
              animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              className="transition-transform duration-300"
            >
              <ChevronDown size={14} />
            </motion.div>
          </motion.button>
          
          <motion.span 
            layout="position"
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
    <Chapter id="services" className="bg-background py-16 md:py-24 lg:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-6 font-headline">
              <Sparkles size={14} className="animate-pulse" /> Operational Precision
            </span>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tighter text-foreground mb-8 font-headline">
              Core <span className="text-primary italic">Services.</span>
            </h2>

            <div className="w-full max-w-4xl py-8 border-y border-white/5 mb-16 relative overflow-hidden group">
              <motion.div 
                className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-lg md:text-2xl font-bold tracking-tighter leading-tight text-foreground italic relative z-10 font-headline">
                "Technical discipline required to scale global businesses with absolute predictability."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto items-start">
          {services.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </Chapter>
  )
}
