"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft, Sparkles, Lock } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPage() {
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
              <Shield size={14} className="animate-pulse" /> [ DATA_PRIVACY_PROTOCOL_V1.0 ]
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none font-headline">Privacy <span className="text-primary italic">Policy.</span></h1>
            <p className="text-muted-foreground text-sm md:text-base font-mono uppercase tracking-widest pt-4">Effective Date: October 2026 // KCS_LEGAL_NODE</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 01. DATA_COLLECTION_NODES
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                At Kandhugule Consultancy Services (KCS), we prioritize user sovereignty. We only collect data necessary for the high-fidelity operation of our digital platforms. This includes initiator names, contact telemetry, and system interaction logs designed to optimize infrastructure performance.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 02. ENCRYPTION_STANDARDS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                All data transmission is encrypted using industry-standard protocols. Our "Secure by Default" architecture ensures that sensitive information is siloed and protected against unauthorized access vectors.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 03. USER_SOVEREIGNTY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                You maintain complete ownership of your data. At any point, users may request a complete data uplink purge or an audit of the information stored within the KCS Engine Room.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-6">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                <Lock size={20} /> THIRD_PARTY_INTEGRATION
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                We do not sell user data to third-party entities. Integration occurs only with verified partners who adhere to our strict security and clinical wellbeing protocols.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
