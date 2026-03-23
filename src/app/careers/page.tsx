"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion'
import { MapPin, ArrowLeft, Sparkles, Briefcase, Clock, Zap, Cpu, Code, Shield, Share2, Rocket, Heart, CheckCircle2, LayoutPanelLeft, Focus, Eye, Settings, Layers, Terminal as TerminalIcon, ChevronRight, Send, Search } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// --- Custom Hooks ---
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return mousePosition;
}

// --- Components ---

function OdometerNumber({ num }: { num: string }) {
  const [display, setDisplay] = useState("00")
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
    <span 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="font-mono text-primary font-bold tracking-tighter"
    >
      [{display}]
    </span>
  )
}

function SentinelEye() {
  const mouse = useMousePosition();
  const eyeRef = useRef<HTMLDivElement>(null);
  const [eyeCenter, setEyeCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (eyeRef.current) {
      const rect = eyeRef.current.getBoundingClientRect();
      setEyeCenter({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  }, []);

  const angle = Math.atan2(mouse.y - eyeCenter.y, mouse.x - eyeCenter.x);
  const x = Math.cos(angle) * 8;
  const y = Math.sin(angle) * 8;

  return (
    <div ref={eyeRef} className="relative w-12 h-12 border border-primary/40 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-hidden group-hover:border-primary transition-colors">
      <motion.div 
        animate={{ x, y }}
        className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]"
      >
        <div className="w-1.5 h-1.5 bg-white/60 rounded-full m-1" />
      </motion.div>
      <div className="absolute inset-0 border border-primary/10 rounded-full animate-pulse" />
    </div>
  );
}

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

const jobDetails = [
  {
    id: "01",
    slug: "sales",
    title: "Sales & Marketing Intern",
    category: "BUSINESS_DEVELOPMENT",
    overview: "The Sales & Marketing Intern will be the \"boots on the ground\" driving market penetration for KCS. This role sits at the intersection of business strategy and client acquisition, focusing on expanding our SaaS footprint through direct outreach and relationship building.",
    responsibilities: [
      "B2B Outreach: Conduct physical and digital outreach to identify and qualify potential business clients.",
      "Product Demonstrations: Deliver high-impact live presentations and demos of KCS products to stakeholders.",
      "Market Feedback: Collect and report real-time market data to help refine our offerings.",
      "Lead Management: Maintain a pipeline of prospects and follow up to ensure a high conversion rate."
    ],
    requirements: [
      "Communication: Exceptional verbal and written skills with the ability to build instant rapport.",
      "Mobility: Ready and willing to travel locally for on-site client meetings and demonstrations.",
      "Growth Mindset: A results-driven attitude with a hunger for hitting performance milestones.",
      "Adaptability: Ability to pivot strategies based on client needs and market trends."
    ],
    tech: ['CRM', 'B2B Strategy', 'Growth Hacking'],
    location: "Hyderabad, India"
  },
  {
    id: "02",
    slug: "mern",
    title: "MERN Full Stack Intern",
    category: "WEB_MOBILE",
    overview: "The MERN Full Stack Intern will support the development and scaling of integrated digital solutions. You will work across the entire development lifecycle, from database architecture to front-end UI components, ensuring a seamless user experience.",
    responsibilities: [
      "Feature Development: Build and maintain scalable web and mobile features using the MERN stack.",
      "API Integration: Develop and integrate robust APIs to connect mobile interfaces with backend services.",
      "Code Optimization: Ensure high performance and responsiveness of applications through clean code practices.",
      "Cross-Platform Sync: Work with React Native to ensure feature parity between web and mobile ecosystems."
    ],
    requirements: [
      "Technical Stack: Practical knowledge of MongoDB, Express.js, React.js/Next.js, and Node.js.",
      "State Management: Understanding of Redux, Context API, or similar for complex UI states.",
      "Version Control: Proficiency in Git and collaborative workflow environments.",
      "Problem Solving: Strong debugging skills and an eye for modular, reusable code architecture."
    ],
    tech: ['React', 'NodeJS', 'MongoDB', 'Next.js'],
    location: "Hyderabad, India"
  },
  {
    id: "03",
    slug: "devops",
    title: "DevOps Intern",
    category: "INFRASTRUCTURE",
    overview: "The DevOps Intern will support the reliability and scalability of our mobile application infrastructure. The successful candidate will work at the intersection of development and operations to automate workflows and maintain system uptime.",
    responsibilities: [
      "CI/CD Implementation: Support automated deployment pipelines for seamless app store releases.",
      "Cloud Orchestration: Assist in the management of cloud-based resources on AWS or Azure platforms.",
      "Containerization: Utilize Docker and Kubernetes to maintain consistent environments across stages.",
      "Infrastructure Monitoring: Deploy monitoring tools to track system health and security vulnerabilities."
    ],
    requirements: [
      "Systems Administration: Foundational knowledge of Linux/Unix environments and cloud networking protocols.",
      "Scripting Proficiency: Experience with Bash, Python, or similar scripting languages for task automation.",
      "Architectural Awareness: Basic understanding of microservices architecture and server management.",
      "Detail Orientation: A meticulous approach to managing configuration files and security protocols."
    ],
    tech: ['Docker', 'AWS', 'Kubernetes', 'CI/CD'],
    location: "Remote / HYD"
  },
  {
    id: "04",
    slug: "ai",
    title: "AI Engineer Intern",
    category: "SAFETY_MODERATION",
    overview: "The AI Engineer Intern will focus on the \"Digital Safety\" pillar of our ecosystem. You will develop AI models designed to detect and moderate content, ensuring a safe and compliant environment for our global user base.",
    responsibilities: [
      "Model Training: Build and refine Computer Vision (CV) models for real-time image and video classification.",
      "NLP Implementation: Develop Natural Language Processing tools to detect inappropriate text-based content.",
      "Dataset Management: Curate and label large datasets to improve the accuracy and safety of moderation algorithms.",
      "Performance Tuning: Optimize models for low-latency inference in production environments."
    ],
    requirements: [
      "AI/ML Fundamentals: Solid grasp of Python and frameworks like TensorFlow or PyTorch.",
      "Computer Vision: Experience with image processing techniques and deep learning architectures.",
      "Data Ethics: A strong commitment to user privacy and algorithmic fairness.",
      "Math Proficiency: Comfort with the linear algebra and statistics required for model optimization."
    ],
    tech: ['Python', 'PyTorch', 'Gemini', 'NLP'],
    location: "Hyderabad, India",
    hasEye: true
  }
]

export default function CareersPage() {
  const [activeId, setActiveId] = useState("01")
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [isUplinking, setIsUplinking] = useState(false)
  const [showResent, setShowResent] = useState(false)
  const activeJob = useMemo(() => jobDetails.find(j => j.id === activeId) || jobDetails[0], [activeId])

  useEffect(() => {
    const timer = setTimeout(() => setIsPoweredOn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleInitializeUplink = () => {
    setIsUplinking(true)
    setTimeout(() => {
      setShowResent(true)
      setTimeout(() => {
        window.location.href = `mailto:info@kandhugule-kcs.com?subject=2026 Internship Application - ${activeJob.title}`
        setIsUplinking(false)
        setShowResent(false)
      }, 1500)
    }, 2000)
  }

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
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] font-mono">BACK_TO_STORY</span>
          </Link>
        </div>

        {/* Command & Control Hub */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-32">
          
          {/* Sidebar Terminal (Left) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono mb-8 border-b border-white/5 pb-4">
              ROLE_DIRECTORY
            </h3>
            <div className="flex flex-col gap-2">
              {jobDetails.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setActiveId(job.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border group",
                    activeId === job.id 
                      ? "bg-primary/10 border-primary/40 text-primary" 
                      : "bg-white/5 border-transparent hover:border-white/10 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <OdometerNumber num={job.id} />
                  <div className="flex-1">
                    <div className="text-[8px] font-bold tracking-widest uppercase mb-1 opacity-60 font-mono">
                      {job.category.split('_')[0]}
                    </div>
                    <div className="text-sm font-bold tracking-tight">{job.title}</div>
                  </div>
                  <ChevronRight size={14} className={cn("transition-transform", activeId === job.id ? "rotate-0 text-primary" : "rotate-0 opacity-0 group-hover:opacity-40")} />
                </button>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Sparkles size={16} />
                <span className="text-[9px] font-bold uppercase tracking-widest font-mono">PROGRAM_MISSION</span>
              </div>
              <p className="text-[11px] italic text-muted-foreground leading-relaxed">
                10 Seats. One Mission. Our 90-day elite gauntlet transitions the talent into permanent FTE roles.
              </p>
            </div>
          </div>

          {/* Main Stage (Right) */}
          <div className="lg:col-span-9 relative">
            
            {/* Background Ghost Text */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeJob.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.05, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute -top-10 -right-10 pointer-events-none select-none text-[12vw] font-bold text-primary font-headline"
              >
                {activeJob.slug.toUpperCase()}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="relative bg-gray-950/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-16 shadow-2xl overflow-hidden group"
              >
                {/* Laser Line Scan */}
                <motion.div 
                  initial={{ top: "-100%" }}
                  animate={{ top: "200%" }}
                  transition={{ duration: 1.5, ease: "linear", repeat: 0 }}
                  className="absolute left-0 right-0 h-px bg-primary/40 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-30"
                />

                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold uppercase tracking-widest font-mono">
                      <TerminalIcon size={12} /> CLASSIFICATION: {activeJob.category}
                    </div>
                    <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-none font-headline">
                      {activeJob.title}
                    </h1>
                  </div>
                  {activeJob.hasEye && <SentinelEye />}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-8 space-y-12">
                    <section>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono mb-4">ROLE_OVERVIEW</h4>
                      <p className="text-sm md:text-lg text-foreground leading-relaxed italic font-medium border-l-2 border-primary/20 pl-6">
                        {activeJob.overview}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono mb-6">KEY_RESPONSIBILITIES</h4>
                      <div className="space-y-4">
                        {activeJob.responsibilities.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex gap-4 items-start group/item"
                          >
                            <div className="mt-1 p-1 rounded bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                              <CheckCircle2 size={12} />
                            </div>
                            <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="md:col-span-4 space-y-8">
                    <section className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <h4 className="text-[9px] font-bold uppercase tracking-widest text-primary/60 font-mono mb-6">REQUIREMENTS_VERIFICATION</h4>
                      <div className="space-y-4">
                        {activeJob.requirements.map((req, i) => (
                          <div key={i} className="space-y-2">
                            <div className="text-[10px] font-bold text-foreground/80">{req.split(':')[0]}</div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                                className="h-full bg-primary/40"
                              />
                            </div>
                            <div className="text-[9px] italic text-muted-foreground">{req.split(':')[1]}</div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-4">
                      <h4 className="text-[9px] font-bold uppercase tracking-widest text-primary/60 font-mono">TECH_STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeJob.tech.map((t) => (
                          <div key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-mono text-primary/40 uppercase tracking-widest">
                            {t}
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                {/* Path to Power Transition Timeline */}
                <div className="mt-20 pt-12 border-t border-white/5">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 font-mono mb-10 text-center">FTE_CONVERSION_PROTOCOL</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { month: "MONTH 01", title: "INTEGRATION", desc: "System Init", progress: 20 },
                      { month: "MONTH 02", title: "OWNERSHIP", desc: "Performance Tracking", progress: 60 },
                      { month: "MONTH 03", title: "CONVERSION", desc: "FTE Offer Issued", progress: 100 },
                    ].map((phase, i) => (
                      <div key={i} className="space-y-4 text-center group/phase">
                        <div className="text-[9px] font-bold font-mono text-primary/40 group-hover/phase:text-primary transition-colors">{phase.month}</div>
                        <div className="text-sm font-bold tracking-tight">{phase.title}</div>
                        <div className="text-[10px] italic text-muted-foreground">{phase.desc}</div>
                        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${phase.progress}%` }}
                            transition={{ duration: 2, delay: 1 }}
                            className="h-full bg-primary/60"
                           />
                           <div className="absolute top-0 right-0 h-full w-px bg-primary/40" />
                        </div>
                        <div className="text-[8px] font-mono text-primary/40">[{phase.progress}%]</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Final Action UI */}
        <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden rounded-[3rem] bg-black border border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a0b00_0%,_transparent_100%)] opacity-40" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-12 font-mono text-primary/60 text-[11px] tracking-widest"
            >
              guest@kcs:~$ run apply_protocol --target="{activeJob.slug}"
            </motion.div>

            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter mb-8 font-headline">
              Ready to <span className="text-primary italic">Initialize?</span>
            </h2>
            
            <p className="text-sm md:text-xl text-muted-foreground mb-16 leading-relaxed italic max-w-2xl mx-auto">
              Initiate your data uplink to the KCS Engine Room. Successful classification leads to immediate FTE conversion and performance-led scaling.
            </p>

            <div className="flex flex-col items-center gap-12">
              <div className="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-2 flex items-center group/input focus-within:border-primary/40 transition-all">
                <div className="flex-1 px-4 text-sm font-mono text-primary animate-pulse">
                  HR@kandhugule-kcs.com
                </div>
                <Button 
                  disabled={isUplinking}
                  onClick={handleInitializeUplink}
                  className="rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-widest px-8 h-12 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {showResent ? 'RESUME_SENT' : 'INITIALIZE_UPLINK'}
                    {!showResent && <Rocket size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                  </span>
                  {isUplinking && (
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 bg-white/20"
                    />
                  )}
                </Button>
              </div>

              <div className="flex gap-8 text-[8px] md:text-[10px] font-mono text-primary/40 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Clock size={12} /> 90 DAYS INTENSITY
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={12} /> THE ENGINE ROOM, HYD
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={12} /> PERFORMANCE BENEFITS
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <Footer />
    </main>
  )
}
