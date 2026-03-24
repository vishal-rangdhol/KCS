
"use client"

import { Chapter } from './Chapter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ShieldCheck, Zap, Cpu, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRef, useState, useEffect } from 'react'

const values = [
  {
    id: "01",
    title: "Zero Vendor Lock-In",
    description: "Full IP Ownership. You own the code, the data, and the infrastructure. Complete sovereignty over your digital assets with no proprietary traps.",
    icon: ShieldCheck,
    isTall: false,
  },
  {
    id: "02",
    title: "Built for Longevity",
    description: "Product-First Mindset. We don’t just deliver projects; we engineer sustainable platforms designed to evolve as your business scales without technical debt.",
    icon: Zap,
    isTall: true,
  },
  {
    id: "03",
    title: "Future-Proof Foundations",
    description: "AI-Native Design. Every system is architected with a data-first mindset, ready for seamless AI and automation integration from day one.",
    icon: Cpu,
    isTall: true,
  },
  {
    id: "04",
    title: "Continuous Partnership",
    description: "Lifecycle Excellence. A model that spans from initial blueprint to global scale, ensuring 24/7 performance and growth at every stage.",
    icon: RefreshCw,
    isTall: false,
  }
]

export function AboutChapter() {
  const visionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"]
  });

  const [isLabHovered, setIsLabHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const highlight1 = useTransform(scrollYProgress, [0.4, 0.45, 0.5, 0.55], [0.3, 1, 1, 0.3]);
  const highlight2 = useTransform(scrollYProgress, [0.5, 0.55, 0.6, 0.65], [0.3, 1, 1, 0.3]);
  const highlight3 = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.75], [0.3, 1, 1, 0.3]);

  const visionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const visionItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }
    }
  };

  return (
    <Chapter id="about" className="bg-background py-16 md:py-24 lg:py-48 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Part 1: The KCS Story - F-Pattern Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32 lg:mb-64"
        >
          <span className="flex items-center gap-2 text-primary font-bold tracking-[0.5em] md:tracking-[0.6em] uppercase text-[9px] sm:text-xs mb-6 md:mb-8 font-headline">
            <Sparkles size={14} className="animate-pulse" /> The Narrative
          </span>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
            {/* 1. The Anchor (Left Side - 40%) */}
            <div className="w-full lg:w-[40%] space-y-4 md:space-y-8 relative">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-foreground font-headline">
                The <span className="text-primary italic glitch-text">KCS</span> Story.
              </h2>
              <div className="space-y-4 md:space-y-6 text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed italic font-medium relative z-10">
                <p>
                  Kandhugule Consultancy Services (KCS) Pvt Ltd was founded in Hyderabad, India,
                  on a single conviction: technology should empower businesses to create
                  meaningful impact — without locking them into systems they don't control.
                </p>
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 opacity-[0.03] pointer-events-none select-none text-primary">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.6,-0.7C84.4,14.2,78.5,28.5,70.1,41.2C61.7,53.9,50.8,65,37.8,72.4C24.8,79.8,9.7,83.5,-5.1,80.6C-19.9,77.7,-34.4,68.2,-46.8,56.8C-59.2,45.4,-69.4,32.1,-75.4,17.2C-81.4,2.3,-83.1,-14.2,-78.4,-29C-73.7,-43.8,-62.5,-56.9,-49.4,-64.4C-36.3,-71.9,-21.2,-73.8,-5.4,-70.7C10.4,-67.6,25.9,-59.5,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>

            {/* 2. The Problem & Solution (Right Side - 60%) */}
            <div className="w-full lg:w-[60%] space-y-6 md:space-y-12">
              <div className="space-y-4 md:space-y-8 text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
                <p>
                  As digital transformation accelerates, organizations face growing complexity in
                  building and maintaining modern technology. Artificial intelligence, cloud
                  infrastructure, cybersecurity, and data platforms must work together seamlessly.
                </p>
                <div className="relative pl-4 md:pl-6 border-l-2 border-primary/30 py-2">
                  <p className="text-foreground italic text-base md:text-2xl font-bold tracking-tight">
                    "Most organizations struggle to make that happen. KCS was created to close that gap by providing a bridge between high-level engineering and practical business application."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-20 lg:mt-32 pt-8 md:pt-12 border-t border-white/5">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-foreground leading-tight">
              We exist to ensure technology remains a <span className="text-primary italic">competitive advantage</span>, not an operational burden.
              <div className="h-1 w-16 md:w-32 bg-primary mt-4 md:mt-6 rounded-full" />
            </h3>
          </div>
        </motion.div>

        {/* Part 2: Product Lab Section - Split Screen Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32 lg:mb-64"
        >
          <div 
            className="bg-card/40 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[4rem] relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[400px] md:min-h-[500px] group/lab"
            onMouseEnter={() => setIsLabHovered(true)}
            onMouseLeave={() => setIsLabHovered(false)}
          >
             {/* Left: Headline and First Paragraph */}
             <div className="flex-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative z-20 bg-background/20 lg:border-r border-white/5">
                <h3 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-foreground mb-6 md:mb-12 font-headline">
                  A Product Lab for the Modern Era.
                </h3>
                <p className="text-xs md:text-base lg:text-lg text-muted-foreground leading-relaxed italic font-medium max-w-xl">
                  Rather than functioning as a traditional consulting firm, KCS operates as a
                  technology product lab. We don't just deliver software — we build complete digital
                  ecosystems designed to support long-term growth.
                </p>
             </div>

             {/* Right: Interactive Node Wireframe */}
             <div className="flex-1 relative flex items-center justify-center overflow-hidden cursor-crosshair min-h-[300px] md:min-h-[400px]">
                <div className="absolute inset-0 bg-primary/5 opacity-30 z-0" />
                
                <div className="absolute inset-0 z-10 opacity-40 transition-transform duration-1000 group-hover/lab:scale-110">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    {isMounted && (
                      <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      >
                        {[...Array(6)].map((_, i) => (
                          <circle
                            key={i}
                            cx={200 + 100 * Math.cos((i * Math.PI) / 3)}
                            cy={200 + 100 * Math.sin((i * Math.PI) / 3)}
                            r="4"
                            fill="var(--primary)"
                            className="animate-pulse"
                          />
                        ))}
                        {[...Array(6)].map((_, i) => (
                          <line
                            key={i}
                            x1={200 + 100 * Math.cos((i * Math.PI) / 3)}
                            y1={200 + 100 * Math.sin((i * Math.PI) / 3)}
                            x2={200 + 100 * Math.cos(((i + 1) * Math.PI) / 3)}
                            y2={200 + 100 * Math.sin(((i + 1) * Math.PI) / 3)}
                            stroke="var(--primary)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                          />
                        ))}
                      </motion.g>
                    )}
                    <motion.circle 
                      cx="200" cy="200" r="120" 
                      fill="none" 
                      stroke="var(--primary)" 
                      strokeWidth="0.5" 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                  </svg>
                </div>

                <motion.div 
                  initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                  animate={{ 
                    opacity: isLabHovered ? 1 : 0,
                    backdropFilter: isLabHovered ? 'blur(20px)' : 'blur(0px)',
                  }}
                  transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
                  className="absolute inset-0 z-30 p-6 md:p-12 lg:p-20 flex flex-col justify-center items-center text-center bg-background/60"
                >
                  <p className="text-xs md:text-base lg:text-lg text-foreground leading-relaxed italic font-medium max-w-md">
                    Our team brings together expertise across artificial intelligence, cloud infrastructure,
                    cybersecurity, enterprise software, and mobile platforms. By integrating these
                    disciplines, we help organizations move from idea to fully operational platform.
                  </p>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* Part 3: What Makes KCS Different (Values) - Asymmetric 2x2 Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32 lg:mb-64"
        >
          <div className="text-center mb-10 md:mb-16 lg:mb-24">
            <h3 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tighter font-headline">
              What Makes <span className="text-primary italic">KCS Different.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, ease: [0.17, 0.67, 0.83, 0.67] }}
                whileHover={{ y: -10 }}
                className={cn(
                  "relative p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2.5rem] bg-card/40 border-t-2 border-transparent hover:border-primary border-x border-b border-white/5 hover:bg-card/60 transition-all duration-500 group overflow-hidden shadow-2xl backdrop-blur-md",
                  value.isTall ? "md:min-h-[380px] lg:min-h-[420px]" : "md:min-h-[340px] lg:min-h-[380px]",
                  index === 1 || index === 2 ? "md:translate-y-4 lg:translate-y-6" : ""
                )}
              >
                <div className="absolute top-2 right-4 md:top-4 md:right-8 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold font-headline text-white/[0.02] pointer-events-none select-none group-hover:text-primary/[0.04] transition-colors duration-500">
                  {value.id}
                </div>

                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-3 md:p-5 rounded-xl md:rounded-2xl w-fit mb-4 md:mb-8 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500">
                  <value.icon size={24} className="text-primary md:size-[32px]" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 tracking-tighter font-headline group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-xs md:text-sm lg:text-base text-muted-foreground italic leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.02] blur-3xl transition-all duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part 4: Our Vision - Scroll Triggered Highlighting */}
        <motion.div
          ref={visionRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={visionContainerVariants}
          className="text-center"
        >
          <motion.h3 variants={visionItemVariants} className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tighter mb-8 md:mb-12 font-headline">
            Our Vision.
          </motion.h3>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
            <motion.p variants={visionItemVariants} className="text-xs md:text-base lg:text-xl text-muted-foreground leading-relaxed italic font-medium">
              KCS aims to become a global product lab for digital infrastructure — supporting
              founders, enterprises, and institutions in building the platforms that define the next
              era of business.
            </motion.p>
            
            <motion.div variants={visionItemVariants} className="text-base md:text-xl lg:text-4xl font-bold tracking-tighter leading-tight">
              From <motion.span style={{ opacity: highlight1, color: useTransform(highlight1, [0.3, 1], ["rgba(255,255,255,0.3)", "var(--primary)"]) }} className="transition-all duration-300">Social learning ecosystems</motion.span> to <motion.span style={{ opacity: highlight2, color: useTransform(highlight2, [0.3, 1], ["rgba(255,255,255,0.3)", "var(--primary)"]) }} className="transition-all duration-300">AI-powered healthcare infrastructure</motion.span>, we are focused on building <motion.span style={{ opacity: highlight3, color: useTransform(highlight3, [0.3, 1], ["rgba(255,255,255,0.3)", "var(--primary)"]) }} className="transition-all duration-300">digital infrastructure</motion.span> that improves how people learn, connect, and access services.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  )
}
