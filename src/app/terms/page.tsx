
"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Scale, ArrowLeft, Info, ShieldCheck, AlertTriangle, Globe, Gavel, RefreshCw, Mail } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'

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
            <div className="space-y-1 pt-4">
              <p className="text-foreground font-bold text-sm uppercase tracking-widest">Kandhugule Consultancy Services</p>
              <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest">Last Updated: March 2026 // KCS_LEGAL_NODE</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* 1. Acceptance of Terms */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 01. ACCEPTANCE_OF_TERMS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                By accessing and using the website at www.kandhugule-kcs.com (the "Website"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Website. These Terms apply to all visitors and users of the Website.
              </p>
            </div>

            {/* 2. About the Website */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 02. ABOUT_THE_WEBSITE
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                The Website is owned and operated by Kandhugule Consultancy Services, a company based in Hyderabad, Telangana, India. The Website serves as an informational platform to present our services, company information, and career opportunities.
              </p>
            </div>

            {/* 3. Use of the Website */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 03. USE_OF_THE_WEBSITE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">3.1 Permitted Use</h4>
                  <p className="text-sm text-muted-foreground italic">You may access and use the Website for lawful, personal, and informational purposes only.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">3.2 Prohibited Use</h4>
                  <ul className="text-[11px] font-mono text-muted-foreground/80 list-disc pl-4 space-y-1">
                    <li>Violating applicable laws or regulations</li>
                    <li>Attempting unauthorized system access</li>
                    <li>Reproducing content without consent</li>
                    <li>Transmitting harmful or disruptive content</li>
                    <li>Damaging Website or server integrity</li>
                    <li>Using automated tools/bots for scraping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Intellectual Property */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <ShieldCheck size={20} className="text-primary" /> 04. INTELLECTUAL_PROPERTY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                All content on this Website — including but not limited to text, graphics, logos, icons, and images — is the property of Kandhugule Consultancy Services and is protected under applicable intellectual property laws. You may not reproduce, republish, or distribute any content from this Website without our express written permission.
              </p>
            </div>

            {/* 5. Job Listings and Applications */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Mail size={20} className="text-primary" /> 05. JOB_LISTINGS_AND_APPLICATIONS
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm italic">Job listings are for informational purposes. We reserve the right to modify or close positions at any time. Applications are accepted only via email as directed. Submitting an application does not guarantee an interview or response.</p>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Accuracy Check</p>
                  <p className="text-[11px] text-muted-foreground italic">By submitting an application, you confirm all provided information is true and accurate. Misrepresentation may disqualify your application.</p>
                </div>
              </div>
            </div>

            {/* 6. No Warranties */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <AlertTriangle size={20} className="text-primary" /> 06. NO_WARRANTIES
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                The Website and its content are provided on an "as is" and "as available" basis without warranties of any kind. We do not warrant that the Website will be uninterrupted, error-free, or secure, or that the information is complete, accurate, or up to date.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 07. LIMITATION_OF_LIABILITY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                To the fullest extent permitted by law, KCS shall not be liable for any direct, indirect, or incidental damages arising from your use of the Website, errors in content, or unauthorized access to your transmissions or data.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Globe size={20} className="text-primary" /> 08. THIRD_PARTY_LINKS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Our Website may contain links to third-party websites for your convenience. We do not endorse or take responsibility for the content, accuracy, or practices of any third-party websites. Accessing such links is entirely at your own risk.
              </p>
            </div>

            {/* 9. Privacy */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" /> 09. PRIVACY
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                Your use of the Website is also governed by our <Link href="/privacy" className="text-primary hover:underline underline-offset-4">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 space-y-4">
              <h3 className="text-xl font-bold font-headline text-primary flex items-center gap-3">
                <Gavel size={20} /> 10. GOVERNING_LAW_AND_JURISDICTION
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <RefreshCw size={20} className="text-primary" /> 11. CHANGES_TO_TERMS
              </h3>
              <p className="text-muted-foreground leading-relaxed italic">
                We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting to the Website with an updated "Last Updated" date. Your continued use after any changes constitutes your acceptance of the revised Terms.
              </p>
            </div>

            {/* 12. Contact Us */}
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold font-headline flex items-center gap-3">
                <Mail size={20} className="text-primary" /> 12. CONTACT_US
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
