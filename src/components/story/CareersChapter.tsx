"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion'
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
      className="relative p-8 rounded-[2rem] bg-gray-950 border border-white/5 overflow-hidden group cursor-default shadow-xl card-glass"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
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
          className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-transform duration-500"
        >
          <adv.icon size={24} />
        </motion.div>
        <h4 className="text-lg font-bold mb-3 font-headline uppercase tracking-tight group-hover:text-primary transition-colors">
          <ScrambleText text={adv.title} />
        </h4>
        <p className="text-sm text-muted-foreground italic leading-relaxed font-medium">{adv.text}</p>
      </div>
    </motion.div>
  );
}

function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+{}[]|;:,.<>?";

  const handleMouseEnter = () => {
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

  const handleMouseLeave = () => setDisplayText(text);

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {displayText}
    </span>
  );
}

export function CareersChapter() {
  return (
    <Chapter id="careers" className="bg-background py-24 md:py-48 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-8 font-headline">
            <Sparkles size={12} className="animate-pulse" /> The Talent Protocol
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-foreground mb-10 font-headline">
            Architect the future with us.
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg md:text-3xl font-bold tracking-tight text-foreground leading-tight italic">
              Building the Next Generation of Digital Platforms.
            </p>
            <p className="text-sm md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto italic font-medium">
              We’re looking for engineers, designers, and technologists who don’t just want a job—they want to build products that matter. At KCS, we believe the best work happens when high-level engineering meets a culture of genuine support.
            </p>
          </div>
        </motion.div>

        {/* Advantage Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline">The KCS Advantage</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <AdvantageCard key={i} adv={adv} i={i} />
            ))}
          </div>
        </div>

        {/* Data Bus Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-24 relative">
          <motion.div 
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-8 h-px bg-primary shadow-[0_0_10px_#F97316]"
          />
        </div>

        {/* Cultural Pillars - Bento Box Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline">Our Cultural Pillars</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                  "flex flex-col p-8 rounded-[2.5rem] border border-white/5 group hover:border-primary/40 transition-all duration-500 shadow-2xl overflow-hidden relative card-glass",
                  pillar.bg,
                  pillar.size === "large" ? "md:col-span-7" : "md:col-span-5"
                )}
              >
                {pillar.badge && (
                  <div className="absolute top-6 right-8 px-3 py-1 rounded-full bg-primary text-white text-[8px] font-bold uppercase tracking-widest z-20 shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                    {pillar.badge}
                  </div>
                )}
                
                <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <pillar.icon size={120} strokeWidth={0.5} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 h-fit w-fit mb-8 shadow-sm"
                  >
                    <pillar.icon size={28} />
                  </motion.div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-4 font-headline tracking-tighter group-hover:text-primary transition-colors">
                      <ScrambleText text={pillar.title} />
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed font-medium max-w-sm">{pillar.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA Impact Section */}
        <div className="relative w-full py-24 px-4 overflow-hidden rounded-[3rem] bg-[radial-gradient(circle_at_center,_#1a0b00_0%,_#090e1a_100%)] border border-white/5">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech-mesh/1920/1080')] opacity-5 mix-blend-overlay" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center relative z-10"
          >
            <h3 className="text-2xl md:text-5xl font-bold tracking-tighter mb-10 font-headline">Ready to make an impact?</h3>
            <MagneticButton>
              <Link href="/careers">
                <Button size="lg" className="rounded-full h-16 px-14 text-sm font-bold group bg-primary hover:bg-primary/90 shadow-[0_10px_40px_rgba(249,115,22,0.4)] border-none text-white transition-all duration-500">
                  <span className="flex items-center gap-2">
                    View Open Roles 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </Chapter>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    // 30px magnetic threshold
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    if (distance < 150) {
      const factor = 0.3
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
      className="inline-block relative"
    >
      <motion.div style={{ x: springX, y: springY }}>
        {children}
      </motion.div>
    </div>
  )
}