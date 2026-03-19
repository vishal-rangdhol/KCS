"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, MessageSquare, HeartPulse } from 'lucide-react'
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
    description: "A next-generation social-learning ecosystem that brings communities together through meaningful knowledge sharing and structured collaboration — not engagement algorithms. Private learning circles · Integrated LMS · Secure social collaboration · Student and professional networks",
    image: "https://picsum.photos/seed/catchup/1200/800",
    icon: MessageSquare,
    color: "from-orange-600/40 via-primary/20 to-transparent",
    hint: "social learning",
    href: "https://letscatchup-kcs.com/"
  },
  {
    id: "sushrth",
    name: "Sushrth",
    description: "An AI-native healthcare platform designed to modernize patient management and hospital operations for the next generation of clinical infrastructure. Smart appointment automation · Secure digital health records · Intelligent clinical workflows · Scalable hospital infrastructure",
    image: "https://picsum.photos/seed/sushrth/1200/800",
    icon: HeartPulse,
    color: "from-amber-600/40 via-secondary/20 to-transparent",
    hint: "healthcare platform",
    href: "#"
  }
]

function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-10deg", "10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["10deg", "-10deg"])

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
      className="group relative h-[500px] sm:h-[650px] lg:h-[800px] w-full rounded-[2rem] sm:rounded-[4rem] overflow-hidden bg-card border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)]"
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 brightness-50 group-hover:brightness-90"
          data-ai-hint={product.hint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10 mix-blend-overlay opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
      </div>

      <div style={{ transform: "translateZ(60px)" }} className="absolute inset-0 z-20 p-6 sm:p-12 lg:p-20 flex flex-col justify-end">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="bg-background/20 backdrop-blur-2xl p-3 sm:p-5 rounded-xl sm:rounded-[2rem] w-fit mb-4 sm:mb-10 border border-white/10 group-hover:bg-primary/40 group-hover:border-primary/60 transition-all duration-500 shadow-2xl"
        >
          <product.icon className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
        </motion.div>
        
        <h3 className="text-2xl sm:text-5xl lg:text-7xl font-bold mb-3 sm:mb-8 tracking-tighter text-glow group-hover:text-primary transition-colors duration-500">
          {product.name}
        </h3>
        
        <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6 sm:mb-12 line-clamp-3 sm:line-clamp-4 group-hover:text-foreground/95 transition-colors duration-500 max-w-2xl">
          {product.description}
        </p>
        
        <Button 
          variant="ghost" 
          className="w-full justify-between hover:bg-primary hover:text-white rounded-xl sm:rounded-[2rem] h-12 sm:h-20 px-5 sm:px-12 group/btn border border-white/10 bg-white/5 transition-all duration-500 text-sm sm:text-lg lg:text-xl font-bold whitespace-normal text-left"
          onClick={() => {
            if (product.href && product.href !== "#") {
              window.open(product.href, '_blank', 'noopener,noreferrer');
            }
          }}
        >
          <span className="flex-1 pr-4">Explore Platform</span>
          <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0 group-hover/btn:translate-x-3 transition-transform duration-500" />
        </Button>
      </div>
      
      {/* Top light sweep */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  )
}

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-card/10 py-16 lg:py-32 overflow-visible">
      <div className="text-center mb-12 lg:mb-32 w-full px-4 sm:px-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block font-bold"
        >
          Proprietary Tech
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-8xl font-bold tracking-tighter"
        >
          Our Platforms
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-6 sm:mt-8 w-full max-w-4xl mx-auto text-base sm:text-2xl leading-relaxed px-4"
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
          className="w-full"
        >
          <CarouselContent className="-ml-4 sm:-ml-12">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 sm:pl-12 basis-full md:basis-1/2 lg:basis-1/2 perspective-2000">
                <ProductCard product={product} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center md:justify-end gap-4 sm:gap-6 mt-8 sm:mt-16">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 sm:h-16 sm:w-16 rounded-lg sm:rounded-2xl border-white/10 bg-card/40 hover:bg-primary hover:border-primary transition-all duration-500" />
            <CarouselNext className="static translate-y-0 h-10 w-10 sm:h-16 sm:w-16 rounded-lg sm:rounded-2xl border-white/10 bg-card/40 hover:bg-primary hover:border-primary transition-all duration-500" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}
