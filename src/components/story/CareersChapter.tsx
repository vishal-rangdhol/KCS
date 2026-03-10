"use client"

import { Chapter } from './Chapter'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

const jobs = [
  {
    title: "AI Research Architect",
    location: "Hyderabad / Remote",
    type: "Full-time",
    salary: "Competitive"
  },
  {
    title: "Senior Cloud Engineer",
    location: "Hybrid",
    type: "Full-time",
    salary: "Top Tier"
  },
  {
    title: "Cybersecurity Analyst",
    location: "Hyderabad",
    type: "Contract",
    salary: "Industry Lead"
  }
]

export function CareersChapter() {
  return (
    <Chapter id="careers" className="bg-background py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline uppercase tracking-[0.3em] text-xs mb-4 block font-bold"
          >
            Join Our Team
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-bold mb-8">Architect the <br /><span className="text-secondary italic">Future</span> With Us.</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            We are looking for visionaries who want to solve the most complex digital challenges of our time. Join a culture of innovation, expertise, and radical transparency.
          </p>
          <Button size="lg" className="rounded-full h-14 px-8 group">
            View All Openings <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Briefcase size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">{job.salary}</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{job.title}</h4>
              <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{job.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Chapter>
  )
}
