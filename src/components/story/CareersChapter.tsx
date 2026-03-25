"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform, useScroll } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Zap, Cpu, Heart, Focus, ShieldCheck, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const advantages = [
  {
    title: "Impact & Innovation",
    text: "Work on innovative, high-scale platforms used by real people every day.",
    icon: Zap
  },
  {
    title: "Engineering Culture",
    text: "Collaborate with experts across a modern, cutting-edge technology stack.",
    icon: Cpu
  },
  {
    title: "Meaningful Work",
    text: "Drive digital transformation across Healthcare, Education, and Enterprise.",
    icon: Sparkles
  }
]

const pillars = [
  {
    title: "Focused Work > Performative Busyness",
    text: "We value deep work and outcomes over long hours and 'busy work.'",
    icon: Focus,
    size: "large",
    bg: "bg-gradient-to-br from-primary/20 to-primary/5"
  },
  {
    title: "Quality-First Engineering",
    text: "We don't just ship code; we take pride in the architectural integrity of everything we build.",
    icon: ShieldCheck,
    size: "small",
    bg: "bg-card/40"
  },
  {
    title: "Supported Growth",
    text: "We provide the space, tools, and mentorship needed for you to do your best work and level up your skills.",
    icon: RefreshCw,
    size: "small",
    bg: "bg-card/20 backdrop-blur-md"
  },
  {
    title: "Wellbeing as a Priority",
    text: "We take the health and balance of our people as seriously as our system uptime.",
    icon: Heart,
    size: "large",
    bg: "bg-card/60",
    badge: "Protocol 01"
  }
]

function AdvantageCard({ adv, i }: { adv: typeof advantages[0], i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      className="relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-gray-950 border border-white/5 overflow-hidden group cursor-default shadow-xl card-glass"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[1.5rem] md:rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="p-2.5 md:p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 md:mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-transform duration-500"
        >
          <adv.icon size={20} className="md:size-[24px]" />
        </motion.div>
        <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 font-headline uppercase tracking-tight group-hover:text-primary transition-colors">
          <ScrambleText text={adv.title} />
        </h4>
        <p className="text-[11px] md:text-sm text-muted-foreground italic leading-relaxed font-medium">{adv.text}</p>
      </div>
    </motion.div>
  );
}

function RevealText({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-x-[0.3em]"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10, letterSpacing: "0.2em" },
            visible: { 
              opacity: 1, 
              y: 0, 
              letterSpacing: "0em",
              transition: { duration: 1, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] } 
            }
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

function ScrambleText({ text, animateOnInView = false }: { text: string, animateOnInView?: boolean }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+{}[]|;:,.<>?";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const runScramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.split("").map((_, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (animateOnInView && isInView) {
      runScramble();
    }
  }, [isInView, animateOnInView]);

  return (
    <span ref={ref} onMouseEnter={() => !animateOnInView && runScramble()}>
      {displayText}
    </span>
  );
}

function useInView(ref: React.RefObject<HTMLElement | null>, options?: IntersectionObserverInit & { once?: boolean }) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options?.once) observer.disconnect();
      } else if (!options?.once) {
        setIsInView(false);
      }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  return isInView;
}

