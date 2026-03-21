
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
    color: "from-orange-600/5 via-primary/5 to-transparent",
    href: "https://letscatchup-kcs.com/"
  },
  {
    id: "sushrth",
    name: "Sushrth",
    description: "An AI-native healthcare platform designed to modernize patient management and hospital operations for the next generation of clinical infrastructure.",
    color: "from-amber-600/5 via-secondary/5 to-transparent",
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
      className="group relative h-[320px] sm:h-[380px] lg:h-[420px] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-white border border-black/5 hover:border-primary/20 transition-all duration-700 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)]"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
        {/* Architectural grid element */}
        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="absolute inset-0 z-20 p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-center items-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 font-headline">
          {product.name}
        </h3>
        
        <p className="text-xs sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-10 group-hover:text-foreground/80 transition-colors duration-500 max-w-md italic">
          {product.description}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full sm:w-auto h-10 sm:h-12 lg:h-14 px-6 sm:px-10 rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 text-xs sm:text-sm font-bold group/btn shadow-sm"
          onClick={() => {
            if (product.href && product.href !== "#") {
              window.open(product.href, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          Explore Platform
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-500" />
        </Button>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/20 transition-all duration-700 rounded-tl-[1.5rem]" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/20 transition-all duration-700 rounded-br-[1.5rem]" />
    </motion.div>
  )
}

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-background py-12 lg:py-24 overflow-visible">
      <div className="text-center mb-10 lg:mb-20 w-full px-4 sm:px-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-3 block font-bold"
        >
          Proprietary Tech
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none font-headline"
        >
          Our Platforms.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-6 w-full max-w-3xl mx-auto text-base sm:text-xl leading-relaxed px-4 italic"
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
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-6">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 perspective-2000">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4 mt-8 sm:mt-16">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 sm:h-12 sm:w-12 rounded-xl border-black/5 bg-black/5 hover:bg-primary hover:text-white transition-all duration-500" />
            <CarouselNext className="static translate-y-0 h-10 w-10 sm:h-12 sm:w-12 rounded-xl border-black/5 bg-black/5 hover:bg-primary hover:text-white transition-all duration-500" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}
