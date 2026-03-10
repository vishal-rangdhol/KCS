
"use client"

import { Chapter } from './Chapter'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { label: "Clients Served", value: 500, suffix: "+" },
  { label: "Industries Supported", value: 25, suffix: "" },
  { label: "Tech Expertise", value: 100, suffix: "%" },
  { label: "Success Rate", value: 98, suffix: "%" }
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const springValue = useSpring(0, { stiffness: 50, damping: 20 })
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  )
}

export function ImpactChapter() {
  return (
    <Chapter id="impact" className="bg-background py-32">
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline uppercase tracking-[0.3em] text-xs mb-4 block font-bold"
        >
          Our Impact
        </motion.span>
        <h2 className="text-4xl md:text-7xl font-bold">Driving Measurable Results</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="text-5xl md:text-8xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-500">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs md:text-sm">
              {stat.label}
            </p>
            <motion.div 
              className="w-8 h-1 bg-secondary mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ delay: i * 0.1 + 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </Chapter>
  )
}
