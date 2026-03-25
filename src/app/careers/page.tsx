"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { MapPin, ArrowLeft, Sparkles, Clock, Rocket, CheckCircle2, Terminal as TerminalIcon, ChevronRight, ChevronDown, ShieldCheck } from 'lucide-react'
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
  { 
    id: "01", 
    slug: "sales", 
    title: "Sales & Marketing Intern", 
    category: "BUSINESS_DEVELOPMENT", 
    overview: "Serve as a frontline representative of KCS, driving client acquisition and market penetration for our platform across Hyderabad. Own the full B2B outreach cycle from prospect identification to live product demonstrations.", 
    responsibilities: [
      "Identify and map B2B prospects: schools, colleges, universities, coaching institutes, and corporate L&D teams", 
      "Execute outreach via in-person visits, cold calls, and professional emails to institutional decision-makers", 
      "Schedule and deliver live product demonstrations to stakeholders", 
      "Maintain a structured lead pipeline using CRM tools or spreadsheets", 
      "Assist in developing pitch decks, brochures, and sales collateral", 
      "Represent KCS at educational events and networking forums", 
      "Meet monthly outreach and demonstration targets"
    ], 
    requirements: [
      "Any discipline", 
      "Strong English + Telugu/Hindi", 
      "Personal mobility preferred",
      "Field-Based: Domain Penetration"
    ], 
    tech: ['B2B Sales', 'Business Development', 'Cold Calling', 'Lead Generation', 'CRM Basics', 'Product Demonstration', 'Presentation Skills', 'Market Mapping', 'Client Communication', 'Target-Driven Mindset'], 
    location: "Hyderabad (Field-Based)" 
  },
  { 
    id: "02", 
    slug: "mern", 
    title: "MERN Full Stack Intern", 
    category: "WEB_MOBILE", 
    overview: "Contribute to the development and scaling of our platform across web and mobile. Work within an engineering team to build features, integrate APIs, and maintain clean, production-ready code.", 
    responsibilities: [
      "Build and maintain UI components using React.js (web) and React Native (mobile)", 
      "Design and implement RESTful APIs with Node.js and Express.js", 
      "Manage MongoDB schemas, collections, and queries", 
      "Integrate third-party services: payment gateways, push notifications, video SDKs", 
      "Implement JWT/OAuth-based authentication and authorization", 
      "Translate Figma designs into functional interfaces", 
      "Participate in code reviews, sprint planning, and agile ceremonies"
    ], 
    requirements: [
      "CS/IT or related field", 
      "One demonstrable MERN project required", 
      "Git proficiency mandatory",
      "Agile/Scrum Exposure"
    ], 
    tech: ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT / OAuth', 'JavaScript', 'Git', 'Figma'], 
    location: "Hyderabad (On-Site)" 
  },
  { 
    id: "03", 
    slug: "devops", 
    title: "DevOps Intern — Mobile Infrastructure", 
    category: "INFRASTRUCTURE", 
    overview: "Support the deployment, stability, and scalability of our application infrastructure. Manage cloud environments, automate delivery pipelines, and ensure operational reliability across development and production.", 
    responsibilities: [
      "Manage cloud infrastructure resources on AWS or Azure", 
      "Configure and maintain Docker containers across environments", 
      "Set up and optimize CI/CD pipelines using GitHub Actions or Jenkins", 
      "Monitor server health, uptime, and logs; escalate issues proactively", 
      "Assist with Play Store and App Store release workflows", 
      "Write shell scripts to automate operational tasks", 
      "Document infrastructure procedures and deployment runbooks"
    ], 
    requirements: [
      "CS/IT or related field", 
      "Linux CLI comfort mandatory", 
      "Cloud and Docker exposure required",
      "Networking Fundamentals"
    ], 
    tech: ['AWS / Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Linux / Bash', 'Server Monitoring', 'Networking', 'Git'], 
    location: "Hyderabad (On-Site)" 
  },
  { 
    id: "04", 
    slug: "ai", 
    title: "AI Engineer Intern — Content Safety", 
    category: "SAFETY_MODERATION", 
    overview: "Build and refine AI systems that keep our social learning application safe and policy-compliant. Develop models to detect and flag NSFW imagery, harmful text, and content violations before they reach users.", 
    responsibilities: [
      "Train and fine-tune image classification models for NSFW detection using TensorFlow or PyTorch", 
      "Build or integrate NLP-based text moderation models and APIs (OpenAI Moderation, Perspective API)", 
      "Design an end-to-end moderation pipeline: detection → confidence scoring → human review queue", 
      "Evaluate model performance using Precision, Recall, F1, and AUC metrics", 
      "Contribute to an internal moderation dashboard for the trust and safety team", 
      "Document model architecture, training data, and deployment methodology"
    ], 
    requirements: [
      "CS / Data Science / AI-ML or related field", 
      "Prior ML project strongly preferred", 
      "Responsible AI focus",
      "Mathematical Foundations"
    ], 
    tech: ['Python', 'TensorFlow / PyTorch', 'Computer Vision', 'Image Classification', 'CNNs', 'NLP', 'Model Evaluation', 'ML Pipeline'], 
    location: "Hyderabad (On-Site)" 
  }
]

