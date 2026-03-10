
"use client"

import { Chapter } from './Chapter'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function AboutChapter() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const aboutImage = PlaceHolderImages.find(img => img.id === 'consultancy-team')

  return (
    <Chapter id="story" className="bg-card/30">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.div style={{ opacity }}>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Our Journey is <span className="text-secondary">Your Narrative.</span>
            </h2>
          </motion.div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            At KCS, we believe every business has a story waiting to be told. Our consultancy services are designed to unearth these narratives and amplify them through strategic innovation and technical excellence.
          </p>
          
          <div className="flex gap-12 pt-8 border-t border-border">
            <div>
              <span className="block text-3xl font-bold text-primary">10+</span>
              <span className="text-sm text-muted-foreground uppercase">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-primary">250+</span>
              <span className="text-sm text-muted-foreground uppercase">Projects Delivered</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <motion.div style={{ x }} className="absolute inset-0 w-[120%] h-full -left-[10%]">
             <Image 
              src={aboutImage?.imageUrl || "https://picsum.photos/seed/kcs2/1200/800"} 
              alt="Consultancy Team" 
              fill 
              className="object-cover scale-110"
              data-ai-hint="professional consultancy"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </div>
    </Chapter>
  )
}
