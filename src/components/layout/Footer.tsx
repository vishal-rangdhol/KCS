"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Linkedin, Instagram, Facebook, ArrowUpRight, Cpu } from 'lucide-react'
import NextLink from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Custom X (formerly Twitter) Icon Component
const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

function OdometerNumber({ num }: { num: string }) {
  const [display, setDisplay] = useState(num)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) {
      setDisplay(num)
      return
    }

    let iterations = 0
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 90 + 10).toString()
      setDisplay(randomValue)
      
      iterations++
      if (iterations > 10) {
        clearInterval(interval)
        setDisplay(num)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [isHovering, num])

  return (
    <span 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="font-mono text-primary mr-3 text-sm tracking-tighter"
    >
      [{display}]
    </span>
  )
}

const protocols = [
  { id: '01', name: 'THE NARRATIVE', href: '/#story' },
  { id: '02', name: 'CORE SERVICES', href: '/#services' },
  { id: '03', name: 'PRODUCT LAB', href: '/#products' },
  { id: '04', name: 'TALENT PROTOCOL', href: '/#careers' },
  { id: '05', name: 'CONTACT TERMINAL', href: '/contact' },
]

const socialNodes = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/kandhuguleconsultancyservicespvtltd/', icon: Linkedin },
  { name: 'X', href: 'https://x.com/KCS_Pvt_Ltd', icon: XIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/kandhugule_kcs/', icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/people/Kandhugule-Consultancy-Services/61563863545091/#', icon: Facebook },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full relative overflow-hidden bg-background pt-20 pb-12 border-t border-white/5">
      {/* Background Architectural Mark */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.02] select-none text-primary hidden lg:block">
        <span className="text-[25rem] font-bold font-headline leading-none tracking-tighter">TERMINAL</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 mb-20">
          
          {/* Column 01: Brand Core */}
          <div className="space-y-8">
            <button 
              onClick={scrollToTop}
              className="inline-block group relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
              <Image 
                src="/kcs-logo.png" 
                alt="KCS Logo" 
                width={140} 
                height={44} 
                className="h-8 md:h-10 w-auto relative z-10 group-hover:opacity-80 transition-opacity" 
              />
              <span className="absolute -bottom-4 left-0 text-[6px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">System Reset</span>
            </button>
            
            <p className="text-muted-foreground text-sm leading-relaxed italic font-medium max-w-xs">
              Ensuring technology remains a competitive advantage through architectural precision and AI-native design.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-500 uppercase">System_Status: Optimized</span>
            </div>
            
            <div className="pt-6 border-t border-white/5">
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-foreground/40 font-headline">HQ: HYDERABAD // INDIA</p>
            </div>
          </div>

          {/* Column 02: The Protocols */}
          <div className="space-y-10">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary font-headline flex items-center gap-3">
              <span className="w-6 h-px bg-primary/30" /> The Protocols
            </h5>
            <ul className="space-y-5">
              {protocols.map((item) => (
                <li key={item.name}>
                  <NextLink 
                    href={item.href} 
                    className="group flex items-center text-[11px] text-muted-foreground hover:text-primary transition-all font-bold tracking-widest"
                  >
                    <OdometerNumber num={item.id} />
                    {item.name}
                    <ArrowUpRight size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 03: Global Connectivity */}
          <div className="space-y-10">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary font-headline flex items-center gap-3">
              <span className="w-6 h-px bg-primary/30" /> Global Connectivity
            </h5>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground block">Newsletter_Terminal</span>
                <div className="relative max-w-xs group">
                  <input 
                    type="email" 
                    placeholder="SUBSCRIBE_TO_UPDATES_" 
                    className="w-full bg-transparent border-b border-white/10 py-3 pr-10 text-[10px] font-mono focus:border-primary transition-colors outline-none text-foreground placeholder:text-foreground/20"
                  />
                  <div className="absolute right-0 bottom-3 w-1.5 h-3.5 bg-primary animate-pulse cursor-blink" />
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground block">Social_Nodes</span>
                <div className="flex gap-4 relative">
                  {socialNodes.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-all"
                      aria-label={item.name}
                    >
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 text-muted-foreground group-hover:text-white group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        <item.icon size={16} />
                      </div>
                    </a>
                  ))}
                  {/* Visual Connection Line Effect simulated on hover of the container */}
                  <div className="absolute -bottom-4 left-0 h-[1px] w-0 bg-primary/20 group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <p className="text-[8px] tracking-[0.3em] uppercase text-foreground/40 font-headline font-bold">
              © 2026 | KANDHUGULE CONSULTANCY SERVICES PRIVATE LIMITED
            </p>
          </div>
          
          <div className="flex gap-10 text-[8px] font-bold uppercase tracking-[0.4em] font-headline">
            <NextLink href="#" className="text-primary hover:text-foreground transition-colors duration-300">Privacy_Protocol</NextLink>
            <NextLink href="#" className="text-primary hover:text-foreground transition-colors duration-300">Usage_Terms</NextLink>
            <NextLink href="/contact" className="text-primary hover:text-foreground transition-colors duration-300">Support_Terminal</NextLink>
          </div>
        </div>
      </div>
    </footer>
  )
}