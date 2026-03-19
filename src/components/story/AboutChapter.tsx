
"use client"

import { Chapter } from './Chapter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { CheckCircle2, Target, Zap, Shield, Cloud } from 'lucide-react'

const expertise = [
  { icon: Zap, label: "AI Integration" },
  { icon: Cloud, label: "Cloud Platforms" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Target, label: "Data Systems" }
]

export function AboutChapter() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const aboutImage = PlaceHolderImages.find(img => img.id === 'consultancy-team')

  return (
    <Chapter id="story" className="bg-background relative py-20 lg:py-32 overflow-hidden">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 max-w-7xl mx-auto">
        <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
          <motion.div style={{ opacity }}>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 block">Who We Are</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-foreground mb-8">
              More Than <br /><span className="text-secondary italic">Consultants.</span>
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
              Every organization today depends on digital infrastructure. AI, cloud platforms,
              cybersecurity, and data systems have become the foundation of modern business
              — yet most organizations struggle to integrate them effectively.
            </p>
            <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
              <span className="text-primary font-bold">KCS Product Lab</span> was built to solve this. 
              Unlike traditional consulting firms, we function as a full-cycle technology partner — 
              designing, building, launching, and operating scalable digital platforms from concept to global scale.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-black/5 border border-black/5 group hover:border-primary/20 transition-all"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={18} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-foreground/70 group-hover:text-foreground transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group order-1 lg:order-2 border border-black/5">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[110%] -top-[5%]">
             <Image 
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/kcs2/1200/800"} 
              alt="Consultancy Leaders" 
              fill 
              className="object-cover scale-110 grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint="professional consultancy team"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/40 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl">
            <p className="text-lg sm:text-2xl italic font-light text-foreground leading-tight">"We don't just build tech; we architect legacies for the digital age."</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <p className="font-bold text-[10px] uppercase tracking-[0.3em] text-primary">The KCS Protocol</p>
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  )
}
