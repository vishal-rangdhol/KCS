
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft, Lock, Info, EyeOff, Mail, Globe, ShieldAlert, Scale, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'

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
            <div className="space-y-1 pt-4">
              <p className="text-foreground font-bold text-sm uppercase tracking-widest">Kandhugule Consultancy Services</p>
              <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest">Last Updated: March 2026 // KCS_LEGAL_NODE</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* 1. Introduction */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 01. INTRODUCTION
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Welcome to Kandhugule Consultancy Services ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we handle information when you visit our website at www.kandhugule-kcs.com (the "Website"). Please read this policy carefully. By accessing or using our Website, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

            {/* 2. Information We Do Not Collect */}
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                <EyeOff size={20} /> 02. INFORMATION_WE_DO_NOT_COLLECT
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Our Website is an informational platform. We do not operate any data collection mechanisms such as:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-mono text-primary/80 uppercase tracking-widest list-none pl-0">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> No online registration</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> No contact forms</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> No newsletter forms</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> No payment gateways</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> No cookies or tracking</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full" /> No analytics tools</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed italic text-sm pt-2">
                We do not automatically collect, store, or process any personal data through our Website.
              </p>
            </div>

            {/* 3. Job Applications */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Mail size={20} className="text-primary" /> 03. JOB_APPLICATIONS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Our Website lists open job positions for informational purposes. If you choose to apply for a position, you are directed to send your application via email to the address provided on the Website. When you send us an email application, you voluntarily share personal information such as your name, contact details, resume, and any other details you include. This information is used solely to evaluate your candidacy, handled internally by our recruitment team, not shared with third parties for marketing, and retained only for as long as necessary for the hiring process. Your email client and service provider govern how your data is transmitted.
              </p>
            </div>

            {/* 4. Third-Party Links */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Globe size={20} className="text-primary" /> 04. THIRD_PARTY_LINKS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Our Website may contain links to third-party websites or resources. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* 5. Children's Privacy */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <ShieldAlert size={20} className="text-primary" /> 05. CHILDREN_PRIVACY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Our Website is not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has submitted personal information to us, please contact us and we will take appropriate steps.
              </p>
            </div>

            {/* 6. Data Security */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Lock size={20} className="text-primary" /> 06. DATA_SECURITY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Since we do not collect personal data through the Website, there is minimal data security risk associated with your browsing. However, email communications you send to us are subject to the security practices of your own email provider. We take reasonable precautions to protect any information you send us via email against unauthorized access or disclosure.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Scale size={20} className="text-primary" /> 07. YOUR_RIGHTS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Under applicable Indian law, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023 (to the extent applicable), you may have the right to know what personal data we hold, request correction of inaccurate information, or request deletion. To exercise these rights, please contact us at the email address listed on our Website.
              </p>
            </div>

            {/* 8. Changes to This Policy */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <RefreshCcw size={20} className="text-primary" /> 08. CHANGES_TO_POLICY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date. We encourage you to review this page periodically.
              </p>
            </div>

            {/* 9. Contact Us */}
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                CONTACT_US
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
