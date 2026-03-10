
"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    title: "AI Solutions",
    description: "Custom Large Language Models and predictive engines designed for enterprise automation.",
    image: "https://picsum.photos/seed/ai-sol/800/600",
    color: "bg-blue-500/10",
    hint: "artificial intelligence"
  },
  {
    title: "Cloud Infrastructure",
    description: "Resilient, multi-region cloud architectures supporting millions of concurrent users.",
    image: "https://picsum.photos/seed/cloud-sol/800/600",
    color: "bg-purple-500/10",
    hint: "cloud technology"
  },
  {
    title: "Cyber Defense",
    description: "Zero-trust security models and real-time threat detection for critical systems.",
    image: "https://picsum.photos/seed/cyber-sol/800/600",
    color: "bg-red-500/10",
    hint: "cybersecurity network"
  },
  {
    title: "Business Intelligence",
    description: "Advanced data pipelines and real-time dashboards for strategic decision making.",
    image: "https://picsum.photos/seed/bi-sol/800/600",
    color: "bg-emerald-500/10",
    hint: "business analytics"
  }
]

export function SolutionsChapter() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    )
    return () => {
      pin.kill()
    }
  }, [])

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative bg-card/10">
        {solutions.map((item, index) => (
          <div key={index} className="h-screen w-screen flex items-center justify-center p-6 md:p-24 border-r border-border/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-primary font-bold tracking-widest text-sm uppercase">Case Study 0{index + 1}</span>
                  <h3 className="text-5xl md:text-8xl font-bold mt-4 mb-6 leading-none">{item.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </motion.div>
                
                <div className="flex gap-4 pt-8">
                  <div className="w-12 h-px bg-primary self-center" />
                  <span className="text-sm font-medium uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">View Deep Dive</span>
                </div>
              </div>

              <div className={`relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl ${item.color} group`}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={item.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
