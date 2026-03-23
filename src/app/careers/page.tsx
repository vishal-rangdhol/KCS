
"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import { MapPin, ArrowLeft, Sparkles, Briefcase, Clock, Zap, Cpu, Code, Shield, Share2, Rocket, Heart, CheckCircle2, LayoutPanelLeft, Focus } from 'lucide-react'
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

// Magnetic Icon Component
function MagneticIcon({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    x.set((clientX - centerX) * 0.4)
    y.set((clientY - centerY) * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="p-2 rounded-lg bg-white/5 border border-white/10 text-primary/60 hover:text-primary transition-colors"
    >
      {children}
    </motion.div>
  )
}

// Conviction Tombstone Card
function ConvictionCard({ id, title, text, icon: Icon }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative p-8 md:p-12 rounded-[2rem] bg-gray-950 border transition-all duration-700 flex flex-col items-center text-center group",
        "hover:scale-[1.02] shadow-2xl",
        isInView ? "border-primary/40 shadow-[0_0_30px_rgba(249,115,22,0.15)]" : "border-white/5"
      )}
    >
      <div className="absolute top-4 left-6 text-[4rem] font-bold font-headline text-white/[0.02] pointer-events-none font-mono">
        {id}
      </div>
      
      {/* SVG Neon Glow Filter Effect */}
      <div className={cn(
        "p-5 rounded-2xl bg-primary/10 text-primary mb-8 group-hover:scale-110 transition-all duration-500",
        isInView ? "shadow-[0_0_20px_rgba(249,115,22,0.4)]" : ""
      )}>
        <Icon size={32} strokeWidth={1.5} />
      </div>

      <h4 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase tracking-tighter group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic font-medium max-w-[240px]">
        {text}
      </p>
    </motion.div>
  )
}

