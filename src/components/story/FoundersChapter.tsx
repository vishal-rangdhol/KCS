"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Shield, Sparkles, User, Scale } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const directors = [
  {
    id: "01",
    name: "Director Name 01",
    role: "Managing Director",
    designation: "EXECUTIVE_NODE",
    description: "Architect of the core KCS mission and long-term technical strategy.",
  },
  {
    id: "02",
    name: "Director Name 02",
    role: "Director",
    designation: "GOVERNANCE_NODE",
    description: "Ensuring operational integrity and alignment with global engineering standards.",
  }
]

export function FoundersChapter() {
  return (
    <Chapter id="founders" className="bg-background py-16 md:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[9px] md:text-xs mb-6 font-headline">
                <Scale size={14} className="text-primary/60" /> Governance Protocol
              </span>
              <h2 className="text-3xl md:text-7xl font-bold tracking-tighter leading-none text-foreground font-headline">
                Founding <br />
                <span className="text-primary italic">Architecture.</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="text-right">
            <p className="text-[10px] md:text-sm text-muted-foreground font-mono uppercase tracking-widest max-w-[200px]">
              KANDHUGULE CONSULTANCY SERVICES PVT LTD // BOARD_OF_DIRECTORS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-card/40 border border-white/5 hover:border-primary/20 transition-all duration-500 shadow-2xl backdrop-blur-md overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                <Shield size={120} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline block">
                      {director.designation}
                    </span>
                    <h3 className="text-xl md:text-3xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                      {director.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                    {director.role}
                  </div>
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed italic font-medium">
                    "{director.description}"
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] md:text-[10px] font-mono text-foreground/20">
                  <span>SYSTEM_INIT: SUCCESS</span>
                  <span>ID: {director.id} // SECURE</span>
                </div>
              </div>

              {/* Liquid Hover Indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] md:text-xs text-muted-foreground italic font-medium max-w-2xl mx-auto">
            KCS operates under strict architectural and legal governance to ensure the highest standards of digital infrastructure delivery for our global partners.
          </p>
        </div>
      </div>
    </Chapter>
  )
}
