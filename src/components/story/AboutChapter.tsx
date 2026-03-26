
"use client"

import { Chapter } from './Chapter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ShieldCheck, Zap, Cpu, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRef, useState, useEffect } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

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
  const isMobile = useIsMobile();

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
    <Chapter id="about" className="bg-background py-8 md:py-20 lg:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full">
        {/* Part 1: The KCS Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24 lg:mb-40"
        >
          <span className="flex items-center gap-2 text-primary font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-[10px] sm:text-xs mb-8 font-headline">
            <Sparkles size={14} className="animate-pulse" /> The Narrative
          </span>
          
          <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-start">
            <div className="w-full lg:w-[40%] space-y-6 md:space-y-8 relative">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-foreground font-headline">
                The <span className="text-primary italic">KCS</span> Story.
              </h2>
              <div className="space-y-5 text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed italic font-medium relative z-10">
                <p>
                  Kandhugule Consultancy Services (KCS) Pvt Ltd was founded in Hyderabad, India,
                  on a single conviction: technology should empower businesses to create
                  meaningful impact — without locking them into systems they don't control.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[60%] space-y-8 lg:pt-4">
              <div className="space-y-6 md:space-y-8 text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
                <p>
                  As digital transformation accelerates, organizations face growing complexity in
                  building and maintaining modern technology. Artificial intelligence, cloud
                  infrastructure, cybersecurity, and data platforms must work together seamlessly.
                </p>
                <div className="relative pl-6 md:pl-8 border-l-2 border-primary/30 py-2">
                  <p className="text-foreground italic text-base md:text-2xl font-bold tracking-tight">
                    "Most organizations struggle to make that happen. KCS was created to close that gap by providing a bridge between high-level engineering and practical business application."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 pt-10 border-t border-white/5">
            <h3 className="text-xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-foreground leading-tight">
              We exist to ensure technology remains a <span className="text-primary italic">competitive advantage</span>, not an operational burden.
              <div className="h-1 w-16 md:w-32 bg-primary mt-6 rounded-full" />
            </h3>
          </div>
        </motion.div>

        {/* Part 2: Product Lab Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24 lg:mb-40"
        >
          <div 
            className="bg-card/40 border border-white/5 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[450px] md:min-h-[500px] group/lab"
            onMouseEnter={() => setIsLabHovered(true)}
            onMouseLeave={() => setIsLabHovered(false)}
          >
             <div className="flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-center relative z-20 bg-background/20 lg:border-r border-white/5">
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-foreground mb-6 md:mb-10 font-headline">
                  A Product Lab for the Modern Era.
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed italic font-medium max-w-xl">
                  Rather than functioning as a traditional consulting firm, KCS operates as a
                  technology product lab. We don't just deliver software — we build complete digital
                  ecosystems designed to support long-term growth.
                </p>
             </div>

             <div className="flex-1 relative flex items-center justify-center overflow-hidden cursor-crosshair min-h-[350px] md:min-h-[400px]">
                <div className="absolute inset-0 bg-primary/5 opacity-30 z-0" />
                <div className="absolute inset-0 z-10 opacity-40 transition-transform duration-1000 group-hover/lab:scale-110">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    {isMounted && (
                      <motion.g animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
                        {[...Array(6)].map((_, i) => (
                          <circle key={i} cx={200 + 100 * Math.cos((i * Math.PI) / 3)} cy={200 + 100 * Math.sin((i * Math.PI) / 3)} r="4" fill="var(--primary)" className="animate-pulse" />
                        ))}
                      </motion.g>
                    )}
                  </svg>
                </div>
                <motion.div 
                  initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                  animate={{ 
                    opacity: (isLabHovered || isMobile) ? 1 : 0, 
                    backdropFilter: (isLabHovered || isMobile) ? 'blur(20px)' : 'blur(0px)' 
                  }}
                  className="absolute inset-0 z-30 p-8 md:p-12 lg:p-20 flex flex-col justify-center items-center text-center bg-background/60"
                >
                  <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed italic font-medium max-w-md">
                    Our team brings together expertise across artificial intelligence, cloud infrastructure,
                    cybersecurity, enterprise software, and mobile platforms. By integrating these
                    disciplines, we help organizations move from idea to fully operational platform.
                  </p>
                </motion.div>
             </div>
          </div>
        </motion.div>

        {/* Part 3: What Makes KCS Different */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24 lg:mb-40"
        >
          <div className="text-center mb-16 lg:mb-24">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter font-headline">
              What Makes <span className="text-primary italic">KCS Different.</span>
            </h3>
          </div>

          <div className="flex overflow-x-auto pb-10 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 max-w-6xl mx-auto snap-x snap-mandatory scrollbar-hide">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "shrink-0 w-[85vw] md:w-full snap-center relative p-8 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-card/40 border-t-2 border-transparent hover:border-primary border-x border-b border-white/5 transition-all duration-500 group overflow-hidden shadow-2xl backdrop-blur-md min-h-[320px] md:min-h-[400px]",
                  (index === 1 || index === 2) && "md:translate-y-6"
                )}
              >
                <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl w-fit mb-6 md:mb-8 group-hover:bg-primary/10 transition-all duration-500">
                  <value.icon size={28} className="text-primary md:size-[32px]" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 tracking-tighter font-headline group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground italic leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part 4: Our Vision */}
        <motion.div
          ref={visionRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={visionContainerVariants}
          className="text-center py-8"
        >
          <motion.h3 variants={visionItemVariants} className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter mb-10 md:mb-12 font-headline">
            Our Vision.
          </motion.h3>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            <motion.p variants={visionItemVariants} className="text-sm md:text-base lg:text-xl text-muted-foreground leading-relaxed italic font-medium px-4">
              KCS aims to become a global product lab for digital infrastructure — supporting
              founders, enterprises, and institutions in building the platforms that define the next
              era of business.
            </motion.p>
            
            <motion.div variants={visionItemVariants} className="text-lg md:text-2xl lg:text-4xl font-bold tracking-tighter leading-tight px-2">
              From <motion.span style={{ opacity: highlight1, color: useTransform(highlight1, [0.3, 1], ["rgba(255,255,255,0.3)", "var(--primary)"]) }} className="transition-all duration-300">Social learning ecosystems</motion.span> to <motion.span style={{ opacity: highlight2, color: useTransform(highlight2, [0.3, 1], ["rgba(255,255,255,0.3)", "var(--primary)"]) }} className="transition-all duration-300">AI-powered healthcare infrastructure</motion.span>, we are focused on building <motion.span style={{ opacity: highlight3, color: useTransform(highlight3, [0.3, 1], ["rgba(255,255,255,0.3)", "var(--primary)"]) }} className="transition-all duration-300">digital infrastructure</motion.span> that improves how people learn, connect, and access services.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  )
}
