
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, MessageSquare, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: "letscatchup",
    name: "Let’s Catch Up",
    description: "A premium communication platform connecting people seamlessly through secure, encrypted channels, while also integrating a powerful Learning Management System (LMS) that enables organizations and institutions to deliver, manage, and track learning experiences in one unified ecosystem.",
    image: "https://picsum.photos/seed/catchup/1200/800",
    icon: MessageSquare,
    color: "from-blue-600/20 via-primary/5 to-transparent",
    hint: "communication chat"
  },
  {
    id: "sushrt",
    name: "SUSHRT",
    description: "Advanced data management and processing platform designed for hyper-scalable enterprise operations.",
    image: "https://picsum.photos/seed/sushrt/1200/800",
    icon: Database,
    color: "from-purple-600/20 via-secondary/5 to-transparent",
    hint: "data processing"
  }
]

export function ProductsChapter() {
  return (
    <Chapter id="products" className="bg-card/30 py-20">
      <div className="text-center mb-16 sm:mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4 block font-bold"
        >
          Proprietary Tech
        </motion.span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold">Innovation Ecosystem</h2>
      </div>

      <div className="space-y-20 sm:space-y-32">
        {products.map((product, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 sm:gap-16 items-center`}>
            <div className="flex-1 space-y-6 sm:space-y-8 w-full">
              <div className="flex items-center gap-4 text-primary">
                <product.icon size={20} className="sm:size-6" />
                <span className="font-bold tracking-widest uppercase text-[10px] sm:text-sm">Product Reveal</span>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">{product.name}</h3>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <Button size="lg" className="rounded-full h-12 sm:h-14 px-6 sm:px-8 group w-full sm:w-auto">
                Explore Product <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex-1 relative group w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} z-10 opacity-60`} />
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                  data-ai-hint={product.hint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 z-20 p-[1px] rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:animate-shimmer" />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </Chapter>
  )
}
