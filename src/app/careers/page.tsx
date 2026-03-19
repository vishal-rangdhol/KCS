"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowLeft, Send, Sparkles, CheckCircle2, ChevronRight, Briefcase, FileText, Target, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
      "Systems Administration: Foundational knowledge of Linux/Unix environments and cloud protocols.",
      "Scripting Proficiency: Experience with Bash, Python, or similar scripting languages for automation.",
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
  const handleApply = (role: string) => {
    const email = "HR@kandhugule-kcs.com";
    const subject = `Internship Application - ${role} - [Your Name]`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThreeBackground />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(167,139,250,0.08)_0%,_transparent_50%)]" />
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative z-10 pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-12 md:mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-all group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles size={12} /> Recruitment Cycle 2025
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
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
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center min-w-[160px]">
              <MapPin size={24} className="text-primary mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Location</span>
              <p className="text-sm font-bold mt-1">Hyderabad, India</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center text-center min-w-[160px]">
              <Clock size={24} className="text-secondary mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Duration</span>
              <p className="text-sm font-bold mt-1">3 Months</p>
            </div>
            <div className="p-6 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-xl flex flex-col items-center justify-center text-center min-w-[160px]">
              <Target size={24} className="text-primary mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Conversion</span>
              <p className="text-sm font-bold mt-1">Performance-based</p>
            </div>
          </motion.div>
        </div>

        {/* Collapsible Jobs Architecture */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Open Protocols</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {jobs.map((job, i) => (
              <AccordionItem 
                key={job.id} 
                value={job.id}
                className="border-none px-2 rounded-[2rem] bg-card/20 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all group data-[state=open]:bg-white/5 data-[state=open]:border-primary/20 shadow-2xl overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-6 md:py-10 px-6 md:px-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-left w-full">
                    <div className="flex items-center gap-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:scale-110 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-all duration-500">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/60 mb-1 block">{job.category}</span>
                        <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                      <span className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Full-Time Path</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-10 pb-10">
                  <div className="max-w-6xl mx-auto space-y-16">
                    {/* I. Position Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary whitespace-nowrap">I. Position Overview</span>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {job.overview}
                      </p>
                    </div>

                    {/* II & III Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">II. Key Responsibilities</span>
                        </div>
                        <ul className="space-y-4">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all group/item">
                              <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
                              <span className="text-sm leading-relaxed text-muted-foreground group-hover/item:text-foreground transition-colors">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">III. Candidate Requirements</span>
                        </div>
                        <ul className="space-y-4">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all group/item">
                              <ShieldCheck size={18} className="text-primary flex-shrink-0" />
                              <span className="text-sm leading-relaxed text-muted-foreground group-hover/item:text-foreground transition-colors">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Local Action */}
                    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                          <Sparkles size={20} />
                        </div>
                        <p className="text-xs italic max-w-md">
                          Evaluation period of 3 months required for performance assessment and FTE conversion readiness.
                        </p>
                      </div>
                      <Button 
                        onClick={() => handleApply(job.title)}
                        className="h-16 px-12 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold group/btn shadow-[0_15px_30px_rgba(167,139,250,0.3)] w-full md:w-auto text-lg"
                      >
                        Initiate Application
                        <Send className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Formal Application Protocol Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-24 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,139,250,0.05)_0%,_transparent_70%)]" />
          <div className="absolute top-0 right-0 p-12 text-primary/5 -rotate-12">
            <FileText size={240} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 block">Final Submission</span>
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8 leading-none">Application Protocol</h2>
            <p className="text-muted-foreground text-lg mb-16 leading-relaxed">
              To maintain the integrity of our selection process, candidates must adhere to the following formal submission standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-8 rounded-[2rem] bg-background/50 border border-white/5 group hover:border-primary/30 transition-all">
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest block mb-4">Submission Point</span>
                <p className="text-xl md:text-2xl font-bold tracking-tight">HR@kandhugule-kcs.com</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-background/50 border border-white/5 group hover:border-secondary/30 transition-all">
                <span className="text-[9px] font-bold text-secondary uppercase tracking-widest block mb-4">Subject Requirement</span>
                <p className="text-sm md:text-base font-medium italic text-muted-foreground">
                  Internship Application - [Role] - [Name]
                </p>
              </div>
            </div>
            
            <p className="mt-20 text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
              © 2025 Kandhugule Consultancy Services | Technical Excellence Driven
            </p>
          </div>
        </motion.div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
    </main>
  )
}
