"use client"

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Clock, ArrowLeft, Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'

const jobs = [
  {
    title: "AI Research Architect",
    location: "Hyderabad / Remote",
    type: "Full-time",
    salary: "Competitive",
    description: "Lead the design of next-generation LLM architectures and predictive systems for enterprise-scale deployments."
  },
  {
    title: "Senior Cloud Engineer",
    location: "Hybrid",
    type: "Full-time",
    salary: "Top Tier",
    description: "Architect and manage hyper-scalable cloud infrastructures with a focus on cognitive automation and resilience."
  },
  {
    title: "Cybersecurity Analyst",
    location: "Hyderabad",
    type: "Contract",
    salary: "Industry Lead",
    description: "Design and implement zero-trust security frameworks for critical digital assets and high-stakes environments."
  },
  {
    title: "Full Stack Developer (Next.js)",
    location: "Remote",
    type: "Full-time",
    salary: "Market Lead",
    description: "Craft immersive, high-performance digital experiences using the latest React and Next.js technologies."
  }
]

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <ThreeBackground />
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-primary/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-secondary/15 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Back to Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Build the <br />
              <span className="text-secondary italic">Future</span> with KCS.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              We are a collective of architects, engineers, and visionaries dedicated to solving the world's most complex digital challenges. Explore our open roles and find where you belong.
            </p>
          </motion.div>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 gap-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
              className="p-8 md:p-12 rounded-[2rem] bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden backdrop-blur-xl"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                <div className="space-y-6 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                      {job.salary}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-muted-foreground text-[10px] font-bold uppercase tracking-widest border border-white/10">
                      {job.type}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-8 text-sm font-medium text-white/60">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                
                <Button className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold group/btn flex-shrink-0 w-full lg:w-auto shadow-xl hover:shadow-primary/20 transition-all">
                  Apply Now
                  <Send className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Teaser */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 md:p-20 rounded-[3rem] glass border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 text-primary/10 -rotate-12 pointer-events-none">
            <Sparkles size={200} strokeWidth={1} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Don't see a perfect fit?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            We are always looking for exceptional talent. Send us your resume and tell us how you can help us architect the future.
          </p>
          <Button variant="outline" className="h-16 px-12 rounded-full border-primary/40 text-primary hover:bg-primary hover:text-white transition-all text-lg font-bold">
            General Application
          </Button>
        </motion.div>
      </div>
      
      {/* Background Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </main>
  )
}
