
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Smartphone } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const services = [
  {
    title: "Artificial Intelligence",
    description: "Machine learning models, natural language processing systems, and predictive analytics — built for practical business use, not proof-of-concept demos.",
    icon: BrainCircuit,
    color: "bg-indigo-600",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure architecture deployed across AWS, Google Cloud, and Microsoft Azure, designed for global performance and high availability.",
    icon: Cloud,
    color: "bg-emerald-600",
  },
  {
    title: "Data & Analytics",
    description: "From raw data pipelines to executive dashboards — we build systems that help organizations understand their data and act on it.",
    icon: BarChart3,
    color: "bg-sky-600",
  },
  {
    title: "Cybersecurity",
    description: "Security-first design across every layer — from architecture decisions through deployment and ongoing monitoring.",
    icon: Shield,
    color: "bg-rose-600",
  },
  {
    title: "Enterprise Platforms",
    description: "Custom ERP, CRM, and workflow systems built around how businesses actually operate, not around what generic software assumes they do.",
    icon: Building2,
    color: "bg-violet-600",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform development across Flutter, React Native, Swift, and Kotlin — optimized for iOS, Android, and web.",
    icon: Smartphone,
    color: "bg-fuchsia-600",
  }
]

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } 
        }
      }}
      className="relative h-[400px] md:h-[520px] rounded-[2.5rem] md:rounded-[3rem] bg-black/5 border border-black/5 overflow-hidden group transition-all duration-500 cursor-pointer shadow-xl"
    >
      <div className={cn(
        "absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 saturate-[0.85]",
        service.color
      )} />

      <div className="relative z-20 h-full p-8 md:p-10 flex flex-col justify-center text-center">
        <div className="absolute top-8 md:top-10 left-8 md:left-10 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-black/5 text-primary group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm w-fit">
          <service.icon size={24} className="md:size-[32px]" strokeWidth={1.5} />
        </div>

        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground group-hover:text-white transition-colors duration-500 leading-tight">
            <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary group-hover:from-white group-hover:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-[background-size] duration-1000 ease-out pb-1 inline">
              {service.title}
            </span>
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg group-hover:text-white/90 transition-colors duration-500 max-w-sm mx-auto">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesChapter() {
  return (
    <Chapter id="services" className="py-24 md:py-32 bg-background">
      <div className="text-center mb-16 md:mb-32 w-full px-4">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 md:mb-6 block font-bold"
        >
          Our Capabilities
        </motion.span>
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 md:mb-10 tracking-tighter text-foreground">
          Solar <br /> <span className="text-secondary italic">Innovation.</span>
        </h2>
        <p className="text-muted-foreground max-w-4xl mx-auto text-lg md:text-2xl leading-relaxed">
          We architect hyper-scalable digital ecosystems with precision, turning complex engineering hurdles into seamless competitive advantages.
        </p>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 w-full max-w-7xl mx-auto px-4 md:px-6"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </Chapter>
  )
}
