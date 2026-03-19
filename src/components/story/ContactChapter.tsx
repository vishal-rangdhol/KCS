
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, ArrowUpRight } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function ContactChapter() {
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <Chapter id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-8 sm:space-y-12">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-headline uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 sm:mb-6 block font-bold"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold mb-6 sm:mb-8 leading-tight tracking-tighter text-foreground">
              Let's build <br />
              <span className="text-secondary italic">something great.</span>
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-md leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, our team of architects is ready to listen.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <ContactInfoItem 
              icon={MapPin} 
              label="Location" 
              value="3-37 RC Puram, behind SR chambers, Hyderabad, 502032, Telangana" 
              delay={0.1}
            />
            <ContactInfoItem 
              icon={Mail} 
              label="Email" 
              value="info@kandhugule-kcs.com" 
              delay={0.2}
              href="mailto:info@kandhugule-kcs.com"
            />
            <ContactInfoItem 
              icon={Phone} 
              label="Phone" 
              value="+91 40 1234 5678" 
              delay={0.3}
              href="tel:+914012345678"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-48 sm:h-64 rounded-[2rem] bg-black/5 border border-black/5 relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute inset-0 grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px]" />
             </div>
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                <Globe className="w-8 sm:w-12 h-8 sm:h-12 text-primary/40 mb-3 sm:mb-4 animate-pulse" />
                <div className="bg-white/80 backdrop-blur-xl px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-black/5 shadow-2xl">
                  <span className="text-[10px] sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">KCS Global HQ</span>
                  <p className="text-[8px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">Innovation Corridor, Hyderabad</p>
                </div>
             </div>
          </motion.div>
        </div>

        <div className="relative w-full">
          {/* Animated decorative element behind form */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-48 sm:w-64 h-48 sm:h-64 bg-secondary/15 rounded-full blur-[80px] pointer-events-none"
          />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] glass border border-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 sm:p-12 text-primary/5 -rotate-12 pointer-events-none">
              <MessageSquare size={120} className="sm:size-[160px]" strokeWidth={1} />
            </div>

            <form className="space-y-6 sm:space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                <FloatingInput 
                  label="Full Name" 
                  id="name" 
                  placeholder="Enter your name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
                
                <FloatingInput 
                  label="Email Address" 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />

                <div className="space-y-3">
                  <Label className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 ml-2">Your Message</Label>
                  <Textarea 
                    className="bg-black/5 border-black/5 min-h-[140px] sm:min-h-[160px] p-4 sm:p-6 rounded-2xl sm:rounded-3xl focus:ring-primary/50 focus:border-primary/50 transition-all text-sm sm:text-base backdrop-blur-md resize-none text-foreground"
                    placeholder="How can we help you architect your future?"
                  />
                </div>
              </div>

              <Button className="w-full h-14 sm:h-18 rounded-2xl sm:rounded-3xl text-base sm:text-lg font-bold group bg-primary hover:bg-primary/90 transition-all duration-500 py-6 sm:py-8 shadow-[0_12px_40px_rgba(249,115,22,0.2)] hover:shadow-[0_20px_60px_rgba(249,115,22,0.4)]">
                Send Message
                <Send className="ml-3 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 sm:mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground px-4 sm:px-6">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <p className="text-[10px] tracking-widest uppercase font-bold text-foreground/40">© 2025 KCS</p>
          <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-muted-foreground">Kandhugule Consultancy Services. All Rights Reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em]">
           <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">LinkedIn <ArrowUpRight size={12} /></a>
           <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Twitter <ArrowUpRight size={12} /></a>
           <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">Instagram <ArrowUpRight size={12} /></a>
        </div>
      </div>
    </Chapter>
  )
}

function ContactInfoItem({ icon: Icon, label, value, delay, href }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center gap-4 sm:gap-6 group cursor-pointer"
      onClick={() => href && window.open(href)}
    >
      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/5 border border-black/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
        <Icon size={20} className="sm:size-[24px]" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-1">{label}</h4>
        <p className="text-sm sm:text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">{value}</p>
      </div>
    </motion.div>
  )
}

function FloatingInput({ label, id, type = "text", placeholder, onFocus, onBlur }: any) {
  return (
    <div className="space-y-2 sm:space-y-3 group">
      <Label htmlFor={id} className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 ml-2 group-focus-within:text-primary transition-colors">
        {label}
      </Label>
      <Input 
        id={id}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        className="bg-black/5 border-black/5 h-12 sm:h-16 px-4 sm:px-6 rounded-xl sm:rounded-2xl focus:ring-primary/50 focus:border-primary/50 transition-all text-sm sm:text-base backdrop-blur-md shadow-inner text-foreground"
        placeholder={placeholder}
      />
    </div>
  )
}
