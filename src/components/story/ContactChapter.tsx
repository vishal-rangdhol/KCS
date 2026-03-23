"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Send, Sparkles } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'

export function ContactChapter() {
  return (
    <Chapter id="contact" className="py-16 md:py-20 bg-background relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-16 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-8 md:mb-10 font-headline">
            <Sparkles size={14} className="animate-pulse" /> Final Protocol
          </span>
          
          <h2 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-10 md:mb-12 font-headline">
            Let's Build <br />
            <span className="text-primary italic">Something Great.</span>
          </h2>

          <div className="w-full py-12 md:py-16 border-y border-white/5 mb-12 md:mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-primary/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
            <p className="text-base md:text-3xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed font-medium italic">
              Have a product idea, a technology challenge, or an infrastructure problem? Our team is ready to help you design, build, and scale the technology behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-5xl text-left mb-16 md:mb-20">
            <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-primary/20 transition-all duration-500 shadow-sm">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 block mb-4 md:mb-6 font-headline">Business Inquiries</span>
              <h4 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 font-headline">Kandhugule Consultancy Services Pvt Ltd</h4>
              <p className="text-muted-foreground mb-3 text-xs md:text-sm font-medium">Hyderabad, India</p>
              <a href="mailto:info@kandhugule-kcs.com" className="text-sm md:text-lg font-bold text-primary hover:underline transition-all break-words">
                info@kandhugule-kcs.com
              </a>
            </div>

            <div className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-secondary/20 transition-all duration-500 shadow-sm">
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60 block mb-4 md:mb-6 font-headline">Project Consultation</span>
              <p className="text-xs md:text-lg text-muted-foreground mb-6 md:mb-8 italic">
                Planning a new digital platform or modernizing your infrastructure? Reach out to schedule a consultation with our engineering team.
              </p>
              <Button 
                className="w-full h-12 md:h-16 rounded-xl md:rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-lg group shadow-xl border-none transition-all duration-300"
                asChild
              >
                <a href="mailto:info@kandhugule-kcs.com?subject=Project Inquiry - KCS Product Lab">
                  Start a Conversation
                  <Send className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </Chapter>
  )
}