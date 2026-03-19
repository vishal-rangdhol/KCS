"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function CareersChapter() {
  return (
    <Chapter id="careers" className="bg-background py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="p-3 rounded-2xl bg-primary/10 text-primary mb-6"
          >
            <Sparkles size={24} />
          </motion.div>
          
          <motion.span 
            className="text-primary font-headline uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 block font-bold"
          >
            Join Our Team
          </motion.span>
          
          <h2 className="text-4xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight">
            Architect the <br />
            <span className="text-secondary italic">Future</span> With Us.
          </h2>
          
          <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            We are looking for visionaries who want to solve the most complex digital challenges of our time. Join a culture of innovation, expertise, and radical transparency.
          </p>
          
          <Link href="/careers">
            <Button size="lg" className="rounded-full h-16 sm:h-20 px-10 sm:px-16 text-lg sm:text-xl font-bold group bg-primary hover:bg-primary/90 shadow-[0_20px_40px_rgba(167,139,250,0.3)] border-none">
              View All Openings 
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Chapter>
  )
}
