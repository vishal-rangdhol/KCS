"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, ArrowLeft, MapPin, Clock, Globe, ShieldCheck, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// --- Tactical Input Component ---
const TerminalInput = ({ 
  label, 
  type = "text", 
  required = true,
  isTextArea = false,
  value,
  onChange 
}: { 
  label: string, 
  type?: string, 
  required?: boolean, 
  isTextArea?: boolean,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const isValid = value.length > 0 && (type === 'email' ? /^\S+@\S+\.\S+$/.test(value) : true)

  return (
    <div className="relative border-b border-white/10 group focus-within:border-primary/60 transition-all duration-500 py-4">
      <AnimatePresence>
        {isFocused && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-primary/5 -z-10 blur-xl pointer-events-none"
          />
        )}
      </AnimatePresence>
      
      {isTextArea ? (
        <textarea
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="block w-full min-h-[120px] bg-transparent focus:outline-none peer placeholder-transparent text-sm md:text-base text-foreground resize-none"
          placeholder={label}
        />
      ) : (
        <input 
          type={type} 
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="block w-full bg-transparent focus:outline-none peer placeholder-transparent text-sm md:text-base text-foreground"
          placeholder={label}
        />
      )}
      
      <label className={cn(
        "absolute left-0 pointer-events-none transition-all duration-300 font-mono text-[9px] md:text-[10px] tracking-widest",
        (isFocused || value) ? "-top-2 text-primary" : "top-4 text-muted-foreground uppercase"
      )}>
        {label}
      </label>

      {/* Decorative Focus Brackets */}
      <div className={cn(
        "absolute right-0 bottom-0 w-2 h-2 border-r border-b border-primary transition-opacity duration-300",
        isFocused ? "opacity-100" : "opacity-0"
      )} />
      
      {/* Validation Ping */}
      {isValid && value && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
          <span className="text-[7px] font-mono text-emerald-500 font-bold hidden md:block">VERIFIED</span>
        </motion.div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    // Live Hydration-Safe Clock
    const timer = setInterval(() => {
      const hydTime = new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      })
      setTime(hydTime)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    
    // Simulate Uplink Protocol
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)
      // Reset form after delay
      setTimeout(() => setIsSent(false), 5000)
    }, 3000)
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white font-body">
      <Navbar />
      <ThreeBackground />
      
      {/* Architectural Dotted Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 pt-28 md:pt-36 pb-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] font-headline">BACK_TO_NARRATIVE</span>
          </Link>
        </div>

        {/* Hero Meta */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-8">
          <div className="space-y-4">
            <span className="flex items-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[9px] font-headline">
              <Sparkles size={12} className="animate-pulse" /> [ SYSTEM_COMMS_V2.0 ]
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none font-headline">
              Contact <span className="text-primary italic">Terminal.</span>
            </h1>
          </div>
          <div className="text-right font-mono text-[9px] text-muted-foreground/40 space-y-1">
            <div>PRIORITY: HIGH_AVAILABILITY</div>
            <div>ENCRYPTION: AES_256_ACTIVE</div>
          </div>
        </div>

        {/* Main Interface Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left: Global HQ Node (40%) */}
          <div className="lg:col-span-5 space-y-12">
            
            <div className="space-y-8">
              <div className="p-8 rounded-[2rem] bg-card/40 border border-white/5 relative overflow-hidden group">
                {/* Core Node Pulse */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 font-headline">Global Headquarters</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[8px] font-mono text-emerald-500 font-bold">ONLINE</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-headline">Kandhugule Consultancy Services Pvt Ltd</h3>
                  
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex items-start gap-4">
                      <MapPin size={16} className="text-primary shrink-0 mt-1" />
                      <div className="text-sm text-muted-foreground italic leading-relaxed">
                        Hyderabad, Telangana, India <br />
                        <span className="text-[10px] font-mono text-primary/40">HYD_CORE: 17.3850° N, 78.4867° E</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Clock size={16} className="text-primary" />
                      <div className="text-sm font-mono text-foreground font-bold">
                        {time || 'INITIALIZING_CLOCK...'} <span className="text-primary/40 text-[9px] ml-2">IST_ZONE</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Globe size={16} className="text-primary" />
                      <a href="mailto:info@kandhugule-kcs.com" className="text-sm font-bold text-foreground hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">
                        info@kandhugule-kcs.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-primary" />
                  <span className="text-[9px] font-bold uppercase tracking-widest font-mono text-primary">Security Protocol</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
                  Your communication is processed through our secure engineering lab. All data is handled with strict architectural confidentiality and routed directly to our specialist nodes.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Inquiry Terminal (60%) */}
          <div className="lg:col-span-7 relative">
            
            <AnimatePresence>
              {isSending && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  className="absolute -top-12 left-0 right-0 h-px bg-primary shadow-[0_0_15px_#F97316] z-50"
                  transition={{ duration: 3, ease: "linear" }}
                />
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-8 p-8 md:p-12 rounded-[2.5rem] bg-gray-950/40 backdrop-blur-xl border border-white/5 shadow-2xl relative">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TerminalInput 
                  label="Initiator_Name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <TerminalInput 
                  label="Contact_Email" 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <TerminalInput 
                label="Inquiry_Subject" 
                value={formData.subject} 
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />

              <TerminalInput 
                label="System_Message" 
                isTextArea={true}
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />

              <div className="pt-8">
                <Button 
                  disabled={isSending || isSent}
                  className={cn(
                    "w-full h-14 rounded-xl text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500 group relative overflow-hidden",
                    isSent ? "bg-emerald-500 text-white" : "bg-primary text-white hover:bg-primary/90"
                  )}
                >
                  <AnimatePresence mode="wait">
                    {isSending ? (
                      <motion.span 
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3"
                      >
                        UPLINKING...
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Globe size={14} />
                        </motion.div>
                      </motion.span>
                    ) : isSent ? (
                      <motion.span 
                        key="sent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3"
                      >
                        COMMUNICATION_ESTABLISHED
                        <ShieldCheck size={16} />
                      </motion.span>
                    ) : (
                      <motion.span 
                        key="idle"
                        className="flex items-center justify-center gap-2"
                      >
                        Initialize_Uplink
                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
                
                <p className="text-[8px] font-mono text-center mt-6 text-muted-foreground/30 uppercase tracking-widest italic">
                  *Direct Uplink to HR@kandhugule-kcs.com to provide immediate contact info.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
