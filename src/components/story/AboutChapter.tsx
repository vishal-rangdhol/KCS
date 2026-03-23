
"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Zap, Cpu, RefreshCw } from 'lucide-react'

const values = [
  {
    title: "Technology Ownership",
    description: "Clients retain full control of every system we build. No lock-in. No dependency.",
    icon: ShieldCheck,
  },
  {
    title: "Product-First Engineering",
    description: "We treat every project as a long-term platform, not a short-term contract.",
    icon: Zap,
  },
  {
    title: "AI-Ready Architecture",
    description: "Every system we design is built for future AI integration and intelligent automation.",
    icon: Cpu,
  },
  {
    title: "End-to-End Lifecycle",
    description: "Build → Launch → Operate → Maintain → Scale",
    icon: RefreshCw,
  }
]

export function AboutChapter() {
  return (
    <Chapter id="story" className="bg-background py-24 md:py-48 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Part 1: The KCS Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32 md:mb-64 text-center md:text-left"
        >
          <span className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold tracking-[0.6em] uppercase text-[10px] sm:text-xs mb-8 font-headline">
            <Sparkles size={14} className="animate-pulse" /> The Narrative
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-foreground mb-12 font-headline">
            The <span className="text-primary italic">KCS Story.</span>
          </h2>

          <div className="max-w-5xl mx-auto md:mx-0 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed italic font-medium">
                <p>
                  Kandhugule Consultancy Services (KCS) Pvt Ltd was founded in Hyderabad, India,
                  on a single conviction: technology should empower businesses to create
                  meaningful impact — without locking them into systems they don't control.
                </p>
                <p>
                  As digital transformation accelerates, organizations face growing complexity in
                  building and maintaining modern technology. Artificial intelligence, cloud
                  infrastructure, cybersecurity, and data platforms must work together seamlessly.
                </p>
              </div>
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed italic font-medium">
                <p>
                  Most organizations struggle to make that happen. KCS was created to close that gap by providing a bridge between high-level engineering and practical business application.
                </p>
                <p className="text-foreground not-italic font-bold text-lg md:text-2xl lg:text-3xl tracking-tighter">
                  We exist to ensure technology remains a competitive advantage, not an operational burden.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 2: Product Lab Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32 md:mb-64"
        >
          <div className="bg-card/40 border border-white/5 rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
             
             <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-12 font-headline">
               A Product Lab <span className="text-primary">for the Modern Era.</span>
             </h3>
             
             <div className="max-w-4xl space-y-8 text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed italic font-medium">
                <p>
                  Rather than functioning as a traditional consulting firm, KCS operates as a
                  technology product lab. We don't just deliver software — we build complete digital
                  ecosystems designed to support long-term growth.
                </p>
                <p>
                  Our team brings together expertise across artificial intelligence, cloud infrastructure,
                  cybersecurity, enterprise software, and mobile platforms. By integrating these
                  disciplines, we help organizations move from idea to fully operational platform.
                </p>
             </div>
          </div>
        </motion.div>

        {/* Part 3: What Makes KCS Different (Values) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32 md:mb-64"
        >
          <div className="text-center mb-16 md:mb-24">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter font-headline">
              What Makes <span className="text-primary italic">KCS Different.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 md:p-12 rounded-[2rem] bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-500 group"
              >
                <div className="bg-primary/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <value.icon size={24} />
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-4 tracking-tighter font-headline">{value.title}</h4>
                <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part 4: Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-12 font-headline">
            Our <span className="text-primary">Vision.</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-8 text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed italic font-medium">
            <p>
              KCS aims to become a global product lab for digital infrastructure — supporting
              founders, enterprises, and institutions in building the platforms that define the next
              era of business.
            </p>
            <p className="text-foreground font-bold not-italic tracking-tighter text-lg md:text-2xl lg:text-3xl">
              From social learning ecosystems to AI-powered healthcare infrastructure, we are
              focused on building systems that improve how people learn, connect, and access
              services.
            </p>
          </div>
        </motion.div>
      </div>
    </Chapter>
  )
}
