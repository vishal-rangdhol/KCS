
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Shield, BarChart3, Building2, Network, ArrowUpRight } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const services = [
  {
    title: "Artificial Intelligence",
    description: "Harnessing generative AI and machine learning to automate complex decision-making.",
    icon: BrainCircuit,
    color: "from-indigo-500/20 to-indigo-600/20",
    hoverBg: "hover:bg-indigo-600"
  },
  {
    title: "Cloud Cognitive Operations",
    description: "Optimizing cloud environments with cognitive automation and self-healing systems.",
    icon: Network,
    color: "from-emerald-500/20 to-emerald-600/20",
    hoverBg: "hover:bg-emerald-600"
  },
  {
    title: "Cybersecurity",
    description: "Military-grade protection for your digital assets and sensitive user data.",
    icon: Shield,
    color: "from-rose-500/20 to-rose-600/20",
    hoverBg: "hover:bg-rose-600"
  },
  {
    title: "Data & Analytics",
    description: "Turning raw data into actionable insights with advanced visualization.",
    icon: BarChart3,
    color: "from-sky-500/20 to-sky-600/20",
    hoverBg: "hover:bg-sky-600"
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable ERP and CRM architectures tailored for global business demands.",
    icon: Building2,
    color: "from-violet-500/20 to-violet-600/20",
    hoverBg: "hover:bg-violet-600"
  },
  {
    title: "Cloud Solutions",
    description: "Seamless migration and management of hybrid cloud infrastructures.",
    icon: Cloud,
    color: "from-fuchsia-500/20 to-fuchsia-600/20",
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
        "relative h-full p-8 md:p-10 rounded-[3rem] bg-black/5 border border-black/5 overflow-hidden group transition-all duration-500 cursor-pointer",
        service.hoverBg
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Top Row: Icon and Action Button */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div className="p-4 rounded-2xl bg-white border border-black/5 text-primary group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent transition-all duration-500">
            <service.icon size={32} strokeWidth={1.5} />
          </div>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-foreground group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
            <ArrowUpRight size={24} />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="mt-auto">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground group-hover:text-white transition-colors duration-500 mb-6 leading-tight">
            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-[background-size] duration-500 ease-out pb-1 inline">
              {service.title}
            </span>
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-500">
            {service.description}
          </p>
        </div>
      </div>

      {/* Subtle Corner Accent - Fades out on hover */}
      <div className={cn(
        "absolute top-0 right-0 w-48 h-48 bg-gradient-to-br opacity-10 blur-3xl rounded-full group-hover:opacity-0 transition-opacity duration-500",
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
