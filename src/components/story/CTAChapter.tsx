"use client"

import React, { useRef, useState, ReactNode, MouseEvent } from 'react'
import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export function CTAChapter() {
  return (
    <Chapter id="cta" className="py-20 overflow-visible px-4 sm:px-6">
      <div className="w-full relative rounded-[2rem] sm:rounded-[3rem] md:rounded-[80px] p-8 sm:p-12 md:p-32 text-center overflow-hidden border border-white/5 group bg-card/40 shadow-2xl backdrop-blur-md">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(249,115,22,0.1)_0%,_rgba(251,191,36,0.1)_50%,_rgba(249,115,22,0.1)_100%)] opacity-30 blur-[60px] sm:blur-[120px]"
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-10 leading-tight tracking-tighter text-foreground"
          >
            Let's Build <br />
            <span className="text-primary italic">Something Great.</span>
          </motion.h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
            Whether you're launching a new platform or modernizing your infrastructure, KCS Product Lab can help you design and scale the technology behind your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <MagneticWrapper>
              <Button 
                variant="outline"
                size="lg" 
                asChild
                className="h-14 sm:h-20 px-8 sm:px-14 text-base sm:text-lg rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white shadow-2xl group w-full sm:w-auto font-bold transition-all duration-300"
              >
                <Link href="/contact">
                  Start Your Project
                  <Rocket className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
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
    
    const factor = 0.2
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
