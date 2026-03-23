"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, UserCircle, BarChart3 } from 'lucide-react'
import React from 'react'

const values = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge AI and neural architectures that redefine industry standards.",
    icon: Sparkles,
    color: "from-orange-500/10 via-amber-500/5 to-transparent",
    border: "border-orange-500/20",
    hoverBorder: "hover:border-primary/40"
  },
  {
    title: "Military Grade",
    description: "Encryption and infrastructure reliability that satisfies the most demanding global security protocols.",
    icon: ShieldCheck,
    color: "from-amber-600/10 via-orange-500/5 to-transparent",
    border: "border-amber-600/20",
    hoverBorder: "hover:border-primary/40"
  },
  {
    title: "Radical Impact",
    description: "We don't just build software; we architect the digital future of our partners' legacies.",
    icon: UserCircle,
    color: "from-yellow-500/10 via-orange-400/5 to-transparent",
    border: "border-yellow-500/20",
    hoverBorder: "hover:border-primary/40"
  },
  {
    title: "Proven Success",
    description: "Global success stories driven by data-centric methodologies and architectural excellence.",
    icon: BarChart3,
    color: "from-orange-600/10 via-amber-700/5 to-transparent",
    border: "border-orange-600/20",
    hoverBorder: "hover:border-primary/40"
  }
]

function ValueCard({ value, index }: { value: typeof values[0], index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 1, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      whileHover={{ y: -15, scale: 1.01 }}
      className={`p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-card/40 border ${value.border} ${value.hoverBorder} shadow-xl group relative overflow-hidden transition-all duration-500 cursor-none backdrop-blur-md`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10">
        <div 
          className="bg-primary/5 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] w-fit mb-6 md:mb-10 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm"
        >
          <value.icon className="w-8 h-8 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tighter text-foreground leading-tight">
          <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-[background-size] duration-1000 ease-out pb-1 inline">
            {value.title}
          </span>
        </h3>
        
        <p className="text-sm md:text-xl text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
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
          <span className="text-primary font-headline uppercase tracking-[0.6em] text-[10px] md:text-xs mb-6 md:mb-8 block font-bold">The Core Protocol</span>
          <h2 className="text-3xl md:text-9xl font-bold mb-8 md:mb-12 tracking-tighter leading-none text-foreground">
            Architectural <br />
            <span className="text-primary italic">Excellence.</span>
          </h2>
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 relative w-full px-6"
      >
        {values.map((value, index) => (
          <ValueCard key={index} value={value} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}