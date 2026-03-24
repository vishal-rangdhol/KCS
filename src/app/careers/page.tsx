
"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { MapPin, ArrowLeft, Sparkles, Clock, Rocket, CheckCircle2, Terminal as TerminalIcon, ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function OdometerNumber({ num }: { num: string }) {
  const [display, setDisplay] = useState(num)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      setDisplay(num)
      return
    }
    let iterations = 0
    const interval = setInterval(() => {
      setDisplay(Math.floor(Math.random() * 90 + 10).toString())
      iterations++
      if (iterations > 10) { clearInterval(interval); setDisplay(num); }
    }, 40)
    return () => clearInterval(interval)
  }, [isHovering, num])

  return (
    <span onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="font-mono text-primary font-bold">
      [{display}]
    </span>
  )
}

const jobDetails = [
  { id: "01", slug: "sales", title: "Sales & Marketing Intern", category: "BUSINESS_DEVELOPMENT", overview: "The Sales & Marketing Intern will be the \"boots on the ground\" driving market penetration for KCS. This role sits at the intersection of business strategy and client acquisition.", responsibilities: ["B2B Outreach: Qualify potential business clients.", "Product Demonstrations: Deliver live presentations.", "Market Feedback: Collect real-time data.", "Lead Management: Maintain a pipeline of prospects."], requirements: ["Communication: Exceptional verbal skills.", "Mobility: Ready for on-site client meetings.", "Growth Mindset: Results-driven attitude.", "Adaptability: Pivot based on market trends."], tech: ['CRM', 'B2B Strategy', 'Growth'], location: "Hyderabad, India" },
  { id: "02", slug: "mern", title: "MERN Full Stack Intern", category: "WEB_MOBILE", overview: "The MERN Full Stack Intern will support the development and scaling of integrated digital solutions. You will work across the entire lifecycle, from database to UI.", responsibilities: ["Feature Development: Build scalable web features.", "API Integration: Develop and integrate robust APIs.", "Code Optimization: Ensure high performance.", "Cross-Platform Sync: Work with React Native."], requirements: ["Technical Stack: MongoDB, Express, React, Node.", "State Management: Redux or Context API.", "Version Control: Proficiency in Git.", "Problem Solving: Strong debugging skills."], tech: ['React', 'NodeJS', 'MongoDB', 'Next.js'], location: "Hyderabad, India" },
  { id: "03", slug: "devops", title: "DevOps Intern", category: "INFRASTRUCTURE", overview: "The DevOps Intern will support the reliability and scalability of our infrastructure, working at the intersection of dev and ops to automate workflows.", responsibilities: ["CI/CD Implementation: Support automated pipelines.", "Cloud Orchestration: Manage cloud resources.", "Containerization: Docker and Kubernetes usage.", "Infrastructure Monitoring: Track system health."], requirements: ["Systems Admin: Knowledge of Linux and networking.", "Scripting Proficiency: Bash, Python experience.", "Architectural Awareness: Microservices knowledge.", "Detail Orientation: Security protocol management."], tech: ['Docker', 'AWS', 'Kubernetes', 'CI/CD'], location: "Remote / HYD" },
  { id: "04", slug: "ai", title: "AI Engineer Intern", category: "SAFETY_MODERATION", overview: "The AI Engineer Intern will focus on the \"Digital Safety\" pillar. You will develop AI models designed to detect and moderate content.", responsibilities: ["Model Training: Build Computer Vision models.", "NLP Implementation: Develop text detection tools.", "Dataset Management: Curate and label datasets.", "Performance Tuning: Optimize for low-latency."], requirements: ["AI/ML Fundamentals: Python and PyTorch/TF.", "Computer Vision: Image processing techniques.", "Data Ethics: Commitment to user privacy.", "Math Proficiency: Linear algebra and stats."], tech: ['Python', 'PyTorch', 'Gemini', 'NLP'], location: "Hyderabad, India" }
]

