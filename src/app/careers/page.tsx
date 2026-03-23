"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowLeft, Sparkles, Briefcase, Clock, Zap } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Footer } from '@/components/layout/Footer'

const jobs = [
  {
    id: "bd-intern",
    title: "Sales & Marketing Intern",
    category: "Business Development",
    location: "Hyderabad, India",
    duration: "3 Months",
    conversion: "Performance Based",
    overview: "The Sales & Marketing Intern will serve as a primary catalyst for market expansion. This is a field-intensive role requiring a proactive professional capable of identifying high-value B2B opportunities and executing direct outreach strategies to drive SaaS adoption.",
    responsibilities: [
      "Lead Generation & Prospecting: Identify and qualify potential B2B clients through physical site visits.",
      "Solution Demonstrations: Conduct professional, high-impact product presentations and live software demos.",
      "Pipeline Management: Oversee the client acquisition lifecycle from initial contact to formal onboarding.",
      "Strategic Reporting: Provide weekly reports on market trends, competitor activity, and client feedback."
    ],
    requirements: [
      "Communication Excellence: Advanced verbal and written proficiency in English and local languages.",
      "Field Mobility: Full readiness for local travel to facilitate face-to-face client engagements.",
      "Target Orientation: A results-driven mindset with a demonstrated ability to meet or exceed KPIs.",
      "Relationship Building: Strong interpersonal skills with the ability to build rapport with decision-makers."
    ]
  },
  {
    id: "mern-intern",
    title: "MERN Full Stack Intern",
    category: "Engineering",
    location: "Hyderabad, India",
    duration: "3 Months",
    conversion: "Technical Review",
    overview: "The Full Stack Intern will be integrated into our core engineering team to assist in the development, scaling, and maintenance of high-performance web and mobile applications. This role demands a high degree of technical rigor and architectural discipline.",
    responsibilities: [
      "Interface Development: Architect responsive user interfaces using React.js (Web) and React Native (Mobile).",
      "Server-Side Engineering: Develop scalable backend services and RESTful APIs utilizing Node.js.",
      "Data Management: Design and optimize NoSQL database schemas in MongoDB for system performance.",
      "Technical Documentation: Maintain comprehensive documentation and participate in peer code reviews."
    ],
    requirements: [
      "Core Technical Stack: Proficiency in JavaScript (ES6+), HTML5, CSS3, and modern frontend frameworks.",
      "System Integration: Practical experience in integrating third-party APIs and managing state.",
      "Analytical Debugging: Strong problem-solving skills to identify and resolve full-stack bottlenecks.",
      "Version Control: Competency in Git-based workflows and collaborative development environments."
    ]
  },
  {
    id: "devops-intern",
    title: "DevOps Intern",
    category: "Infrastructure",
    location: "Remote / Hyderabad",
    duration: "3 Months",
    conversion: "System Assessment",
    overview: "The DevOps Intern will support the reliability and scalability of our mobile application infrastructure. The successful candidate will work at the intersection of development and operations to automate workflows.",
    responsibilities: [
      "CI/CD Implementation: Support automated deployment pipelines for seamless app store releases.",
      "Cloud Orchestration: Assist in the management of cloud-based resources on AWS or Azure platforms.",
      "Containerization: Utilize Docker and Kubernetes to maintain consistent environments across stages.",
      "Infrastructure Monitoring: Deploy monitoring tools to track system health and security vulnerabilities."
    ],
    requirements: [
      "Systems Administration: Foundational knowledge of Linux/Unix environments and cloud networking protocols.",
      "Scripting Proficiency: Experience with Bash, Python, or similar scripting languages for task automation.",
      "Architectural Awareness: Basic understanding of microservices architecture and server management.",
      "Detail Orientation: A meticulous approach to managing configuration files and security protocols."
    ]
  },
  {
    id: "ai-intern",
    title: "AI Engineer Intern",
    category: "Research & AI",
    location: "Hyderabad, India",
    duration: "3 Months",
    conversion: "R&D Contribution",
    overview: "The AI Engineer Intern will focus on the research and development of machine learning models dedicated to automated content moderation. The objective is to leverage Computer Vision and NLP for content safety.",
    responsibilities: [
      "Computer Vision Development: Build and train models to detect and classify visual content with precision.",
      "NLP Application: Implement NLP techniques to monitor and flag harmful text-based interactions.",
      "Dataset Curation: Manage large-scale data labeling and preprocessing to optimize model training.",
      "Model Deployment: Collaborate with backend teams to integrate AI modules into production."
    ],
    requirements: [
      "Machine Learning Frameworks: Proficiency in Python and hands-on experience with TensorFlow or PyTorch.",
      "Mathematical Foundation: Strong understanding of linear algebra, probability, and neural networks.",
      "Evaluation Metrics: Ability to interpret performance using F1-score and precision-recall curves.",
      "Ethical Standards: Commitment to developing fair, transparent, and safe AI solutions."
    ]
  }
]

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <ThreeBackground />
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(251,146,60,0.05)_0%,_transparent_50%)]" />
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] font-headline">Back to Story</span>
          </Link>
        </div>

        <section className="mb-20 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="max-w-4xl text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-10 font-headline">
                <Sparkles size={12} className="animate-pulse" /> The Collective Protocol
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[1.1] md:leading-[0.8] mb-8 md:mb-12 text-foreground font-headline">
                Join the <span className="text-primary italic">KCS Team.</span>
              </h1>
              <p className="text-base md:text-3xl text-foreground font-medium leading-tight max-w-3xl italic">
                We're building the next generation of digital platforms — and we're looking for architects who want to do the same.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="space-y-6 mb-32 md:mb-48">
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-primary font-headline">Open Architectures</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {jobs.map((job) => (
              <AccordionItem 
                key={job.id} 
                value={job.id}
                className="border-none rounded-[1.5rem] md:rounded-[2rem] bg-card/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all group data-[state=open]:bg-card shadow-2xl overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 md:py-12 px-5 md:px-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left w-full">
                    <div className="flex items-center gap-4 md:gap-8">
                      <div className="p-3 md:p-5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all duration-500">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/60 mb-1 block font-headline">{job.category}</span>
                        <h3 className="text-lg md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors font-headline">
                          {job.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 md:px-12 pb-10 md:pb-12">
                  <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 pt-6 md:pt-8 border-t border-white/5">
                    {/* Meta Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                      <div className="flex items-center gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/10 border border-white/5">
                        <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-primary/10 text-primary">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-wider text-muted-foreground font-headline">Location</p>
                          <p className="text-[10px] md:text-xs font-bold text-foreground">{job.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/10 border border-white/5">
                        <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-primary/10 text-primary">
                          <Clock size={20} />
                        </div>
                        <div>
                          <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-wider text-muted-foreground font-headline">Duration</p>
                          <p className="text-[10px] md:text-xs font-bold text-foreground">{job.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/10 border border-white/5">
                        <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-primary/10 text-primary">
                          <Zap size={20} />
                        </div>
                        <div>
                          <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-wider text-muted-foreground font-headline">Path</p>
                          <p className="text-[10px] md:text-xs font-bold text-foreground">{job.conversion}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                      <div className="space-y-6 md:space-y-8">
                        <div>
                          <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mb-3 md:mb-4 font-headline">Role Overview</h4>
                          <p className="text-xs md:text-base text-muted-foreground leading-relaxed italic">
                            {job.overview}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mb-3 md:mb-4 font-headline">Key Responsibilities</h4>
                          <ul className="space-y-2 md:space-y-3">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex gap-2 md:gap-3 text-xs md:text-sm text-foreground">
                                <span className="text-primary font-bold">/</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-6 md:space-y-8">
                        <div>
                          <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mb-3 md:mb-4 font-headline">Requirements</h4>
                          <ul className="space-y-2 md:space-y-3">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex gap-2 md:gap-3 text-xs md:text-sm text-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Footer />
    </main>
  )
}
