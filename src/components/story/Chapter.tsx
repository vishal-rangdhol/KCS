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
      className={`min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1600px] w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
