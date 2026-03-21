
"use client"

import React from 'react'
import Image from 'next/image'
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'
import NextLink from 'next/link'

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Products', href: '/#products' },
  { name: 'Services', href: '/#services' },
  { name: 'Technology', href: '/#technology' },
  { name: 'About', href: '/#story' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 border-t border-black/5">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2 lg:col-span-2">
          <NextLink href="/" className="inline-block mb-8">
            <Image src="/kcs-logo.png" alt="KCS Logo" width={140} height={46} className="h-10 w-auto" />
          </NextLink>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed italic">
            Architecting the digital infrastructure that defines the next era of global business.
          </p>
        </div>
        
        <div className="space-y-6">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary font-headline">Company</h5>
          <ul className="space-y-4 text-sm text-muted-foreground font-medium">
            <li><NextLink href="/#story" className="hover:text-primary transition-colors">About</NextLink></li>
            <li><NextLink href="/#careers" className="hover:text-primary transition-colors">Careers</NextLink></li>
            <li><NextLink href="/contact" className="hover:text-primary transition-colors">Contact</NextLink></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-secondary font-headline">Products</h5>
          <ul className="space-y-4 text-sm text-muted-foreground font-medium">
            <li><a href="https://letscatchup-kcs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Let's Catch Up</a></li>
            <li><a href="https://www.sushrth.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sushrth</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary font-headline">Connect</h5>
          <ul className="space-y-4 text-sm text-muted-foreground font-medium">
            <li>
              <a href="https://www.linkedin.com/company/kandhuguleconsultancyservicespvtltd/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Twitter size={14} /> X
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram size={14} /> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Facebook size={14} /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <p className="text-[10px] tracking-widest uppercase font-bold text-foreground/80">KCS Product Lab — by Kandhugule Consultancy Services Pvt Ltd</p>
          <p className="text-[9px] tracking-widest uppercase text-muted-foreground">© {currentYear} KCS. All Rights Reserved.</p>
        </div>
        
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <NextLink href="#" className="hover:text-primary transition-colors">Privacy Policy</NextLink>
          <NextLink href="#" className="hover:text-primary transition-colors">Terms of Service</NextLink>
        </div>
      </div>
    </footer>
  )
}
