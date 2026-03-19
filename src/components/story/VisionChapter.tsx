"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, ShieldCheck, UserCircle, BarChart3 } from 'lucide-react'
import React, { useRef } from 'react'

const values = [
  {
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge AI and neural architectures that redefine industry standards.",
    icon: Sparkles,
    color: "from-orange-500/30 via-amber-500/10 to-transparent",
    border: "border-orange-500/20",
    glow: "rgba(249, 115, 22, 0.3)"
  },
  {
    title: "Military Grade",
    description: "Encryption and infrastructure reliability that satisfies the most demanding global security protocols.",
    icon: ShieldCheck,
    color: "from-amber-600/30 via-orange-500/10 to-transparent",
    border: "border-amber-600/20",
    glow: "rgba(217, 119, 6, 0.3)"
  },
  {
    title: "Radical Impact",
    description: "We don't just build software; we architect the digital future of our partners' legacies.",
    icon: UserCircle,
    color: "from-yellow-500/30 via-orange-400/10 to-transparent",
    border: "border-yellow-500/20",
    glow: "rgba(234, 179, 8, 0.3)"
  },
  {
    title: "Proven Success",
    description: "Global success stories driven by data-centric methodologies and architectural excellence.",
    icon: BarChart3,
    color: "from-orange-600/30 via-amber-700/10 to-transparent",
    border: "border-orange-600/20",
    glow: "rgba(234, 88, 12, 0.3)"
  }
]

function ValueCard({ value, index }: { value: typeof values[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-12deg", "12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 50, rotateX: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          transition: { duration: 1, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`p-10 rounded-[3rem] bg-background/40 border ${value.border} backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] group relative overflow-visible cursor-none`}
    >
      {/* Background Energy Glow - Rounded */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px] rounded-[3rem]"
        style={{
          background: value.glow,
          transform: "translateZ(-40px)"
        }}
      />
      
      <div style={{ transform: "translateZ(80px)" }} className="relative z-10">
        <motion.div 
          whileHover={{ scale: 1.3, rotate: -15 }}
          className={`bg-white/5 p-6 rounded-[2rem] w-fit mb-10 border border-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500`}
        >
          <value.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
        </motion.div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">
          {value.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-xl group-hover:text-white transition-colors duration-300">
          {value.description}
        </p>
      </div>

      {/* Decorative gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 rounded-[3rem]`} />
    </motion.div>
  )
}

export function VisionChapter() {
  return (
    <Chapter id="vision" className="py-32 bg-background/50">
      <div className="w-full text-center mb-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-primary font-headline uppercase tracking-[0.6em] text-xs mb-8 block font-bold">The Core Protocol</span>
          <h2 className="text-5xl md:text-9xl font-bold mb-12 tracking-tighter leading-none">
            Architectural <br />
            <span className="text-secondary italic">Excellence.</span>
          </h2>
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 relative w-full perspective-3000 px-6"
      >
        {values.map((value, index) => (
          <ValueCard key={index} value={value} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
