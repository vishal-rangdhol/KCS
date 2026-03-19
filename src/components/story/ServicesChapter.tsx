
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
    color: "from-orange-500/20 to-amber-600/20",
    glowColor: "rgba(249, 115, 22, 0.2)",
    iconColor: "text-orange-600"
  },
  {
    title: "Cloud Cognitive Operations",
    description: "Optimizing cloud environments with cognitive automation and self-healing systems.",
    icon: Network,
    color: "from-amber-500/20 to-yellow-600/20",
    glowColor: "rgba(245, 158, 11, 0.2)",
    iconColor: "text-amber-600"
  },
  {
    title: "Cybersecurity",
    description: "Military-grade protection for your digital assets and sensitive user data.",
    icon: Shield,
    color: "from-red-500/20 to-orange-600/20",
    glowColor: "rgba(239, 68, 68, 0.2)",
    iconColor: "text-red-600"
  },
  {
    title: "Data & Analytics",
    description: "Turning raw data into actionable insights with advanced visualization.",
    icon: BarChart3,
    color: "from-yellow-500/20 to-amber-600/20",
    glowColor: "rgba(234, 179, 8, 0.2)",
    iconColor: "text-yellow-600"
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable ERP and CRM architectures tailored for global business demands.",
    icon: Building2,
    color: "from-orange-400/20 to-amber-500/20",
    glowColor: "rgba(251, 146, 60, 0.2)",
    iconColor: "text-orange-500"
  },
  {
    title: "Cloud Solutions",
    description: "Seamless migration and management of hybrid cloud infrastructures.",
    icon: Cloud,
    color: "from-amber-600/20 to-orange-700/20",
    glowColor: "rgba(180, 83, 9, 0.2)",
    iconColor: "text-amber-700"
  }
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-15deg", "15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
        visible: { 
          opacity: 1, 
          scale: 1,
          filter: 'blur(0px)',
          transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full p-8 rounded-[2.5rem] bg-black/5 border border-black/5 hover:border-primary/20 transition-all duration-500 overflow-visible cursor-none"
    >
      {/* Hyper-Vibrant Background Glow - Sunset */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] rounded-[2.5rem]"
        style={{
          background: service.glowColor,
          transform: "translateZ(-50px)"
        }}
      />

      {/* Glass Surface */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-black/5 group-hover:bg-white/60 transition-colors duration-500 z-0" />
      
      {/* Animated Light Sweep */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0 rounded-[2.5rem]"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.8), transparent 50%)`
        }}
      />
      
      <div style={{ transform: "translateZ(60px)" }} className="relative z-10">
        <motion.div 
          whileHover={{ scale: 1.2, rotate: 12 }}
          className={`p-6 rounded-3xl bg-gradient-to-br ${service.color} border border-black/5 w-fit mb-10 shadow-lg group-hover:shadow-primary/20 transition-all duration-500 ${service.iconColor}`}
        >
          <service.icon size={44} strokeWidth={1.5} />
        </motion.div>
        
        <h3 className="text-3xl font-bold mb-4 tracking-tighter text-foreground group-hover:text-primary transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {/* Vibrant Corner Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 rounded-full`} />
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="py-32 bg-background">
      <div className="text-center mb-32 w-full px-6">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
          className="text-primary font-headline uppercase text-xs mb-6 block font-bold"
        >
          Our Capabilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-9xl font-bold mb-10 tracking-tighter text-foreground"
        >
          Solar <br /> <span className="text-secondary italic">Innovation.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed"
        >
          We architect hyper-scalable digital ecosystems with precision, turning complex engineering hurdles into seamless competitive advantages.
        </motion.p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 perspective-2000 w-full px-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
