
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Cpu, RefreshCw, ArrowRight, Sparkles } from 'lucide-react'

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

export function DifferentiationChapter() {
  return (
    <Chapter id="differentiation" className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2 text-primary font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-6 font-bold">
              <Sparkles size={14} className="animate-pulse" /> The Advantage
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-foreground">
              What Makes <br />
              <span className="text-secondary italic">KCS Different.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-end h-full"
          >
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl border-l-2 border-primary/20 pl-8 font-medium">
              We don't just deliver software; we architect competitive advantages. Our methodology ensures that our partners stay ahead of the curve with zero friction and maximum scalability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 px-4">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 sm:p-12 rounded-[3rem] bg-black/5 border border-black/5 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-primary/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative Icon Background */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700 pointer-events-none group-hover:text-primary">
                <item.icon size={180} strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-4 py-1.5 rounded-full border border-black/5 bg-black/5">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 max-w-sm">
                  {item.description}
                </p>

                <div className="mt-12 flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                  Deep Dive <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Chapter>
  )
}
