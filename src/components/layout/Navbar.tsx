
"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Services', href: '/#services' },
  { name: 'Products', href: '/#products' },
  { name: 'About', href: '/#story' },
  { name: 'Careers', href: '/#careers', tag: 'HIRING' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isClicked, setIsClicked] = useState(false)
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

  const handleNavClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-6 left-0 right-0 z-[110] flex justify-center pointer-events-none px-4">
      <motion.nav 
        animate={{ scale: isClicked ? 0.99 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "w-full max-w-[95%] transition-all duration-500 border pointer-events-auto flex items-center justify-between px-6 md:px-8 py-3 rounded-full bg-white/80 backdrop-blur-xl border-black/5 shadow-lg shadow-black/5"
        )}
      >
        {/* KCS Logo */}
        <div className="flex-shrink-0">
          <Link 
            href="/"
            className="flex items-center group cursor-pointer"
            onClick={handleNavClick}
          >
            <div className="relative flex items-center justify-center">
              <Image 
                src="/kcs-logo.png" 
                alt="KCS Logo" 
                width={80}
                height={26}
                className="h-5 md:h-6 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex flex-row gap-6 lg:gap-10 items-center">
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
                    onClick={handleNavClick}
                    className={cn(
                      "text-[11px] font-bold uppercase tracking-tight transition-all duration-300 block py-1.5 relative flex items-center gap-1",
                      isActive 
                        ? 'text-black' 
                        : 'text-slate-500 hover:text-black hover:tracking-[0.05em]'
                    )}
                  >
                    {item.name}
                    {item.tag && (
                      <span className="text-[7px] font-mono text-primary bg-primary/5 px-1 py-0.5 rounded-sm font-bold align-top -mt-2">
                        {item.tag}
                      </span>
                    )}
                    
                    {/* Ink-Flow Underline */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_-2px_6px_rgba(249,115,22,0.3)] z-[-1]"
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30,
                          mass: 1
                        }}
                      >
                        <motion.div 
                          animate={{ opacity: [0.4, 0.8, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                      </motion.div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {contactItem && (
            <div className="hidden md:block">
              <MagneticButton>
                <Link 
                  href={contactItem.href}
                  onClick={handleNavClick}
                  className={cn(
                    "relative overflow-hidden px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-tight transition-all duration-300 flex items-center gap-1 group border border-black/10",
                    pathname === '/contact'
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:text-white'
                  )}
                >
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                    className="absolute inset-0 bg-primary z-0"
                  />
                  <span className="relative z-10 flex items-center gap-1">
                    {contactItem.name}
                    <motion.span
                      initial={{ x: 5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="inline-block"
                    >
                      ↗
                    </motion.span>
                  </span>
                </Link>
              </MagneticButton>
            </div>
          )}

          <button 
            className="md:hidden p-2 text-black hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[70px] left-0 right-0 bg-white/95 backdrop-blur-xl border border-black/5 p-6 md:hidden pointer-events-auto shadow-xl rounded-3xl"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => {
                const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
                const isActive = activeSection === id || (pathname === item.href)
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={handleNavClick}
                      className={cn(
                        "block text-xs font-bold uppercase tracking-widest transition-colors",
                        isActive ? 'text-primary' : 'text-slate-500'
                      )}
                    >
                      {item.name} {item.tag && <span className="text-[7px] ml-1 text-primary">[{item.tag}]</span>}
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
      >
        {children}
      </motion.div>
    </div>
  )
}