export default function CareersPage() {
  const [activeId, setActiveId] = useState("01")
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const activeJob = useMemo(() => jobDetails.find(j => j.id === activeId) || jobDetails[0], [activeId])

  useEffect(() => { setIsPoweredOn(true); }, [])

  // Utility to clean title for the directory view
  const getDirectoryTitle = (title: string) => {
    return title.replace(/ — (Mobile Infrastructure|Content Safety)/, '')
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
                 <span className="text-sm font-bold">{getDirectoryTitle(activeJob.title)}</span>
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
                    <div className="text-xs lg:text-sm font-bold leading-tight">{getDirectoryTitle(job.title)}</div>
                  </div>
                  <ChevronRight size={14} className={cn("transition-transform", activeId === job.id ? "opacity-100" : "opacity-0")} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-9 relative">
            <AnimatePresence mode="wait">
              <motion.div key={activeId} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="relative bg-gray-950/40 backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden">
                
                {/* Job Header */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                  <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-widest font-mono">
                      <TerminalIcon size={12} /> {activeJob.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] font-headline">{activeJob.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                      <MapPin size={12} className="text-primary" /> {activeJob.location}
                    </div>
                  </div>
                </div>

                {/* Internship Info Highlight Bar */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-10 p-5 rounded-2xl bg-primary/10 border border-primary/30 flex items-center gap-4 shadow-[0_0_30px_rgba(249,115,22,0.1)] relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="p-2.5 rounded-xl bg-primary text-white shadow-lg shrink-0">
                    <Rocket size={18} />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 flex-1">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-primary/60 font-bold uppercase tracking-[0.2em] mb-0.5">Program_Structure</span>
                      <span className="text-[11px] md:text-sm font-bold uppercase tracking-widest text-primary font-mono leading-none">
                        3-MONTH UNPAID INTERNSHIP
                      </span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-primary/20" />
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-muted-foreground/60 font-bold uppercase tracking-[0.2em] mb-0.5">Career_Uplink</span>
                      <span className="text-[11px] md:text-sm font-bold uppercase tracking-widest text-foreground/90 font-mono leading-none">
                        STRUCTURED PATH TO FULL-TIME EMPLOYMENT
                      </span>
                    </div>
                  </div>
                </motion.div>

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
                    <section className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/5 space-y-8">
                      <h4 className="text-[9px] font-bold uppercase tracking-widest text-primary/60 font-mono flex items-center gap-2">
                        <ShieldCheck size={14} /> ELIGIBILITY_TERMINAL
                      </h4>
                      <div className="space-y-5">
                        {activeJob.requirements.map((req, i) => (
                          <div key={i} className="flex items-start gap-3 group/elig">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 group-hover/elig:scale-150 transition-transform duration-300" />
                            <div className="text-[11px] md:text-xs font-bold text-foreground/80 uppercase tracking-tight leading-snug">
                              {req}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                    <section className="space-y-4">
                      <h4 className="text-[9px] font-bold uppercase tracking-widest text-primary/60 font-mono">SKILLS_REQUIRED</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeJob.tech.map((t) => (
                          <div key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-primary/40 uppercase tracking-widest hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default">{t}</div>
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
            <p className="text-base md:text-2xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
              Initiate your application to the <span className="text-primary font-bold not-italic px-1 underline decoration-primary/30 underline-offset-8">info@kandhugule-kcs.com</span>. Successful classification leads to immediate FTE conversion.
            </p>
          </div>
        </section>
      </motion.div>
      <Footer />
    </main>
  )
}
