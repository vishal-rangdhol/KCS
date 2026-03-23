
"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Services', href: '/#services' },
  { name: 'Products', href: '/#products' },
  { name: 'About', href: '/#story' },
  { name: 'Careers', href: '/#careers', tag: '[HIRING]' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const mainNavItems = navItems.filter(item => item.name !== 'Contact')
  const contactItem = navItems.find(item => item.name === 'Contact')

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (pathname === '/contact') {
      setActiveSection('contact')
      return
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    navItems.forEach((item) => {
      const id = item.href.includes('#') ? item.href.split('#')[1] : null
      if (id) {
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center p-2 md:p-6 pointer-events-none">
      <nav 
        className={cn(
          "rounded-full pointer-events-auto flex items-center justify-between w-full max-w-[98%] md:max-w-[95%] transition-all duration-700 border border-white/5 backdrop-blur-xl",
          isScrolled 
            ? 'px-4 py-2 md:px-8 bg-background/80 shadow-2xl scale-[0.98] md:scale-100 border-primary/10' 
            : 'px-4 py-3 md:px-10 md:py-5 bg-background/40 border-white/5'
        )}
      >
        <div className="flex-shrink-0">
          <Link 
            href="/"
            className="flex items-center group cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center">
              <Image 
                src="/kcs-logo.png" 
                alt="KCS Logo" 
                width={100}
                height={32}
                className="h-6 md:h-9 w-auto object-contain antialiased"
                priority
              />
              <div className="absolute -right-2 top-0 w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#F97316]" />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex flex-row gap-4 lg:gap-8 items-center">
            {mainNavItems.map((item) => {
              const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
              const isActive = activeSection === id || (pathname === item.href)
              const isHovered = hoveredItem === item.name

              return (
                <li 
                  key={item.name} 
                  className="relative group flex items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    href={item.href}
                    className={cn(
                      "text-[9px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-all duration-500 block py-2 relative origin-center flex items-center gap-1.5",
                      isActive 
                        ? 'text-primary' 
                        : 'text-foreground/60 hover:text-foreground'
                    )}
                  >
                    {item.name}
                    {item.tag && (
                      <span className="text-[7px] font-mono text-primary animate-pulse">{item.tag}</span>
                    )}
                    
                    {/* Hover Preview Underline */}
                    {isHovered && !isActive && (
                      <motion.span 
                        layoutId="hoverUnderline"
                        className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-primary/20 z-0 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Active Underline Protocol */}
                    {isActive && (
                      <motion.span 
                        layoutId="activeUnderline"
                        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary z-10 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                        transition={{ 
                          type: "spring", 
                          stiffness: 380, 
                          damping: 30
                        }}
                      >
                        {/* Breathing Pulse */}
                        <motion.div 
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                      </motion.span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {contactItem && (
            <div className="hidden md:block">
              <MagneticButton>
                <Link 
                  href={contactItem.href}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-2 border shadow-2xl relative overflow-hidden group",
                    pathname === '/contact'
                      ? 'bg-primary border-primary text-white'
                      : 'bg-transparent border-primary/40 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {contactItem.name}
                    <ArrowUpRight size={10} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </MagneticButton>
            </div>
          )}

          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="absolute top-[70px] left-2 right-2 bg-background/95 backdrop-blur-2xl rounded-[1.5rem] p-4 md:hidden border border-white/5 shadow-2xl pointer-events-auto"
          >
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
                const isActive = activeSection === id || (pathname === item.href)
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block p-4 rounded-xl transition-all duration-500 text-[10px] font-headline font-bold tracking-widest text-center border relative",
                        isActive 
                          ? 'bg-primary/10 border-primary/40 text-primary scale-105 shadow-sm' 
                          : 'bg-card/40 border-white/5 hover:bg-card text-foreground/70'
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span 
                          layoutId="activeUnderlineMobile"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-primary rounded-full shadow-[0_0_8px_#F97316]"
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const div = buttonRef.current
    if (!div) return

    const { clientX, clientY } = e
    const { left, top, width, height } = div.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const moveX = clientX - centerX
    const moveY = clientY - centerY
    
    const factor = 0.2
    x.set(moveX * factor)
    y.set(moveY * factor)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block relative"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
