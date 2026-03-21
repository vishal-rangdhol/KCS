"use client"

import React from 'react'
import Image from 'next/image'
import { Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from 'lucide-react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { id: '01', name: 'Story', href: '/#story' },
  { id: '02', name: 'Products', href: '/#products' },
  { id: '03', name: 'Services', href: '/#services' },
  { id: '04', name: 'Careers', href: '/careers' },
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
    color: 'group-hover:text-[#0077B5]',
    glow: 'group-hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] group-hover:border-[#0077B5]/40'
  },
  { 
    name: 'X', 
    href: '#', 
    icon: Twitter,
    color: 'group-hover:text-[#1DA1F2]',
    glow: 'group-hover:shadow-[0_0_20px_rgba(29,161,242,0.3)] group-hover:border-[#1DA1F2]/40'
  },
  { 
    name: 'Instagram', 
    href: '#', 
    icon: Instagram,
    color: 'group-hover:text-[#E4405F]',
    glow: 'group-hover:shadow-[0_0_20px_rgba(228,64,95,0.3)] group-hover:border-[#E4405F]/40'
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/people/Kandhugule-Consultancy-Services/61563863545091/#', 
    icon: Facebook,
    color: 'group-hover:text-[#1877F2]',
    glow: 'group-hover:shadow-[0_0_20px_rgba(24,119,242,0.3)] group-hover:border-[#1877F2]/40'
  },
]

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background pt-20 pb-12 border-t border-black/5">
      {/* Architectural Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.03] select-none text-primary">
        <span className="text-[20rem] font-bold font-headline leading-none tracking-tighter">KCS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20">
          
          {/* Brand Anchor */}
          <div className="lg:max-w-sm">
            <NextLink href="/" className="inline-block mb-8 group">
              <Image 
                src="/kcs-logo.png" 
                alt="KCS Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity" 
              />
            </NextLink>
            <div className="relative">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4 font-headline">The Collective Protocol</h4>
              <p className="text-muted-foreground text-sm leading-relaxed italic font-medium max-w-xs">
                Architecting the digital infrastructure that defines the next era of global business through AI and cloud precision.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-black/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 font-headline">Headquarters: Hyderabad, India</p>
            </div>
          </div>

          {/* Asymmetrical Link Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 flex-1">
            
            <div className="space-y-8">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline flex items-center gap-2">
                <span className="w-4 h-px bg-primary/30" /> Navigation
              </h5>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NextLink href={item.href} className="group flex items-center gap-3 text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                      <span className="text-[8px] font-bold text-primary/40 group-hover:text-primary transition-colors">{item.id}</span>
                      {item.name}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline flex items-center gap-2">
                <span className="w-4 h-px bg-primary/30" /> Platforms
              </h5>
              <ul className="space-y-4">
                {productItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                      <span className="text-[8px] font-bold text-primary/40 group-hover:text-primary transition-colors">{item.id}</span>
                      {item.name}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline flex items-center gap-2">
                <span className="w-4 h-px bg-primary/30" /> Connection
              </h5>
              <div className="flex md:flex-col gap-6 md:gap-4">
                {socialItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-xs text-muted-foreground transition-all group font-medium ${item.color}`}
                  >
                    <div className={`p-2 rounded-lg bg-black/5 border border-black/5 transition-all duration-300 ${item.glow}`}>
                      <item.icon size={14} />
                    </div>
                    <span className="hidden md:inline">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* System Metadata Line */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground/40 font-headline">2026 | ALL RIGHTS RESERVED BY KANDHUGULE CONSULTANCY SERVICES PRIVATE LIMITED</p>
          </div>
          
          <div className="flex gap-10 text-[8px] font-bold uppercase tracking-[0.4em] font-headline">
            <NextLink href="#" className="text-primary hover:text-white transition-colors duration-300">Privacy_Protocol</NextLink>
            <NextLink href="#" className="text-primary hover:text-white transition-colors duration-300">Usage_Terms</NextLink>
            <NextLink href="/contact" className="text-primary hover:text-white transition-colors duration-300">Support_Terminal</NextLink>
          </div>
        </div>
      </div>
    </footer>
  )
}