"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Cpu, RefreshCw, Sparkles } from 'lucide-react'

const differentiators = [
  {
    title: "Technology Ownership",
    description: "Clients retain full control of every system we build. No lock-in. No dependency.",
    icon: ShieldCheck,
    tag: "Autonomy"
  },
  {
    title: "Product-First Engineering",
    description: "We treat every project as a long-term platform, not a short-term contract.",
    icon: Zap,
    tag: "Sustainability"
  },
  {
    title: "AI-Ready Architecture",
    description: "Every system we design is built for future AI integration and intelligent automation.",
    icon: Cpu,
    tag: "Intelligence"
  },
  {
    title: "End-to-End Lifecycle",
    description: "Build → Launch → Operate → Maintain → Scale",
    icon: RefreshCw,
    tag: "Scalability"
  }
]

export function ServicesChapter() {
  return (
    <Chapter id="services" className="bg-background py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-10 font-headline">
            <Sparkles size={14} className="animate-pulse" /> Our Edge
          </span>
          
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-12 font-headline">
            The KCS <br />
            <span className="text-primary italic">Technology Edge.</span>
          </h2>

          <div className="w-full py-16 border-y border-white/10 mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <p className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground max-w-5xl mx-auto px-4 italic">
              "We don't just deliver software; we architect competitive advantages that remain entirely under your control."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-card/60 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 text-left relative overflow-hidden backdrop-blur-sm"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-3 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-headline text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed italic">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Chapter>
  )
}
