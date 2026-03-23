"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Zap, Cpu, RefreshCw } from 'lucide-react'
import React from 'react'

const values = [
  {
    title: "Technology Ownership",
    description: "Clients retain full control of every system we build. No lock-in. No dependency.",
    icon: ShieldCheck,
    border: "border-primary/10",
  },
  {
    title: "Product-First Engineering",
    description: "We treat every project as a long-term platform, not a short-term contract.",
    icon: Zap,
    border: "border-primary/10",
  },
  {
    title: "AI-Ready Architecture",
    description: "Every system we design is built for future AI integration and intelligent automation.",
    icon: Cpu,
    border: "border-primary/10",
  },
  {
    title: "End-to-End Lifecycle",
    description: "Build → Launch → Operate → Maintain → Scale",
    icon: RefreshCw,
    border: "border-primary/10",
  }
]

function ValueCard({ value, index }: { value: typeof values[0], index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      whileHover={{ y: -15, scale: 1.02 }}
      className={`p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-card/40 border ${value.border} hover:border-primary/40 shadow-xl group relative overflow-hidden transition-all duration-500 backdrop-blur-md cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <div 
          className="bg-primary/5 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] w-fit mb-6 md:mb-10 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm"
        >
          <value.icon className="w-6 h-6 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tighter text-foreground leading-tight">
          <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-[background-size] duration-1000 ease-out pb-1 inline">
            {value.title}
          </span>
        </h3>
        
        <p className="text-[12px] md:text-xl text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 font-medium italic">
          {value.description}
        </p>
      </div>

      <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:10px_10px]" />
      </div>
    </motion.div>
  )
}

export function VisionChapter() {
  return (
    <Chapter id="vision" className="py-20 md:py-32 bg-background">
      <div className="w-full text-center mb-16 md:mb-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-primary font-headline uppercase tracking-[0.6em] text-[10px] md:text-xs mb-6 md:mb-8 block font-bold">
            <Sparkles size={14} className="inline-block mr-2 animate-pulse" /> The KCS Edge
          </span>
          <h2 className="text-3xl md:text-9xl font-bold mb-8 md:mb-12 tracking-tighter leading-none text-foreground font-headline">
            What Makes <br />
            <span className="text-primary italic">KCS Different.</span>
          </h2>
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 relative w-full px-6 max-w-7xl mx-auto"
      >
        {values.map((value, index) => (
          <ValueCard key={index} value={value} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
