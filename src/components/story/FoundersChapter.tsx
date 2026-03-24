"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Shield, Activity, Scale, Cpu, Database, Network } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'

const directors = [
  {
    id: "01",
    name: "Kandhugule Babu Rao",
    role: "Director",
    designation: "ORIGIN_NODE",
    description: "Overseeing executive alignment and long-term institutional stability within the KCS ecosystem.",
    manifesto: "Stability is the foundation upon which high-scale innovation is built.",
    size: "large"
  },
  {
    id: "02",
    name: "Kandhugule Nagu Bai",
    role: "Director",
    designation: "ORIGIN_NODE",
    description: "Ensuring operational compliance and strict adherence to global engineering standards.",
    manifesto: "Precision in operation ensures longevity in product.",
    size: "medium"
  },
  {
    id: "03",
    name: "Mali Patil Pratika",
    role: "Director",
    designation: "ARCHITECT_PRIMARY",
    description: "Guiding institutional growth and the ethical expansion of the digital narrative.",
    manifesto: "Ethical growth is the only sustainable path for digital infrastructure.",
    size: "medium"
  },
  {
    id: "04",
    name: "Hunusnale Sampatha",
    role: "Director",
    designation: "ARCHITECT_PRIMARY",
    description: "Driving administrative precision and high-fidelity operational workflows.",
    manifesto: "Workflows should be as optimized as the code they support.",
    size: "small"
  },
  {
    id: "05",
    name: "Kandhugule Krishna Kumar",
    role: "Director of Marketing and Sales",
    designation: "ARCHITECT_PRIMARY",
    description: "Architecting market penetration and scaling the KCS brand across global sectors.",
    manifesto: "A brand is the narrative that bridges technology and human impact.",
    size: "large"
  }
]

function BlueprintBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.1" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.1" />
      </svg>
    </div>
  )
}

function FounderCard({ director, index }: { director: typeof directors[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(mouseX)
    y.set(mouseY)
  }

  function handleMouseLeave() {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn(
        "group relative rounded-[2.5rem] bg-card/40 border border-white/5 hover:border-primary/20 transition-all duration-700 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col h-full",
        director.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
      )}
    >
      <BlueprintBackground />
      
      <motion.div 
        animate={{ 
          scale: isHovered ? [1, 1.1, 1] : 1,
          opacity: isHovered ? 0.4 : 0
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-primary/10 blur-3xl rounded-full z-0"
      />

      <div className="relative z-10 flex flex-col h-full p-6 md:p-10" style={{ transform: 'translateZ(30px)' }}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 items-start">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors duration-500 shrink-0 overflow-hidden">
            {/* Empty Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          </div>

          <div className="space-y-2">
            <span className="flex items-center gap-2 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] text-primary/60 font-headline">
              <Activity size={10} className={cn("transition-colors", isHovered ? "text-primary" : "text-primary/40")} />
              {director.designation}
            </span>
            <h3 className="text-xl md:text-3xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors font-headline leading-none">
              {director.name}
            </h3>
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
              {director.role}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic font-medium border-l-2 border-primary/20 pl-6 group-hover:border-primary/50 transition-colors">
            "{director.description}"
          </p>

          <div className="p-4 rounded-2xl bg-black/20 border border-white/5 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Shield size={12} className="text-primary/60" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/40 font-mono">VISION_PROTOCOL</span>
            </div>
            <p className="text-[10px] md:text-xs text-foreground/80 leading-relaxed font-medium">
              {director.manifesto}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FoundersChapter() {
  return (
    <Chapter id="founders" className="bg-background py-16 md:py-32 lg:py-48 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-32">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-2 text-primary font-bold tracking-[0.5em] md:tracking-[0.6em] uppercase text-[9px] md:text-xs mb-6 font-headline">
                <Scale size={14} className="text-primary/60 animate-pulse" /> Governance Protocol
              </span>
              <h2 className="text-3xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground font-headline">
                Founding <br />
                <span className="text-primary italic">Architecture.</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="text-right hidden md:block">
            <p className="text-[10px] md:text-sm text-muted-foreground font-mono uppercase tracking-[0.3em] max-w-[300px] leading-relaxed">
              KANDHUGULE CONSULTANCY SERVICES PVT LTD // <span className="text-primary">BOARD_OF_DIRECTORS</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {directors.map((director, index) => (
            <FounderCard key={index} director={director} index={index} />
          ))}
        </div>

        <div className="mt-24 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12 text-[9px] md:text-[11px] font-mono text-primary/40 uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3">
              <Cpu size={14} /> SYSTEM_STATUS: SECURE
            </div>
            <div className="flex items-center gap-3">
              <Database size={14} /> ARCHIVE_ID: KCS_LEADERSHIP_V1
            </div>
            <div className="flex items-center gap-3">
              <Network size={14} /> SYNC_STATE: OPTIMIZED
            </div>
          </div>
          
          <p className="text-[10px] md:text-xs text-muted-foreground italic font-medium max-w-xl text-center md:text-right">
            Operating under high-fidelity governance protocols to ensure the global scaling of the KCS digital narrative.
          </p>
        </div>
      </div>
    </Chapter>
  )
}
