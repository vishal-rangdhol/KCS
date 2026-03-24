"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useRef, useState } from 'react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const products = [
  {
    id: "letscatchup",
    name: "Let’s Catch Up",
    tag: "Social Learning Platform",
    description: "A next-generation social-learning ecosystem designed to combine community interaction with knowledge sharing. Focuses on learning, collaboration, and private communities.",
    features: [
      "Private community Circles",
      "Integrated Learning LMS",
      "Safe student digital space",
      "Structured knowledge sharing"
    ],
    vision: "Healthy education communities.",
    image: PlaceHolderImages.find(img => img.id === 'product-chat')?.imageUrl || "https://picsum.photos/seed/kcs-chat/800/600",
    hint: "social learning",
    href: "https://letscatchup-kcs.com/",
    cta: "Join Ecosystem"
  },
  {
    id: "sushrth",
    name: "Sushrth",
    tag: "AI Healthcare Infrastructure",
    description: "A modern healthcare technology platform designed to simplify medical operations and patient management through AI-ready infrastructure.",
    features: [
      "Appointment automation",
      "Secure history tracking",
      "Patient-centric interface",
      "AI clinical workflows"
    ],
    vision: "Intelligent healthcare scaling.",
    image: PlaceHolderImages.find(img => img.id === 'product-data')?.imageUrl || "https://picsum.photos/seed/kcs-med/800/600",
    hint: "healthcare platform",
    href: "https://www.sushrth.com/",
    cta: "Request Architecture"
  }
]

function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-3deg", "3deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["3deg", "-3deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[650px] md:h-[750px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-2xl flex flex-col"
    >
      <div className="absolute inset-0 z-0">
        <Image src={product.image} alt={product.name} fill className="object-cover opacity-10 group-hover:opacity-5 transition-all duration-1000 group-hover:scale-110" data-ai-hint={product.hint} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background z-10" />
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="relative z-20 p-6 md:p-12 h-full flex flex-col justify-between">
        <div className="space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-widest font-headline">
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-primary" />
            {product.tag}
          </div>
          <h3 className="text-2xl md:text-5xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 font-headline leading-tight">
            {product.name}
          </h3>
          <p className="text-xs md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium italic">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 my-6">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-primary/5 transition-all">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-[10px] md:text-sm font-medium text-foreground/80 leading-none truncate">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 md:pt-10 border-t border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={12} className="text-primary animate-pulse" />
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline">Vision Protocol</span>
          </div>
          <p className="text-sm md:text-2xl font-bold text-foreground leading-tight italic tracking-tight mb-6 md:mb-8">
            "{product.vision}"
          </p>

          <Button 
            variant="outline" 
            className="h-11 md:h-14 px-8 rounded-full border-2 border-primary text-primary bg-background/40 hover:bg-primary hover:text-white transition-all duration-500 text-xs md:text-base font-bold group/btn w-full md:w-auto"
            onClick={() => product.href && window.open(product.href, '_blank')}
          >
            {product.cta}
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-background py-20 md:py-32 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12 md:mb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <span className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block font-bold">
            <Sparkles size={14} className="inline-block mr-2 animate-pulse" /> Proprietary Protocol
          </span>
          <h2 className="text-4xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-none font-headline">
            Our Platforms.
          </h2>
          <p className="text-sm md:text-2xl text-muted-foreground mt-8 max-w-3xl mx-auto italic font-medium leading-relaxed">
            Engineered solutions architected to bridge communication silos and healthcare infrastructure.
          </p>
        </motion.div>
      </div>

      <div className="w-full relative px-6 md:px-12">
        <Carousel opts={{ align: "start", loop: false }} className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-4 md:-ml-10">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-10 basis-full lg:basis-1/2">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center md:justify-end gap-4 mt-10 md:mt-20">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 md:h-16 md:w-16 rounded-2xl border border-white/5 bg-white/5 hover:bg-primary transition-all shadow-2xl" />
            <CarouselNext className="static translate-y-0 h-12 w-12 md:h-16 md:w-16 rounded-2xl border border-white/5 bg-white/5 hover:bg-primary transition-all shadow-2xl" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}
