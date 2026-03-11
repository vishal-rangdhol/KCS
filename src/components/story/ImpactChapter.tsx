"use client"

import { Chapter } from './Chapter'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

const stats = [
  { label: "Clients Served", value: 500, suffix: "+" },
  { label: "Industries Supported", value: 25, suffix: "" },
  { label: "Tech Expertise", value: 100, suffix: "%" },
  { label: "Success Rate", value: 98, suffix: "%" }
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const springValue = useSpring(0, { stiffness: 40, damping: 15 })
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-headline uppercase tracking-[0.4em] text-xs mb-4 block font-bold"
        >
          Our Impact
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-8xl font-bold tracking-tighter"
        >
          Driving Measurable Results
        </motion.h2>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            }
          }
        }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="text-center group"
          >
            <div className="text-6xl md:text-9xl font-bold text-primary mb-6 group-hover:scale-105 transition-transform duration-700 tracking-tighter">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.3em] text-xs md:text-sm group-hover:text-foreground transition-colors">
              {stat.label}
            </p>
            <motion.div 
              className="w-12 h-1 bg-secondary mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ delay: i * 0.15 + 0.6, duration: 0.8 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </Chapter>
  )
}
