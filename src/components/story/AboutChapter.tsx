"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, Layout, Globe, Cpu, Sparkles } from 'lucide-react'

const expertise = [
  { icon: BrainCircuit, label: "Artificial Intelligence" },
  { icon: Cloud, label: "Cloud Infrastructure" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Layout, label: "Enterprise Software" },
  { icon: Cpu, label: "Mobile Platforms" },
  { icon: Globe, label: "Digital Ecosystems" }
]

export function AboutChapter() {
  return (
    <Chapter id="story" className="bg-background relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Section Header */}
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-10 font-headline">
            <Sparkles size={14} className="animate-pulse" /> The KCS Origin
          </span>
          
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-12 font-headline">
            Architecting <br />
            <span className="text-secondary italic">Meaningful Impact.</span>
          </h2>

          {/* Core Philosophy Block */}
          <div className="w-full py-16 border-y border-black/5 mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <p className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground max-w-5xl mx-auto px-4 italic">
              "Technology should empower businesses to create meaningful impact — without locking them into systems they don't control."
            </p>
          </div>

          {/* Supporting Narrative */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-16 italic">
            Founded in Hyderabad, India, KCS operates as a technology product lab dedicated to closing the gap between AI, cloud infrastructure, and data platforms. We build complete digital ecosystems designed for long-term growth.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full max-w-5xl">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-black/5 border border-black/5 group hover:border-primary/20 transition-all"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={14} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/70 group-hover:text-foreground transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Chapter>
  )
}
