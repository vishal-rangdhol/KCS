
"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, ArrowLeft, MapPin, Clock, Globe, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const TerminalInput = ({ label, type = "text", required = true, isTextArea = false, value, onChange }: { label: string, type?: string, required?: boolean, isTextArea?: boolean, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => {
  const [isFocused, setIsFocused] = useState(false)
  const isValid = value.length > 0 && (type === 'email' ? /^\S+@\S+\.\S+$/.test(value) : true)

  return (
    <div className="relative border-b border-white/10 py-5 group transition-all duration-500">
      {isTextArea ? (
        <textarea required={required} value={value} onChange={onChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="block w-full min-h-[140px] bg-transparent focus:outline-none placeholder-transparent text-sm md:text-base text-foreground resize-none pt-2" placeholder={label} />
      ) : (
        <input type={type} required={required} value={value} onChange={onChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="block w-full h-12 bg-transparent focus:outline-none placeholder-transparent text-sm md:text-base text-foreground" placeholder={label} />
      )}
      <label className={cn("absolute left-0 pointer-events-none transition-all duration-300 font-mono text-[9px] md:text-[10px] tracking-widest", (isFocused || value) ? "-top-1 text-primary" : "top-6 text-muted-foreground uppercase")}>
        {label}
      </label>
      <div className={cn("absolute right-0 bottom-0 w-2 h-2 border-r border-b border-primary transition-opacity duration-300", isFocused ? "opacity-100" : "opacity-0")} />
      {isValid && value && <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />}
    </div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setIsSending(true);
    setTimeout(() => { setIsSending(false); setIsSent(true); setTimeout(() => setIsSent(false), 5000); }, 2500)
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThreeBackground />
      <div className="relative z-10 pt-28 md:pt-40 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline">BACK_TO_STORY</span>
          </Link>
        </div>

        <div className="mb-12 md:mb-20 space-y-4">
          <span className="flex items-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] font-headline">
            <Sparkles size={12} className="animate-pulse" /> [ SYSTEM_COMMS_V2.0 ]
          </span>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none font-headline">Contact <span className="text-primary italic">Terminal.</span></h1>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-card/40 border border-white/5 relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline">Global Headquarters</span>
                <h3 className="text-2xl md:text-3xl font-bold font-headline leading-tight">Kandhugule Consultancy Services Pvt Ltd</h3>
                <div className="space-y-6 pt-6 border-t border-white/5">
                  <div className="flex items-start gap-4 text-muted-foreground italic leading-relaxed text-sm md:text-base">
                    <MapPin size={18} className="text-primary shrink-0 mt-1" />
                    <span>3-37 RC Puram, behind SR chambers,<br />Hyderabad, 502032, Telangana</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm md:text-base">
                    <Clock size={18} className="text-primary" />
                    <span className="font-mono text-foreground font-bold">{time || '12:00'} <span className="text-primary/40 text-[10px] ml-2">IST_ZONE</span></span>
                  </div>
                  <div className="flex items-center gap-4 text-sm md:text-base">
                    <Globe size={18} className="text-primary" />
                    <a href="mailto:info@kandhugule-kcs.com" className="font-bold text-foreground hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">info@kandhugule-kcs.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-gray-950/40 backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden">
              <AnimatePresence>{isSending && <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }} className="absolute top-0 left-0 right-0 h-1 bg-primary z-50" transition={{ duration: 2.5 }} />}</AnimatePresence>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <TerminalInput label="Initiator_Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <TerminalInput label="Contact_Email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <TerminalInput label="Inquiry_Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
              <TerminalInput label="System_Message" isTextArea={true} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              <div className="pt-6">
                <Button disabled={isSending || isSent} className={cn("w-full h-14 md:h-16 rounded-2xl text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500", isSent ? "bg-emerald-500 text-white" : "bg-primary text-white hover:bg-primary/90")}>
                  <AnimatePresence mode="wait">
                    {isSending ? (
                      <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">UPLINKING... <Globe size={16} className="animate-spin" /></motion.span>
                    ) : isSent ? (
                      <motion.span key="sent" initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex items-center gap-3">COMMUNICATION_ESTABLISHED <ShieldCheck size={18} /></motion.span>
                    ) : (
                      <motion.span key="idle" className="flex items-center justify-center gap-3">Initialize_Uplink <Send size={16} /></motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
