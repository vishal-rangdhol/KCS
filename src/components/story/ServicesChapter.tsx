"use client"

import { Chapter } from './Chapter'
import { motion, AnimatePresence } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Smartphone, Sparkles, RefreshCw, CheckCircle2, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence Solutions",
    description: "We help businesses turn AI from a buzzword into a genuine operational advantage.",
    extraContent: "Our AI capabilities span predictive analytics, machine learning models, intelligent process automation, and AI-driven decision systems — all engineered to integrate cleanly with existing infrastructure.",
    icon: BrainCircuit,
    color: "bg-indigo-600/10",
    borderColor: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-500",
    isCollapsible: true
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    description: "Security isn't a feature we bolt on at the end. It's built into every system we design.",
    extraContent: "KCS provides comprehensive cybersecurity services including security architecture design, risk assessments, threat detection systems, and incident response strategies — ensuring every product we develop meets modern compliance and security standards.",
    icon: Shield,
    color: "bg-rose-600/10",
    borderColor: "group-hover:border-rose-500/50",
    iconColor: "text-rose-500",
    isCollapsible: true
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "Modern businesses require infrastructure that scales without breaking.",
    extraContent: "We design cloud-native architectures built for global performance, high availability, and long-term reliability. Services include cloud-native application development, scalable infrastructure architecture, and cloud security implementation across AWS, Google Cloud, and Azure.",
    icon: Cloud,
    color: "bg-emerald-600/10",
    borderColor: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-500",
    isCollapsible: true
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Data is only valuable when it drives decisions.",
    extraContent: "We help organizations transform raw data into strategic clarity — building data architectures, business intelligence systems, predictive models, and real-time analytics dashboards that give leadership a clear view of what's happening and what's coming.",
    icon: BarChart3,
    color: "bg-sky-600/10",
    borderColor: "group-hover:border-sky-500/50",
    iconColor: "text-sky-500",
    isCollapsible: true
  },
  {
    id: "enterprise",
    title: "Enterprise Software (ERP / CRM)",
    description: "Your business has unique workflows. Your software should fit them — not the other way around.",
    extraContent: "KCS builds custom enterprise platforms including CRM systems, ERP solutions, workflow automation tools, and integrated business dashboards tailored to the way your organization actually operates.",
    icon: Building2,
    color: "bg-violet-600/10",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-500",
    isCollapsible: true
  },
  {
    id: "mobile",
    title: "Mobile & Cross-Platform Development",
    description: "We build high-performance applications across all modern platforms — iOS, Android, and web",
    extraContent: "Our mobile development expertise covers Flutter, React Native, Swift, Kotlin, and .NET, delivering seamless experiences regardless of platform or device.",
    icon: Smartphone,
    color: "bg-fuchsia-600/10",
    borderColor: "group-hover:border-fuchsia-500/50",
    iconColor: "text-fuchsia-500",
    isCollapsible: true
  },
  {
    id: "lifecycle",
    title: "Product Lifecycle Support",
    description: "Build. Run. Maintain. KCS supports digital products across their entire lifecycle:",
    isCollapsible: true,
    points: [
      { label: "Product Development", text: "architecture design, user experience, and backend infrastructure built from the ground up." },
      { label: "Operational Support", text: "post-launch technical operations so your team can focus on growth, marketing, and strategy." },
      { label: "Continuous Maintenance", text: "adaptive maintenance ensuring your platforms remain compatible with new operating systems, security standards, and performance requirements. This prevents expensive legacy migrations down the road." },
      { label: "24/7 Global Customer Support", text: "AI-assisted and human support teams handling technical queries, user assistance, product troubleshooting, and feedback analysis." }
    ],
    icon: RefreshCw,
    color: "bg-primary/10",
    borderColor: "group-hover:border-primary/50",
    iconColor: "text-primary",
  }
]

interface ServiceCardProps {
  item: typeof services[0]
  index: number
  className?: string
}

