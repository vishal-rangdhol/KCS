
"use client"

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MapPin, Clock, ArrowLeft, Sparkles, CheckCircle2, Briefcase, FileText, Target, ShieldCheck, Mail, ClipboardCheck, ArrowUpRight, Zap, Heart, Brain, Search } from 'lucide-react'
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

const whyKCS = [
  {
    icon: Sparkles,
    title: "Innovative Platforms",
    text: "Work on innovative platforms used by real people across healthcare, education, and enterprise."
  },
  {
    icon: Zap,
    title: "Modern Stack",
    iconColor: "text-secondary",
    text: "Collaborate with experienced engineers across a high-performance modern technology stack."
  },
  {
    icon: Brain,
    title: "Meaningful Impact",
    text: "Contribute to meaningful digital transformation that solves complex societal and enterprise challenges."
  },
  {
    icon: ShieldCheck,
    title: "Focused Culture",
    iconColor: "text-primary",
    text: "Operate in a culture that values focused work over performative busyness."
  }
]

function AdvantageCard({ item, index }: { item: typeof whyKCS[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className="p-10 rounded-[2.5rem] bg-white border border-black/5 hover:border-primary/20 transition-all group shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-black/5 mb-8 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm ${item.iconColor || 'text-primary'}`}>
          <item.icon size={22} />
        </div>
        <h3 className="text-xl font-bold mb-4 font-headline text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{item.text}</p>
      </div>

      <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:8px_8px]" />
      </div>
    </motion.div>
  )
}

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <ThreeBackground />
      
      {/* Cinematic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(249,115,22,0.03)_0%,_transparent_50%)]" />
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-12 md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-black/5 border border-black/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-headline">Back to Story</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-10 font-headline">
                <Sparkles size={12} className="animate-pulse" /> The Collective Protocol
              </span>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-12 text-foreground font-headline">
                Join the <br />
                <span className="text-primary italic">KCS Team.</span>
              </h1>
              <p className="text-xl md:text-4xl text-foreground font-medium leading-tight max-w-3xl">
                We're building the next generation of digital platforms — and we're looking for architects who want to do the same.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Philosophy Block */}
        <section className="mb-48 py-24 border-y border-black/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-5xl mx-auto text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/60 mb-8 block font-headline">The KCS Conviction</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-10 text-foreground">
              "We believe the best products come from teams that are <span className="text-primary">focused</span>, supported, and given the space to do their best work."
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              We take engineering quality seriously, and we take the wellbeing of our people just as seriously. No performative busyness. Just deep work.
            </p>
          </motion.div>
        </section>

        {/* Why KCS Grid */}
        <div className="mb-48">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline">The KCS Advantage</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyKCS.map((item, i) => (
              <AdvantageCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="space-y-6 mb-48">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline">Open Architectures</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {jobs.map((job) => (
              <AccordionItem 
                key={job.id} 
                value={job.id}
                className="border-none px-2 rounded-[2rem] bg-card/40 backdrop-blur-md border border-black/5 hover:border-black/10 transition-all group data-[state=open]:bg-white data-[state=open]:border-primary/20 shadow-xl overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-8 md:py-12 px-6 md:px-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-left w-full">
                    <div className="flex items-center gap-8">
                      <div className="p-5 rounded-2xl bg-black/5 border border-black/10 text-primary group-hover:scale-110 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all duration-500">
                        <Briefcase size={28} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/60 mb-1 block font-headline">{job.category}</span>
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors font-headline">
                          {job.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-12 pb-12">
                  <div className="max-w-6xl mx-auto space-y-12">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-black/5 border border-black/5">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground font-headline">Location</p>
                          <p className="text-xs font-bold text-foreground">{job.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-black/5 border border-black/5">
                        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                          <Clock size={20} />
                        </div>
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground font-headline">Duration</p>
                          <p className="text-xs font-bold text-foreground">{job.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <Target size={20} />
                        </div>
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wider text-primary/60 font-headline">Conversion</p>
                          <p className="text-xs font-bold text-foreground">{job.conversion}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 pt-10 border-t border-black/5">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary whitespace-nowrap font-headline">I. Position Overview</span>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {job.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary font-headline">II. Key Responsibilities</span>
                        </div>
                        <ul className="space-y-4">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-4 p-6 rounded-2xl bg-black/5 border border-black/5 hover:border-secondary/20 transition-all group/item">
                              <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-1" />
                              <span className="text-sm leading-relaxed text-muted-foreground group-hover/item:text-foreground transition-colors">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline">III. Candidate Requirements</span>
                        </div>
                        <ul className="space-y-4">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex gap-4 p-6 rounded-2xl bg-black/5 border border-black/5 hover:border-primary/20 transition-all group/item">
                              <ShieldCheck size={18} className="text-primary flex-shrink-0 mt-1" />
                              <span className="text-sm leading-relaxed text-muted-foreground group-hover/item:text-foreground transition-colors">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Application Protocol Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-24 rounded-[3rem] bg-black/5 border border-black/10 relative overflow-hidden mb-20"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 block font-headline">Submission Standards</span>
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 leading-none text-foreground font-headline">Application Protocol.</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                To maintain the integrity of our selection lifecycle, all candidates must adhere to the following formal submission framework.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 group hover:border-primary/20 transition-all shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <FileText size={28} />
                </div>
                <span className="text-[9px] font-bold text-primary/60 uppercase tracking-[0.2em] font-headline block mb-3">Step 01</span>
                <h4 className="text-2xl font-bold mb-6 font-headline">Document Assembly</h4>
                <ul className="text-sm text-muted-foreground space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle2 size={14} className="text-primary" /> Comprehensive Resume</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={14} className="text-primary" /> Portfolio/GitHub Link</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={14} className="text-primary" /> Academic Transcripts</li>
                </ul>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 group hover:border-secondary/20 transition-all shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <span className="text-[9px] font-bold text-secondary/60 uppercase tracking-[0.2em] font-headline block mb-3">Step 02</span>
                <h4 className="text-2xl font-bold mb-6 font-headline">Electronic Delivery</h4>
                <p className="text-sm text-muted-foreground mb-6">Send your compiled documentation package to our central recruitment terminal.</p>
                <div className="pt-6 border-t border-black/5">
                  <p className="text-sm font-bold text-foreground">HR@kandhugule-kcs.com</p>
                </div>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-white border border-black/5 group hover:border-primary/20 transition-all shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <ClipboardCheck size={28} />
                </div>
                <span className="text-[9px] font-bold text-primary/60 uppercase tracking-[0.2em] font-headline block mb-3">Step 03</span>
                <h4 className="text-2xl font-bold mb-6 font-headline">Validation Phase</h4>
                <p className="text-sm text-muted-foreground">Our engineering leads review all submissions within 5-7 business days. Selected candidates move to technical interview protocols.</p>
              </div>
            </div>

            <div className="p-10 md:p-16 rounded-[3rem] bg-primary text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={200} strokeWidth={1} />
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to initiate?</h3>
                  <p className="text-white/80 text-base">Ensure your subject line exactly follows the protocol format below to avoid system filtering.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block mb-3 font-headline">Subject Protocol</span>
                  <p className="text-base md:text-lg font-medium italic">
                    Internship Application - [Role] - [Name]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
