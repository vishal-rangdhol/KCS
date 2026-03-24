
"use client"

import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { Shield, Activity, Scale, HeartPulse, Sparkles, CheckCircle2, UserCheck, ChevronDown, BookOpen, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
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
    manifesto: "Stability is the foundation upon which high-scale innovation is built.",
    size: "large"
  },
  {
    id: "02",
    name: "Kandhugule Nagu Bai",
    role: "Director",
    designation: "ORIGIN_NODE",
    description: "Ensuring operational compliance and strict adherence to global engineering standards.",
    manifesto: "Precision in operation ensures longevity in product.",
    size: "medium"
  },
  {
    id: "03",
    name: "Mali Patil Pratika",
    role: "Director",
    designation: "ARCHITECT_PRIMARY",
    description: "Guiding institutional growth and the ethical expansion of the digital narrative.",
    manifesto: "Ethical growth is the only sustainable path for digital infrastructure.",
    size: "medium"
  },
  {
    id: "04",
    name: "Hunusnale Sampatha",
    role: "Director",
    designation: "ARCHITECT_PRIMARY",
    description: "Driving administrative precision and high-fidelity operational workflows.",
    manifesto: "Workflows should be as optimized as the code they support.",
    size: "small"
  },
  {
    id: "05",
    name: "Kandhugule Krishna Kumar",
    role: "Director of Marketing and Sales",
    designation: "ARCHITECT_PRIMARY",
    description: "Architecting market penetration and scaling the KCS brand across global sectors.",
    manifesto: "A brand is the narrative that bridges technology and human impact.",
    size: "large"
  },
  {
    id: "06",
    name: "N. Shraddha Vas",
    role: "Head of Psychology & User Wellbeing",
    designation: "PSYCHOLOGY_INFRASTRUCTURE",
    type: "wellbeing",
    description: "Chief Architect of Mental Safety. Shraddha leads the clinical oversight for the Let's Catch Up ecosystem, ensuring that the digital infrastructure is psychologically grounded.",
    specializations: ["CRISIS_INTERVENTION", "CBT_PROTOCOLS", "REHAB_PSYCHOLOGY", "NEURODIVERSITY"],
    systemFocus: "Anxiety & Depression // Academic Burnout // PTSD // Trauma",
    manifesto: "Translating years of clinical expertise into the digital architecture where students actually spend their time.",
    size: "large",
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
        "group relative rounded-[2.5rem] border transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden flex flex-col h-full min-h-[500px]",
        isWellbeing 
          ? "bg-gradient-to-br from-gray-950/90 via-slate-900/60 to-primary/5" 
          : "bg-card/90 border-white/10 hover:border-primary/40",
      )}
    >
      <BlueprintBackground />

      <motion.div 
        animate={isWellbeing ? { 
          boxShadow: ["0 0 0px rgba(249,115,22,0)", "0 0 40px rgba(249,115,22,0.15)", "0 0 0px rgba(249,115,22,0)"],
          borderColor: ["rgba(255,255,255,0.05)", "rgba(249,115,22,0.3)", "rgba(255,255,255,0.05)"]
        } : {}}
        className={cn(
          "absolute inset-0 blur-[100px] rounded-full z-0",
          isHovered && !isWellbeing ? "bg-primary/5" : "opacity-0"
        )}
      />

      <div className="relative z-10 flex flex-col h-full p-6 md:p-10" style={{ transform: 'translateZ(40px)' }}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 items-start">
          <div className={cn(
            "relative w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/60 transition-colors duration-500 shrink-0 overflow-hidden shadow-2xl flex items-center justify-center",
            isWellbeing && "border-primary/20 bg-primary/5"
          )}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-white/5" />
            {isWellbeing ? (
              <HeartPulse className="w-10 h-10 md:w-16 md:h-16 text-primary/80 animate-pulse" strokeWidth={0.75} />
            ) : (
              <Shield className="w-10 h-10 md:w-16 md:h-16 text-primary/40" strokeWidth={0.5} />
            )}
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] text-primary/80 font-headline">
                <Activity size={10} className={cn("transition-colors", isHovered ? "text-primary" : "text-primary/40")} />
                {director.designation}
              </span>
              {isWellbeing && (
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[6px] font-bold uppercase tracking-widest backdrop-blur-xl">
                  <CheckCircle2 size={8} /> [ VERIFIED ]
                </div>
              )}
            </div>
            
            <h3 className="text-xl md:text-3xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors font-headline leading-tight">
              {director.name}
            </h3>
            
            <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
              {director.role}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-3">
            <h4 className="text-[8px] font-bold uppercase tracking-widest text-primary/60 font-mono">ROLE_OVERVIEW</h4>
            <p className="text-sm text-foreground/90 leading-relaxed italic font-medium border-l-2 border-primary/20 pl-6 group-hover:border-primary/50 transition-colors">
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
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3 overflow-hidden">
                    <div className="space-y-1">
                      <span className="text-[7px] uppercase tracking-widest text-primary/40 block">Academic_Credentials</span>
                      <p className="text-[10px] font-mono text-foreground/80 leading-relaxed">
                        {director.extraDetails.credentials}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[7px] uppercase tracking-widest text-primary/40 block">Professional_Status</span>
                      <p className="text-[10px] font-mono text-foreground/80 leading-relaxed">
                        {director.extraDetails.professionalTitle} // {director.extraDetails.sectors}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                        {director.extraDetails.fullNarrative}
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-3">
              <h4 className="text-[8px] font-bold uppercase tracking-widest text-primary/60 font-mono">CORE_SPECIALIZATIONS</h4>
              <div className="flex flex-wrap gap-2">
                {director.specializations?.map((spec: string) => (
                  <span key={spec} className="text-[8px] font-mono font-bold text-primary/80 bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            {isWellbeing && (
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <h4 className="text-[8px] font-bold uppercase tracking-widest text-primary/60 font-mono flex items-center gap-2">
                  <UserCheck size={10} /> SYSTEM_FOCUS
                </h4>
                <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">{director.systemFocus}</p>
              </div>
            )}
          </div>

          <div className="p-5 md:p-6 rounded-[2rem] bg-black/40 border border-white/10 space-y-4 shadow-inner mt-auto">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={12} className="text-primary/60" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/60 font-mono">
                {isWellbeing ? "HUMAN_CENTRIC_PROTOCOL" : "VISION_PROTOCOL"}
              </span>
            </div>
            <p className="text-xs text-foreground/80 leading-relaxed font-medium italic">
              "{director.manifesto}"
            </p>
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
            <Scale size={14} className="animate-pulse" /> [ GOVERNANCE_TERMINAL_V1.0 ]
          </span>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none font-headline">Founding <span className="text-primary italic">Board.</span></h1>
          <p className="text-sm md:text-xl text-muted-foreground italic font-medium max-w-2xl leading-relaxed">
            Architecting high-scale digital infrastructure with clinical safety and operational precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {directors.map((director, index) => (
            <FounderCard key={index} director={director} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
