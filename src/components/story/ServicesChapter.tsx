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
    description: "Security isn't a feature we bolt on at the end. It's built into every system we design. KCS provides comprehensive cybersecurity services including security architecture design, risk assessments, threat detection systems, and incident response strategies — ensuring every product we develop meets modern compliance and security standards.",
    icon: Shield,
    color: "bg-rose-600/10",
    borderColor: "group-hover:border-rose-500/50",
    iconColor: "text-rose-500",
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "Modern businesses require infrastructure that scales without breaking. We design cloud-native architectures built for global performance, high availability, and long-term reliability. Services include cloud-native application development, scalable infrastructure architecture, and cloud security implementation across AWS, Google Cloud, and Azure.",
    icon: Cloud,
    color: "bg-emerald-600/10",
    borderColor: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-500",
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Data is only valuable when it drives decisions. We help organizations transform raw data into strategic clarity — building data architectures, business intelligence systems, predictive models, and real-time analytics dashboards that give leadership a clear view of what's happening and what's coming.",
    icon: BarChart3,
    color: "bg-sky-600/10",
    borderColor: "group-hover:border-sky-500/50",
    iconColor: "text-sky-500",
  },
  {
    id: "enterprise",
    title: "Enterprise Software (ERP / CRM)",
    description: "Your business has unique workflows. Your software should fit them — not the other way around. KCS builds custom enterprise platforms including CRM systems, ERP solutions, workflow automation tools, and integrated business dashboards tailored to the way your organization actually operates.",
    icon: Building2,
    color: "bg-violet-600/10",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-500",
  },
  {
    id: "mobile",
    title: "Mobile & Cross-Platform Development",
    description: "We build high-performance applications across all modern platforms — iOS, Android, and web. Our mobile development expertise covers Flutter, React Native, Swift, Kotlin, and .NET, delivering seamless experiences regardless of platform or device.",
    icon: Smartphone,
    color: "bg-fuchsia-600/10",
    borderColor: "group-hover:border-fuchsia-500/50",
    iconColor: "text-fuchsia-500",
  },
  {
    id: "lifecycle",
    title: "Product Lifecycle Support",
    description: "Build. Run. Maintain. KCS supports digital products across their entire lifecycle:",
    points: [
      { label: "Product Development", text: "architecture, UX, and infrastructure built from ground up." },
      { label: "Operational Support", text: "post-launch ops for growth and marketing focus." },
      { label: "Continuous Maintenance", text: "adaptive maintenance for OS and security standards." },
      { label: "24/7 Global Support", text: "AI-assisted and human teams for troubleshooting." }
    ],
    icon: RefreshCw,
    color: "bg-primary/10",
    borderColor: "group-hover:border-primary/50",
    iconColor: "text-primary",
  }
]

function ServiceCard({ item, index }: { item: typeof services[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -15, scale: 1.02 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] bg-card/40 border border-white/5 transition-all duration-500 text-left relative overflow-hidden backdrop-blur-sm shadow-2xl flex flex-col min-h-[400px] md:min-h-[580px]",
        item.borderColor
      )}
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", item.color)} />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-6 md:mb-10">
          <div className={cn("p-3 md:p-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 w-fit", item.iconColor)}>
            <item.icon size={24} className="md:size-[32px]" />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 font-headline text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
          
          <div className="space-y-4">
            <p className="text-[12px] md:text-base lg:text-lg text-muted-foreground leading-relaxed italic font-medium group-hover:text-foreground/80 transition-colors">
              {item.description}
            </p>

            {item.isCollapsible && item.extraContent && (
              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
                <CollapsibleTrigger asChild>
                  <button className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group/trigger mt-2">
                    {isOpen ? "Collapse Specs" : "Expand Specs"}
                    <ChevronDown size={14} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[11px] md:text-sm text-muted-foreground/70 leading-relaxed italic border-l-2 border-primary/20 pl-4"
                  >
                    {item.extraContent}
                  </motion.p>
                </CollapsibleContent>
              </Collapsible>
            )}

            {item.points && (
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

      {/* Decorative Element */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 md:w-32 md:h-32 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:8px_8px]" />
      </div>
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-8 md:mb-10 font-headline">
              <Sparkles size={14} className="animate-pulse" /> Operational Excellence
            </span>
            
            <h2 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-10 md:mb-12 font-headline">
              Core <br />
              <span className="text-primary italic">Services.</span>
            </h2>

            <div className="w-full py-12 md:py-16 border-y border-white/10 mb-12 md:mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-primary/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
              <p className="text-lg md:text-5xl font-bold tracking-tighter leading-tight text-foreground max-w-5xl mx-auto px-4 italic">
                "We provide the technical discipline required to scale global businesses with absolute predictability."
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {services.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </Chapter>
  )
}