function ServiceCard({ item, index, className }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -15, scale: 1.01 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] bg-card/40 border border-white/5 transition-all duration-500 text-left relative overflow-hidden backdrop-blur-sm shadow-2xl flex flex-col min-h-[400px] md:min-h-[580px]",
        item.borderColor,
        className
      )}
    >
      {/* Background Glow Effect */}
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", item.color)} />
      
      {/* Background Grid Pattern Decoration */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 md:w-32 md:h-32 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:8px_8px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Icon Terminal */}
        <div className="mb-6 md:mb-10">
          <div className={cn(
            "p-3 md:p-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 w-fit", 
            item.iconColor
          )}>
            <item.icon size={24} className="md:size-[32px]" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          {/* Headline Node */}
          <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 font-headline text-foreground group-hover:text-primary transition-colors leading-tight">
            {item.title}
          </h3>
          
          <div className="space-y-4">
            {/* Primary Narrative */}
            <p className="text-[12px] md:text-base lg:text-lg text-muted-foreground leading-relaxed italic font-medium group-hover:text-foreground/80 transition-colors">
              {item.description}
            </p>

            {/* Spec Reveal Protocol */}
            {item.isCollapsible && (item.extraContent || item.points) && (
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <CollapsibleTrigger asChild>
                  <button className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group/trigger mt-2 py-2">
                    {isOpen ? "Collapse Specs" : "Expand Specs"}
                    <ChevronDown size={14} className={cn("transition-transform duration-500 ease-[0.23,1,0.32,1]", isOpen && "rotate-180")} />
                  </button>
                </CollapsibleTrigger>
                
                <AnimatePresence>
                  {isOpen && (
                    <CollapsibleContent forceMount>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4">
                          {item.extraContent && (
                            <p className="text-[11px] md:text-sm text-muted-foreground/70 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                              {item.extraContent}
                            </p>
                          )}
                          {item.points && (
                            <div className="grid grid-cols-1 gap-4 mt-2">
                              {item.points.map((point, idx) => (
                                <motion.div 
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex gap-3"
                                >
                                  <div className="p-1 rounded-full bg-primary/10 h-fit mt-1">
                                    <CheckCircle2 size={12} className="text-primary shrink-0" />
                                  </div>
                                  <div className="space-y-1">
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary block">{point.label}</span>
                                    <span className="text-[10px] md:text-sm text-muted-foreground/80 leading-snug italic">{point.text}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </CollapsibleContent>
                  )}
                </AnimatePresence>
              </Collapsible>
            )}

            {/* Static Specs (Fall-back) */}
            {!item.isCollapsible && item.points && (
              <div className="space-y-3 mt-4">
                {item.points.map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-1" />
                    <div className="space-y-1">
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-primary block">{point.label}</span>
                      <span className="text-[10px] md:text-sm text-muted-foreground leading-tight italic">{point.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="bg-background py-20 md:py-32 lg:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Narrative Header */}
        <div className="text-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-8 md:mb-10 font-headline">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span> 
              Operational Excellence
            </span>
            
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-10 md:mb-16 font-headline">
              Core <br />
              <span className="text-primary italic">Services.</span>
            </h2>

            <div className="w-full py-12 md:py-24 border-y border-white/5 mb-12 md:mb-24 relative overflow-hidden group">
              {/* Animated Accent Line */}
              <motion.div 
                className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-primary/5 blur-[100px] md:blur-[180px] rounded-full pointer-events-none" />
              
              <p className="text-lg md:text-5xl font-bold tracking-tighter leading-tight text-foreground max-w-5xl mx-auto px-4 italic relative z-10 font-headline">
                "We provide the technical discipline required to scale global businesses with absolute predictability."
              </p>

              <motion.div 
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Capability Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full relative">
          {services.map((item, i) => (
            <div 
              key={item.id}
              className={cn(
                "transition-all duration-700",
                i === 6 ? "md:col-span-2 lg:col-span-3 flex justify-center mt-6 lg:mt-12" : ""
              )}
            >
              <ServiceCard 
                item={item} 
                index={i} 
                className={i === 6 ? "max-w-5xl w-full border-primary/20 bg-primary/5" : ""}
              />
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  )
}
