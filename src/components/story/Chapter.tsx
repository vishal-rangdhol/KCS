
"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ChapterProps {
  children: ReactNode
  id: string
  className?: string
}

export function Chapter({ children, id, className = "" }: ChapterProps) {
  return (
    <section 
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
