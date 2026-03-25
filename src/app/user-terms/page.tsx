"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, ArrowLeft, Sparkles, UserCheck } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'

export default function UserTermsPage() {
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
              <Users size={14} className="animate-pulse" /> [ USER_CONDUCT_PROTOCOL_V1.0 ]
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none font-headline">User <span className="text-primary italic">Terms.</span></h1>
            <p className="text-muted-foreground text-sm md:text-base font-mono uppercase tracking-widest pt-4">Framework: 2026.B // KCS_LEGAL_NODE</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 01. CONDUCT_PROTOCOLS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Users of KCS social learning platforms (e.g., Let's Catch Up) must adhere to clinical wellbeing standards. Harassment, data scraping, or any attempt to destabilize the psychological safety of the community will result in immediate termination of access.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 02. ACCOUNT_SECURITY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                You are responsible for the telemetry and security of your unique system identifier (Account). Unauthorized sharing of access nodes is strictly prohibited.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 03. SYSTEM_INTEGRITY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Users must not attempt to reverse-engineer, inject unauthorized scripts, or bypass security firewalls within the KCS digital ecosystem.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-6">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                <UserCheck size={20} /> AGE_REQUIREMENTS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Access to our specialized learning ecosystems may require specific age verification in alignment with global educational and rehabilitation safety standards.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
