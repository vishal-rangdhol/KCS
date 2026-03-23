"use client"

import React from 'react'
import Image from 'next/image'
import { Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import NextLink from 'next/link'

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

const digitalJourney = [
  { id: '01', name: 'Home', href: '/#hero' },
  { id: '02', name: 'Products', href: '/#products' },
  { id: '03', name: 'Technology', href: '/#technology' },
  { id: '04', name: 'Services', href: '/#services' },
]

const corporateProtocol = [
  { id: '05', name: 'About', href: '/#story' },
  { id: '06', name: 'Careers', href: '/#careers' },
  { id: '07', name: 'Contact', href: '/contact' },
]

const productItems = [
  { id: '01', name: 'Let\'s Catch Up', href: 'https://letscatchup-kcs.com/' },
  { id: '02', name: 'Sushrth', href: 'https://www.sushrth.com/' },
]

const socialItems = [
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/kandhuguleconsultancyservicespvtltd/', 
    icon: Linkedin,
    hoverBg: 'group-hover:bg-[#0077B5]',
    glow: 'group-hover:shadow-[0_0_25px_rgba(0,119,181,0.5)]',
    hoverBorder: 'group-hover:border-[#0077B5]'
  },
  { 
    name: 'X', 
    href: 'https://x.com/KCS_Pvt_Ltd', 
    icon: XIcon,
    hoverBg: 'group-hover:bg-black',
    glow: 'group-hover:shadow-[0_0_25px_rgba(0,0,0,0.5)]',
    hoverBorder: 'group-hover:border-black'
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/kandhugule_kcs/', 
    icon: Instagram,
    hoverBg: 'group-hover:bg-[#E4405F]',
    glow: 'group-hover:shadow-[0_0_25px_rgba(228,64,95,0.5)]',
    hoverBorder: 'group-hover:border-[#E4405F]'
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/people/Kandhugule-Consultancy-Services/61563863545091/#', 
    icon: Facebook,
    hoverBg: 'group-hover:bg-[#1877F2]',
    glow: 'group-hover:shadow-[0_0_25px_rgba(24,119,242,0.5)]',
    hoverBorder: 'group-hover:border-[#1877F2]'
  },
]

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background pt-16 md:pt-20 pb-12 border-t border-white/5">
      {/* Background Architectural Mark */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.03] select-none text-primary hidden md:block">
        <span className="text-[20rem] font-bold font-headline leading-none tracking-tighter">KCS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-24 mb-16 md:mb-20">
          
          <div className="lg:max-w-sm">
            <NextLink href="/" className="inline-block mb-6 md:mb-8 group">
              <Image 
                src="/kcs-logo.png" 
                alt="KCS Logo" 
                width={120} 
                height={40} 
                className="h-7 md:h-8 w-auto group-hover:opacity-80 transition-opacity" 
              />
            </NextLink>
            <div className="relative">
              <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-primary mb-4 font-headline">The Collective Protocol</h4>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed italic font-medium max-w-xs">
                Architecting the digital infrastructure that defines the next era of global business through AI and cloud precision.
              </p>
            </div>
            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-white/5">
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 font-headline">Headquarters: Hyderabad, India</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 flex-1">
            
            {/* Nav Group 01 */}
            <div className="space-y-6 md:space-y-8">
              <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline flex items-center gap-2">
                <span className="w-4 h-px bg-primary/30" /> Journey
              </h5>
              <ul className="space-y-3 md:space-y-4">
                {digitalJourney.map((item) => (
                  <li key={item.name}>
                    <NextLink href={item.href} className="group flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                      <span className="text-[8px] font-bold text-primary/40 group-hover:text-primary transition-colors">{item.id}</span>
                      {item.name}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Group 02 */}
            <div className="space-y-6 md:space-y-8">
              <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline flex items-center gap-2">
                <span className="w-4 h-px bg-primary/30" /> Protocol
              </h5>
              <ul className="space-y-3 md:space-y-4">
                {corporateProtocol.map((item) => (
                  <li key={item.name}>
                    <NextLink href={item.href} className="group flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                      <span className="text-[8px] font-bold text-primary/40 group-hover:text-primary transition-colors">{item.id}</span>
                      {item.name}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platforms Group */}
            <div className="space-y-6 md:space-y-8">
              <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline flex items-center gap-2">
                <span className="w-4 h-px bg-primary/30" /> Platforms
              </h5>
              <ul className="space-y-3 md:space-y-4">
                {productItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                      <span className="text-[8px] font-bold text-primary/40 group-hover:text-primary transition-colors">{item.id}</span>
                      {item.name}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connection Group */}
            <div className="space-y-6 md:space-y-8">
              <h5 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline flex items-center gap-2">
                <span className="w-4 h-px bg-primary/30" /> Connection
              </h5>
              <div className="flex gap-3 md:gap-4">
                {socialItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all"
                    aria-label={item.name}
                  >
                    <div className={`p-2 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 text-muted-foreground group-hover:text-white ${item.hoverBg} ${item.glow} ${item.hoverBorder}`}>
                      <item.icon size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <p className="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-foreground/40 font-headline font-bold">
              2026 | ALL RIGHTS RESERVED BY KANDHUGULE CONSULTANCY SERVICES PRIVATE LIMITED
            </p>
          </div>
          
          <div className="flex gap-6 md:gap-10 text-[8px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] font-headline">
            <NextLink href="#" className="text-primary hover:text-foreground transition-colors duration-300">Privacy_Protocol</NextLink>
            <NextLink href="#" className="text-primary hover:text-foreground transition-colors duration-300">Usage_Terms</NextLink>
            <NextLink href="/contact" className="text-primary hover:text-foreground transition-colors duration-300">Support_Terminal</NextLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
