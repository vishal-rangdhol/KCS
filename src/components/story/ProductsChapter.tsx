"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, MessageSquare, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  {
    id: "letscatchup",
    name: "Let’s Catch Up",
    description: "A premium communication platform connecting people seamlessly through secure, encrypted channels, while also integrating a powerful Learning Management System (LMS) that enables organizations and institutions to deliver, manage, and track learning experiences in one unified ecosystem.",
    image: "https://picsum.photos/seed/catchup/1200/800",
    icon: MessageSquare,
    color: "from-blue-600/40 via-primary/20 to-transparent",
    hint: "communication chat"
  },
  {
    id: "sushrt",
    name: "SUSHRT",
    description: "Advanced data management and processing platform designed for hyper-scalable enterprise operations, ensuring integrity and speed at scale.",
    image: "https://picsum.photos/seed/sushrt/1200/800",
    icon: Database,
    color: "from-purple-600/40 via-secondary/20 to-transparent",
    hint: "data processing"
  }
]

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-card/10 py-32 overflow-visible">
      <div className="text-center mb-24">
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
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter"
        >
          Innovation Ecosystem
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mt-6 w-full text-lg sm:text-xl leading-relaxed"
        >
          Explore our specialized solutions designed to solve complex challenges in communication and data management.
        </motion.p>
      </div>

      <div className="w-full relative px-4 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full mx-auto"
        >
          <CarouselContent className="-ml-6 sm:-ml-10">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-6 sm:pl-10 md:basis-1/2 lg:basis-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.23, 1, 0.32, 1] 
                  }}
                  viewport={{ once: true }}
                  className="group relative h-[550px] sm:h-[700px] w-full rounded-[3rem] overflow-hidden bg-card border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
                >
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                      data-ai-hint={product.hint}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10 mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                  </div>

                  <div className="absolute inset-0 z-20 p-10 sm:p-14 flex flex-col justify-end">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-background/30 backdrop-blur-xl p-4 rounded-2xl w-fit mb-8 border border-white/10 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-500 shadow-2xl"
                    >
                      <product.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-glow group-hover:text-primary transition-colors duration-500">
                      {product.name}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 line-clamp-4 group-hover:text-foreground/90 transition-colors duration-500">
                      {product.description}
                    </p>
                    
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary hover:text-white rounded-[1.5rem] h-14 px-8 group/btn border border-white/5 bg-white/5 transition-all duration-500 text-lg font-bold">
                      Explore Product
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </Button>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {products.length > 2 && (
            <div className="hidden md:flex justify-end gap-6 mt-16">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-2xl border-white/10 bg-card/40 hover:bg-primary hover:border-primary transition-all duration-500" />
              <CarouselNext className="static translate-y-0 h-14 w-14 rounded-2xl border-white/10 bg-card/40 hover:bg-primary hover:border-primary transition-all duration-500" />
            </div>
          )}
        </Carousel>
      </div>
    </Chapter>
  )
}
