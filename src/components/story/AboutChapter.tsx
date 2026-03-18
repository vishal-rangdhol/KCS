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
    <Chapter id="story" className="bg-background relative py-20 overflow-hidden">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
          <motion.div style={{ opacity }}>
            <span className="text-primary font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4 block">Our Origin</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Founded by <br /><span className="text-secondary italic">Visionaries.</span>
            </h2>
          </motion.div>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            KCS was born from a collective of experts in high-stakes digital environments. We realized that while tech evolves, the human narrative behind it needs careful stewardship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {expertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-base sm:text-lg"
              >
                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-2xl group order-1 lg:order-2">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[110%] -top-[5%]">
             <Image 
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/kcs2/1200/800"} 
              alt="Consultancy Leaders" 
              fill 
              className="object-cover scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint="professional consultancy team"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 p-6 sm:p-8 bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl">
            <p className="text-base sm:text-xl italic font-light">"We don't just build tech; we architect legacies for the digital age."</p>
            <p className="mt-3 sm:mt-4 font-bold text-[10px] sm:text-sm uppercase tracking-widest">— The KCS Founders</p>
          </div>
        </div>
      </div>
    </Chapter>
  )
}