
"use client"

import { Chapter } from './Chapter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { CheckCircle2 } from 'lucide-react'

const expertise = [
  "Artificial Intelligence",
  "Cloud Computing",
  "Cybersecurity",
  "Data Analytics",
  "Enterprise Systems"
]

const timeline = [
  { year: "2015", event: "Foundation by senior tech architects." },
  { year: "2018", event: "Launch of first proprietary AI engine." },
  { year: "2021", event: "Global expansion into enterprise cloud ops." },
  { year: "2025", event: "Leading the narrative in intelligent tech." }
]

export function AboutChapter() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const aboutImage = PlaceHolderImages.find(img => img.id === 'consultancy-team')

  return (
    <Chapter id="story" className="bg-background relative">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <motion.div style={{ opacity }}>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Origin</span>
            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              Founded by <br /><span className="text-secondary italic">Visionaries.</span>
            </h2>
          </motion.div>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            KCS was born from a collective of experts in high-stakes digital environments. We realized that while tech evolves, the human narrative behind it needs careful stewardship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-lg"
              >
                <CheckCircle2 className="text-primary w-5 h-5" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-8 pt-12 border-t border-border/50">
            <h4 className="font-bold uppercase tracking-widest text-sm text-muted-foreground">The Journey</h4>
            <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-border">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <div className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-primary border-4 border-background" />
                  <span className="text-primary font-bold">{item.year}</span>
                  <p className="text-muted-foreground mt-1">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl group">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <Image 
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/kcs2/1200/800"} 
              alt="Consultancy Leaders" 
              fill 
              className="object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint="professional consultancy team"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-12 left-12 right-12 p-8 bg-card/40 backdrop-blur-xl border border-white/10 rounded-3xl">
            <p className="text-xl italic font-light">"We don't just build tech; we architect legacies for the digital age."</p>
            <p className="mt-4 font-bold text-sm uppercase tracking-widest">— The KCS Founders</p>
          </div>
        </div>
      </div>
    </Chapter>
  )
}
