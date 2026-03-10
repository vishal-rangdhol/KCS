"use client"

import React, { useRef, useState, ReactNode, MouseEvent } from 'react'
import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Rocket, ArrowRight } from 'lucide-react'

export function CTAChapter() {
  return (
    <Chapter id="cta" className="py-24 overflow-visible">
      <div className="w-full relative rounded-[40px] md:rounded-[80px] p-12 md:p-32 text-center overflow-hidden border border-white/10 group">
        {/* Animated Gradient Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--primary)_0%,_var(--secondary)_50%,_var(--primary)_100%)] opacity-20 blur-[120px]"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-8xl font-bold mb-10 leading-tight tracking-tighter"
          >
            Ready to <br />
            <span className="text-primary italic">Transform</span> <br />
            Your Business?
          </motion.h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's collaborate to build the intelligent solutions that will define your organization's future in the digital era.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagneticWrapper>
              <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(62,128,219,0.4)] group border-none">
                Start the Journey
                <Rocket className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </MagneticWrapper>
            
            <MagneticWrapper>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg rounded-full border-white/20 hover:bg-white/10 group">
                View Case Studies
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticWrapper>
          </div>
        </div>
      </div>
    </Chapter>
  )
}

function MagneticWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPos({ x: x * 0.3, y: y * 0.3 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}
