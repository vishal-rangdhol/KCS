"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowLeft, Sparkles, Scale } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThreeBackground />
      
      <div className="relative z-10 pt-28 md:pt-40 pb-20 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline">BACK_TO_STORY</span>
          </Link>
        </div>

        <section className="space-y-12">
          <div className="space-y-4">
            <span className="flex items-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] font-headline">
              <Scale size={14} className="animate-pulse" /> [ SERVICE_TERMS_PROTOCOL_V1.0 ]
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none font-headline">Terms & <span className="text-primary italic">Conditions.</span></h1>
            <p className="text-muted-foreground text-sm md:text-base font-mono uppercase tracking-widest pt-4">Revision: 2026.10 // KCS_LEGAL_NODE</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 01. SERVICE_ACCESS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                By accessing KCS platforms, you agree to comply with our architectural standards and safety protocols. We provide access to digital infrastructure designed for high-scale business operations and community wellbeing.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 02. INTELLECTUAL_PROPERTY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                KCS operates on a "Zero Vendor Lock-in" policy. While our proprietary Engine Room architecture remains the property of KCS, all custom code, data, and IP developed for specific client projects are fully owned by the client upon completion of the initialization protocol.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 03. LIMITATION_OF_LIABILITY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                While we maintain 99.9% system uptime, KCS is not liable for indirect or consequential damages arising from the use or inability to use our digital infrastructure.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-6">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                GOVERNING_LAW
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                These terms are governed by the laws of India, specifically within the jurisdiction of Hyderabad, Telangana.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
