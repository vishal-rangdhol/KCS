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
    <Chapter id="story" className="bg-background relative py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.6em] uppercase text-[10px] sm:text-xs mb-12 font-headline">
            <Sparkles size={14} className="animate-pulse" /> The KCS Origin
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.8] tracking-tighter text-foreground mb-16 font-headline">
            Architecting <br />
            <span className="text-primary italic">Meaningful Impact.</span>
          </h2>

          <div className="w-full py-24 border-y border-white/5 mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
            <p className="text-3xl md:text-6xl font-bold tracking-tighter leading-[0.9] text-foreground max-w-6xl mx-auto px-4 italic font-headline">
              "Technology should empower businesses to create meaningful impact — without locking them into systems they don't control."
            </p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-24 italic font-medium">
            Founded in Hyderabad, India, KCS operates as a technology product lab dedicated to closing the gap between AI, cloud infrastructure, and data platforms. We build complete digital ecosystems designed for long-term growth.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-6xl">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 p-8 rounded-[2rem] bg-white/5 border border-white/5 group hover:border-primary/40 hover:bg-white/10 transition-all duration-500 shadow-2xl backdrop-blur-sm"
              >
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 group-hover:text-foreground transition-colors font-headline">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Chapter>
  )
}