export function CareersChapter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const headlineX = useSpring(useTransform(mouseX, [-400, 400], [-10, 10]), springConfig)
  const headlineY = useSpring(useTransform(mouseY, [-400, 400], [-5, 5]), springConfig)

  const headlineOpacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.3])
  const headlineScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.95])

  const [isIndicatorHovered, setIsIndicatorHovered] = useState(false)

  // Final CTA Mouse Tracking
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaMouseX = useMotionValue(0)
  const ctaMouseY = useMotionValue(0)
  const ctaGlowX = useSpring(ctaMouseX, { stiffness: 100, damping: 20 })
  const ctaGlowY = useSpring(ctaMouseY, { stiffness: 100, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + 200))
  }

  const handleCtaMouseMove = (e: React.MouseEvent) => {
    if (!ctaRef.current) return
    const rect = ctaRef.current.getBoundingClientRect()
    ctaMouseX.set(e.clientX - rect.left)
    ctaMouseY.set(e.clientY - rect.top)
  }

  return (
    <Chapter id="careers" className="bg-background py-16 md:py-24 lg:py-48 overflow-visible">
      <div ref={containerRef} onMouseMove={handleMouseMove} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24 lg:mb-40 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ opacity: headlineOpacity, scale: headlineScale }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6 md:mb-8 group">
               <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 bg-primary/20 blur-xl rounded-full"
               />
               <span 
                onMouseEnter={() => setIsIndicatorHovered(true)}
                onMouseLeave={() => setIsIndicatorHovered(false)}
                className="relative flex items-center justify-center gap-2 md:gap-3 text-primary font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[8px] sm:text-[10px] md:text-xs font-headline cursor-crosshair px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-primary/10 bg-black/40 backdrop-blur-sm"
               >
                <Sparkles size={10} className="animate-pulse md:size-[12px]" /> The Talent Protocol
                <motion.div
                  initial={false}
                  animate={{ 
                    width: isIndicatorHovered ? 150 : 0,
                    opacity: isIndicatorHovered ? 1 : 0
                  }}
                  className="absolute left-full ml-4 whitespace-nowrap overflow-hidden text-primary/60 font-bold tracking-widest text-[7px] hidden md:block"
                >
                  PRECISION ENGINEERING. HUMAN CULTURE.
                </motion.div>
              </span>
            </div>
            
            <motion.div
              style={{ x: headlineX, y: headlineY }}
              className="relative"
            >
              <h2 
                className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-[1] md:leading-[0.95] tracking-tight md:tracking-[-0.04em] text-foreground mb-8 md:mb-12 font-headline bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
              >
                Architect the <br className="hidden md:block" />
                <span className="italic text-primary">future with us.</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8 md:space-y-16">
              <motion.p 
                initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-base md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground/80 leading-tight italic"
              >
                Building the Next Generation of Digital Platforms.
              </motion.p>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center text-left border-t border-white/5 pt-8 md:pt-12">
                <div className="flex-1">
                  <p className="text-sm md:text-xl text-muted-foreground leading-relaxed italic font-medium">
                    We’re looking for engineers, designers, and technologists who don’t just want a job—they want to build products that matter. At KCS, we believe the best work happens when high-level engineering meets a culture of genuine support.
                  </p>
                </div>
                
                <div className="w-full lg:w-[350px] p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 font-mono text-[8px] md:text-[10px] space-y-2 md:space-y-3 shadow-2xl backdrop-blur-xl group/status hover:border-primary/40 transition-colors">
                  <div className="flex justify-between border-b border-white/5 pb-1.5 md:pb-2">
                    <span className="text-primary/60">SYSTEM_ID:</span>
                    <span className="text-foreground">KCS_TALENT_LAB_01</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/60">EST_ORIGIN:</span>
                    <span className="text-foreground">HYDERABAD // 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/60">LATENCY:</span>
                    <span className="text-foreground">OPTIMIZED</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/60">CULTURE:</span>
                    <span className="text-primary group-hover/status:animate-pulse">ANTI_BURNOUT_V3</span>
                  </div>
                  <div className="pt-1 md:pt-2 flex gap-1">
                    <div className="h-1 flex-1 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Advantage Grid */}
        <div className="mb-16 md:mb-32">
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary font-headline">The KCS Advantage</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {advantages.map((adv, i) => (
              <AdvantageCard key={i} adv={adv} i={i} />
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-16 md:my-24 relative">
          <motion.div 
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-6 md:w-8 h-px bg-primary shadow-[0_0_10px_#F97316]"
          />
        </div>

        {/* Cultural Pillars - Bento Box Grid */}
        <div className="mb-16 md:mb-32">
          <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
            <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary font-headline">Our Cultural Pillars</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                  "flex flex-col p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 group hover:border-primary/40 transition-all duration-500 shadow-2xl overflow-hidden relative card-glass",
                  pillar.bg,
                  pillar.size === "large" ? "md:col-span-7" : "md:col-span-5"
                )}
              >
                {pillar.badge && (
                  <div className="absolute top-4 right-6 md:top-6 md:right-8 px-2 md:px-3 py-1 rounded-full bg-primary text-white text-[7px] md:text-[8px] font-bold uppercase tracking-widest z-20 shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                    {pillar.badge}
                  </div>
                )}
                
                <div className="absolute top-0 right-0 p-6 md:p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <pillar.icon size={80} className="md:size-[120px]" strokeWidth={0.5} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 h-fit w-fit mb-4 md:mb-8 shadow-sm"
                  >
                    <pillar.icon size={24} className="md:size-[28px]" />
                  </motion.div>
                  <div>
                    <h4 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 font-headline tracking-tighter group-hover:text-primary transition-colors">
                      <ScrambleText text={pillar.title} />
                    </h4>
                    <p className="text-[11px] md:text-sm lg:text-base text-muted-foreground italic leading-relaxed font-medium max-w-sm">{pillar.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Impact Section */}
        <div 
          ref={ctaRef}
          onMouseMove={handleCtaMouseMove}
          className="relative w-full py-20 md:py-32 px-6 overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gray-950 border border-white/5 group"
        >
          {/* Mouse-tracking Radial Glow */}
          <motion.div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: useMotionTemplate`radial-gradient(600px circle at ${ctaGlowX}px ${ctaGlowY}px, rgba(249, 115, 22, 0.08), transparent 80%)`
            }}
          />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-12 font-headline leading-tight">
              <RevealText text="Initialize your career architecture." />
            </h2>
            
            <div className="flex flex-col items-center gap-12">
              <MagneticButton>
                <Link href="/careers">
                  <LiquidButton>
                    View Open Roles 
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </LiquidButton>
                </Link>
              </MagneticButton>

              {/* Footer Context Note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                className="text-[8px] md:text-[10px] font-mono text-foreground italic tracking-widest mt-4"
              >
                *Direct Uplink to HR@kandhugule-kcs.com to provide immediate contact info.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  )
}

function LiquidButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-full border-2 border-primary text-primary font-bold transition-colors duration-500 hover:text-white shadow-[0_10px_40px_rgba(249,115,22,0.2)]">
      {/* Liquid Fill */}
      <motion.span 
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
        className="absolute inset-0 z-0 bg-primary" 
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3 px-10 md:px-16 py-4 md:py-6 text-[11px] md:text-sm uppercase tracking-widest">
        {children}
      </span>
      
      {/* Aura Pulse Shadow Bloom */}
      <div className="absolute inset-0 z-[-1] rounded-full group-hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-shadow duration-500" />
    </div>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 768) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    // Snap to cursor within threshold
    if (distance < 150) {
      const factor = 0.4 // Magnetic strength
      x.set(distanceX * factor)
      y.set(distanceY * factor)
    } else {
      x.set(0)
      y.set(0)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block relative w-full sm:w-auto"
    >
      <motion.div 
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        style={{ x: springX, y: springY }}
      >
        {children}
      </motion.div>
    </div>
  )
}
