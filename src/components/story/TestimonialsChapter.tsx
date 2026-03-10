
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO, Global Tech Corp",
    quote: "KCS didn't just provide a solution; they architected a future for our entire cloud ecosystem. Their AI integration is second to none.",
    avatar: PlaceHolderImages.find(img => img.id === 'avatar-1')?.imageUrl
  },
  {
    name: "Sarah Chen",
    role: "Head of Operations, FinStream",
    quote: "The team's expertise in cybersecurity gave us the peace of mind to scale globally without hesitation. A truly premium partnership.",
    avatar: PlaceHolderImages.find(img => img.id === 'avatar-2')?.imageUrl
  },
  {
    name: "Jameson Ford",
    role: "Founder, InnovateX",
    quote: "Let's Catch Up transformed how our remote teams communicate. Seamless, secure, and incredibly fast. Exactly what we needed.",
    avatar: PlaceHolderImages.find(img => img.id === 'avatar-3')?.imageUrl
  }
]

export function TestimonialsChapter() {
  return (
    <Chapter id="testimonials" className="bg-card/20 py-32">
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline uppercase tracking-[0.3em] text-xs mb-4 block font-bold"
        >
          Partner Success
        </motion.span>
        <h2 className="text-4xl md:text-7xl font-bold">Trusted by Industry Leaders</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-10 rounded-[32px] bg-card border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Quote size={80} strokeWidth={1} />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 relative z-10 italic">
              "{t.quote}"
            </p>

            <div className="flex items-center gap-4 relative z-10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                <Image 
                  src={t.avatar || "https://picsum.photos/seed/p1/200/200"} 
                  alt={t.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Chapter>
  )
}
