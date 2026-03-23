
"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import { MapPin, ArrowLeft, Sparkles, Briefcase, Clock, Zap, Cpu, Code, Shield, Share2, Rocket, Heart, CheckCircle2, LayoutPanelLeft, Focus, Eye, Settings, Layers, Terminal as TerminalIcon, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Digital Odometer Component
function OdometerNumber({ num, label }: { num: string, label?: string }) {
  const [display, setDisplay] = useState(num)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      setDisplay(num)
      return
    }

    let iterations = 0
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 90 + 10).toString()
      setDisplay(randomValue)
      
      iterations++
      if (iterations > 10) {
        clearInterval(interval)
        setDisplay(num)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [isHovering, num])

  return (
    <div 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="flex flex-col gap-1 cursor-default"
    >
      <span className="font-mono text-primary font-bold tracking-tighter text-lg">
        [{display}]
      </span>
      {label && <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/60 font-mono">{label}</span>}
    </div>
  )
}

// AI Sentinel Eye Component
function SentinelEye() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x * 0.1)
      mouseY.set(y * 0.1)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={ref} className="relative w-12 h-12 flex items-center justify-center">
      <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse" />
      <motion.div 
        style={{ x: mouseX, y: mouseY }}
        className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]"
      >
        <div className="w-1.5 h-1.5 bg-white/40 rounded-full m-1" />
      </motion.div>
    </div>
  )
}

// Career Pipeline Header
function CareerPipeline() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div className="fixed top-0 left-0 right-0 z-[120] h-1 bg-white/5">
      <motion.div 
        style={{ scaleX }} 
        className="h-full bg-primary shadow-[0_0_15px_#F97316] origin-left"
      />
      <div className="absolute top-2 left-4 text-[7px] font-mono text-primary/60 tracking-widest uppercase">
        SYSTEM_LOAD: CAREER_PATH_INITIALIZED // {Math.round(scrollYProgress.get() * 100)}%
      </div>
    </div>
  )
}

