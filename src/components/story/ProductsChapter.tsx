"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react'
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

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-[420px] md:h-[700px] w-full rounded-[1.2rem] md:rounded-[2.5rem] overflow-hidden bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-2xl flex flex-col"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(var(--primary) 0.5px, transparent 0.5px), linear-gradient(to right, rgba(251,146,60,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(251,146,60,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px, 40px 40px, 40px 40px'
            }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-0">
        {product.image && (
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-cover opacity-10 group-hover:opacity-5 transition-all duration-1000 group-hover:scale-110"
            data-ai-hint={product.hint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background z-10" />
      </div>

      <div style={{ transform: "translateZ(20px)" }} className="relative z-20 p-5 md:p-10 h-full flex flex-col justify-between">
        <div className="space-y-3 md:space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-widest font-headline">
              <motion.span 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#F97316]"
              />
              {product.tag}
            </span>
          </div>
          <h3 className="text-xl md:text-5xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 font-headline leading-tight">
            {product.name}
          </h3>
          <p className="text-[10px] md:text-base text-muted-foreground leading-relaxed max-w-2xl font-medium italic">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:gap-4 my-4 md:my-8">
          {product.features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + (i * 0.1), type: "spring" }}
              className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-white/5 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all"
            >
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary shrink-0" />
              <span className="text-[9px] md:text-sm font-medium text-foreground/80 leading-none truncate">{feature}</span>
            </motion.div>
          ))}
        </div>

        <div className="pt-4 md:pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 mb-1 md:mb-2">
            <Sparkles size={10} className="text-primary animate-pulse md:size-[12px]" />
            <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline">Vision Protocol</span>
          </div>
          <p className="text-sm md:text-xl font-bold text-foreground leading-tight italic tracking-tight mb-4 md:mb-6">
            "{product.vision}"
          </p>

          <div className="flex gap-3 md:gap-4">
            <Button 
              variant="outline" 
              className="h-9 md:h-12 px-4 md:px-8 rounded-full border-2 border-primary text-primary bg-background/40 backdrop-blur-md hover:bg-primary hover:text-white transition-all duration-500 text-[9px] md:text-sm font-bold group/btn shadow-xl flex-1 md:flex-none"
              onClick={() => {
                if (product.href && product.href !== "#") {
                  window.open(product.href, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {product.cta}
              <ArrowRight className="ml-1.5 w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1.5 transition-transform duration-500" />
            </Button>
            
            <Button 
              variant="ghost" 
              className="h-9 md:h-12 px-4 md:px-8 rounded-full text-foreground/40 hover:text-primary transition-all text-[9px] md:text-sm font-bold hidden md:flex items-center gap-2"
            >
              <Zap size={14} />
              Technical Specs
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity">
        <div className="absolute top-3 right-3 md:top-4 md:right-4 w-3 md:w-4 h-px bg-primary" />
        <div className="absolute top-3 right-3 md:top-4 md:right-4 h-3 md:h-4 w-px bg-primary" />
      </div>
    </motion.div>
  )
}

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-background py-16 md:py-24 lg:py-32 overflow-visible">
      <div className="text-center mb-8 md:mb-24 w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary font-headline uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-xs mb-3 md:mb-6 block font-bold">
            <Sparkles size={12} className="inline-block mr-2 animate-pulse md:size-[14px]" /> Proprietary Protocol
          </span>
          <h2 className="text-3xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-none font-headline">
            Our Platforms.
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 md:mt-8 w-full max-w-3xl mx-auto text-xs md:text-2xl leading-relaxed italic font-medium"
          >
            Engineered solutions architected to bridge communication silos and healthcare infrastructure.
          </motion.p>
        </motion.div>
      </div>

      <div className="w-full relative px-2 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-3 md:-ml-8">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-3 md:pl-8 basis-full lg:basis-1/2">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center md:justify-end gap-3 md:gap-6 mt-6 md:mt-16">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-2xl flex items-center justify-center" />
            <CarouselNext className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-2xl flex items-center justify-center" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}