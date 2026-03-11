
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, MessageSquare, Database, Shield, BarChart3, Brain, Globe } from 'lucide-react'
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
    description: "A premium communication platform connecting people seamlessly through secure channels, integrating a powerful LMS to deliver and manage learning experiences in one unified ecosystem.",
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
  },
  {
    id: "cloudguard",
    name: "Cloud Guard",
    description: "Next-generation security perimeter providing real-time threat detection and autonomous response for distributed cloud environments.",
    image: "https://picsum.photos/seed/cg1/1200/800",
    icon: Shield,
    color: "from-red-600/40 via-destructive/20 to-transparent",
    hint: "cloud security"
  },
  {
    id: "insight-engine",
    name: "Insight Engine",
    description: "AI-driven analytics platform that deciphers complex patterns into actionable business strategy with millisecond latency.",
    image: "https://picsum.photos/seed/ie1/1200/800",
    icon: BarChart3,
    color: "from-emerald-600/40 via-emerald-400/20 to-transparent",
    hint: "business analytics"
  },
  {
    id: "neural-flow",
    name: "Neural Flow",
    description: "Cognitive workflow automation that learns from organizational behavior to optimize every internal process automatically.",
    image: "https://picsum.photos/seed/nf1/1200/800",
    icon: Brain,
    color: "from-cyan-600/40 via-cyan-400/20 to-transparent",
    hint: "ai automation"
  },
  {
    id: "global-sync",
    name: "Global Sync",
    description: "Seamless synchronization layer for multi-region architectures, maintaining data consistency across the planet in real-time.",
    image: "https://picsum.photos/seed/gs1/1200/800",
    icon: Globe,
    color: "from-orange-600/40 via-orange-400/20 to-transparent",
    hint: "global network"
  }
]

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-card/10 py-24 overflow-visible">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block font-bold"
        >
          Proprietary Tech
        </motion.span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter">Innovation Ecosystem</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our suite of intelligent products designed to solve complex challenges in communication, data, and security.
        </p>
      </div>

      <div className="w-full relative px-4 md:px-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 sm:-ml-8">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-4 sm:pl-8 md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[500px] sm:h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-card border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-2xl"
                >
                  {/* Product Image Background */}
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                      data-ai-hint={product.hint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10 mix-blend-overlay`} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 p-8 sm:p-10 flex flex-col justify-end">
                    <div className="bg-background/20 backdrop-blur-md p-3 rounded-2xl w-fit mb-6 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">{product.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 line-clamp-4">
                      {product.description}
                    </p>
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary hover:text-white rounded-2xl h-12 px-6 group/btn border border-white/5 bg-white/5">
                      Explore Product
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Top Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:flex justify-end gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-2xl border-white/10 bg-card/40 hover:bg-primary hover:border-primary transition-all" />
            <CarouselNext className="static translate-y-0 h-12 w-12 rounded-2xl border-white/10 bg-card/40 hover:bg-primary hover:border-primary transition-all" />
          </div>
        </Carousel>
      </div>
    </Chapter>
  )
}
