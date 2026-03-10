
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { Label } from '@/components/ui/label'

export function ContactChapter() {
  return (
    <Chapter id="contact" className="py-20 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-start">
        <div className="space-y-10 sm:space-y-12">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-headline uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4 block font-bold"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">Let's Connect.</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <MapPin size={20} className="sm:size-6" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] sm:text-sm uppercase tracking-widest text-muted-foreground">Location</h4>
                <p className="text-base sm:text-lg font-medium">Hyderabad, Telangana.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <Mail size={20} className="sm:size-6" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] sm:text-sm uppercase tracking-widest text-muted-foreground">Email</h4>
                <p className="text-base sm:text-lg font-medium">hello@kcs-narrative.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 group">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Phone size={20} className="sm:size-6" />
              </div>
              <div>
                <h4 className="font-bold text-[10px] sm:text-sm uppercase tracking-widest text-muted-foreground">Phone</h4>
                <p className="text-base sm:text-lg font-medium">+91 40 1234 5678</p>
              </div>
            </div>
          </div>

          <div className="h-48 sm:h-64 rounded-2xl sm:rounded-3xl bg-muted/30 border border-white/5 relative overflow-hidden group">
             {/* Map Placeholder */}
             <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-60 transition-opacity">
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--border)_1px,_transparent_1px)] bg-[size:15px_15px] sm:bg-[size:20px_20px]" />
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 shadow-xl">
                  <span className="text-[10px] sm:text-sm font-bold tracking-widest uppercase">KCS Global HQ</span>
                </div>
             </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-12 rounded-[24px] sm:rounded-[40px] bg-card border border-white/5 shadow-2xl relative overflow-hidden w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute top-0 right-0 p-4 sm:p-8 text-primary/5 -rotate-12 pointer-events-none"
          >
            <MessageSquare size={80} className="sm:size-[120px]" />
          </motion.div>

          <form className="space-y-6 sm:space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="relative group">
                <Label className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1 sm:mb-2 block">Full Name</Label>
                <Input 
                  className="bg-background/50 border-white/10 h-12 sm:h-14 px-4 sm:px-6 rounded-xl sm:rounded-2xl focus:ring-primary focus:border-primary transition-all text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative group">
                <Label className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1 sm:mb-2 block">Email Address</Label>
                <Input 
                  type="email"
                  className="bg-background/50 border-white/10 h-12 sm:h-14 px-4 sm:px-6 rounded-xl sm:rounded-2xl focus:ring-primary focus:border-primary transition-all text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative group">
                <Label className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1 sm:mb-2 block">How can we help?</Label>
                <Textarea 
                  className="bg-background/50 border-white/10 min-h-[120px] sm:min-h-[160px] p-4 sm:p-6 rounded-xl sm:rounded-2xl focus:ring-primary focus:border-primary transition-all text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            <Button className="w-full h-14 sm:h-16 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold group bg-primary hover:bg-primary/90 transition-all">
              Send Message
              <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-20 sm:mt-32 pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-center md:text-left">
        <p className="text-[10px] sm:text-xs md:text-sm tracking-wide">© 2025 Kandhugule Consultancy Services. Hyderabad, India.</p>
        <div className="flex gap-6 sm:gap-12 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest">
           <a href="#" className="hover:text-primary transition-colors">Privacy</a>
           <a href="#" className="hover:text-primary transition-colors">Terms</a>
           <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </Chapter>
  )
}
