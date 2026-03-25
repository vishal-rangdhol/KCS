"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Menu, X, Rocket, ArrowUpRight, Activity } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'

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
  const isMobile = useIsMobile()

  // Conditionally adjust Careers href for mobile
  const adjustedNavItems = navItems.map(item => {
    if (item.name === 'Careers' && isMobile) {
      return { ...item, href: '/careers' }
    }
    return item
  })

  const mainNavItems = adjustedNavItems.filter(item => item.name !== 'Contact')
  const contactItem = adjustedNavItems.find(item => item.name === 'Contact')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Purge active highlights on legal policy nodes
    const policyRoutes = ['/privacy', '/terms', '/user-terms']
    if (policyRoutes.includes(pathname)) {
      setActiveSection('')
      return
    }

    if (pathname === '/contact') {
      setActiveSection('contact')
      return
    }

    if (pathname === '/careers') {
      setActiveSection('careers')
      return
    }

    if (pathname === '/founders') {
      setActiveSection('about')
      return
    }

    if (pathname !== '/') {
        setActiveSection('')
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
    <header className="fixed top-2 md:top-6 left-0 right-0 z-[110] flex justify-center pointer-events-none px-3 md:px-4">
      <motion.nav 
        animate={{ 
          y: scrolled ? 0 : 4,
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "w-full max-w-7xl transition-all duration-500 border border-black/5 pointer-events-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-3 rounded-full bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5",
          scrolled && "shadow-2xl border-black/10 bg-white/90"
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
              className="h-4 md:h-6 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex flex-row gap-4 lg:gap-10 items-center">
            {mainNavItems.map((item) => {
              const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
              const isActive = activeSection === id || (pathname === '/' && id === 'hero' && activeSection === 'hero')

              return (
                <li key={item.name} className="relative group flex items-center">
                  <Link 
                    href={item.href}
                    className={cn(
                      "text-[10px] lg:text-[11px] font-bold uppercase tracking-tight transition-all duration-300 block py-1.5 relative flex items-center gap-1 hover:text-black group-hover:tracking-[0.05em]",
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
                <motion.div initial="initial" whileHover="hover" className="relative">
                  <Link 
                    href={contactItem.href}
                    className={cn(
                      "relative overflow-hidden px-5 lg:px-6 py-2 md:py-2.5 rounded-full text-[10px] lg:text-[11px] font-bold uppercase tracking-tight transition-all duration-500 flex items-center gap-1 group border border-primary/40 min-w-[110px] lg:min-w-[120px] justify-center",
                      pathname === '/contact'
                        ? 'bg-primary text-white'
                        : 'bg-transparent text-black'
                    )}
                  >
                    {/* Liquid Fill */}
                    <motion.div 
                      variants={{
                        initial: { x: '-101%' },
                        hover: { x: 0 }
                      }}
                      transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
                      className="absolute inset-0 bg-primary z-0"
                    />
                    
                    <motion.span 
                      variants={{
                        initial: { color: pathname === '/contact' ? "#ffffff" : "#000000" },
                        hover: { color: "#ffffff" }
                      }}
                      className="relative z-10 flex items-center gap-0.5 transition-colors duration-300"
                    >
                      <span className="inline-block">
                        {contactItem.name}
                      </span>

                      <motion.span
                        variants={{
                          initial: { x: -8, opacity: 0, width: 0 },
                          hover: { x: 0, opacity: 1, width: 'auto' }
                        }}
                        transition={{ 
                          x: { type: "spring", stiffness: 300, damping: 20 },
                          opacity: { duration: 0.2 }
                        }}
                        className="inline-block overflow-hidden whitespace-nowrap"
                      >
                        <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                      </motion.span>
                    </motion.span>
                  </Link>
                </motion.div>
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
            className="absolute top-[60px] left-3 right-3 bg-white/95 backdrop-blur-xl border border-black/5 p-6 md:hidden pointer-events-auto shadow-xl rounded-[2rem] z-[120]"
          >
            <ul className="flex flex-col gap-5">
              {adjustedNavItems.map((item) => {
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
    
    const distance = Math.sqrt(moveX ** 2 + moveY ** 2)
    const threshold = 150

    if (distance < threshold) {
      const factor = 0.35 
      x.set(moveX * factor)
      y.set(moveY * factor)
    } else {
      x.set(0)
      y.set(0)
    }
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
