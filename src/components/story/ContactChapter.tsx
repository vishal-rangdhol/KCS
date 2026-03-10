
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        <div className="space-y-12">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-headline uppercase tracking-[0.4em] text-xs mb-6 block font-bold"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Let's build <br />
              <span className="text-secondary italic">something great.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-md leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, our team of architects is ready to listen.
            </p>
          </div>

          <div className="space-y-8">
            <ContactInfoItem 
              icon={MapPin} 
              label="Location" 
              value="Hyderabad, Telangana, India" 
              delay={0.1}
            />
            <ContactInfoItem 
              icon={Mail} 
              label="Email" 
              value="hello@kcs-narrative.com" 
              delay={0.2}
              href="mailto:hello@kcs-narrative.com"
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
            className="h-64 rounded-[2rem] bg-card/30 border border-white/5 relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute inset-0 grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:24px_24px]" />
             </div>
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <Globe className="w-12 h-12 text-primary/40 mb-4 animate-pulse" />
                <div className="bg-background/80 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/10 shadow-2xl">
                  <span className="text-sm font-bold tracking-[0.3em] uppercase text-primary">KCS Global HQ</span>
                  <p className="text-xs text-muted-foreground mt-2">Innovation Corridor, Hyderabad</p>
                </div>
             </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated decorative element behind form */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"
          />

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 sm:p-12 rounded-[3rem] glass border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 text-primary/5 -rotate-12 pointer-events-none">
              <MessageSquare size={160} strokeWidth={1} />
            </div>

            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-8">
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
                  <Label className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 ml-2">Your Message</Label>
                  <Textarea 
                    className="bg-background/20 border-white/10 min-h-[160px] p-6 rounded-3xl focus:ring-primary/50 focus:border-primary/50 transition-all text-base backdrop-blur-md resize-none"
                    placeholder="How can we help you architect your future?"
                  />
                </div>
              </div>

              <Button className="w-full h-18 rounded-3xl text-lg font-bold group bg-primary hover:bg-primary/90 transition-all duration-500 py-8 shadow-[0_12px_40px_rgba(62,128,219,0.3)] hover:shadow-[0_20px_60px_rgba(62,128,219,0.5)]">
                Send Message
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-xs tracking-widest uppercase font-bold text-white/40">© 2025 KCS Narrative</p>
          <p className="text-[10px] tracking-widest uppercase">Kandhugule Consultancy Services. All Rights Reserved.</p>
        </div>
        
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.3em]">
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
      className="flex items-center gap-6 group cursor-pointer"
      onClick={() => href && window.open(href)}
    >
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-1">{label}</h4>
        <p className="text-xl font-medium group-hover:text-primary transition-colors">{value}</p>
      </div>
    </motion.div>
  )
}

function FloatingInput({ label, id, type = "text", placeholder, onFocus, onBlur }: any) {
  return (
    <div className="space-y-3 group">
      <Label htmlFor={id} className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 ml-2 group-focus-within:text-primary transition-colors">
        {label}
      </Label>
      <Input 
        id={id}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        className="bg-background/20 border-white/10 h-16 px-6 rounded-2xl focus:ring-primary/50 focus:border-primary/50 transition-all text-base backdrop-blur-md shadow-inner"
        placeholder={placeholder}
      />
    </div>
  )
}
