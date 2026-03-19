
"use client"

import React, { useRef, useState, ReactNode, MouseEvent } from 'react'
import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'

export function CTAChapter() {
  return (
    <Chapter id="cta" className="py-20 overflow-visible px-4 sm:px-6">
      <div className="w-full relative rounded-[2rem] sm:rounded-[3rem] md:rounded-[80px] p-8 sm:p-12 md:p-32 text-center overflow-hidden border border-white/10 group">
        {/* Animated Gradient Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_var(--primary)_0%,_var(--secondary)_50%,_var(--primary)_100%)] opacity-20 blur-[60px] sm:blur-[120px]"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl sm:text-5xl md:text-8xl font-bold mb-6 sm:mb-10 leading-tight tracking-tighter"
          >
            Ready to <br />
            <span className="text-primary italic">Transform</span> <br />
            Your Business?
          </motion.h2>
          
          <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Let's collaborate to build the intelligent solutions that will define your organization's future in the digital era.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <MagneticWrapper>
              <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(62,128,219,0.4)] group border-none w-full sm:w-auto">
                Start the Journey
                <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
    if (window.innerWidth < 768) return
    const div = ref.current
    if (!div) return
    
    const { clientX, clientY } = e
    const { left, top, width, height } = div.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const x = clientX - centerX
    const y = clientY - centerY
    
    const factor = 0.3
    setPos({ x: x * factor, y: y * factor })
  }

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block w-full sm:w-auto"
    >
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
