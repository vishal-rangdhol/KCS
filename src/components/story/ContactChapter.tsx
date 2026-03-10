
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
    <Chapter id="contact" className="py-24 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-headline uppercase tracking-[0.3em] text-xs mb-4 block font-bold"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-bold mb-6">Let's Connect.</h2>
            <p className="text-xl text-muted-foreground max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Location</h4>
                <p className="text-lg font-medium">Hyderabad, Telangana.</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Email</h4>
                <p className="text-lg font-medium">hello@kcs-narrative.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Phone</h4>
                <p className="text-lg font-medium">+91 40 1234 5678</p>
              </div>
            </div>
          </div>

          <div className="h-64 rounded-3xl bg-muted/30 border border-white/5 relative overflow-hidden group">
             {/* Map Placeholder */}
             <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-60 transition-opacity">
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--border)_1px,_transparent_1px)] bg-[size:20px_20px]" />
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-xl">
                  <span className="text-sm font-bold tracking-widest uppercase">KCS Global HQ</span>
                </div>
             </div>
          </div>
        </div>

        <div className="p-8 md:p-12 rounded-[40px] bg-card border border-white/5 shadow-2xl relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute top-0 right-0 p-8 text-primary/5 -rotate-12"
          >
            <MessageSquare size={120} />
          </motion.div>

          <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="relative group">
                <Label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">Full Name</Label>
                <Input 
                  className="bg-background/50 border-white/10 h-14 px-6 rounded-2xl focus:ring-primary focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative group">
                <Label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">Email Address</Label>
                <Input 
                  type="email"
                  className="bg-background/50 border-white/10 h-14 px-6 rounded-2xl focus:ring-primary focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative group">
                <Label className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2 block">How can we help?</Label>
                <Textarea 
                  className="bg-background/50 border-white/10 min-h-[160px] p-6 rounded-2xl focus:ring-primary focus:border-primary transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            <Button className="w-full h-16 rounded-2xl text-lg font-bold group bg-primary hover:bg-primary/90 transition-all">
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground">
        <p className="text-sm tracking-wide">© 2025 Kandhugule Consultancy Services. Hyderabad, India.</p>
        <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
           <a href="#" className="hover:text-primary transition-colors">Privacy</a>
           <a href="#" className="hover:text-primary transition-colors">Terms</a>
           <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </Chapter>
  )
}
