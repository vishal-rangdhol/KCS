
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Network } from 'lucide-react'
import React from 'react'

const services = [
  {
    title: "Artificial Intelligence",
    description: "Harnessing generative AI and machine learning to automate complex decision-making.",
    icon: BrainCircuit,
    color: "from-orange-500/20 to-amber-600/20",
    iconColor: "text-orange-600",
    hoverBg: "hover:bg-orange-600"
  },
  {
    title: "Cloud Cognitive Operations",
    description: "Optimizing cloud environments with cognitive automation and self-healing systems.",
    icon: Network,
    color: "from-amber-500/20 to-yellow-600/20",
    iconColor: "text-amber-600",
    hoverBg: "hover:bg-amber-600"
  },
  {
    title: "Cybersecurity",
    description: "Military-grade protection for your digital assets and sensitive user data.",
    icon: Shield,
    color: "from-red-500/20 to-orange-600/20",
    iconColor: "text-red-600",
    hoverBg: "hover:bg-red-600"
  },
  {
    title: "Data & Analytics",
    description: "Turning raw data into actionable insights with advanced visualization.",
    icon: BarChart3,
    color: "from-yellow-500/20 to-amber-600/20",
    iconColor: "text-yellow-600",
    hoverBg: "hover:bg-yellow-600"
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable ERP and CRM architectures tailored for global business demands.",
    icon: Building2,
    color: "from-orange-400/20 to-amber-500/20",
    iconColor: "text-orange-500",
    hoverBg: "hover:bg-orange-500"
  },
  {
    title: "Cloud Solutions",
    description: "Seamless migration and management of hybrid cloud infrastructures.",
    icon: Cloud,
    color: "from-amber-600/20 to-orange-700/20",
    iconColor: "text-amber-700",
    hoverBg: "hover:bg-amber-700"
  }
]

function ServiceCard({ service }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        visible: { 
          opacity: 1, 
          scale: 1,
          filter: 'blur(0px)',
          transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      className={`relative h-full p-8 rounded-[2.5rem] bg-black/5 border border-black/5 overflow-hidden group transition-all duration-500 cursor-pointer ${service.hoverBg}`}
    >
      {/* Glass Surface - Inverts to specific color on hover */}
      <div className={`absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-black/5 z-0 group-hover:bg-transparent transition-colors duration-500`} />
      
      <div className="relative z-10">
        <div className={`p-6 rounded-3xl bg-gradient-to-br ${service.color} border border-black/5 w-fit mb-10 shadow-sm ${service.iconColor} group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>
          <service.icon size={44} strokeWidth={1.5} />
        </div>
        
        <div className="relative mb-4 inline-block">
          <h3 className="text-3xl font-bold tracking-tighter text-foreground group-hover:text-white transition-colors duration-500">
            {service.title}
          </h3>
          {/* Animated underline from left to right */}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out" />
        </div>
        
        <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-500">
          {service.description}
        </p>
      </div>

      {/* Subtle Corner Accent - Fades out on hover */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-3xl rounded-full group-hover:opacity-0 transition-opacity duration-500`} />
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
              staggerChildren: 0.1,
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 w-full px-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
