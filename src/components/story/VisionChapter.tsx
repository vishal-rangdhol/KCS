
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, UserCircle, BarChart3 } from 'lucide-react'

const values = [
  {
    title: "Innovation at the core",
    description: "Pushing boundaries with cutting-edge AI and cloud architectures.",
    icon: Sparkles,
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Expertise you can trust",
    description: "Decades of combined experience in complex digital systems.",
    icon: ShieldCheck,
    color: "from-secondary/20 to-secondary/5"
  },
  {
    title: "Customer centric solutions",
    description: "We don't just build tech; we solve your specific business needs.",
    icon: UserCircle,
    color: "from-primary/20 to-primary/5"
  },
  {
    title: "Proven track record",
    description: "Success stories across diverse industries globally.",
    icon: BarChart3,
    color: "from-secondary/20 to-secondary/5"
  }
]

export function VisionChapter() {
  return (
    <Chapter id="vision" className="bg-card/20">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-headline uppercase tracking-widest text-sm mb-4 block font-bold">The Vision</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            KCS was created to help organizations <br />
            <span className="text-secondary italic">transform complexity</span> <br />
            into innovation.
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className={`p-10 rounded-3xl bg-gradient-to-br ${value.color} border border-white/5 backdrop-blur-sm shadow-2xl group`}
          >
            <div className="bg-background/50 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
              <value.icon className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Chapter>
  )
}