// Internship Card with Circuit Trace
function InternshipCard({ job, size }: { job: any, size: 'large' | 'medium' }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={cn(
        "group relative p-[1px] rounded-[2.5rem] overflow-hidden bg-white/5 transition-all duration-500",
        size === 'large' ? "md:col-span-7" : "md:col-span-5"
      )}
    >
      {/* Circuit Trace SVG Animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.rect
          x="0" y="0" width="100" height="100"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="0.5"
          strokeDasharray="400"
          initial={{ strokeDashoffset: 400 }}
          variants={{
            hover: { strokeDashoffset: 0 }
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Internal Content Terminal */}
      <div className="relative z-10 bg-gray-950 p-8 md:p-12 rounded-[2.5rem] h-full border border-white/5 flex flex-col group-hover:bg-black/60 transition-colors duration-500">
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-2">
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono">
              {job.category} // 2026_PROT
            </span>
            <h3 className="text-xl md:text-3xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors font-headline">
              {job.title}
            </h3>
          </div>
          <div className="w-3 h-3 rounded-full bg-primary/40 animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
        </div>

        <div className="flex-1 space-y-8">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic font-medium border-l border-primary/20 pl-4">
            {job.overview}
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
            <OdometerNumber num={job.location.split(',')[0]} label="STATION" />
            <OdometerNumber num={job.duration.split(' ')[0]} label="TIMELINE" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {job.tech.map((tech: string) => (
            <div key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[7px] font-mono text-primary/40 uppercase tracking-widest">
              {tech}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
           <button className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary hover:text-white transition-colors flex items-center gap-2 group/btn">
            INITIALIZE_APPLICATION
            <ArrowLeft className="rotate-180 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Helper hook for visibility
function useInView(ref: React.RefObject<Element>, options: any) {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options])
  return isIntersecting
}

const jobs = [
  {
    id: "mern-intern",
    title: "MERN Full Stack Intern",
    category: "ENGINEERING",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Architect responsive user interfaces and develop scalable backend services using the MERN stack.",
    tech: ['React', 'NodeJS', 'MongoDB', 'Express'],
    size: 'large'
  },
  {
    id: "ai-intern",
    title: "AI Engineer Intern",
    category: "RESEARCH_AI",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Develop machine learning models for automated content moderation and precision safety.",
    tech: ['Python', 'PyTorch', 'Gemini', 'NLP'],
    size: 'large'
  },
  {
    id: "devops-intern",
    title: "DevOps Intern",
    category: "INFRASTRUCTURE",
    location: "Remote / HYD",
    duration: "3 Months",
    overview: "Support automated deployment pipelines and manage global cloud infrastructure.",
    tech: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    size: 'medium'
  },
  {
    id: "bd-intern",
    title: "Sales & Marketing Intern",
    category: "STRATEGY",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Drive market expansion through direct B2B outreach and software adoption strategies.",
    tech: ['CRM', 'SEO', 'B2B', 'Growth'],
    size: 'medium'
  }
]

export default function CareersPage() {
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const { scrollYProgress } = useScroll()
  const warpBlur = useTransform(scrollYProgress, [0.4, 0.5], [0, 20])

  useEffect(() => {
    const timer = setTimeout(() => setIsPoweredOn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
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
        variants={containerVariants}
        initial="hidden"
        animate={isPoweredOn ? "show" : "hidden"}
        className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        {/* Breadcrumb Navigation */}
        <motion.div variants={itemVariants} className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] font-mono">BACK_TO_STORY</span>
          </Link>
        </motion.div>

        {/* 1. Mission Hub: Dual-Pane Layout */}
        <section className="mb-32 md:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left (40%): Headline & Vision */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
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
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed italic">
                  We're building the next generation of digital platforms — and we're looking for architects who want to do the same.
                </p>
              </div>
            </motion.div>

            {/* Right (60%): Dynamic Sector Map */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 relative h-[400px] md:h-[600px] rounded-[3rem] bg-card/20 border border-white/5 flex items-center justify-center overflow-hidden group/map"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_70%)]" />
              <svg className="w-full h-full p-12 md:p-20" viewBox="0 0 400 400">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Sector Nodes */}
                <motion.g filter="url(#glow)">
                  <circle cx="200" cy="100" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
                  <circle cx="100" cy="280" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
                  <circle cx="300" cy="280" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
                  
                  {/* Glowing Connections */}
                  <motion.line 
                    x1="200" y1="140" x2="100" y2="240" 
                    stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" 
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="opacity-40 group-hover/map:opacity-100 transition-opacity"
                  />
                  <motion.line 
                    x1="200" y1="140" x2="300" y2="240" 
                    stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="opacity-40 group-hover/map:opacity-100 transition-opacity"
                  />
                </motion.g>
                <text x="200" y="105" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">HEALTHCARE</text>
                <text x="100" y="285" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">EDUCATION</text>
                <text x="300" y="285" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">INFRASTRUCTURE</text>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* 2. KCS Conviction: Tombstone Cards */}
        <section className="mb-32 md:mb-64">
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-16 md:mb-24">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 font-mono">FOCUS_OVER_BURNOUT</h3>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter font-headline">The KCS Conviction.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ConvictionCard id="01" title="Sustainable" text="Balance is the fuel for long-term technical excellence. We reject burnout culture." icon={Heart} />
            <ConvictionCard id="02" title="Reliable" text="Systems that last are built by people who thrive. We invest in stability." icon={Shield} />
            <ConvictionCard id="03" title="Precise" text="Focus requires deep work. Our environment is engineered for absolute flow." icon={Focus} />
          </div>
        </section>

        {/* 3. Internship Roles: Bento Grid with Circuit Trace */}
        <section className="mb-32 md:mb-64">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16 md:mb-24">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-mono">2026_ARCHITECTURES</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {jobs.map((job) => (
              <InternshipCard key={job.id} job={job} size={job.size as 'large' | 'medium'} />
            ))}
          </div>
        </section>

        {/* 4. Final Protocol: CTA */}
        <motion.section 
          variants={itemVariants}
          className="relative w-full py-24 md:py-48 px-6 overflow-hidden rounded-[3rem] bg-black border border-white/5 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0b00_0%,_transparent_100%)] opacity-40" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter mb-12 font-headline">
              Ready to make an <span className="text-primary italic">impact?</span>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="inline-block w-2 md:w-3 h-[1em] bg-primary ml-2 align-middle" />
            </h2>
            
            <p className="text-sm md:text-2xl text-muted-foreground mb-16 leading-relaxed italic max-w-2xl mx-auto">
              Whether you're an engineer, designer, or technologist, we have a place for your expertise in our product lab.
            </p>

            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  className="h-14 md:h-20 px-8 md:px-16 rounded-full bg-primary text-white font-bold text-sm md:text-xl group shadow-[0_10px_40px_rgba(249,115,22,0.4)] border-none relative overflow-hidden"
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    <span className="relative z-10">INITIALIZE_JOURNEY</span>
                    <Rocket size={24} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    <motion.div 
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      <Footer />
    </main>
  )
}
