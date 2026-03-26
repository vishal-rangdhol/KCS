"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Scale, ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function FoundersChapter() {
  return (
    <Chapter id="founders" className="bg-background py-4 md:py-20 lg:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold tracking-[0.5em] md:tracking-[0.6em] uppercase text-[9px] md:text-xs mb-6 font-headline">
                <Scale size={14} className="text-primary/60 animate-pulse" /> Governance Protocol
              </span>
              <h2 className="text-3xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground font-headline">
                Founding <br />
                <span className="text-primary italic">Architecture.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-8 text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed italic font-medium"
            >
              The KCS Board of Directors governs our digital infrastructure with a focus on institutional stability, 
              architectural precision, and the ethical integration of human-centric safety protocols. Our leadership 
              ensures that every platform we engineer is built for long-term growth and societal impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 md:mt-12"
            >
              <Button 
                asChild
                variant="outline" 
                className="rounded-full border-primary/20 hover:border-primary text-primary bg-primary/5 hover:bg-primary hover:text-white transition-all group px-10 h-14 md:h-16 text-sm font-bold shadow-xl backdrop-blur-md"
              >
                <Link href="/founders">
                  Access Board Dossiers <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
            <p className="text-[10px] md:text-sm text-muted-foreground font-mono uppercase tracking-[0.3em] max-w-[200px] leading-relaxed text-right relative z-10">
              KANDHUGULE CONSULTANCY SERVICES PVT LTD // <span className="text-primary">BOARD_OF_DIRECTORS</span>
            </p>
          </div>
        </div>
      </div>
    </Chapter>
  )
}
