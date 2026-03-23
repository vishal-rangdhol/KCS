
"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion'
import { MapPin, ArrowLeft, Sparkles, Briefcase, Clock, Zap, Cpu, Code, Shield, Share2, Rocket, Heart, CheckCircle2 } from 'lucide-react'
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
      className="flex items-center gap-2 cursor-default"
    >
      <span className="font-mono text-primary font-bold tracking-tighter">
        [{display}]
      </span>
      {label && <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</span>}
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
      className="p-2 rounded-lg bg-white/5 border border-white/10 text-primary"
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
        "relative p-8 md:p-12 rounded-[2rem] bg-black border border-white/5 transition-all duration-700 flex flex-col items-center text-center group",
        "filter drop-shadow(0 0 0px rgba(255, 107, 0, 0)) hover:scale-[1.02]",
        isInView ? "drop-shadow(0 0 15px rgba(255, 107, 0, 0.4)) border-primary/40" : ""
      )}
    >
      <div className="absolute top-4 left-6 text-[4rem] font-bold font-headline text-white/[0.02] pointer-events-none">
        {id}
      </div>
      <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h4 className="text-xl md:text-2xl font-bold mb-4 font-headline uppercase tracking-tighter group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic font-medium">
        {text}
      </p>
    </motion.div>
  )
}

// Bento Job Card
function JobBentoCard({ job, size }: { job: any, size: 'large' | 'medium' }) {
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
      className={cn(
        "group relative p-6 md:p-10 rounded-[2rem] bg-gray-950 border border-white/5 overflow-hidden transition-all duration-500 shadow-2xl",
        size === 'large' ? "md:col-span-7" : "md:col-span-5"
      )}
    >
      {/* Circuit Trace Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Internal Grid/Scanline Texture */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-500 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(249,115,22,0.1)_50%)] bg-[length:100%_4px]" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6 md:mb-10">
          <div className="space-y-1">
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline">
              {job.category}
            </span>
            <h3 className="text-xl md:text-3xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors font-headline">
              {job.title}
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
            <Briefcase size={20} />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic font-medium">
            {job.overview}
          </p>
          
          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
            <OdometerNumber num={job.location.split(',')[0]} label="Location" />
            <OdometerNumber num={job.duration.split(' ')[0]} label="Duration" />
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          {['React', 'Node', 'Docker'].map((tech) => (
            <div key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-mono text-primary/60">
              {tech}
            </div>
          ))}
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
    category: "Engineering",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Architect responsive user interfaces and develop scalable backend services using the MERN stack.",
    size: 'large'
  },
  {
    id: "ai-intern",
    title: "AI Engineer Intern",
    category: "Research & AI",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Develop machine learning models for automated content moderation and precision safety.",
    size: 'large'
  },
  {
    id: "devops-intern",
    title: "DevOps Intern",
    category: "Infrastructure",
    location: "Remote / Hyderabad",
    duration: "3 Months",
    overview: "Support automated deployment pipelines and manage global cloud infrastructure.",
    size: 'medium'
  },
  {
    id: "bd-intern",
    title: "Sales & Marketing Intern",
    category: "Business Development",
    location: "Hyderabad, India",
    duration: "3 Months",
    overview: "Drive market expansion through direct B2B outreach and software adoption strategies.",
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
              className="h-px w-full bg-primary"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] font-headline">Back to Story</span>
          </Link>
        </div>

        {/* 1. Mission Hub: Top Section */}
        <section className="mb-32 md:mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left (40%): Headline & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-10 font-headline">
                <Sparkles size={12} className="animate-pulse" /> The Talent Protocol
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 font-headline">
                Join the <span className="text-primary italic">KCS Team.</span>
              </h1>
              <div className="space-y-8">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary/60 font-headline">Our Vision</h2>
                <p className="text-base md:text-2xl text-foreground font-medium leading-tight italic max-w-md">
                  We're building the next generation of digital platforms — and we're looking for architects who want to do the same.
                </p>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed italic">
                  KCS aims to become a global product lab for digital infrastructure, supporting the next era of business through precision engineering.
                </p>
              </div>
            </motion.div>

            {/* Right (60%): Dynamic Sector Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="lg:col-span-7 relative h-[400px] md:h-[600px] rounded-[3rem] bg-card/20 border border-white/5 flex items-center justify-center overflow-hidden"
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
                  />
                  <motion.line 
                    x1="200" y1="140" x2="300" y2="240" 
                    stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.line 
                    x1="140" y1="280" x2="260" y2="280" 
                    stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.g>
                <text x="200" y="105" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">Healthcare</text>
                <text x="100" y="285" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">Education</text>
                <text x="300" y="285" textAnchor="middle" fill="var(--primary)" className="text-[10px] font-bold font-mono uppercase tracking-widest">Infrastructure</text>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* 2. KCS Conviction: Protocol Row */}
        <section className="mb-32 md:mb-64">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 font-headline">Focus, Not Burnout</h3>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter font-headline">The KCS Conviction.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <ConvictionCard id="01" title="Sustainable" text="Balance is the fuel for long-term technical excellence. We reject burnout culture." icon={Heart} />
            <ConvictionCard id="02" title="Reliable" text="Systems that last are built by people who thrive. We invest in stability." icon={Shield} />
            <ConvictionCard id="03" title="Precise" text="Focus requires deep work. Our environment is engineered for absolute flow." icon={Focus} />
          </div>
        </section>

        {/* 3. Internship Roles: Bento Grid */}
        <section className="mb-32 md:mb-64">
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline">2026 Architectures</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {jobs.map((job) => (
              <JobBentoCard key={job.id} job={job} size={job.size as 'large' | 'medium'} />
            ))}
          </div>
        </section>

        {/* 4. Final Protocol: CTA */}
        <section className="relative w-full py-24 md:py-48 px-6 overflow-hidden rounded-[3rem] bg-black border border-white/5 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0b00_0%,_transparent_100%)] opacity-40" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter mb-12 font-headline">
              Ready to make an <span className="text-primary italic">impact?</span>
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="inline-block w-2 md:w-3 h-[1em] bg-primary ml-2 align-middle" />
            </h2>
            
            <p className="text-sm md:text-2xl text-muted-foreground mb-16 leading-relaxed italic max-w-2xl mx-auto">
              Whether you're an engineer, designer, or technologist, we have a place for your expertise in our product lab.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild
                className="h-14 md:h-20 px-8 md:px-16 rounded-full bg-primary text-white font-bold text-sm md:text-xl group shadow-[0_10px_40px_rgba(249,115,22,0.4)] border-none relative overflow-hidden"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  <span className="relative z-10">Start Your Journey</span>
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
        </section>
      </div>

      <Footer />
    </main>
  )
}

function Focus(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}
