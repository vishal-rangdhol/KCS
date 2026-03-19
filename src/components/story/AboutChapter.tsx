"use client"

import { Chapter } from './Chapter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { BrainCircuit, Cloud, Shield, Layout, Globe, Cpu } from 'lucide-react'

const expertise = [
  { icon: BrainCircuit, label: "Artificial Intelligence" },
  { icon: Cloud, label: "Cloud Infrastructure" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Layout, label: "Enterprise Software" },
  { icon: Cpu, label: "Mobile Platforms" },
  { icon: Globe, label: "Digital Ecosystems" }
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
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10 max-w-7xl mx-auto px-4">
        <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
          <motion.div style={{ opacity }}>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 block">Our Origin</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter text-foreground mb-8">
              The KCS <br /><span className="text-secondary italic">Story.</span>
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
              Founded in Hyderabad, India, Kandhugule Consultancy Services (KCS) Pvt Ltd was built on a single conviction: 
              <span className="text-foreground font-semibold"> technology should empower businesses to create meaningful impact — without locking them into systems they don't control.</span>
            </p>
            
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
              As digital transformation accelerates, AI, cloud infrastructure, cybersecurity, and data platforms must work together seamlessly. 
              Most organizations struggle to make that happen. KCS was created to close that gap.
            </p>

            <div className="pt-8 border-t border-black/5">
              <h3 className="text-xl font-bold tracking-tight text-primary mb-4 uppercase tracking-[0.2em] text-xs">A Product Lab for the Modern Era</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Rather than functioning as a traditional consulting firm, KCS operates as a technology product lab. 
                We don't just deliver software — we build complete digital ecosystems designed to support long-term growth.
              </p>
            </div>

            <div className="pt-8 border-t border-black/5">
              <h3 className="text-xl font-bold tracking-tight text-secondary mb-4 uppercase tracking-[0.2em] text-xs">Our Vision</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                KCS aims to become a global product lab for digital infrastructure — supporting founders, enterprises, and institutions 
                in building the platforms that define the next era of business, from social learning ecosystems to AI-powered healthcare.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-black/5 border border-black/5 group hover:border-primary/20 transition-all"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon size={14} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/70 group-hover:text-foreground transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group order-1 lg:order-2 border border-black/5">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[110%] -top-[5%]">
             <Image 
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/kcs2/1200/800"} 
              alt="The KCS Story" 
              fill 
              className="object-cover scale-110 grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint="innovation technology lab"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/40 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl">
            <p className="text-lg sm:text-2xl italic font-light text-foreground leading-tight">"We architect the digital infrastructure that defines the next era of global business."</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <p className="font-bold text-[10px] uppercase tracking-[0.3em] text-primary">Hyderabad • Global Focus</p>
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  )
}
