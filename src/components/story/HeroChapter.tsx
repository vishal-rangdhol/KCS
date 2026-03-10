
"use client"

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function HeroChapter() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-10"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-primary font-headline uppercase tracking-widest text-sm mb-4 block"
        >
          Kandhugule Consultancy Services
        </motion.span>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Crafting the Future of <span className="text-primary italic">Innovation.</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-body">
          Transforming vision into narrative. KCS is not just a consultancy; we are your strategic storytelling partner in a digital world.
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-tighter">Scroll Story</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  )
}