export default function CareersPage() {
  const [activeId, setActiveId] = useState("01")
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [isUplinking, setIsUplinking] = useState(false)
  const activeJob = useMemo(() => jobDetails.find(j => j.id === activeId) || jobDetails[0], [activeId])

  useEffect(() => { setIsPoweredOn(true); }, [])

  const handleInitializeUplink = () => {
    setIsUplinking(true)
    setTimeout(() => {
      window.location.href = `mailto:info@kandhugule-kcs.com?subject=2026 Application - ${activeJob.title}`
      setIsUplinking(false)
    }, 1500)
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThreeBackground />
      
      <AnimatePresence>
        {!isPoweredOn && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="h-px w-full bg-primary" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0 }} animate={isPoweredOn ? { opacity: 1 } : { opacity: 0 }} className="relative z-10 pt-28 md:pt-40 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        <div className="mb-10 md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">BACK_TO_STORY</span>
          </Link>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-24 md:mb-32">
          
          {/* Mobile Selector */}
          <div className="lg:hidden w-full mb-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
               <div className="flex flex-col">
                 <span className="text-[9px] font-mono text-primary/60 font-bold uppercase mb-1">Active Selection</span>
                 <span className="text-sm font-bold">{activeJob.title}</span>
               </div>
               <div className="flex gap-2">
                  {jobDetails.map((j) => (
                    <button key={j.id} onClick={() => setActiveId(j.id)} className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-mono border transition-all", activeId === j.id ? "bg-primary border-primary text-white" : "bg-white/5 border-white/10 text-muted-foreground")}>{j.id}</button>
                  ))}
               </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-3 space-y-4 sticky top-40">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono mb-8 border-b border-white/5 pb-4">ROLE_DIRECTORY</h3>
            <div className="flex flex-col gap-3">
              {jobDetails.map((job) => (
                <button key={job.id} onClick={() => setActiveId(job.id)} className={cn("flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 text-left border group", activeId === job.id ? "bg-primary/10 border-primary/40 text-primary" : "bg-white/5 border-transparent text-muted-foreground")}>
                  <OdometerNumber num={job.id} />
                  <div className="flex-1">
                    <div className="text-[8px] font-bold tracking-widest uppercase mb-1 opacity-60 font-mono">{job.category.split('_')[0]}</div>
                    <div className="text-xs lg:text-sm font-bold leading-tight">{job.title}</div>
                  </div>
                  <ChevronRight size={14} className={cn("transition-transform", activeId === job.id ? "opacity-100" : "opacity-0")} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 relative">
            <AnimatePresence mode="wait">
              <motion.div key={activeId} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="relative bg-gray-950/40 backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10 md:mb-16">
                  <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-widest font-mono">
                      <TerminalIcon size={12} /> {activeJob.category}
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-[1.1] font-headline">{activeJob.title}</h1>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                  <div className="md:col-span-8 space-y-10 md:space-y-12">
                    <section>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono mb-6">ROLE_OVERVIEW</h4>
                      <p className="text-base md:text-xl text-foreground leading-relaxed italic font-medium border-l-2 border-primary/20 pl-6">{activeJob.overview}</p>
                    </section>
                    <section>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono mb-6">KEY_RESPONSIBILITIES</h4>
                      <div className="space-y-4">
                        {activeJob.responsibilities.map((item, i) => (
                          <div key={i} className="flex gap-4 items-start group">
                            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                  <div className="md:col-span-4 space-y-10">
                    <section className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
                      <h4 className="text-[9px] font-bold uppercase tracking-widest text-primary/60 font-mono mb-6">VERIFICATION</h4>
                      {activeJob.requirements.map((req, i) => (
                        <div key={i} className="space-y-2">
                          <div className="text-[10px] font-bold text-foreground/80">{req.split(':')[0]}</div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }} className="h-full bg-primary/40" />
                          </div>
                        </div>
                      ))}
                    </section>
                    <section className="space-y-4">
                      <h4 className="text-[9px] font-bold uppercase tracking-widest text-primary/60 font-mono">TECH_STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeJob.tech.map((t) => (
                          <div key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-primary/40 uppercase tracking-widest">{t}</div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="relative w-full py-20 md:py-32 px-8 overflow-hidden rounded-[2.5rem] md:rounded-[4rem] bg-black border border-white/5 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0b00_0%,_transparent_100%)] opacity-40" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 font-headline leading-none">Ready to <span className="text-primary italic">Initialize?</span></h2>
            <p className="text-base md:text-2xl text-muted-foreground mb-12 italic max-w-2xl mx-auto leading-relaxed">Initiate your data uplink to the KCS Engine Room. Successful classification leads to immediate FTE conversion.</p>
            <div className="flex flex-col items-center gap-10">
              <Button disabled={isUplinking} onClick={handleInitializeUplink} className="w-full max-w-md h-14 md:h-16 rounded-2xl bg-primary text-white font-bold text-sm uppercase tracking-widest group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isUplinking ? 'UPLINKING...' : 'INITIALIZE_UPLINK'} <Rocket size={18} />
                </span>
                {isUplinking && <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-white/20" />}
              </Button>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </main>
  )
}
