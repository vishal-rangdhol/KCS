"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Smartphone, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    title: "Artificial Intelligence",
    description: "Machine learning models, natural language processing systems, and predictive engines built for practical business impact.",
    icon: BrainCircuit,
    color: "bg-indigo-600/10",
    borderColor: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-500",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure architecture deployed across AWS, Google Cloud, and Azure, designed for global performance.",
    icon: Cloud,
    color: "bg-emerald-600/10",
    borderColor: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-500",
  },
  {
    title: "Data & Analytics",
    description: "From raw data pipelines to executive dashboards — we build systems that help organizations act on their data.",
    icon: BarChart3,
    color: "bg-sky-600/10",
    borderColor: "group-hover:border-sky-500/50",
    iconColor: "text-sky-500",
  },
  {
    title: "Cybersecurity",
    description: "Security-first design across every layer — from architecture decisions through deployment and real-time monitoring.",
    icon: Shield,
    color: "bg-rose-600/10",
    borderColor: "group-hover:border-rose-500/50",
    iconColor: "text-rose-500",
  },
  {
    title: "Enterprise Platforms",
    description: "Custom ERP, CRM, and workflow systems built around how businesses actually operate, optimized for growth.",
    icon: Building2,
    color: "bg-violet-600/10",
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-500",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform development across React Native, Swift, and Kotlin — optimized for iOS, Android, and web.",
    icon: Smartphone,
    color: "bg-fuchsia-600/10",
    borderColor: "group-hover:border-fuchsia-500/50",
    iconColor: "text-fuchsia-500",
  }
]

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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-card/40 border border-white/5 transition-all duration-500 text-left relative overflow-hidden backdrop-blur-sm shadow-2xl min-h-[320px] md:min-h-[480px] flex flex-col",
                item.borderColor
              )}
            >
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", item.color)} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="mb-8 md:mb-12">
                  <div className={cn("p-3 md:p-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 w-fit", item.iconColor)}>
                    <item.icon size={24} className="md:size-[32px]" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 font-headline text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-[12px] md:text-lg text-muted-foreground leading-relaxed italic font-medium group-hover:text-foreground/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 md:w-32 md:h-32 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:8px_8px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Chapter>
  )
}
