
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Mail, ArrowRight } from 'lucide-react'

export function ContactChapter() {
  return (
    <Chapter id="contact" className="pb-20">
      <div className="bg-primary/10 border border-primary/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-[100px] pointer-events-none"
        />
        
        <h2 className="text-4xl md:text-7xl font-bold mb-8 relative z-10">
          Ready to Write Your <br />
          <span className="text-secondary italic">Next Chapter?</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
          <Button size="lg" className="h-14 px-10 text-lg rounded-full group">
            Work With Us 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full">
            <Mail className="mr-2" size={20} />
            Contact Team
          </Button>
        </div>

        <div className="mt-20 pt-10 border-t border-primary/10 text-muted-foreground text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 KCS Narrative. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </Chapter>
  )
}
