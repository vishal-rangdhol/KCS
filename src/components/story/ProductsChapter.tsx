"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useRef } from 'react'

const products = [
  {
    id: "letscatchup",
    name: "Let’s Catch Up",
    description: "A next-generation social-learning ecosystem that brings communities together through meaningful knowledge sharing and structured collaboration — not engagement algorithms.",
    color: "from-orange-600/10 via-primary/10 to-transparent",
    href: "https://letscatchup-kcs.com/"
  },
  {
    id: "sushrth",
    name: "Sushrth",
    description: "An AI-native healthcare platform designed to modernize patient management and hospital operations for the next generation of clinical infrastructure.",
    color: "from-amber-600/10 via-secondary/10 to-transparent",
    href: "https://www.sushrth.com/"
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
      className="group relative h-[250px] sm:h-[280px] lg:h-[300px] w-full rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden bg-card/40 border border-white/5 hover:border-primary/20 transition-all duration-700 shadow-2xl"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />
        {/* Architectural grid element */}
        <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="absolute inset-0 z-20 p-5 sm:p-8 lg:p-10 flex flex-col justify-center text-center items-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 font-headline">
          {product.name}
        </h3>
        
        <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground leading-relaxed mb-5 sm:mb-8 group-hover:text-foreground/80 transition-colors duration-500 max-w-sm italic">
          {product.description}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full sm:w-auto h-9 sm:h-10 px-5 sm:px-8 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 text-[10px] sm:text-xs font-bold group/btn shadow-sm"
          onClick={() => {
            if (product.href && product.href !== "#") {
              window.open(product.href, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          Explore Platform
          <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-500" />
        </Button>
      </div>
    </motion.div>
  )
}

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-background py-10 lg:py-20 overflow-visible">
      <div className="text-center mb-8 lg:mb-16 w-full px-4 sm:px-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-headline uppercase tracking-[0.4em] text-[8px] sm:text-[10px] mb-2 block font-bold"
        >
          Proprietary Tech
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none font-headline"
        >
          Our Platforms.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-4 w-full max-w-2xl mx-auto text-xs sm:text-base leading-relaxed px-4 italic"
        >
          Explore our specialized solutions designed to solve complex challenges in communication and healthcare infrastructure.
        </motion.p>
      </div>

      <div className="w-full relative px-4 sm:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 perspective-2000">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center md:justify-end gap-2 sm:gap-3 mt-6 sm:mt-12">
            <CarouselPrevious className="static translate-y-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg border-white/10 bg-white/5 hover:bg-primary hover:text-white transition-all duration-500" />
            <CarouselNext className="static translate-y-0 h-8 w-8 sm:h-10 sm:w-10 rounded-lg border-white/10 bg-white/5 hover:bg-primary hover:text-white transition-all duration-500" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}
