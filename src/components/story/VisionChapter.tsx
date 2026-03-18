"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles, ShieldCheck, UserCircle, BarChart3 } from 'lucide-react'
import React, { useRef } from 'react'

const values = [
  {
    title: "Innovation at the core",
    description: "Pushing boundaries with cutting-edge AI and cloud architectures.",
    icon: Sparkles,
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Expertise you can trust",
    description: "Decades of combined experience in complex digital systems.",
    icon: ShieldCheck,
    color: "from-secondary/20 to-secondary/5"
  },
  {
    title: "Customer centric solutions",
    description: "We don't just build tech; we solve your specific business needs.",
    icon: UserCircle,
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Proven track record",
    description: "Success stories across diverse industries globally.",
    icon: BarChart3,
    color: "from-secondary/20 to-secondary/5"
  }
]

function ValueCard({ value, index }: { value: typeof values[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-8deg", "8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["8deg", "-8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.1 } }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${value.color} border border-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] group relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <motion.div 
          whileHover={{ scale: 1.15, rotate: -10 }}
          className="bg-background/40 p-5 rounded-2xl w-fit mb-8 border border-white/10 group-hover:border-primary/30 transition-all duration-500 shadow-xl"
        >
          <value.icon className="w-10 h-10 text-primary" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{value.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-lg sm:text-xl">
          {value.description}
        </p>
      </div>
    </motion.div>
  )
}

export function VisionChapter() {
  return (
    <Chapter id="vision" className="bg-card/20 py-32">
      <div className="w-full text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-headline uppercase tracking-[0.4em] text-xs sm:text-sm mb-6 block font-bold">The Vision</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-10 leading-[1.1] tracking-tighter">
            KCS helps organizations <br />
            <span className="text-secondary italic">transform complexity</span> <br />
            into innovation.
          </h2>
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 relative w-full perspective-2000"
      >
        {values.map((value, index) => (
          <ValueCard key={index} value={value} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
