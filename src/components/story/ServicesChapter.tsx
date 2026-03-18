"use client"

import { Chapter } from './Chapter'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Network } from 'lucide-react'
import React, { useRef } from 'react'

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
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Fast but smooth spring for the "pressed" feel
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 })

  // "Press Down" logic: tilts the side under the cursor away
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-12deg", "12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full p-8 rounded-[2.5rem] bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-primary/20 cursor-none"
    >
      {/* Dynamic Radial Glow Overlay */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(62, 128, 219, 0.15), transparent 60%)`
        }}
      />
      
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 10 }}
          className={`p-5 rounded-2xl bg-background/60 border border-white/10 w-fit mb-8 shadow-xl group-hover:shadow-primary/20 transition-all duration-500 ${service.iconColor}`}
        >
          <service.icon size={36} />
        </motion.div>
        
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors">
          {service.description}
        </p>
      </div>

      {/* Decorative inner light */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="py-32">
      <div className="text-center mb-24 w-full px-6">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block font-bold"
        >
          Our Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-8xl font-bold mb-8 tracking-tighter"
        >
          Premium Solutions
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
        >
          We combine technical depth with strategic foresight to deliver architectures that power the next generation of global businesses.
        </motion.p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-2000 w-full px-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
