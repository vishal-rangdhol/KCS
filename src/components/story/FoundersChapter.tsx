"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Shield, User, Scale } from 'lucide-react'
import React from 'react'

const directors = [
  {
    id: "01",
    name: "Kandhugule Babu Rao",
    role: "Director",
    designation: "GOVERNANCE_NODE",
    description: "Overseeing executive alignment and long-term institutional stability within the KCS ecosystem.",
  },
  {
    id: "02",
    name: "Kandhugule Nagu Bai",
    role: "Director",
    designation: "GOVERNANCE_NODE",
    description: "Ensuring operational compliance and strict adherence to global engineering standards.",
  },
  {
    id: "03",
    name: "Mali Patil Pratika",
    role: "Director",
    designation: "GOVERNANCE_NODE",
    description: "Guiding institutional growth and the ethical expansion of the digital narrative.",
  },
  {
    id: "04",
    name: "Hunusnale Sampatha",
    role: "Director",
    designation: "GOVERNANCE_NODE",
    description: "Driving administrative precision and high-fidelity operational workflows.",
  },
  {
    id: "05",
    name: "Kandhugule Krishna Kumar",
    role: "Director of Marketing and Sales",
    designation: "STRATEGIC_NODE",
    description: "Architecting market penetration and scaling the KCS brand across global technology sectors.",
  }
]

export function FoundersChapter() {
  return (
    <Chapter id="founders" className="bg-background py-16 md:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24 border-b border-black/5 pb-12">
          <div className="max-w-2xl text-left">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 md:p-10 rounded-[2rem] bg-card/40 border border-black/5 hover:border-primary/20 transition-all duration-500 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                <Shield size={100} strokeWidth={0.5} />
              </div>

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 md:p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline block">
                      {director.designation}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                      {director.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[8px] md:text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                    {director.role}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic font-medium">
                    "{director.description}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 flex justify-between items-center text-[7px] md:text-[8px] font-mono text-foreground/20">
                <span>SYSTEM_ID: {director.id}</span>
                <span>STATUS: SECURE_NODE</span>
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
