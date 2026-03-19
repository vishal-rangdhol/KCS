
"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowLeft, Send, Sparkles, CheckCircle2, ChevronRight, Briefcase, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const jobs = [
  {
    id: "bd-intern",
    title: "Sales & Marketing Intern (Business Development)",
    overview: "The Sales & Marketing Intern will serve as a primary catalyst for market expansion. This is a field-intensive role requiring a proactive professional capable of identifying high-value B2B opportunities and executing direct outreach strategies to drive SaaS adoption.",
    responsibilities: [
      "Lead Generation & Prospecting: Identify and qualify potential B2B clients through comprehensive market research and physical site visits.",
      "Solution Demonstrations: Conduct professional, high-impact product presentations and live software demonstrations to key stakeholders.",
      "Pipeline Management: Oversee the client acquisition lifecycle, from initial contact and negotiation to formal onboarding.",
      "Strategic Reporting: Provide detailed weekly reports on market trends, competitor activity, and client feedback to assist in product refinement."
    ],
    requirements: [
      "Communication Excellence: Advanced verbal and written proficiency in English and relevant local languages.",
      "Field Mobility: Full readiness for local travel to facilitate face-to-face client engagements.",
      "Target Orientation: A results-driven mindset with a demonstrated ability to meet or exceed outreach KPIs.",
      "Relationship Building: Strong interpersonal skills with the ability to build rapport with corporate decision-makers."
    ]
  },
  {
    id: "mern-intern",
    title: "MERN Full Stack Intern (Web & Mobile)",
    overview: "The Full Stack Intern will be integrated into our core engineering team to assist in the development, scaling, and maintenance of high-performance web and mobile applications. This role demands a high degree of technical rigor and architectural discipline.",
    responsibilities: [
      "Interface Development: Architect and implement responsive user interfaces using React.js (Web) and React Native (Mobile).",
      "Server-Side Engineering: Develop scalable backend services and RESTful APIs utilizing Node.js and Express.js frameworks.",
      "Data Management: Design and optimize NoSQL database schemas in MongoDB to ensure data integrity and system performance.",
      "Technical Documentation: Maintain comprehensive documentation of codebases and participate in peer code reviews to ensure industry-standard quality."
    ],
    requirements: [
      "Core Technical Stack: Proficiency in JavaScript (ES6+), HTML5, CSS3, and modern frontend frameworks.",
      "System Integration: Practical experience in integrating third-party APIs and managing state across complex applications.",
      "Analytical Debugging: Strong problem-solving skills with the ability to identify and resolve bottlenecks across the full application stack.",
      "Version Control: Competency in Git-based workflows and collaborative development environments."
    ]
  },
  {
    id: "devops-intern",
    title: "DevOps Intern (Mobile Infrastructure)",
    overview: "The DevOps Intern will support the reliability and scalability of our mobile application infrastructure. The successful candidate will work at the intersection of development and operations to automate workflows and enhance system uptime.",
    responsibilities: [
      "CI/CD Implementation: Support the configuration and maintenance of automated deployment pipelines for seamless app store releases.",
      "Cloud Orchestration: Assist in the management of cloud-based resources on AWS or Azure platforms.",
      "Containerization: Utilize Docker and Kubernetes to maintain consistent environments across development, staging, and production.",
      "Infrastructure Monitoring: Deploy and manage monitoring tools to track system health, security vulnerabilities, and performance metrics."
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
    title: "AI Engineer Intern (Content Safety & Moderation)",
    overview: "The AI Engineer Intern will focus on the research and development of machine learning models dedicated to automated content moderation. The objective is to leverage Computer Vision and NLP to maintain a secure and compliant social ecosystem.",
    responsibilities: [
      "Computer Vision Development: Build and train models to detect and classify inappropriate visual content (NSFW) with high precision.",
      "NLP Application: Implement Natural Language Processing techniques to monitor and flag harmful or non-compliant text-based interactions.",
      "Dataset Curation: Manage large-scale data labeling and preprocessing to optimize model training and reduce algorithmic bias.",
      "Model Deployment: Collaborate with backend teams to integrate AI modules into live production environments."
    ],
    requirements: [
      "Machine Learning Frameworks: Proficiency in Python and hands-on experience with TensorFlow, PyTorch, or Scikit-learn.",
      "Mathematical Foundation: Strong understanding of linear algebra, probability, and neural network architectures.",
      "Evaluation Metrics: Ability to interpret and improve model performance using F1-score, precision-recall curves, and loss functions.",
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
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <ThreeBackground />
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-primary/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-secondary/15 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
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
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
              Career <br />
              <span className="text-secondary italic">Opportunities.</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <MapPin size={12} /> Hyderabad, India
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} /> 3 Months Internship
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={12} /> FTE Conversion Path
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Kandhugule Consultancy Services (KCS) is seeking proactive, technically rigorous individuals committed to transitioning into a long-term, full-time career.
            </p>
          </motion.div>
        </div>

        {/* Collapsible Jobs Section */}
        <div className="bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden p-4 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {jobs.map((job, i) => (
              <AccordionItem 
                key={job.id} 
                value={job.id}
                className="border-b border-white/5 px-4 md:px-6 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <AccordionTrigger className="hover:no-underline py-6 md:py-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-left w-full">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform hidden md:block">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                          <MapPin size={10} /> On-site / Field
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-primary flex items-center gap-1">
                          <Clock size={10} /> Prerequisite for FTE
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-4">
                  <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {/* I. Position Overview */}
                    <section className="space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">I. Position Overview</span>
                        <div className="h-px flex-1 bg-primary/20" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {job.overview}
                      </p>
                    </section>

                    {/* II. Key Responsibilities */}
                    <section className="space-y-4">
                      <div className="flex items-center gap-2 text-secondary">
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">II. Key Responsibilities</span>
                        <div className="h-px flex-1 bg-secondary/20" />
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground bg-white/5 p-4 rounded-xl border border-white/5">
                            <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* III. Candidate Requirements */}
                    <section className="space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">III. Candidate Requirements</span>
                        <div className="h-px flex-1 bg-primary/20" />
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground bg-white/5 p-4 rounded-xl border border-white/5">
                            <ChevronRight size={16} className="text-secondary flex-shrink-0 mt-1" />
                            <span className="text-sm leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Action */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/5 border border-secondary/10">
                        <Sparkles size={18} className="text-secondary" />
                        <p className="text-xs text-muted-foreground italic max-w-md">
                          Successful candidates will be offered a formal employment contract with full benefits immediately following the evaluation period.
                        </p>
                      </div>
                      <Button 
                        onClick={() => handleApply(job.title)}
                        className="h-14 px-10 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold group/btn flex-shrink-0 w-full md:w-auto"
                      >
                        Initiate Application
                        <Send className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Formal Instructions Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 md:p-16 rounded-[2.5rem] bg-card/40 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-primary/5 pointer-events-none">
            <FileText size={180} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Application Protocol</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Candidates are required to adhere to the following formal submission format for all credentials.
            </p>
            
            <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full max-w-2xl mx-auto">
              <div className="p-6 rounded-2xl bg-background/40 border border-white/10">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Primary Contact</span>
                <p className="text-lg font-bold">HR@kandhugule-kcs.com</p>
              </div>
              <div className="p-6 rounded-2xl bg-background/40 border border-white/10">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">Subject Format</span>
                <p className="text-sm font-medium italic">Internship Application - [Role] - [Name]</p>
              </div>
            </div>
            
            <p className="mt-12 text-xs text-muted-foreground leading-relaxed">
              © 2025 Kandhugule Consultancy Services. KCS is an equal opportunity employer committed to technical excellence and professional growth.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </main>
  )
}