// Terminal Job Card
function TerminalJobCard({ job }: { job: any }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClassificationActive, setIsClassificationActive] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const handleApplyClick = () => {
    if (job.id === 'ai-intern') {
      setIsClassificationActive(true)
      setTimeout(() => setIsClassificationActive(false), 1000)
    }
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-[1px] rounded-[2rem] overflow-hidden bg-white/5 transition-all duration-500",
        job.size === 'large' ? "md:col-span-7" : "md:col-span-5"
      )}
    >
      {/* Circuit Trace SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.rect
          x="0" y="0" width="100" height="100" fill="none" stroke="var(--primary)" strokeWidth="0.3" strokeDasharray="400"
          initial={{ strokeDashoffset: 400 }}
          animate={isHovered ? { strokeDashoffset: 0 } : { strokeDashoffset: 400 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Internal Content Terminal */}
      <div className="relative z-10 bg-gray-950 p-8 md:p-12 rounded-[2rem] h-full border border-white/5 flex flex-col group-hover:bg-black/80 transition-all duration-500">
        
        {/* Background Visual Overlays */}
        {job.id === 'devops-intern' && isHovered && (
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden font-mono text-[8px] p-4 text-primary leading-tight">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="whitespace-nowrap">DEPLOYMENT_LOG_{Math.random().toString(36).substring(7)}... SUCCESS</div>
            ))}
          </div>
        )}
        
        {job.id === 'mern-intern' && isHovered && (
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center font-mono text-[60px] font-bold text-primary">
            npm install
          </div>
        )}

        {job.id === 'bd-intern' && isHovered && (
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path d="M10,50 Q25,25 40,50 T70,50" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="2 2" />
              <circle cx="40" cy="50" r="2" fill="var(--primary)" />
            </svg>
          </div>
        )}

        <div className="flex justify-between items-start mb-8 relative z-20">
          <div className="space-y-2">
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono">
              {job.category} // {isClassificationActive ? 'CLASSIFICATION: ACTIVE' : '2026_PROT'}
            </span>
            <h3 className="text-xl md:text-3xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors font-headline">
              {job.title}
            </h3>
          </div>
          <div className="flex items-center gap-4">
            {job.id === 'ai-intern' && <SentinelEye />}
            {job.id === 'mern-intern' && <Layers className="text-primary/40 group-hover:text-primary transition-colors" />}
            {job.id === 'devops-intern' && <Settings className="text-primary/40 group-hover:text-primary animate-spin-slow" />}
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
          </div>
        </div>

        <div className="flex-1 space-y-8 relative z-20">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic font-medium border-l border-primary/20 pl-4">
            {job.overview}
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
            <OdometerNumber num={job.location.split(',')[0]} label="STATION" />
            <OdometerNumber num={job.duration.split(' ')[0]} label="TIMELINE" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 relative z-20">
          {job.tech.map((tech: string) => (
            <motion.div 
              key={tech}
              whileHover={{ scale: 1.1, color: '#F97316' }}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[7px] font-mono text-primary/40 uppercase tracking-widest cursor-crosshair"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 relative z-20">
           <button 
            onClick={handleApplyClick}
            className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary hover:text-white transition-colors flex items-center gap-2 group/btn"
           >
            INITIALIZE_APPLICATION
            <ArrowLeft className="rotate-180 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Application Terminal CTA
function ApplicationTerminal() {
  const [isUplinking, setIsUplinking] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleInitialize = () => {
    setIsUplinking(true)
    let p = 0
    const interval = setInterval(() => {
      p += 5
      setProgress(p)
      if (p >= 100) {
        clearInterval(interval)
        window.location.href = "mailto:info@kandhugule-kcs.com?subject=2026 Internship Application - [Role Name]"
        setTimeout(() => {
          setIsUplinking(false)
          setProgress(0)
        }, 1000)
      }
    }, 50)
  }

  return (
    <section className="relative w-full py-24 md:py-48 px-6 overflow-hidden rounded-[3rem] bg-black border border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0b00_0%,_transparent_100%)] opacity-40" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 font-mono text-primary/60 text-[10px] tracking-widest"
        >
          guest@kcs:~$ run apply_protocol
        </motion.div>

        <h2 className="text-3xl md:text-7xl font-bold tracking-tighter mb-8 font-headline">
          10 Seats. One Mission. <br />
          <span className="text-primary italic">Your permanent seat at the table.</span>
        </h2>
        
        <p className="text-sm md:text-xl text-muted-foreground mb-16 leading-relaxed italic max-w-2xl mx-auto">
          We don't hire "helpers." We recruit future colleagues. Our 90-day gauntlet is designed to transition the top 10% of talent into Full-Time Engineering and Business roles.
        </p>

        <div className="flex flex-col items-center gap-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              disabled={isUplinking}
              onClick={handleInitialize}
              className="h-14 md:h-20 px-8 md:px-16 rounded-full bg-primary text-white font-bold text-sm md:text-xl group shadow-[0_10px_40px_rgba(249,115,22,0.4)] border-none relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isUplinking ? `UPLINKING_DATA_${progress}%` : 'INITIALIZE_APPLICATION'}
                {!isUplinking && <Rocket size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />}
              </span>
              {isUplinking && (
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: `${progress - 100}%` }}
                  className="absolute inset-0 bg-white/20"
                />
              )}
            </Button>
          </motion.div>

          <div className="flex gap-8 text-[8px] md:text-[10px] font-mono text-primary/40 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Clock size={12} /> 90 DAYS INTENSITY
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} /> THE ENGINE ROOM, HYD
            </div>
            <div className="flex items-center gap-2">
              <Zap size={12} /> PERFORMANCE-LED BENEFITS
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isUplinking && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center backdrop-blur-md"
          >
            <div className="text-center space-y-8">
              <div className="text-primary font-mono text-4xl animate-pulse">UPLINKING_DATA...</div>
              <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const jobs = [
  {
    id: "mern-intern",
    title: "MERN Full Stack Architect",
    category: "ENGINEERING",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Architect responsive user interfaces and develop scalable backend services using the MERN stack. Transition into an FTE Architect role.",
    tech: ['React', 'NodeJS', 'MongoDB', 'Express'],
    size: 'large'
  },
  {
    id: "ai-intern",
    title: "AI Engineer Sentinel",
    category: "RESEARCH_AI",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Develop machine learning models for automated content moderation and precision safety using Gemini and custom NLP pipelines.",
    tech: ['Python', 'PyTorch', 'Gemini', 'NLP'],
    size: 'large'
  },
  {
    id: "devops-intern",
    title: "DevOps Infrastructure Intern",
    category: "INFRASTRUCTURE",
    location: "Remote / HYD",
    duration: "3 Months",
    overview: "Support automated deployment pipelines and manage global cloud infrastructure. Focus on Kubernetes and high-availability systems.",
    tech: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    size: 'medium'
  },
  {
    id: "bd-intern",
    title: "Growth Engine Intern",
    category: "STRATEGY",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Drive market expansion through direct B2B outreach and software adoption strategies for our healthcare and education platforms.",
    tech: ['CRM', 'SEO', 'B2B', 'Growth'],
    size: 'medium'
  }
]

export default function CareersPage() {
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const timer = setTimeout(() => setIsPoweredOn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <CareerPipeline />
      <ThreeBackground />
      
      {/* Power-On Sequence Overlay */}
      <AnimatePresence>
        {!isPoweredOn && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-px w-full bg-primary shadow-[0_0_20px_#F97316]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={isPoweredOn ? { opacity: 1 } : { opacity: 0 }}
        className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] font-mono">BACK_TO_STORY</span>
          </Link>
        </div>

        {/* Career Pipeline Roadmap */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between border-y border-white/5 py-12">
            {[
              { id: '01', title: 'Deep Integration', period: 'MONTH 1-2', desc: 'System immersion.' },
              { id: '02', title: 'Performance Eval', period: 'MONTH 3', desc: 'High-impact delivery.' },
              { id: '03', title: 'FTE Conversion', period: 'POST-PROGRAM', desc: 'Permanent seating.' },
            ].map((phase, i) => (
              <React.Fragment key={phase.id}>
                <div className="flex-1 text-center lg:text-left space-y-4">
                  <div className="text-[10px] font-mono text-primary font-bold">PHASE_{phase.id}</div>
                  <h4 className="text-xl md:text-2xl font-bold font-headline">{phase.title}</h4>
                  <p className="text-[9px] font-mono text-muted-foreground tracking-widest uppercase">{phase.period}</p>
                  <p className="text-xs italic text-muted-foreground">{phase.desc}</p>
                </div>
                {i < 2 && <div className="hidden lg:block w-px h-12 bg-white/10" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Mission Hub */}
        <section className="mb-32 md:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-10 font-mono">
                <Sparkles size={12} className="animate-pulse" /> SYSTEM_PROTOCOL: TALENT
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 font-headline">
                Architect the <br /> <span className="text-primary italic">future with us.</span>
              </h1>
              <div className="space-y-8">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono">CORE_VISION</h2>
                <p className="text-base md:text-2xl text-foreground font-medium leading-tight italic max-w-md">
                  KCS aims to become a global product lab for digital infrastructure, supporting the next era of business through precision engineering.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-[400px] md:h-[600px] rounded-[3rem] bg-card/20 border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_70%)]" />
              <svg className="w-full h-full p-12 md:p-20" viewBox="0 0 400 400">
                <motion.g animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="opacity-40">
                  <circle cx="200" cy="100" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
                  <circle cx="100" cy="280" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
                  <circle cx="300" cy="280" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
                  <line x1="200" y1="140" x2="100" y2="240" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="200" y1="140" x2="300" y2="240" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" />
                </motion.g>
                <text x="200" y="105" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">HEALTHCARE</text>
                <text x="100" y="285" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">EDUCATION</text>
                <text x="300" y="285" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">INFRASTRUCTURE</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Position Grid */}
        <section className="mb-32 md:mb-64">
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-mono">2026_ARCHITECTURE_PIPELINE</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {jobs.map((job) => (
              <TerminalJobCard key={job.id} job={job} />
            ))}
          </div>
        </section>

        {/* Application Terminal CTA */}
        <ApplicationTerminal />
      </motion.div>

      <Footer />
    </main>
  )
}
