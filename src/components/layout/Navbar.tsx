"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Products', href: '/#products' },
  { name: 'Services', href: '/#services' },
  { name: 'Technology', href: '/#technology' },
  { name: 'About', href: '/#story' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const mainNavItems = navItems.filter(item => item.name !== 'Contact')
  const contactItem = navItems.find(item => item.name === 'Contact')

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (pathname !== '/') {
      const id = pathname.replace('/', '') || 'hero'
      setActiveSection(id)
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
      if (item.href.startsWith('/#')) {
        const id = item.href.split('#')[1]
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center p-4 md:p-6 pointer-events-none">
      <nav 
        className={`rounded-full pointer-events-auto flex items-center justify-between w-full max-w-[95%] transition-all duration-700 border ${
          isScrolled 
            ? 'px-6 py-3 md:px-8 bg-background/80 backdrop-blur-xl shadow-2xl border-primary/10 scale-95 md:scale-100' 
            : 'px-8 py-4 md:px-10 md:py-5 border-border/10 bg-background shadow-sm'
        }`}
      >
        {/* Left: Logo */}
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
                width={110}
                height={36}
                className="h-9 w-auto object-contain antialiased"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Main Nav - 10% Scale Active State */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex flex-row gap-4 lg:gap-10 items-center">
            {mainNavItems.map((item) => {
              const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
              const isActive = activeSection === id || (pathname === item.href)

              return (
                <li key={item.name} className="relative group flex items-center">
                  <Link 
                    href={item.href}
                    className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 block py-2 relative origin-center ${
                      isActive 
                        ? 'text-primary scale-110' 
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span 
                        layoutId="activeUnderline"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1, originX: 0 }}
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-primary z-10 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.4)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right: Contact with Magnetic Hover & Color Shift */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {contactItem && (
            <div className="hidden md:block">
              <MagneticButton>
                <Link 
                  href={contactItem.href}
                  className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-2 border-none shadow-lg bg-primary text-white hover:bg-secondary group relative overflow-hidden`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {contactItem.name}
                    <ArrowUpRight size={10} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-[90px] left-4 right-4 bg-background rounded-[2rem] p-6 md:hidden border border-border/10 shadow-2xl pointer-events-auto"
          >
            <ul className="grid grid-cols-2 gap-4">
              {navItems.map((item) => {
                const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
                const isActive = activeSection === id || (pathname === item.href)
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block p-4 rounded-xl transition-all duration-500 text-[10px] font-headline font-bold tracking-widest text-center border ${
                        isActive 
                          ? 'bg-primary/10 border-primary/40 text-primary scale-105' 
                          : 'bg-card/40 border-border/10 hover:bg-card text-foreground/70'
                      }`}
                    >
                      {item.name}
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
