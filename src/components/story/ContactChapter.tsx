
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Send, Sparkles } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'

export function ContactChapter() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Chapter id="contact" className="py-20 bg-background relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="flex items-center justify-center gap-2 text-primary font-bold tracking-[0.5em] uppercase text-[10px] sm:text-xs mb-10 font-headline">
            <Sparkles size={14} className="animate-pulse" /> Final Protocol
          </span>
          
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.8] tracking-tighter text-foreground mb-12 font-headline">
            Let's Build <br />
            <span className="text-primary italic">Something Great.</span>
          </h2>

          <div className="w-full py-16 border-y border-black/5 mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto px-4 leading-relaxed font-medium">
              Have a product idea, a technology challenge, or an infrastructure problem? Our team is ready to help you design, build, and scale the technology behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left mb-20">
            <div className="p-10 rounded-[2.5rem] bg-black/5 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 block mb-6 font-headline">Business Inquiries</span>
              <h4 className="text-2xl font-bold mb-4 font-headline">Kandhugule Consultancy Services Pvt Ltd</h4>
              <p className="text-muted-foreground mb-4">Hyderabad, India</p>
              <a href="mailto:contact@kandhugule-kcs.com" className="text-lg font-bold text-primary hover:underline">
                contact@kandhugule-kcs.com
              </a>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-black/5 border border-black/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/60 block mb-6 font-headline">Project Consultation</span>
              <p className="text-lg text-muted-foreground mb-8 italic">
                Planning a new digital platform or modernizing your infrastructure? Reach out to schedule a consultation with our engineering team.
              </p>
              <Button 
                onClick={scrollToContact}
                className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group shadow-xl"
              >
                Start a Conversation
                <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </Chapter>
  )
}
