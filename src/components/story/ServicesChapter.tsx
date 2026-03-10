
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Layers, Rocket, Shield, Zap } from 'lucide-react'

const services = [
  {
    title: "Strategic Consulting",
    description: "Aligning your business goals with the latest market trends and technological shifts.",
    icon: Rocket,
    color: "text-primary"
  },
  {
    title: "Digital Transformation",
    description: "Modernizing your infrastructure to support the next generation of growth.",
    icon: Zap,
    color: "text-secondary"
  },
  {
    title: "Risk Management",
    description: "Protecting your narrative from the complexities of the modern digital landscape.",
    icon: Shield,
    color: "text-primary"
  },
  {
    title: "Architecture Design",
    description: "Building the robust foundations that allow your vision to scale infinitely.",
    icon: Layers,
    color: "text-secondary"
  }
]

export function ServicesChapter() {
  return (
    <Chapter id="services">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We offer a comprehensive suite of consulting services designed to power your narrative.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className={`p-3 rounded-lg bg-background w-fit mb-6 ${service.color}`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Chapter>
  )
}
