"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
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
    size: "large"
  },
  {
    title: "Quality-First Engineering",
    text: "We don't just ship code; we take pride in the architectural integrity of everything we build.",
    icon: ShieldCheck,
    size: "small"
  },
  {
    title: "Supported Growth",
    text: "We provide the space, tools, and mentorship needed for you to do your best work and level up.",
    icon: RefreshCw,
    size: "small"
  },
  {
    title: "Wellbeing as a Priority",
    text: "We take the health and balance of our people as seriously as our system uptime.",
    icon: Heart,
    size: "large"
  }
]

function AdvantageCard({ adv, i }: { adv: typeof advantages[0], i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, ease: [0.17, 0.67, 0.83, 0.67] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-8 rounded-[2rem] bg-card/40 border border-white/5 overflow-hidden group cursor-default shadow-xl"
    >
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249,115,22,0.06), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:scale-110 transition-transform duration-500">
          <adv.icon size={24} />
        </div>
        <h4 className="text-lg font-bold mb-3 font-headline uppercase tracking-tight group-hover:text-primary transition-colors">{adv.title}</h4>
        <p className="text-sm text-muted-foreground italic leading-relaxed font-medium">{adv.text}</p>
      </div>
    </motion.div>
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
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground mb-10 font-headline">
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

        {/* Advantage Grid - Spotlight Effects */}
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, ease: [0.17, 0.67, 0.83, 0.67] }}
                className={cn(
                  "flex flex-col p-8 rounded-[2.5rem] bg-card/40 border border-white/5 group hover:bg-card hover:border-primary/20 transition-all duration-500 shadow-2xl overflow-hidden relative",
                  pillar.size === "large" ? "md:col-span-7" : "md:col-span-5"
                )}
              >
                <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <pillar.icon size={120} strokeWidth={0.5} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 h-fit w-fit mb-8 shadow-sm">
                    <pillar.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-4 font-headline tracking-tighter group-hover:text-primary transition-colors">{pillar.title}</h4>
                    <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed font-medium max-w-sm">{pillar.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-4xl font-bold tracking-tighter mb-10 font-headline">Ready to make an impact?</h3>
          <Link href="/careers">
            <Button size="lg" className="rounded-full h-14 px-12 text-sm font-bold group bg-primary hover:bg-primary/90 shadow-[0_10px_30px_rgba(249,115,22,0.2)] border-none text-white transition-all duration-500">
              View Open Roles 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Chapter>
  )
}
