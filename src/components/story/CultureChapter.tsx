"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Focus, Heart, Sparkles, ShieldCheck } from 'lucide-react'

const pillars = [
  { icon: Focus, title: "Deep Focus", text: "We prioritize deep work over constant distraction." },
  { icon: Heart, title: "Sustainable", text: "Balance is the fuel for long-term technical excellence." },
  { icon: ShieldCheck, title: "Reliability", text: "Teams that thrive build products that last." }
]

export function CultureChapter() {
  return (
    <Chapter id="culture" className="bg-background py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2 text-primary font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-6">
              <Sparkles size={14} className="animate-pulse" /> Our Culture
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-foreground mb-8">
              Built on <br />
              <span className="text-secondary italic">Focus, Not Burnout.</span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium border-l-2 border-primary/20 pl-8 mb-10">
              Great technology is built by balanced, inspired teams.
            </p>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                The tech industry runs on burnout. We run on focus. At KCS, we believe sustainable engineering environments produce cleaner architecture, stronger products, and more reliable platforms for the people who depend on them.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-black/5 border border-black/5 hover:border-primary/20 transition-all duration-500 flex items-start gap-6"
              >
                <div className="p-4 rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <pillar.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  )
}
