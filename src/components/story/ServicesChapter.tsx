
"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Network, LucideIcon } from 'lucide-react'
import React from 'react'

const services = [
  {
    title: "Artificial Intelligence",
    description: "Harnessing generative AI and machine learning to automate complex decision-making.",
    icon: BrainCircuit,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Cloud Cognitive Operations",
    description: "Optimizing cloud environments with cognitive automation and self-healing systems.",
    icon: Network,
    color: "from-purple-500/20 to-blue-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Cybersecurity",
    description: "Military-grade protection for your digital assets and sensitive user data.",
    icon: Shield,
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400"
  },
  {
    title: "Data & Analytics",
    description: "Turning raw data into actionable insights with advanced visualization.",
    icon: BarChart3,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400"
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable ERP and CRM architectures tailored for global business demands.",
    icon: Building2,
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400"
  },
  {
    title: "Cloud Solutions",
    description: "Seamless migration and management of hybrid cloud infrastructures.",
    icon: Cloud,
    color: "from-blue-400/20 to-indigo-500/20",
    iconColor: "text-blue-300"
  }
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className={`p-4 rounded-2xl bg-background border border-border/40 w-fit mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(62,128,219,0.3)] transition-all duration-500 ${service.iconColor}`}>
          <service.icon size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-all duration-500" />
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="py-24">
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline uppercase tracking-[0.3em] text-xs mb-4 block font-bold"
        >
          Our Expertise
        </motion.span>
        <h2 className="text-4xl md:text-7xl font-bold mb-6">Premium Solutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          We combine technical depth with strategic foresight to deliver architectures that power the next generation of global businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </Chapter>
  )
}
