
"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, Rocket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Services', href: '/#services' },
  { name: 'Products', href: '/#products' },
  { name: 'About', href: '/#about' },
  { name: 'Careers', href: '/#careers', tag: '04' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const mainNavItems = navItems.filter(item => item.name !== 'Contact')
  const contactItem = navItems.find(item => item.name === 'Contact')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/contact') {
      setActiveSection('contact')
      return
    }

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
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
    <header className="fixed top-6 left-0 right-0 z-[110] flex justify-center pointer-events-none px-4">
      <motion.nav 
        whileTap={{ scale: 0.99 }}
        className={cn(
          "w-full max-w-[95%] transition-all duration-500 border border-black/5 pointer-events-auto flex items-center justify-between px-6 md:px-8 py-3 rounded-full bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5",
          scrolled && "shadow-xl border-black/10"
        )}
      >
        {/* KCS Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group cursor-pointer">
            <Image 
              src="/kcs-logo.png" 
              alt="KCS Logo" 
              width={80}
              height={26}
              className="h-5 md:h-6 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex flex-row gap-6 lg:gap-10 items-center">
            {mainNavItems.map((item) => {
              const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
              const isActive = activeSection === id || (pathname === '/' && id === 'hero' && activeSection === 'hero')

              return (
                <li key={item.name} className="relative group flex items-center">
                  <Link 
                    href={item.href}
                    className={cn(
                      "text-[11px] font-bold uppercase tracking-tight transition-all duration-300 block py-1.5 relative flex items-center gap-1 hover:text-black group-hover:tracking-[0.05em] group-hover:letter-spacing-[0.05em]",
                      isActive ? 'text-black' : 'text-slate-500'
                    )}
                  >
                    {item.name}
                    {item.tag && (
                      <sup className="text-[7px] font-mono text-primary font-bold ml-0.5">
                        [{item.tag}]
                      </sup>
                    )}
                    
                    {/* Hover Dot Protocol */}
                    <span className="absolute -right-2 top-2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                    {isActive && (
                      <motion.div 
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(249,115,22,0.3)] z-[-1]"
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30,
                          mass: 1
                        }}
                      />
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
                  className={cn(
                    "relative overflow-hidden px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-tight transition-all duration-300 flex items-center gap-1 group border border-primary/40",
                    pathname === '/contact'
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-black'
                  )}
                >
                  {/* Liquid Fill */}
                  <motion.div 
                    initial={{ x: '-101%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
                    className="absolute inset-0 bg-primary z-0"
                  />
                  
                  <span className="relative z-10 flex items-center gap-0.5 transition-colors duration-300 group-hover:text-white">
                    {contactItem.name}
                    <motion.span
                      initial={{ x: -12, opacity: 0, width: 0 }}
                      whileHover={{ x: 0, opacity: 1, width: 'auto', rotate: 45 }}
                      transition={{ 
                        x: { type: "spring", stiffness: 300, damping: 20 },
                        opacity: { duration: 0.2 },
                        rotate: { duration: 0.3 }
                      }}
                      className="inline-block overflow-hidden whitespace-nowrap"
                    >
                      <span className="ml-1">↗</span>
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-xs font-bold uppercase tracking-widest transition-colors",
                        isActive ? 'text-primary' : 'text-slate-500'
                      )}
                    >
                      {item.name} {item.tag && <sup className="text-[7px] ml-1 text-primary">[{item.tag}]</sup>}
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
