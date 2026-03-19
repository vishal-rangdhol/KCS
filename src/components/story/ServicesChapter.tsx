
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Smartphone, ArrowUpRight } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const services = [
  {
    title: "Artificial Intelligence",
    description: "Machine learning models, natural language processing systems, and predictive analytics — built for practical business use, not proof-of-concept demos.",
    icon: BrainCircuit,
    color: "from-indigo-500 to-indigo-600",
    hoverBg: "hover:bg-indigo-600"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure architecture deployed across AWS, Google Cloud, and Microsoft Azure, designed for global performance and high availability.",
    icon: Cloud,
    color: "from-emerald-500 to-emerald-600",
    hoverBg: "hover:bg-emerald-600"
  },
  {
    title: "Data & Analytics",
    description: "From raw data pipelines to executive dashboards — we build systems that help organizations understand their data and act on it.",
    icon: BarChart3,
    color: "from-sky-500 to-sky-600",
    hoverBg: "hover:bg-sky-600"
  },
  {
    title: "Cybersecurity",
    description: "Security-first design across every layer — from architecture decisions through deployment and ongoing monitoring.",
    icon: Shield,
    color: "from-rose-500 to-rose-600",
    hoverBg: "hover:bg-rose-600"
  },
  {
    title: "Enterprise Platforms",
    description: "Custom ERP, CRM, and workflow systems built around how businesses actually operate, not around what generic software assumes they do.",
    icon: Building2,
    color: "from-violet-500 to-violet-600",
    hoverBg: "hover:bg-violet-600"
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform development across Flutter, React Native, Swift, and Kotlin — optimized for iOS, Android, and web.",
    icon: Smartphone,
    color: "from-fuchsia-500 to-fuchsia-600",
    hoverBg: "hover:bg-fuchsia-600"
  }
]

function ServiceCard({ service }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: { 
          opacity: 1, 
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      className={cn(
        "relative h-[520px] p-10 rounded-[3rem] bg-black/5 border border-black/5 overflow-hidden group transition-all duration-500 cursor-pointer",
        service.hoverBg
      )}
    >
      <div className="relative z-10 h-full flex flex-col justify-center">
        {/* Top Row: Absolute positioned to stay at the top */}
        <div className="absolute top-10 left-10 right-10 flex items-center justify-between">
          <div className="p-4 rounded-2xl bg-white border border-black/5 text-primary group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
            <service.icon size={32} strokeWidth={1.5} />
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-foreground group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-sm">
            <ArrowUpRight size={24} />
          </div>
        </div>
        
        {/* Content Section: Centered vertically */}
        <div className="text-left mt-8">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground group-hover:text-white transition-colors duration-500 mb-6 leading-tight">
            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-[background-size] duration-1000 ease-out pb-1 inline">
              {service.title}
            </span>
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-500 max-w-[90%]">
            {service.description}
          </p>
        </div>
      </div>

      {/* Subtle Corner Accent - Fades out on hover */}
      <div className={cn(
        "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-[0.03] blur-3xl rounded-full group-hover:opacity-0 transition-opacity duration-500",
        service.color
      )} />
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="py-32 bg-background">
      <div className="text-center mb-24 md:mb-32 w-full px-6">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl mx-auto px-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
