
"use client"

import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { Activity, Sparkles, CheckCircle2, UserCheck, ChevronDown, BookOpen, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { cn } from '@/lib/utils'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const directors = [
  {
    id: "01",
    name: "Kandhugule Babu Rao",
    role: "Director",
    designation: "ORIGIN_NODE",
    description: "Overseeing executive alignment and long-term institutional stability within the KCS ecosystem.",
    size: "large"
  },
  {
    id: "02",
    name: "Kandhugule Nagu Bai",
    role: "Director",
    designation: "ORIGIN_NODE",
    description: "Ensuring operational compliance and strict adherence to global engineering standards.",
    size: "medium"
  },
  {
    id: "03",
    name: "Mali Patil Pratika",
    role: "Director",
    designation: "ARCHITECT_PRIMARY",
    description: "Guiding institutional growth and the ethical expansion of the digital narrative.",
    size: "medium"
  },
  {
    id: "04",
    name: "Hunusnale Sampatha",
    role: "Director",
    designation: "ARCHITECT_PRIMARY",
    description: "Driving administrative precision and high-fidelity operational workflows.",
    size: "small"
  },
  {
    id: "05",
    name: "Kandhugule Krishna Kumar",
    role: "Director of Marketing and Sales",
    designation: "ARCHITECT_PRIMARY",
    description: "Architecting market penetration and scaling the KCS brand across global sectors.",
    size: "large"
  },
  {
    id: "06",
    name: "N. Shraddha Vas",
    role: "Head of Psychology & User Wellbeing",
    designation: "PSYCHOLOGY_INFRASTRUCTURE",
    type: "wellbeing",
    description: "Chief Architect of Mental Safety. Shraddha leads the clinical oversight for the Let's Catch Up ecosystem, ensuring that the digital infrastructure is psychologically grounded.",
    size: "xl",
    extraDetails: {
      credentials: "MSc. Clinical Psychology · PGDRP Rehabilitation Psychology",
      professionalTitle: "Clinical & Rehabilitation Psychologist",
      sectors: "School · Private · Public sectors",
      fullNarrative: "The psychology brain behind Let's Catch Up. Shraddha and her team make sure every space on the platform — school, private, public — is genuinely safe, not just on paper. CBT, crisis intervention, child psychology, rehab programs — she's done it all clinically and now brings that expertise to where students actually spend their time."
    }
  }
]

function BlueprintBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.1" />
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.1" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.1" />
      </svg>
    </div>
  )
}

function FounderCard({ director, index }: { director: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 20 })

  const isWellbeing = director.type === "wellbeing"

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn(
        "group relative rounded-[2.5rem] border transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden flex flex-col h-full min-h-[400px]",
        isWellbeing 
          ? "bg-gradient-to-br from-gray-950/90 via-slate-900/60 to-primary/5 border-primary/20" 
          : "bg-card/90 border-white/10 hover:border-primary/40",
      )}
    >
      <BlueprintBackground />

      {isWellbeing && (
        <motion.div 
          animate={{ 
            boxShadow: ["0 0 0px rgba(249,115,22,0)", "0 0 40px rgba(249,115,22,0.15)", "0 0 0px rgba(249,115,22,0)"],
            borderColor: ["rgba(255,255,255,0.05)", "rgba(249,115,22,0.3)", "rgba(255,255,255,0.05)"]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none z-0"
        />
      )}

      <div className="relative z-10 flex flex-col h-full p-8 md:p-10" style={{ transform: 'translateZ(40px)' }}>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] text-primary/80 font-headline">
              <Activity size={10} className={cn("transition-colors", isHovered ? "text-primary" : "text-primary/40")} />
              {director.designation}
            </span>
            {isWellbeing && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[7px] font-bold uppercase tracking-widest backdrop-blur-xl">
                <CheckCircle2 size={10} /> [ HUMAN_CENTRIC_AUDIT: PASSED ]
              </div>
            )}
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors font-headline leading-tight">
            {director.name}
          </h3>
          
          <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
            {director.role}
          </div>
        </div>

        <div className={cn("flex-1 grid gap-8", director.size === 'xl' ? "lg:grid-cols-2" : "grid-cols-1")}>
          <div className="space-y-8">
            <div className="space-y-3">
              <h4 className="text-[8px] font-bold uppercase tracking-widest text-primary/60 font-mono">ROLE_OVERVIEW</h4>
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed italic font-medium border-l-2 border-primary/20 pl-6 group-hover:border-primary/50 transition-colors">
                "{director.description}"
              </p>
            </div>

            {isWellbeing && director.extraDetails && (
              <div className="space-y-4">
                <Collapsible
                  open={isOpen}
                  onOpenChange={setIsOpen}
                  className="w-full space-y-2"
                >
                  <div className="flex items-center justify-between space-x-4 px-0">
                    <h4 className="text-[8px] font-bold uppercase tracking-widest text-primary/60 font-mono flex items-center gap-2">
                      <BookOpen size={10} /> CLINICAL_DOSSIER
                    </h4>
                    <CollapsibleTrigger asChild>
                      <button className="p-1 rounded-lg hover:bg-white/5 transition-colors group/trigger">
                        <ChevronDown 
                          size={14} 
                          className={cn(
                            "text-primary/60 transition-transform duration-300",
                            isOpen ? "rotate-180" : "rotate-0"
                          )} 
                        />
                      </button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-4 overflow-hidden backdrop-blur-md">
                      <div className="space-y-1">
                        <span className="text-[7px] uppercase tracking-widest text-primary/40 block">Academic_Credentials</span>
                        <p className="text-[11px] font-mono text-foreground/80 leading-relaxed">
                          {director.extraDetails.credentials}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[7px] uppercase tracking-widest text-primary/40 block">Professional_Status</span>
                        <p className="text-[11px] font-mono text-foreground/80 leading-relaxed">
                          {director.extraDetails.professionalTitle} // {director.extraDetails.sectors}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                          {director.extraDetails.fullNarrative}
                        </p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FoundersPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThreeBackground />

      <div className="relative z-10 pt-28 md:pt-40 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline">BACK_TO_STORY</span>
          </Link>
        </div>

        <div className="mb-16 md:mb-24 space-y-6">
          <span className="flex items-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] font-headline">
            <Activity size={14} className="animate-pulse" /> [ GOVERNANCE_TERMINAL_V1.0 ]
          </span>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none font-headline">Founding <span className="text-primary italic">Board.</span></h1>
          <p className="text-sm md:text-xl text-muted-foreground italic font-medium max-w-2xl leading-relaxed">
            Architecting high-scale digital infrastructure with clinical safety and operational precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {directors.map((director, index) => (
            <div 
              key={index} 
              className={cn(
                "transition-all duration-700",
                director.size === 'xl' ? "lg:col-span-2 lg:row-span-1" : ""
              )}
            >
              <FounderCard director={director} index={index} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
