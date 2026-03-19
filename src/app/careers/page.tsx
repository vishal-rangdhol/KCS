"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowLeft, Sparkles, CheckCircle2, Briefcase, FileText, Target, ShieldCheck, Mail, ClipboardCheck, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const jobs = [
  {
    id: "bd-intern",
    title: "Sales & Marketing Intern",
    category: "Business Development",
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
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThreeBackground />
      
      {/* Background Ambient Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(249,115,22,0.05)_0%,_transparent_50%)]" />
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full opacity-40" />
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

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-headline">
              <Sparkles size={12} /> Recruitment Cycle 2025
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground font-headline">
              Architect <br />
              <span className="text-secondary italic">Your Career.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed border-l-2 border-primary/30 pl-6">
              Kandhugule Consultancy Services (KCS) is seeking proactive, technically rigorous individuals committed to transitioning into a long-term, full-time career.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 lg:justify-end"
          >
            <div className="p-6 rounded-3xl bg-black/5 border border-black/10 backdrop-blur-xl flex flex-col items-center justify-center text-center min-w-[160px]">
              <MapPin size={24} className="text-primary mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-headline">Location</span>
              <p className="text-sm font-bold mt-1 text-foreground">Hyderabad, India</p>
            </div>
            <div className="p-6 rounded-3xl bg-black/5 border border-black/10 backdrop-blur-xl flex flex-col items-center justify-center text-center min-w-[160px]">
              <Clock size={24} className="text-secondary mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-headline">Duration</span>
              <p className="text-sm font-bold mt-1 text-foreground">3 Months</p>
            </div>
            <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-xl flex flex-col items-center justify-center text-center min-w-[160px]">
              <Target size={24} className="text-primary mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-headline">Conversion</span>
              <p className="text-sm font-bold mt-1 text-foreground">Performance-based</p>
            </div>
          </motion.div>
        </div>

        {/* Collapsible Jobs Architecture */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary font-headline">Open Protocols</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {jobs.map((job) => (
              <AccordionItem 
                key={job.id} 
                value={job.id}
                className="border-none px-2 rounded-[2rem] bg-card/40 backdrop-blur-md border border-black/5 hover:border-black/10 transition-all group data-[state=open]:bg-white data-[state=open]:border-primary/20 shadow-xl overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 md:py-10 px-6 md:px-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-left w-full">
                    <div className="flex items-center gap-6">
                      <div className="p-4 rounded-2xl bg-black/5 border border-black/10 text-primary group-hover:scale-110 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all duration-500">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/60 mb-1 block font-headline">{job.category}</span>
                        <h3 className="text-xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors font-headline">
                          {job.title}
                        </h3>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                      <span className="px-4 py-2 rounded-full border border-black/5 bg-black/5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground font-headline">Full-Time Path</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-10 pb-10">
                  <div className="max-w-6xl mx-auto space-y-16">
                    {/* I. Position Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 pt-6 border-t border-black/5">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary whitespace-nowrap font-headline">I. Position Overview</span>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {job.overview}
                      </p>
                    </div>

                    {/* II & III Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary font-headline">II. Key Responsibilities</span>
                        </div>
                        <ul className="space-y-4">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-4 p-5 rounded-2xl bg-black/5 border border-black/5 hover:border-secondary/20 transition-all group/item">
                              <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
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
                            <li key={idx} className="flex gap-4 p-5 rounded-2xl bg-black/5 border border-black/5 hover:border-primary/20 transition-all group/item">
                              <ShieldCheck size={18} className="text-primary flex-shrink-0" />
                              <span className="text-sm leading-relaxed text-muted-foreground group-hover/item:text-foreground transition-colors">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Local Action */}
                    <div className="pt-12 border-t border-black/10">
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                          <Sparkles size={20} />
                        </div>
                        <p className="text-xs italic max-w-md">
                          Evaluation period of 3 months required for performance assessment and FTE conversion readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enhanced Application Protocol */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-24 rounded-[3rem] bg-black/5 border border-black/10 relative overflow-hidden"
        >
          {/* Architectural Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 block font-headline">Submission Standards</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-none text-foreground font-headline">Application Protocol.</h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-body">
                To maintain the integrity of our selection lifecycle, all candidates must adhere to the following formal submission framework.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Step 01: Preparation */}
              <div className="p-8 rounded-[2rem] bg-white border border-black/5 group hover:border-primary/20 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <span className="text-[9px] font-bold text-primary/60 uppercase tracking-[0.2em] font-headline block mb-2">Step 01</span>
                <h4 className="text-xl font-bold mb-4 font-headline">Document Assembly</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Comprehensive Resume</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Portfolio/GitHub Link</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Academic Transcripts</li>
                </ul>
              </div>

              {/* Step 02: Submission */}
              <div className="p-8 rounded-[2rem] bg-white border border-black/5 group hover:border-secondary/20 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <span className="text-[9px] font-bold text-secondary/60 uppercase tracking-[0.2em] font-headline block mb-2">Step 02</span>
                <h4 className="text-xl font-bold mb-4 font-headline">Electronic Delivery</h4>
                <p className="text-sm text-muted-foreground mb-4">Send your compiled documentation package to our central recruitment terminal.</p>
                <div className="pt-4 border-t border-black/5">
                  <p className="text-xs font-bold text-foreground">HR@kandhugule-kcs.com</p>
                </div>
              </div>

              {/* Step 03: Validation */}
              <div className="p-8 rounded-[2rem] bg-white border border-black/5 group hover:border-primary/20 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ClipboardCheck size={24} />
                </div>
                <span className="text-[9px] font-bold text-primary/60 uppercase tracking-[0.2em] font-headline block mb-2">Step 03</span>
                <h4 className="text-xl font-bold mb-4 font-headline">Validation Phase</h4>
                <p className="text-sm text-muted-foreground">Our engineering leads review all submissions within 5-7 business days. Selected candidates move to technical interview protocols.</p>
              </div>
            </div>

            <div className="p-8 md:p-12 rounded-[2.5rem] bg-primary text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={160} strokeWidth={1} />
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-headline mb-2">Ready to initiate?</h3>
                  <p className="text-white/80 text-sm">Ensure your subject line exactly follows the protocol format below to avoid filtering.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/60 block mb-2 font-headline">Subject Protocol</span>
                  <p className="text-sm md:text-base font-medium italic">
                    Internship Application - [Role] - [Name]
                  </p>
                </div>
              </div>
            </div>
            
            <p className="mt-16 text-[10px] text-black/20 uppercase tracking-[0.4em] font-bold text-center font-headline">
              © 2025 Kandhugule Consultancy Services | Engineering Excellence Driven
            </p>
          </div>
        </motion.div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.6)_100%)]" />
    </main>
  )
}
