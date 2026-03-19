"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Focus, Heart, Sparkles, ShieldCheck } from 'lucide-react'
import React, { useRef } from 'react'

const pillars = [
  { icon: Focus, title: "Deep Focus", text: "We prioritize deep work over constant distraction." },
  { icon: Heart, title: "Sustainable", text: "Balance is the fuel for long-term technical excellence." },
  { icon: ShieldCheck, title: "Reliability", text: "Teams that thrive build products that last." }
]

function PillarCard({ item, index }: { item: typeof pillars[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const rect = e.currentTarget.getBoundingClientRect()
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:border-primary/20 transition-all group shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-black/5 mb-8 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm text-primary">
          <item.icon size={22} />
        </div>
        <h3 className="text-xl font-bold mb-4 font-headline text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{item.text}</p>
      </div>

      <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:8px_8px]" />
      </div>
    </motion.div>
  )
}

export function CultureChapter() {
  return (
    <Chapter id="culture" className="bg-background py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Philosophy Header - Styled like Careers Page */}
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-10 font-headline">
              <Sparkles size={14} className="animate-pulse" /> The KCS Conviction
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-12 font-headline">
              Built on <br />
              <span className="text-primary italic">Focus, Not Burnout.</span>
            </h2>
            
            <div className="py-16 border-y border-black/5 mb-16 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
               <p className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground max-w-5xl mx-auto px-4 italic">
                "Great technology is built by balanced, inspired teams."
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              The tech industry runs on burnout. We run on focus. At KCS, we believe sustainable engineering environments produce cleaner architecture, stronger products, and more reliable platforms for the people who depend on them.
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid - Standardized with Careers Page Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} item={pillar} index={i} />
          ))}
        </div>
      </div>
    </Chapter>
  )
}
