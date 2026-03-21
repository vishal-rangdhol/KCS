
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <ThreeBackground />
      
      {/* Cinematic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(249,115,22,0.03)_0%,_transparent_50%)]" />
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-12 md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-black/5 border border-black/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline">Back to Story</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center"
          >
            <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-10 font-headline">
              <Sparkles size={14} className="animate-pulse" /> Final Protocol
            </span>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-12 font-headline">
              Let's Build <br />
              <span className="text-primary italic">Something Great.</span>
            </h1>

            <div className="w-full py-16 border-y border-black/5 mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
              <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed font-medium italic">
                Have a product idea, a technology challenge, or an infrastructure problem? Our team is ready to help you design, build, and scale the technology behind it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left mb-20">
              <div className="p-10 rounded-[2.5rem] bg-black/5 border border-black/5 group hover:border-primary/20 transition-all duration-500 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 block mb-6 font-headline">Business Inquiries</span>
                <h4 className="text-2xl font-bold mb-4 font-headline text-foreground">Kandhugule Consultancy Services Pvt Ltd</h4>
                <p className="text-muted-foreground mb-4 text-sm font-medium">Hyderabad, India</p>
                <a href="mailto:info@kandhugule-kcs.com" className="text-lg font-bold text-primary hover:underline transition-all">
                  info@kandhugule-kcs.com
                </a>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-black/5 border border-black/5 group hover:border-secondary/20 transition-all duration-500 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60 block mb-6 font-headline">Project Consultation</span>
                <p className="text-lg text-muted-foreground mb-8 italic">
                  Planning a new digital platform or modernizing your infrastructure? Reach out to schedule a consultation with our engineering team.
                </p>
                <Button 
                  className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group shadow-xl border-none transition-all duration-300"
                  asChild
                >
                  <a href="mailto:info@kandhugule-kcs.com?subject=Project Inquiry - KCS Product Lab">
                    Start a Conversation
                    <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
