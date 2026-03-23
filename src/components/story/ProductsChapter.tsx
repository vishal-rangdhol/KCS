"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
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
    description: "A next-generation social-learning ecosystem that brings communities together through meaningful knowledge sharing and structured collaboration.",
    color: "from-orange-600/20 via-primary/10 to-transparent",
    href: "https://letscatchup-kcs.com/",
    tag: "Social Ecosystem",
    image: PlaceHolderImages.find(img => img.id === 'product-chat')?.imageUrl || "https://picsum.photos/seed/kcs-chat/800/600",
    hint: "communication app"
  },
  {
    id: "sushrth",
    name: "Sushrth",
    description: "An AI-native healthcare platform designed to modernize patient management and hospital operations for next-gen clinical infrastructure.",
    color: "from-amber-600/20 via-primary/10 to-transparent",
    href: "https://www.sushrth.com/",
    tag: "AI Healthcare",
    image: PlaceHolderImages.find(img => img.id === 'product-data')?.imageUrl || "https://picsum.photos/seed/kcs-health/800/600",
    hint: "healthcare dashboard"
  }
]

function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-5deg", "5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["5deg", "-5deg"])

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
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1] 
      }}
      viewport={{ once: true }}
      className="group relative h-[450px] sm:h-[500px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-2xl"
    >
      {/* Product Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-110"
          data-ai-hint={product.hint}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10`} />
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 z-20 p-8 sm:p-12 flex flex-col justify-end text-left items-start">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest font-headline">
            {product.tag}
          </span>
          <div className="h-px w-8 bg-primary/30" />
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 font-headline uppercase leading-none">
          {product.name}
        </h3>
        
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 group-hover:text-foreground transition-colors duration-500 max-w-md italic font-medium">
          {product.description}
        </p>
        
        <Button 
          variant="outline" 
          className="h-12 px-8 rounded-full border border-primary/20 text-primary bg-background/40 backdrop-blur-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 text-xs sm:text-sm font-bold group/btn shadow-xl"
          onClick={() => {
            if (product.href && product.href !== "#") {
              window.open(product.href, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          View Platform Preview
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-500" />
        </Button>
      </div>

      {/* Architectural Element */}
      <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
         <Sparkles size={48} className="text-primary" />
      </div>
    </motion.div>
  )
}

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-background py-24 overflow-visible">
      <div className="text-center mb-16 lg:mb-24 w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary font-headline uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-bold">
            <Sparkles size={12} className="inline-block mr-2 animate-pulse" /> Proprietary Protocol
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none font-headline uppercase">
            Our Platforms.
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-8 w-full max-w-3xl mx-auto text-base sm:text-xl leading-relaxed px-4 italic font-medium"
          >
            Engineered solutions architected to bridge the gap between communication silos and healthcare infrastructure.
          </motion.p>
        </motion.div>
      </div>

      <div className="w-full relative px-4 sm:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-6">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 perspective-2000">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center md:justify-end gap-4 mt-12 sm:mt-20">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border-white/5 bg-white/5 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-2xl" />
            <CarouselNext className="static translate-y-0 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border-white/5 bg-white/5 text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-2xl" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}
