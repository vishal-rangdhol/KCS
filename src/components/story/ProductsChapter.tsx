"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
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
import React, { useRef } from 'react'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const products = [
  {
    id: "letscatchup",
    name: "Let’s Catch Up",
    tag: "Social Learning Platform",
    description: "A next-generation social-learning ecosystem designed to combine community interaction with knowledge sharing. Traditional social platforms often prioritize engagement algorithms over meaningful connections. Let’s Catch Up focuses on learning, collaboration, and private communities.",
    features: [
      "Private community “Circles”",
      "Integrated Learning Management System (LMS)",
      "Safe digital space for students and professionals",
      "Structured knowledge sharing"
    ],
    vision: "Create a healthy digital community platform where social interaction and education grow together.",
    image: PlaceHolderImages.find(img => img.id === 'product-chat')?.imageUrl || "https://picsum.photos/seed/kcs-chat/800/600",
    hint: "social learning app",
    href: "https://letscatchup-kcs.com/"
  },
  {
    id: "sushrth",
    name: "Sushrth",
    tag: "AI-Driven Healthcare Infrastructure",
    description: "A modern healthcare technology platform designed to simplify medical operations and patient management. Healthcare systems worldwide often rely on outdated infrastructure that is difficult and expensive to modernize. Sushrth solves this by offering an AI-ready healthcare ecosystem built for scalability and efficiency.",
    features: [
      "Appointment management automation",
      "Secure medical history tracking",
      "Patient-centric healthcare interface",
      "AI-ready clinical workflows"
    ],
    vision: "Deliver efficient, accessible, and intelligent healthcare technology for modern hospitals and clinics.",
    image: PlaceHolderImages.find(img => img.id === 'product-data')?.imageUrl || "https://picsum.photos/seed/kcs-health/800/600",
    hint: "healthcare platform",
    href: "https://www.sushrth.com/"
  }
]

function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-2deg", "2deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["2deg", "-2deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative min-h-[350px] md:min-h-[700px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-2xl flex flex-col"
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-15 group-hover:opacity-30 transition-all duration-1000 group-hover:scale-105"
          data-ai-hint={product.hint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/90 to-background z-10" />
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="relative z-20 p-4 sm:p-10 flex-1 flex flex-col">
        <div className="mb-3 md:mb-8">
          <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[7px] md:text-[10px] font-bold uppercase tracking-widest font-headline mb-2">
            {product.tag}
          </span>
          <h3 className="text-xl sm:text-5xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 font-headline leading-tight mb-2 md:mb-4">
            {product.name}
          </h3>
          <p className="text-[9px] md:text-base text-muted-foreground leading-relaxed max-w-2xl font-medium italic">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-8">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 md:gap-3 p-1.5 md:p-3 rounded-lg md:rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-all">
              <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary shrink-0" />
              <span className="text-[8px] md:text-sm font-medium text-foreground/80 leading-none">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex-1" />

        <div className="pt-3 md:pt-8 border-t border-white/5 mb-4 md:mb-8">
          <div className="flex items-center gap-1.5 mb-1 md:mb-2">
            <Sparkles size={10} className="text-primary animate-pulse" />
            <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline">The Vision</span>
          </div>
          <p className="text-[10px] md:text-xl font-bold text-foreground leading-tight italic tracking-tight">
            "{product.vision}"
          </p>
        </div>

        <Button 
          variant="outline" 
          className="h-8 md:h-12 px-6 md:px-8 rounded-full border border-primary/20 text-primary bg-background/40 backdrop-blur-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 text-[9px] md:text-sm font-bold group/btn shadow-xl w-full sm:w-fit"
          onClick={() => {
            if (product.href && product.href !== "#") {
              window.open(product.href, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          View Platform Preview
          <ArrowRight className="ml-1.5 w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1.5 transition-transform duration-500" />
        </Button>
      </div>
    </motion.div>
  )
}

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-background py-16 md:py-32 overflow-visible">
      <div className="text-center mb-10 md:mb-24 w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary font-headline uppercase tracking-[0.4em] text-[9px] md:text-xs mb-4 md:mb-6 block font-bold">
            <Sparkles size={14} className="inline-block mr-2 animate-pulse" /> Proprietary Protocol
          </span>
          <h2 className="text-3xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-none font-headline">
            Our Platforms.
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 md:mt-8 w-full max-w-3xl mx-auto text-sm md:text-2xl leading-relaxed italic font-medium"
          >
            Engineered solutions architected to bridge the gap between communication silos and healthcare infrastructure.
          </motion.p>
        </motion.div>
      </div>

      <div className="w-full relative px-4 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-8 basis-full lg:basis-1/2">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center md:justify-end gap-3 md:gap-6 mt-8 md:mt-16">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-2xl flex items-center justify-center" />
            <CarouselNext className="static translate-y-0 h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-2xl flex items-center justify-center" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}