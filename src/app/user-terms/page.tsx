
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, ArrowLeft, UserCheck, Mail, Globe, Send, ShieldOff, Info, XCircle, RefreshCw, Gavel } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'

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
            <div className="space-y-1 pt-4">
              <p className="text-foreground font-bold text-sm uppercase tracking-widest">Kandhugule Consultancy Services</p>
              <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest">Last Updated: March 2026 // KCS_LEGAL_NODE</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* 1. Who These Terms Apply To */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Users size={20} className="text-primary" /> 01. WHO_THESE_TERMS_APPLY_TO
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                These User Terms ("User Terms") apply to any individual ("you" or "user") who visits, browses, or interacts with the website at www.kandhugule-kcs.com (the "Website"), including those who view job listings and submit applications via email. By using the Website, you confirm that you are at least 18 years of age and agree to conduct yourself in accordance with these User Terms.
              </p>
            </div>

            {/* 2. Your Responsibilities as a User */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <UserCheck size={20} className="text-primary" /> 02. YOUR_RESPONSIBILITIES
              </h3>
              <ul className="text-sm text-muted-foreground italic space-y-2 list-none pl-0">
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Access the Website only for lawful and legitimate purposes</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Provide accurate and truthful information in any communication with us</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Respect the intellectual property and content displayed on the Website</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Not misrepresent your identity or qualifications in any correspondence</li>
                <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Not engage in conduct that could harm, disrupt, or interfere with the Website</li>
              </ul>
            </div>

            {/* 3. Job Applicant Conduct */}
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                <Mail size={20} /> 03. JOB_APPLICANT_CONDUCT
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground italic">
                <p>If you are using the Website to explore or apply for a job, you additionally agree to:</p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Send applications only to the designated email address provided</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Include only truthful, accurate, and relevant information</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Not submit duplicate or spam applications for the same position</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Not use another person's identity or credentials</li>
                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> Understand that submitting an application creates no obligation on our part</li>
                </ul>
                <p className="text-xs font-bold text-primary/80 pt-2 uppercase tracking-widest">Disqualification: We reserve the right to disqualify any applicant whose conduct is misleading or fraudulent.</p>
              </div>
            </div>

            {/* 4. Acceptable Use of Website Content */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Globe size={20} className="text-primary" /> 04. CONTENT_USAGE_PROTOCOL
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">Permitted</h4>
                  <ul className="text-[11px] font-mono text-muted-foreground/80 list-disc pl-4 space-y-1">
                    <li>Browse and read for personal purposes</li>
                    <li>Share links on social media platforms</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-destructive uppercase tracking-widest">Prohibited</h4>
                  <ul className="text-[11px] font-mono text-muted-foreground/80 list-disc pl-4 space-y-1">
                    <li>Copy/Reproduce content without permission</li>
                    <li>Use content for commercial purposes</li>
                    <li>Frame or mirror the Website on any other site without authorization</li>
                    <li>Use automated tools/bots for data extraction</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Communications You Send to Us */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Send size={20} className="text-primary" /> 05. COMMUNICATIONS_NODE
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Any email communication you voluntarily send to us is subject to our Privacy Policy. By reaching out, you acknowledge that you are willingly sharing information, we may use it to respond or evaluate your application, and we will not use it for unsolicited marketing.
              </p>
            </div>

            {/* 6. No Account or Registration */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <ShieldOff size={20} className="text-primary" /> 06. NO_ACCOUNT_OR_REGISTRATION
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Our Website does not require you to create an account or register in any form. There is no login, profile, or stored session associated with your visit. Your browsing activity on our Website is not tracked or recorded by us.
              </p>
            </div>

            {/* 7. Disclaimer of Endorsement */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Info size={20} className="text-primary" /> 07. DISCLAIMER_OF_ENDORSEMENT
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Any references to third-party companies, tools, institutions, or services on our Website are for informational context only and do not constitute an endorsement, partnership, or affiliation unless explicitly stated.
              </p>
            </div>

            {/* 8. Termination of Access */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <XCircle size={20} className="text-primary" /> 08. TERMINATION_OF_ACCESS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                We reserve the right to restrict or block access to the Website for any user who violates these User Terms or engages in conduct we deem harmful, abusive, or contrary to applicable law — without prior notice or liability.
              </p>
            </div>

            {/* 9. Updates to These User Terms */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <RefreshCw size={20} className="text-primary" /> 09. UPDATES_TO_TERMS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                We may revise these User Terms periodically. The updated version will be posted on this page with a revised "Last Updated" date. Continued use of the Website after any update constitutes your acceptance of the revised terms.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                <Gavel size={20} /> 10. GOVERNING_LAW_AND_JURISDICTION
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                These User Terms are governed by the laws of India. Any disputes shall fall under the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
              </p>
            </div>

            {/* 11. Contact Us */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Mail size={20} className="text-primary" /> 11. CONTACT_PROTOCOL
              </h3>
              <p className="text-muted-foreground leading-relaxed italic font-bold">
                Kandhugule Consultancy Services<br />
                3-37, RC Reddy Colony, Bharat Heavy Electricals Limited, Hyderabad, Telangana 502032<br />
                www.kandhugule-kcs.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
