
"use client"

import { motion } from 'framer-motion'
import { MapPin, Clock, ArrowLeft, Send, Sparkles, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { ThreeBackground } from '@/components/canvas/ThreeBackground'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const jobs = [
  {
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
              Architect the <br />
              <span className="text-secondary italic">Future</span> with KCS.
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <MapPin size={12} /> Hyderabad, India (On-site / Field)
              </span>
              <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} /> 3 Months (Unpaid Internship)
              </span>
              <span className="px-5 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={12} /> Performance-based FTE Conversion
              </span>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              We are seeking proactive, technically rigorous individuals committed to transitioning into a long-term, full-time career. Join our collective of visionaries solving complex digital challenges.
            </p>
          </motion.div>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 gap-12">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-8 md:p-12 rounded-[2rem] bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/20 text-primary">
                        <Briefcase size={20} />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {job.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                      {job.overview}
                    </p>
                  </div>
                  <Button 
                    onClick={() => handleApply(job.title)}
                    className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold group/btn flex-shrink-0 w-full lg:w-auto shadow-xl hover:shadow-primary/20 transition-all"
                  >
                    Apply Now
                    <Send className="ml-3 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Key Responsibilities</h4>
                    <ul className="space-y-4">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-4 text-muted-foreground">
                          <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-base leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Candidate Requirements</h4>
                    <ul className="space-y-4">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex gap-4 text-muted-foreground">
                          <ChevronRight size={18} className="text-secondary flex-shrink-0 mt-1" />
                          <span className="text-base leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 md:p-20 rounded-[3rem] glass border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 text-primary/10 -rotate-12 pointer-events-none">
            <Sparkles size={200} strokeWidth={1} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Application Instructions</h2>
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Qualified candidates committed to transitioning into a long-term, full-time career are invited to submit their credentials.
            </p>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 inline-block w-full sm:w-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Send your application to</p>
              <p className="text-2xl font-bold text-foreground mb-4">HR@kandhugule-kcs.com</p>
              <p className="text-xs text-muted-foreground italic">Subject Format: Internship Application - [Role Name] - [Your Name]</p>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-white/5">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              <strong>Employment Note:</strong> This internship serves as a prerequisite for Full-Time Employment. Successful candidates will be offered a formal employment contract with full benefits immediately following the 3-month evaluation period.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </main>
  )
}
