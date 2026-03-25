
"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowLeft, MapPin, Clock, Globe, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const [time, setTime] = useState<string | null>(null)
  const address = "3-37 RC Puram, behind SR chambers, Hyderabad, 502032, Telangana"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThreeBackground />
      <div className="relative z-10 pt-28 md:pt-40 pb-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full mb-12 flex justify-start">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline">BACK_TO_STORY</span>
          </Link>
        </div>

        <div className="w-full mb-12 md:mb-20 space-y-4 text-center">
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] font-headline">
            <Sparkles size={12} className="animate-pulse" /> [ GEOSPATIAL_TERMINAL_V1.0 ]
          </span>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none font-headline">Contact <span className="text-primary italic">Terminal.</span></h1>
        </div>

        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 items-stretch">
          <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-card/40 border border-white/5 relative overflow-hidden backdrop-blur-xl">
            <div className="relative z-10 space-y-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline">Global Headquarters</span>
              <h3 className="text-2xl md:text-3xl font-bold font-headline leading-tight">Kandhugule Consultancy Services Pvt Ltd</h3>
              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-start gap-4 text-muted-foreground italic leading-relaxed text-sm md:text-base">
                  <MapPin size={18} className="text-primary shrink-0 mt-1" />
                  <span>3-37 RC Puram, behind SR chambers,<br />Hyderabad, 502032, Telangana</span>
                </div>
                <div className="flex items-center gap-4 text-sm md:text-base">
                  <Globe size={18} className="text-primary" />
                  <a href="mailto:info@kandhugule-kcs.com" className="font-bold text-foreground hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">info@kandhugule-kcs.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gray-950/40 border border-white/5 relative flex items-center justify-center backdrop-blur-xl">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4 text-sm md:text-base">
                <Clock size={18} className="text-primary" />
                <span className="font-mono text-foreground font-bold">{time || '12:00'} <span className="text-primary/40 text-[10px] ml-2">IST_ZONE</span></span>
              </div>
              <p className="text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-widest">System Latency: Optimized</p>
            </div>
          </div>
        </section>

        {/* Embedded Map Section - 90% Width */}
        <div className="w-full flex justify-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[90vw] relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black group"
          >
            <div className="absolute top-6 right-6 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div className="bg-primary/90 text-white px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest shadow-xl backdrop-blur-md">
                 Open_In_Native_Maps <ExternalLink size={14} />
               </div>
            </div>

            <iframe 
              src={embedUrl}
              className="w-full h-[200px] md:h-[325px] border-none grayscale invert opacity-70 contrast-125 saturate-50 group-hover:opacity-90 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700 ease-in-out"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Clickable Overlay */}
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="absolute inset-0 z-20 cursor-pointer"
              aria-label="Redirect to Google Maps"
            />
            
            <div className="absolute inset-0 pointer-events-none border-[1px] border-primary/20 rounded-[2.5rem] md:rounded-[4rem] z-30" />
          </motion.div>
        </div>

      </div>
      <Footer />
    </main>
  )
}
